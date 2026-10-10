import math
import os
import subprocess
import wave
from pathlib import Path

import arabic_reshaper
from bidi.algorithm import get_display
from PIL import Image, ImageDraw, ImageFilter, ImageFont


WIDTH, HEIGHT, FPS = 720, 1280, 24
SEGMENTS = (4.2, 4.4, 4.8, 4.8, 4.8, 5.2)
DURATION = sum(SEGMENTS)
ROOT = Path(__file__).resolve().parent.parent
OUTPUT = Path(__file__).resolve().parent
FFMPEG = os.environ.get("FFMPEG", "ffmpeg")
REGULAR_FONT = r"C:\Windows\Fonts\arial.ttf"
BOLD_FONT = r"C:\Windows\Fonts\arialbd.ttf"
WHITE = (246, 249, 255)
MUTED = (171, 188, 210)
CYAN = (74, 214, 244)


def shape_arabic(value):
    return get_display(arabic_reshaper.reshape(value))


def get_font(size, bold=False):
    return ImageFont.truetype(BOLD_FONT if bold else REGULAR_FONT, size)


def centered(draw, value, y, size, color=WHITE, bold=True, spacing=12):
    draw.multiline_text(
        (WIDTH // 2, y),
        shape_arabic(value),
        font=get_font(size, bold),
        fill=color,
        anchor="mm",
        align="center",
        spacing=spacing,
    )


def aligned(draw, point, value, size, color, bold=False, anchor="la"):
    draw.text(point, shape_arabic(value), font=get_font(size, bold), fill=color, anchor=anchor)


def gradient_background(index):
    top = (7, 12, 27)
    bottom = (12, 23, 43)
    image = Image.new("RGB", (WIDTH, HEIGHT))
    draw = ImageDraw.Draw(image)
    for y in range(HEIGHT):
        blend = y / HEIGHT
        color = tuple(round(a * (1 - blend) + b * blend) for a, b in zip(top, bottom))
        draw.line((0, y, WIDTH, y), fill=color)

    glows = (
        (26, 156, 209), (113, 76, 217), (22, 164, 204),
        (57, 99, 211), (30, 179, 177), (126, 82, 221),
    )
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    center_x = 180 if index % 2 == 0 else 550
    color = glows[index]
    glow_draw.ellipse((center_x - 340, 100, center_x + 340, 820), fill=(*color, 34))
    glow_draw.ellipse((center_x - 230, 750, center_x + 320, 1390), fill=(93, 64, 198, 25))
    return Image.alpha_composite(image.convert("RGBA"), glow.filter(ImageFilter.GaussianBlur(115)))


def read_site_capture(filename):
    source_path = OUTPUT / filename
    if not source_path.exists():
        raise FileNotFoundError(f"Capture the live site first: {source_path}")
    image = Image.open(source_path).convert("RGB")
    right = min(image.width, 645)
    bottom = min(image.height, 812)
    return image.crop((0, 0, right, bottom))


def draw_brand(draw, index, total):
    draw.rounded_rectangle((46, 57, 62, 73), radius=6, fill=CYAN)
    aligned(draw, (WIDTH - 46, 65), "المعلّم الذكي", 19, (222, 233, 249), True, "ra")
    draw.line((46, 94, WIDTH - 46, 94), fill=(153, 184, 221, 33), width=1)
    progress = (index + 1) / total
    draw.rounded_rectangle((46, 1219, WIDTH - 46, 1223), radius=2, fill=(255, 255, 255, 30))
    draw.rounded_rectangle((46, 1219, 46 + int((WIDTH - 92) * progress), 1223), radius=2, fill=CYAN)


def draw_device(image, screenshot, time_in_segment, start_y=384):
    draw = ImageDraw.Draw(image, "RGBA")
    source = screenshot
    screen_width = 552
    screen_height = round(screen_width * source.height / source.width)
    scale = 1.0 + 0.012 * min(1.0, time_in_segment / 4.8)
    screen_width = round(screen_width * scale)
    screen_height = round(screen_height * scale)
    source = source.resize((screen_width, screen_height), Image.Resampling.LANCZOS)
    left = (WIDTH - screen_width) // 2
    top = start_y + int(8 * math.sin(time_in_segment * 0.7))
    frame = 13

    shadow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle(
        (left - frame - 5, top - frame + 18, left + screen_width + frame + 5,
         top + screen_height + frame + 28),
        radius=34,
        fill=(0, 0, 0, 145),
    )
    image.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(25)))
    draw = ImageDraw.Draw(image, "RGBA")
    draw.rounded_rectangle(
        (left - frame, top - frame, left + screen_width + frame, top + screen_height + frame),
        radius=31,
        fill=(11, 17, 30, 255),
        outline=(132, 164, 205, 118),
        width=2,
    )
    mask = Image.new("L", (screen_width, screen_height), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, screen_width - 1, screen_height - 1), radius=21, fill=255)
    image.paste(source, (left, top), mask)
    draw.rounded_rectangle(
        (left - frame + 3, top - frame + 3, left + screen_width + frame - 3,
         top + screen_height + frame - 3),
        radius=28,
        outline=(255, 255, 255, 22),
        width=1,
    )


def create_scenes(screenshots, logo):
    scenes = []
    opening = gradient_background(0)
    draw = ImageDraw.Draw(opening, "RGBA")
    draw_brand(draw, 0, len(SEGMENTS))
    opening_glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    ImageDraw.Draw(opening_glow).ellipse((170, 180, 550, 560), fill=(25, 173, 216, 30))
    opening = Image.alpha_composite(opening, opening_glow.filter(ImageFilter.GaussianBlur(56)))
    mark = logo.resize((270, 270), Image.Resampling.LANCZOS)
    logo_mask = Image.new("L", mark.size, 0)
    ImageDraw.Draw(logo_mask).rounded_rectangle((0, 0, mark.width - 1, mark.height - 1), radius=46, fill=255)
    opening.paste(mark, (225, 235), logo_mask)
    draw = ImageDraw.Draw(opening, "RGBA")
    centered(draw, "التعلّم يتغيّر.", 685, 51, WHITE, True)
    centered(draw, "حين يصبح لكل طالب معلّم يفهمه.", 770, 24, MUTED, False)
    draw.rounded_rectangle((254, 863, 466, 869), radius=3, fill=CYAN)
    centered(draw, "تجربة تعليمية تفاعلية", 927, 20, (151, 177, 209), True)
    scenes.append(opening)

    headings = (
        ("منهجك. صفّك. مسارك.", "تجربة تعليمية تبدأ من احتياجك."),
        ("اسأل لتفهم.", "معلّم سقراطي يرشدك إلى الإجابة."),
        ("رحلتك واضحة.", "خارطة منهج تتابع تقدّمك خطوة بخطوة."),
        ("تعلّم بالتطبيق.", "شرح تفاعلي، أمثلة، واختبارات إتقان."),
    )
    colors = (CYAN, (180, 150, 255), CYAN, (91, 220, 187))

    for index, screenshot in enumerate(screenshots):
        slide_index = index + 1
        image = gradient_background(slide_index)
        draw = ImageDraw.Draw(image, "RGBA")
        draw_brand(draw, slide_index, len(SEGMENTS))
        centered(draw, headings[index][0], 208, 40, WHITE, True)
        centered(draw, headings[index][1], 274, 22, MUTED, False)
        draw_device(image, screenshot, 1.5)
        draw = ImageDraw.Draw(image, "RGBA")
        draw.rounded_rectangle((286, 329, 434, 335), radius=3, fill=(*colors[index], 230))
        aligned(draw, (WIDTH // 2, 1155), "AI TUTOR  ·  تعلّم تفاعلي", 16, (144, 168, 198), True, "mm")
        scenes.append(image)

    image = gradient_background(5)
    draw = ImageDraw.Draw(image, "RGBA")
    draw_brand(draw, 5, len(SEGMENTS))
    draw.ellipse((176, 213, 544, 581), fill=(40, 156, 207, 18), outline=(62, 198, 231, 68), width=2)
    mark = logo.resize((296, 296), Image.Resampling.LANCZOS)
    mask = Image.new("L", mark.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, mark.width - 1, mark.height - 1), radius=49, fill=255)
    image.paste(mark, (212, 249), mask)
    draw = ImageDraw.Draw(image, "RGBA")
    centered(draw, "معلّمك الذكي", 692, 49, WHITE, True)
    centered(draw, "تعلّم اليوم بثقة أكبر", 765, 30, (134, 221, 247), True)
    centered(draw, "ابدأ رحلتك التعليمية الآن", 838, 23, MUTED, False)
    draw.rounded_rectangle((92, 919, 628, 1009), radius=28, fill=(24, 106, 204, 238), outline=(104, 189, 255, 156), width=2)
    centered(draw, "ashrafnsali-bit.github.io/AI-Tutor", 964, 22, WHITE, True)
    centered(draw, "منصة المعلم الذكي", 1082, 22, (174, 194, 221), True)
    scenes.append(image)
    return scenes


def create_original_music(path):
    rate = 44100
    chords = (
        (110.0, 164.81, 220.0), (98.0, 146.83, 196.0),
        (130.81, 196.0, 261.63), (87.31, 130.81, 174.61),
    )
    melody = (523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880.0, 698.46)
    with wave.open(str(path), "wb") as audio:
        audio.setnchannels(2)
        audio.setsampwidth(2)
        audio.setframerate(rate)
        for start in range(0, round(DURATION * rate), 4410):
            frames = bytearray()
            for number in range(start, min(start + 4410, round(DURATION * rate))):
                time = number / rate
                chord = chords[int(time // 7) % len(chords)]
                pad = sum(math.sin(2 * math.pi * note * time) for note in chord) / len(chord)
                pulse_time = time % 1.4
                pulse = math.exp(-pulse_time * 3.2) * math.sin(2 * math.pi * 55 * time) * 0.15
                note_time = time % 0.7
                pluck = math.exp(-note_time * 8.5) * math.sin(
                    2 * math.pi * melody[int(time / 0.7) % len(melody)] * time
                ) * 0.11
                fade = min(1.0, time / 1.3, max(0.0, (DURATION - time) / 1.8))
                value = max(-0.9, min(0.9, (pad * 0.12 + pulse + pluck) * fade))
                sample = int(value * 32767).to_bytes(2, "little", signed=True)
                frames.extend(sample * 2)
            audio.writeframes(frames)


def render_video(scenes):
    audio_path = OUTPUT / "_promo-audio.wav"
    video_path = OUTPUT / "ai-tutor-social-promo-ar.mp4"
    create_original_music(audio_path)
    command = [
        FFMPEG, "-hide_banner", "-loglevel", "error", "-y",
        "-f", "rawvideo", "-pix_fmt", "rgba", "-s", f"{WIDTH}x{HEIGHT}",
        "-r", str(FPS), "-i", "pipe:0", "-i", str(audio_path),
        "-c:v", "libx264", "-preset", "veryfast", "-crf", "17",
        "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k",
        "-shortest", "-movflags", "+faststart", str(video_path),
    ]
    encoder = subprocess.Popen(command, stdin=subprocess.PIPE)
    starts = []
    cursor = 0.0
    for duration in SEGMENTS:
        starts.append(cursor)
        cursor += duration
    fades = 0.38

    for frame_number in range(round(DURATION * FPS)):
        time = frame_number / FPS
        scene_index = len(SEGMENTS) - 1
        for i, start in enumerate(starts):
            if time < start + SEGMENTS[i]:
                scene_index = i
                break
        elapsed = time - starts[scene_index]
        frame = scenes[scene_index].copy()
        if scene_index > 0 and elapsed < fades:
            opacity = max(0.0, min(1.0, elapsed / fades))
            frame = Image.blend(scenes[scene_index - 1], frame, opacity)

        # Fine drifting particles keep the frame alive without competing with the real interface.
        particles = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        particle_draw = ImageDraw.Draw(particles)
        for i in range(18):
            x = int((i * 113 + time * (11 + i % 5) * (-1 if i % 2 else 1)) % WIDTH)
            y = (i * 191 + int(time * (7 + i % 4))) % HEIGHT
            radius = 1 + i % 2
            particle_draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=(164, 222, 250, 68))
        frame = Image.alpha_composite(frame, particles)
        try:
            encoder.stdin.write(frame.tobytes())
        except BrokenPipeError as error:
            raise RuntimeError("FFmpeg stopped during video encoding") from error

    encoder.stdin.close()
    result = encoder.wait()
    audio_path.unlink(missing_ok=True)
    if result:
        raise RuntimeError(f"FFmpeg exited with code {result}")


def main():
    captures = (
        "source-landing.png",
        "source-tutor.png",
        "source-roadmap.png",
        "source-workspace.png",
    )
    screenshots = [read_site_capture(filename) for filename in captures]
    logo = Image.open(ROOT / "logo.png").convert("RGB")
    scenes = create_scenes(screenshots, logo)
    scenes[-1].convert("RGB").save(
        OUTPUT / "ai-tutor-promo-thumbnail.jpg", quality=95, optimize=True
    )
    render_video(scenes)
    print(f"Created {OUTPUT / 'ai-tutor-social-promo-ar.mp4'}")
    print(f"Created {OUTPUT / 'ai-tutor-promo-thumbnail.jpg'}")


if __name__ == "__main__":
    main()
