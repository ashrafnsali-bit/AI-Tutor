import type { CountryCode, EducationTrack, GradeLevel, Subject } from '../types';

export interface SubjectVisualInfo {
  id: Subject;
  titleAr: string;
  titleEn: string;
  stageAr: string;
  stageEn: string;
  badgeAr: string;
  badgeEn: string;
  themeColor: string;
  accentColor: string;
  gradient: string;
  topicsAr: string[];
  topicsEn: string[];
  coverImage: string; // High-resolution SVG data URI with rich curriculum illustration
  symbolIcon: string;
}

export interface StageVisualInfo {
  id: 'primary' | 'middle' | 'high';
  titleAr: string;
  titleEn: string;
  gradesAr: string;
  gradesEn: string;
  ageAr: string;
  ageEn: string;
  badgeAr: string;
  badgeEn: string;
  themeColor: string;
  gradient: string;
  coverImage: string;
  highlightsAr: string[];
  highlightsEn: string[];
}

// Helper to encode SVG into valid, high-performance Data URI
const svgToDataUri = (svgStr: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgStr.trim())}`;
};

// ─────────────────────────────────────────────────────────────────────────────
// RICH SVG ARTWORK GENERATORS FOR ALL NATIONAL CURRICULUM SUBJECTS
// ─────────────────────────────────────────────────────────────────────────────

const makePhysicsSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="physBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b132b"/>
      <stop offset="50%" stop-color="#1c2541"/>
      <stop offset="100%" stop-color="#070c1e"/>
    </linearGradient>
    <linearGradient id="physBeam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <linearGradient id="specRainbow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="25%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#10b981"/>
      <stop offset="75%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <filter id="physGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="640" height="360" fill="url(#physBg)"/>
  <circle cx="500" cy="80" r="140" fill="#38bdf8" opacity="0.08" filter="url(#physGlow)"/>
  <circle cx="120" cy="280" r="110" fill="#818cf8" opacity="0.08" filter="url(#physGlow)"/>

  <!-- Waveform / Coordinate Grid Lines -->
  <path d="M 40 300 H 600" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>
  <path d="M 40 60 V 300" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>
  <path d="M 40 180 Q 110 90, 180 180 T 320 180 T 460 180 T 600 180" fill="none" stroke="#0ea5e9" stroke-width="2.5" opacity="0.4"/>
  <path d="M 40 180 Q 110 250, 180 180 T 320 180 T 460 180 T 600 180" fill="none" stroke="#6366f1" stroke-width="2" opacity="0.3"/>

  <!-- Central Bohr Atom Model -->
  <g transform="translate(430, 180)" filter="url(#physGlow)">
    <!-- Orbits -->
    <ellipse cx="0" cy="0" rx="95" ry="38" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.85" transform="rotate(-25)"/>
    <ellipse cx="0" cy="0" rx="95" ry="38" fill="none" stroke="#818cf8" stroke-width="2" opacity="0.85" transform="rotate(35)"/>
    <ellipse cx="0" cy="0" rx="95" ry="38" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.85" transform="rotate(95)"/>
    <!-- Nucleus -->
    <circle cx="0" cy="0" r="16" fill="#38bdf8" opacity="0.95"/>
    <circle cx="-3" cy="-3" r="6" fill="#ffffff"/>
    <!-- Electrons -->
    <circle cx="80" cy="-30" r="5" fill="#38bdf8"/>
    <circle cx="-75" cy="40" r="5" fill="#818cf8"/>
    <circle cx="10" cy="-85" r="5" fill="#06b6d4"/>
  </g>

  <!-- Triangular Glass Prism with Spectrum Dispersion -->
  <g transform="translate(160, 180)">
    <!-- Incident Ray -->
    <line x1="-120" y1="30" x2="-20" y2="0" stroke="url(#physBeam)" stroke-width="4" filter="url(#physGlow)"/>
    <!-- Prism Triangle -->
    <polygon points="0,-65 60,45 -60,45" fill="rgba(255,255,255,0.08)" stroke="#e2e8f0" stroke-width="2.5"/>
    <polygon points="0,-55 50,38 -50,38" fill="rgba(56,189,248,0.12)"/>
    <!-- Dispersed Spectrum Rays -->
    <polygon points="25,10 130,-25 140,40" fill="url(#specRainbow)" opacity="0.85" filter="url(#physGlow)"/>
  </g>

  <!-- Physics Formula Watermarks & Tags -->
  <text x="50" y="70" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="1">PHYSICS • منهج الفيزياء المعتمد</text>
  <text x="50" y="110" fill="#38bdf8" font-family="'Times New Roman', serif" font-size="28" font-weight="bold" font-style="italic">E = mc²</text>
  <text x="180" y="110" fill="#818cf8" font-family="'Times New Roman', serif" font-size="22" font-style="italic">F = ma • λ = h/p</text>

  <!-- Bottom Topic Pill -->
  <g transform="translate(50, 315)">
    <rect width="240" height="26" rx="13" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1"/>
    <text x="120" y="18" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle">الميكانيكا • الكهرومغناطيسية • الضوء والنووية</text>
  </g>
</svg>`;

const makeChemistrySvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="chemBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18052e"/>
      <stop offset="50%" stop-color="#2a0845"/>
      <stop offset="100%" stop-color="#0b0217"/>
    </linearGradient>
    <linearGradient id="liquidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="60%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <filter id="chemGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#chemBg)"/>
  <circle cx="200" cy="190" r="130" fill="#ec4899" opacity="0.1" filter="url(#chemGlow)"/>
  <circle cx="480" cy="140" r="100" fill="#a855f7" opacity="0.12" filter="url(#chemGlow)"/>

  <!-- Benzene Hexagon Ring Structure -->
  <g transform="translate(480, 150)" stroke="#f472b6" stroke-width="3" fill="none" opacity="0.9" filter="url(#chemGlow)">
    <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"/>
    <circle cx="0" cy="0" r="34" stroke="#c084fc" stroke-width="2" stroke-dasharray="8 6"/>
    <!-- Bonds and Carbon Nodes -->
    <line x1="52" y1="-30" x2="80" y2="-45" stroke="#f472b6" stroke-width="2.5"/>
    <line x1="-52" y1="30" x2="-80" y2="45" stroke="#f472b6" stroke-width="2.5"/>
    <circle cx="0" cy="-60" r="5" fill="#f472b6"/>
    <circle cx="52" cy="-30" r="5" fill="#c084fc"/>
    <circle cx="52" cy="30" r="5" fill="#38bdf8"/>
    <circle cx="0" cy="60" r="5" fill="#f472b6"/>
    <circle cx="-52" cy="30" r="5" fill="#c084fc"/>
    <circle cx="-52" cy="-30" r="5" fill="#38bdf8"/>
  </g>

  <!-- Laboratory Erlenmeyer Flask & Bubbles -->
  <g transform="translate(200, 200)">
    <!-- Flask Glass Outline -->
    <path d="M -16 -100 L 16 -100 L 16 -55 L 75 60 A 16 16 0 0 1 60 80 L -60 80 A 16 16 0 0 1 -75 60 L -16 -55 Z" fill="rgba(255,255,255,0.06)" stroke="#f472b6" stroke-width="3" filter="url(#chemGlow)"/>
    <!-- Glowing Liquid -->
    <path d="M -50 35 Q -25 45, 0 35 T 50 35 L 58 75 L -58 75 Z" fill="url(#liquidGrad)" opacity="0.85"/>
    <!-- Vapor Bubbles Rising -->
    <circle cx="-5" cy="15" r="5" fill="#ffffff" opacity="0.8"/>
    <circle cx="15" cy="-5" r="4" fill="#38bdf8" opacity="0.75"/>
    <circle cx="-10" cy="-35" r="6" fill="#f472b6" opacity="0.85"/>
    <circle cx="6" cy="-70" r="5" fill="#c084fc" opacity="0.9"/>
    <circle cx="-2" cy="-120" r="4" fill="#38bdf8" opacity="0.7"/>
  </g>

  <!-- Periodic Table Card Snippet -->
  <g transform="translate(350, 60)">
    <rect width="64" height="74" rx="8" fill="rgba(236,72,153,0.12)" stroke="#ec4899" stroke-width="1.5"/>
    <text x="12" y="24" fill="#f472b6" font-family="system-ui" font-size="12" font-weight="bold">6</text>
    <text x="32" y="50" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="bold" text-anchor="middle">C</text>
    <text x="32" y="66" fill="#94a3b8" font-family="system-ui" font-size="9" text-anchor="middle">12.011</text>
  </g>

  <!-- Header & Topic Labels -->
  <text x="50" y="65" fill="#f472b6" font-family="system-ui" font-size="14" font-weight="700">CHEMISTRY • منهج الكيمياء المعتمد</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">التفاعلات، الروابط، والاتزان الكيميائي</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="1"/>
    <text x="125" y="18" fill="#f472b6" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">البنية الذرية • الكيمياء العضوية • الحسابات</text>
  </g>
</svg>`;

const makeBiologySvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bioBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="50%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#021f18"/>
    </linearGradient>
    <filter id="bioGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#bioBg)"/>
  <circle cx="480" cy="180" r="130" fill="#10b981" opacity="0.12" filter="url(#bioGlow)"/>

  <!-- DNA Double Helix -->
  <g transform="translate(480, 180)" filter="url(#bioGlow)">
    <!-- Base Pairs (rungs) -->
    <line x1="-35" y1="-100" x2="35" y2="-100" stroke="#34d399" stroke-width="3"/>
    <line x1="-45" y1="-65" x2="45" y2="-65" stroke="#a3e635" stroke-width="3"/>
    <line x1="-20" y1="-30" x2="20" y2="-30" stroke="#38bdf8" stroke-width="3"/>
    <line x1="0" y1="0" x2="0" y2="0" stroke="#ffffff" stroke-width="4"/>
    <line x1="-20" y1="30" x2="20" y2="30" stroke="#f472b6" stroke-width="3"/>
    <line x1="-45" y1="65" x2="45" y2="65" stroke="#34d399" stroke-width="3"/>
    <line x1="-35" y1="100" x2="35" y2="100" stroke="#a3e635" stroke-width="3"/>

    <!-- Strand 1 -->
    <path d="M -35 -110 Q -55 -60, 0 0 Q 55 60, 35 110" fill="none" stroke="#10b981" stroke-width="4.5"/>
    <!-- Strand 2 -->
    <path d="M 35 -110 Q 55 -60, 0 0 Q -55 60, -35 110" fill="none" stroke="#38bdf8" stroke-width="4.5"/>

    <!-- Nodes -->
    <circle cx="-35" cy="-100" r="5" fill="#34d399"/>
    <circle cx="35" cy="-100" r="5" fill="#38bdf8"/>
    <circle cx="-45" cy="-65" r="5" fill="#10b981"/>
    <circle cx="45" cy="-65" r="5" fill="#a3e635"/>
    <circle cx="-45" cy="65" r="5" fill="#38bdf8"/>
    <circle cx="45" cy="65" r="5" fill="#34d399"/>
  </g>

  <!-- Microscope Lens View & Plant Cell -->
  <g transform="translate(180, 190)">
    <!-- Lens Circle -->
    <circle cx="0" cy="0" r="85" fill="rgba(16,185,129,0.08)" stroke="#34d399" stroke-width="3" filter="url(#bioGlow)"/>
    <!-- Cell Wall & Nucleus -->
    <ellipse cx="0" cy="0" rx="65" ry="48" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="2"/>
    <circle cx="-12" cy="-6" r="18" fill="#10b981" opacity="0.8"/>
    <circle cx="-16" cy="-9" r="6" fill="#ffffff" opacity="0.9"/>
    <!-- Chloroplasts -->
    <ellipse cx="25" cy="-20" rx="9" ry="5" fill="#a3e635" opacity="0.85"/>
    <ellipse cx="28" cy="18" rx="8" ry="4" fill="#a3e635" opacity="0.85"/>
    <ellipse cx="-32" cy="22" rx="9" ry="5" fill="#a3e635" opacity="0.85"/>
  </g>

  <!-- Title & Topic Tags -->
  <text x="50" y="65" fill="#34d399" font-family="system-ui" font-size="14" font-weight="700">BIOLOGY • منهج علم الأحياء المعتمد</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">الوراثة، الخلية، والتنوع الحيوي</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="1"/>
    <text x="125" y="18" fill="#34d399" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">علم الوراثة • فسيولوجيا الأعضاء • البيئة</text>
  </g>
</svg>`;

const makeMathSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mathBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1e3d"/>
      <stop offset="50%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#091428"/>
    </linearGradient>
    <filter id="mathGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#mathBg)"/>

  <!-- Coordinate Grid Lines -->
  <g stroke="#3b82f6" stroke-width="0.75" opacity="0.25">
    <line x1="60" y1="60" x2="580" y2="60"/>
    <line x1="60" y1="120" x2="580" y2="120"/>
    <line x1="60" y1="180" x2="580" y2="180"/>
    <line x1="60" y1="240" x2="580" y2="240"/>
    <line x1="60" y1="300" x2="580" y2="300"/>
    <line x1="120" y1="40" x2="120" y2="320"/>
    <line x1="240" y1="40" x2="240" y2="320"/>
    <line x1="360" y1="40" x2="360" y2="320"/>
    <line x1="480" y1="40" x2="480" y2="320"/>
  </g>

  <!-- 3D Axes System -->
  <g transform="translate(180, 200)" stroke="#60a5fa" stroke-width="2.5" filter="url(#mathGlow)">
    <line x1="0" y1="0" x2="130" y2="0"/>
    <line x1="0" y1="0" x2="0" y2="-110"/>
    <line x1="0" y1="0" x2="-75" y2="65"/>
    <text x="135" y="4" fill="#60a5fa" font-size="12" font-weight="bold">X</text>
    <text x="-4" y="-115" fill="#60a5fa" font-size="12" font-weight="bold">Y</text>
    <text x="-85" y="75" fill="#60a5fa" font-size="12" font-weight="bold">Z</text>
    <!-- Parabolic Curve & Sine Wave -->
    <path d="M -60 -20 Q 0 -95, 60 -20 T 120 40" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
  </g>

  <!-- Geometric Circle with Tangent & Inscribed Triangle -->
  <g transform="translate(460, 190)" filter="url(#mathGlow)">
    <circle cx="0" cy="0" r="75" fill="rgba(59,130,246,0.12)" stroke="#60a5fa" stroke-width="2"/>
    <polygon points="0,-75 65,37 -65,37" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="0" cy="0" r="4" fill="#f59e0b"/>
    <!-- Radius vector -->
    <line x1="0" y1="0" x2="53" y2="-53" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="22" y="-32" fill="#f59e0b" font-size="14" font-weight="bold">r</text>
  </g>

  <!-- Prominent Formulas -->
  <text x="50" y="65" fill="#60a5fa" font-family="system-ui" font-size="14" font-weight="700">MATHEMATICS • الرياضيات المعتمدة</text>
  <text x="310" y="90" fill="#38bdf8" font-family="'Times New Roman', serif" font-size="28" font-style="italic">∫ f(x) dx • lim x→0</text>
  <text x="320" y="130" fill="#93c5fd" font-family="'Times New Roman', serif" font-size="22" font-style="italic">f'(x) = 2x + cos(θ)</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(59,130,246,0.15)" stroke="#60a5fa" stroke-width="1"/>
    <text x="125" y="18" fill="#93c5fd" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">التفاضل والتكامل • الجبر والهندسة • المتجهات</text>
  </g>
</svg>`;

const makePrimaryMathSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pMathBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <filter id="pMathGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#pMathBg)"/>

  <!-- Cheerful Counting Abacus -->
  <g transform="translate(180, 190)" filter="url(#pMathGlow)">
    <rect x="-90" y="-70" width="180" height="135" rx="12" fill="rgba(15,23,42,0.8)" stroke="#38bdf8" stroke-width="3"/>
    <!-- Abacus Rods -->
    <line x1="-70" y1="-38" x2="70" y2="-38" stroke="#94a3b8" stroke-width="3"/>
    <line x1="-70" y1="-2" x2="70" y2="-2" stroke="#94a3b8" stroke-width="3"/>
    <line x1="-70" y1="34" x2="70" y2="34" stroke="#94a3b8" stroke-width="3"/>
    <!-- Colorful Counting Beads -->
    <circle cx="-50" cy="-38" r="10" fill="#f59e0b"/>
    <circle cx="-25" cy="-38" r="10" fill="#f59e0b"/>
    <circle cx="0" cy="-38" r="10" fill="#f59e0b"/>
    <circle cx="50" cy="-38" r="10" fill="#f59e0b"/>

    <circle cx="-45" cy="-2" r="10" fill="#10b981"/>
    <circle cx="-20" cy="-2" r="10" fill="#10b981"/>
    <circle cx="35" cy="-2" r="10" fill="#10b981"/>
    <circle cx="58" cy="-2" r="10" fill="#10b981"/>

    <circle cx="-55" cy="34" r="10" fill="#ec4899"/>
    <circle cx="15" cy="34" r="10" fill="#ec4899"/>
    <circle cx="38" cy="34" r="10" fill="#ec4899"/>
    <circle cx="60" cy="34" r="10" fill="#ec4899"/>
  </g>

  <!-- Number Blocks & Geometric Shapes -->
  <g transform="translate(460, 180)">
    <!-- 3D Cube -->
    <polygon points="0,-45 40,-25 0,-5 -40,-25" fill="#fbbf24"/>
    <polygon points="-40,-25 0,-5 0,40 -40,20" fill="#f59e0b"/>
    <polygon points="0,-5 40,-25 40,20 0,40" fill="#d97706"/>
    <!-- Floating Arithmetic Symbols -->
    <text x="65" y="-30" fill="#38bdf8" font-size="36" font-weight="bold">+</text>
    <text x="-95" y="20" fill="#34d399" font-size="40" font-weight="bold">×</text>
    <text x="60" y="60" fill="#f472b6" font-size="38" font-weight="bold">÷</text>
    <text x="-80" y="-50" fill="#a78bfa" font-size="36" font-weight="bold">=</text>
  </g>

  <text x="50" y="65" fill="#7dd3fc" font-family="system-ui" font-size="14" font-weight="700">PRIMARY MATH • الرياضيات الابتدائية المعتمدة</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">الأرقام، الجمع، الطرح، والأشكال الهندسية</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="1"/>
    <text x="125" y="18" fill="#bae6fd" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">العمليات الحسابية • الكسور • جدول الضرب</text>
  </g>
</svg>`;

const makeIslamicSvg = (isTajweed = false, isRecitation = false) => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="islBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="50%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#021c15"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <filter id="islGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#islBg)"/>

  <!-- Islamic Arabesque 8-Point Star Pattern -->
  <g transform="translate(480, 180)" stroke="url(#goldGrad)" stroke-width="2.5" fill="none" opacity="0.85" filter="url(#islGlow)">
    <rect x="-65" y="-65" width="130" height="130" rx="4"/>
    <rect x="-65" y="-65" width="130" height="130" rx="4" transform="rotate(45)"/>
    <circle cx="0" cy="0" r="45" stroke="#fde047" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="18" fill="url(#goldGrad)"/>
  </g>

  <!-- Holy Quran on Wooden Rehal Holder -->
  <g transform="translate(190, 200)">
    <!-- Wooden Stand Base -->
    <polygon points="-70,60 0,25 70,60 0,40" fill="#92400e" stroke="#78350f" stroke-width="2"/>
    <polygon points="-60,65 0,10 60,65 0,30" fill="#b45309"/>
    <!-- Open Book Pages with Golden Glow -->
    <path d="M 0 10 Q -45 -10, -85 0 L -80 -70 Q -40 -78, 0 -60 Z" fill="#fefce8" stroke="#f59e0b" stroke-width="2.5" filter="url(#islGlow)"/>
    <path d="M 0 10 Q 45 -10, 85 0 L 80 -70 Q 40 -78, 0 -60 Z" fill="#fefce8" stroke="#f59e0b" stroke-width="2.5" filter="url(#islGlow)"/>
    <!-- Calligraphy Lines -->
    <line x1="-70" y1="-50" x2="-15" y2="-45" stroke="#d97706" stroke-width="2"/>
    <line x1="-70" y1="-32" x2="-15" y2="-28" stroke="#d97706" stroke-width="2"/>
    <line x1="-70" y1="-15" x2="-15" y2="-12" stroke="#d97706" stroke-width="2"/>
    <line x1="15" y1="-45" x2="70" y2="-50" stroke="#d97706" stroke-width="2"/>
    <line x1="15" y1="-28" x2="70" y2="-32" stroke="#d97706" stroke-width="2"/>
    <line x1="15" y1="-12" x2="70" y2="-15" stroke="#d97706" stroke-width="2"/>
    <!-- Central Ribbon -->
    <path d="M 0 -58 L 0 35 L 6 30 L 12 35 L 12 -56" fill="#15803d"/>
  </g>

  <!-- Crescent and Star -->
  <path d="M 330 80 A 24 24 0 1 1 315 118 A 20 20 0 1 0 330 80 Z" fill="url(#goldGrad)" filter="url(#islGlow)"/>

  <text x="50" y="65" fill="#fde047" font-family="system-ui" font-size="14" font-weight="700">
    ${isRecitation ? 'QURAN RECITATION • تلاوة القرآن الكريم وتجويده' : isTajweed ? 'TAJWEED • مقرر التجويد المعتمد' : 'ISLAMIC STUDIES • الدراسات الإسلامية المعتمدة'}
  </text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">
    ${isRecitation ? 'التلاوة الصحيحة وأحكام الترتيل' : isTajweed ? 'أحكام النون والميم والمدود ومخارج الحروف' : 'القرآن الكريم، العقيدة، الحديث، والفقه'}
  </text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1"/>
    <text x="125" y="18" fill="#fde047" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">القيم والآداب • السيرة النبوية • التفسير</text>
  </g>
</svg>`;

const makeComputerScienceSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="csBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="csGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#csBg)"/>

  <!-- Code Editor Window -->
  <g transform="translate(190, 190)" filter="url(#csGlow)">
    <rect x="-140" y="-85" width="280" height="170" rx="10" fill="rgba(15,23,42,0.85)" stroke="#6366f1" stroke-width="2.5"/>
    <!-- Window Bar -->
    <rect x="-140" y="-85" width="280" height="26" rx="10" fill="rgba(30,41,59,0.9)"/>
    <circle cx="-125" cy="-72" r="4.5" fill="#ef4444"/>
    <circle cx="-110" cy="-72" r="4.5" fill="#f59e0b"/>
    <circle cx="-95" cy="-72" r="4.5" fill="#10b981"/>
    <text x="-70" y="-68" fill="#94a3b8" font-family="monospace" font-size="10">main.py - Python STEM</text>
    <!-- Code Lines -->
    <text x="-120" y="-35" fill="#c084fc" font-family="monospace" font-size="12">def <tspan fill="#38bdf8">binary_search</tspan>(arr, target):</text>
    <text x="-105" y="-15" fill="#e2e8f0" font-family="monospace" font-size="12">low, high = 0, len(arr) - 1</text>
    <text x="-105" y="8" fill="#f43f5e" font-family="monospace" font-size="12">while <tspan fill="#e2e8f0">low &lt;= high:</tspan></text>
    <text x="-90" y="30" fill="#34d399" font-family="monospace" font-size="12">mid = (low + high) // 2</text>
    <text x="-90" y="52" fill="#38bdf8" font-family="monospace" font-size="12">return <tspan fill="#fbbf24">arr[mid]</tspan></text>
  </g>

  <!-- Neural Net AI Nodes & Binary Stream -->
  <g transform="translate(480, 180)" filter="url(#csGlow)">
    <circle cx="-40" cy="-40" r="12" fill="#6366f1"/>
    <circle cx="-40" cy="40" r="12" fill="#6366f1"/>
    <circle cx="20" cy="-60" r="10" fill="#a855f7"/>
    <circle cx="20" cy="0" r="14" fill="#38bdf8"/>
    <circle cx="20" cy="60" r="10" fill="#a855f7"/>
    <circle cx="70" cy="-20" r="12" fill="#ec4899"/>
    <circle cx="70" cy="20" r="12" fill="#ec4899"/>

    <line x1="-40" y1="-40" x2="20" y2="-60" stroke="#818cf8" stroke-width="2"/>
    <line x1="-40" y1="-40" x2="20" y2="0" stroke="#818cf8" stroke-width="2"/>
    <line x1="-40" y1="40" x2="20" y2="0" stroke="#818cf8" stroke-width="2"/>
    <line x1="-40" y1="40" x2="20" y2="60" stroke="#818cf8" stroke-width="2"/>
    <line x1="20" y1="0" x2="70" y2="-20" stroke="#38bdf8" stroke-width="2"/>
    <line x1="20" y1="0" x2="70" y2="20" stroke="#38bdf8" stroke-width="2"/>
  </g>

  <text x="50" y="65" fill="#a5b4fc" font-family="system-ui" font-size="14" font-weight="700">COMPUTER SCIENCE • التقنية الرقمية والحاسب</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">البرمجة بلغة بايثون، هياكل البيانات والذكاء الاصطناعي</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="1"/>
    <text x="125" y="18" fill="#c7d2fe" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">الخوارزميات • قواعد البيانات • الأمن السيبراني</text>
  </g>
</svg>`;

const makeArabicLitSvg = (isLanguage = false, isPrimary = false) => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="arabBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="50%" stop-color="#451a03"/>
      <stop offset="100%" stop-color="#292524"/>
    </linearGradient>
    <filter id="arabGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#arabBg)"/>

  <!-- Classical Scroll with Arabic Calligraphy -->
  <g transform="translate(200, 180)" filter="url(#arabGlow)">
    <rect x="-100" y="-75" width="200" height="150" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
    <!-- Ornamental Arabic Corner Motifs -->
    <circle cx="-85" cy="-60" r="5" fill="#b45309"/>
    <circle cx="85" cy="-60" r="5" fill="#b45309"/>
    <circle cx="-85" cy="60" r="5" fill="#b45309"/>
    <circle cx="85" cy="60" r="5" fill="#b45309"/>
    <!-- Calligraphic Arabic Poetry Text representation -->
    <text x="0" y="-25" fill="#78350f" font-family="'Amiri', 'Traditional Arabic', serif" font-size="20" font-weight="bold" text-anchor="middle">لسانٌ عَرَبِيٌّ مُبِينٌ</text>
    <line x1="-70" y1="-5" x2="70" y2="-5" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4 2"/>
    <text x="0" y="25" fill="#92400e" font-family="'Amiri', 'Traditional Arabic', serif" font-size="16" text-anchor="middle">والخيلُ والليلُ والبيداءُ تَعرِفُنِي</text>
  </g>

  <!-- Feather Quill & Golden Inkpot -->
  <g transform="translate(460, 190)">
    <!-- Feather Quill Pen -->
    <path d="M 40 -80 Q 20 -20, -35 45 L -45 55 L -40 40 Q -10 -20, 20 -70 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2" filter="url(#arabGlow)"/>
    <!-- Inkpot -->
    <ellipse cx="25" cy="45" rx="22" ry="12" fill="#451a03" stroke="#b45309" stroke-width="2"/>
    <rect x="15" y="25" width="20" height="18" fill="#78350f"/>
    <ellipse cx="25" cy="25" rx="10" ry="4" fill="#1c1917"/>
  </g>

  <text x="50" y="65" fill="#fde68a" font-family="system-ui" font-size="14" font-weight="700">
    ${isPrimary ? 'PRIMARY ARABIC • لغتي الجميلة المعتمدة' : isLanguage ? 'ARABIC LANGUAGE • لغتي الخالدة والنحو والصرف' : 'ARABIC LITERATURE • الأدب والبلاغة والنقد'}
  </text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">
    ${isPrimary ? 'القراءة، الإملاء، وتأسيس مهارات اللغة' : isLanguage ? 'قواعد النحو والإعراب، الصرف، والتعبير' : 'العصور الأدبية، المعلقات، والشعر والبلاغة'}
  </text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1"/>
    <text x="125" y="18" fill="#fef08a" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">البيان والبديع • الإعراب • التذوق الجمالي</text>
  </g>
</svg>`;

const makeLanguageSvg = (langName: 'English' | 'French' | 'German' | 'Italian') => {
  const flags = {
    English: { c1: '#1e3a8a', c2: '#ef4444', label: 'Mega Goal / SMILE / Connect' },
    French: { c1: '#2563eb', c2: '#ffffff', label: 'Bienvenue • Français langue vivante' },
    German: { c1: '#000000', c2: '#ef4444', label: 'Deutsch als Fremdsprache' },
    Italian: { c1: '#16a34a', c2: '#ef4444', label: 'Lingua e Cultura Italiana' }
  };
  const cfg = flags[langName];
  return `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="langBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <filter id="langGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#langBg)"/>

  <!-- World Globe with Communication Meridian Lines -->
  <g transform="translate(460, 180)" filter="url(#langGlow)">
    <circle cx="0" cy="0" r="75" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="2.5"/>
    <ellipse cx="0" cy="0" rx="75" ry="32" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <ellipse cx="0" cy="0" rx="32" ry="75" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="-75" y1="0" x2="75" y2="0" stroke="#38bdf8" stroke-width="2"/>
    <!-- Speech Bubbles -->
    <rect x="-95" y="-60" width="60" height="28" rx="8" fill="#3b82f6"/>
    <text x="-65" y="-42" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="bold" text-anchor="middle">Hello!</text>
    <rect x="35" y="30" width="65" height="28" rx="8" fill="#10b981"/>
    <text x="67" y="48" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="bold" text-anchor="middle">Parler!</text>
  </g>

  <!-- Open Grammar & Dialogue Book -->
  <g transform="translate(180, 190)" filter="url(#langGlow)">
    <rect x="-85" y="-65" width="170" height="130" rx="8" fill="rgba(255,255,255,0.06)" stroke="#818cf8" stroke-width="2.5"/>
    <line x1="0" y1="-65" x2="0" y2="65" stroke="#818cf8" stroke-width="2"/>
    <text x="-42" y="-30" fill="#a5b4fc" font-family="system-ui" font-size="14" font-weight="bold" text-anchor="middle">Grammar</text>
    <text x="42" y="-30" fill="#a5b4fc" font-family="system-ui" font-size="14" font-weight="bold" text-anchor="middle">Vocabulary</text>
    <line x1="-70" y1="-5" x2="-15" y2="-5" stroke="#94a3b8" stroke-width="2"/>
    <line x1="-70" y1="15" x2="-25" y2="15" stroke="#94a3b8" stroke-width="2"/>
    <line x1="15" y1="-5" x2="70" y2="-5" stroke="#94a3b8" stroke-width="2"/>
    <line x1="15" y1="15" x2="60" y2="15" stroke="#94a3b8" stroke-width="2"/>
  </g>

  <text x="50" y="65" fill="#a5b4fc" font-family="system-ui" font-size="14" font-weight="700">${langName.toUpperCase()} • اللغات الأجنبية المعتمدة</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">${cfg.label}</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(129,140,248,0.2)" stroke="#818cf8" stroke-width="1"/>
    <text x="125" y="18" fill="#c7d2fe" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">القراءة • المحادثة • التراكيب اللغوية</text>
  </g>
</svg>`;
};

const makeGeographySvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="geoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="50%" stop-color="#0e7490"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
    <filter id="geoGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#geoBg)"/>

  <!-- Topographic Contour Map Lines -->
  <path d="M 40 280 Q 150 200, 260 260 T 480 240 T 600 270" fill="none" stroke="#22d3ee" stroke-width="2" opacity="0.4"/>
  <path d="M 60 240 Q 160 170, 270 220 T 460 200 T 580 230" fill="none" stroke="#34d399" stroke-width="2" opacity="0.35"/>
  <path d="M 90 200 Q 180 140, 290 180 T 440 160 T 550 190" fill="none" stroke="#22d3ee" stroke-width="2" opacity="0.3"/>

  <!-- Compass Rose -->
  <g transform="translate(480, 170)" filter="url(#geoGlow)">
    <circle cx="0" cy="0" r="65" fill="rgba(15,23,42,0.8)" stroke="#22d3ee" stroke-width="2.5"/>
    <circle cx="0" cy="0" r="50" fill="none" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- North Arrow -->
    <polygon points="0,-48 10,0 0,-8" fill="#ef4444"/>
    <polygon points="0,-48 -10,0 0,-8" fill="#dc2626"/>
    <!-- South Arrow -->
    <polygon points="0,48 10,0 0,8" fill="#94a3b8"/>
    <polygon points="0,48 -10,0 0,8" fill="#64748b"/>
    <!-- East / West -->
    <polygon points="48,0 0,10 8,0" fill="#94a3b8"/>
    <polygon points="-48,0 0,10 -8,0" fill="#94a3b8"/>
    <text x="0" y="-55" fill="#ef4444" font-weight="bold" font-size="14" text-anchor="middle">N</text>
  </g>

  <!-- Detailed Earth Globe with Continents -->
  <g transform="translate(190, 190)" filter="url(#geoGlow)">
    <circle cx="0" cy="0" r="75" fill="#0891b2" stroke="#22d3ee" stroke-width="3"/>
    <!-- Simplified Continents Outlines -->
    <path d="M -35 -45 Q 0 -60, 25 -30 Q 30 10, 0 35 Q -30 20, -45 -10 Z" fill="#10b981" opacity="0.85"/>
    <path d="M 15 -10 Q 45 -20, 55 15 Q 40 45, 10 35 Z" fill="#10b981" opacity="0.85"/>
  </g>

  <text x="50" y="65" fill="#67e8f9" font-family="system-ui" font-size="14" font-weight="700">GEOGRAPHY • الجغرافيا والدراسات البيئية</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">التضاريس، المناخ، الخرائط ونظم GIS</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" stroke-width="1"/>
    <text x="125" y="18" fill="#a5f3fc" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">الجغرافيا الطبيعية • الموارد المائية والبيئة</text>
  </g>
</svg>`;

const makeHistorySvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="histBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a1205"/>
      <stop offset="50%" stop-color="#451a03"/>
      <stop offset="100%" stop-color="#1c0a00"/>
    </linearGradient>
    <filter id="histGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#histBg)"/>

  <!-- Ancient Pyramid Silhouette & Desert Sun -->
  <g transform="translate(190, 200)" filter="url(#histGlow)">
    <!-- Sun -->
    <circle cx="20" cy="-60" r="32" fill="#f59e0b" opacity="0.9"/>
    <!-- Great Pyramid -->
    <polygon points="0,-40 85,55 -85,55" fill="#d97706" stroke="#b45309" stroke-width="2"/>
    <polygon points="0,-40 85,55 25,55" fill="#b45309"/>
    <!-- Second Pyramid -->
    <polygon points="-70,-10 -15,55 -125,55" fill="#f59e0b" opacity="0.85"/>
  </g>

  <!-- Classical Roman / Islamic Architecture Pillars & Timeline Scroll -->
  <g transform="translate(470, 180)" filter="url(#histGlow)">
    <!-- Pillar 1 -->
    <rect x="-65" y="-60" width="20" height="110" rx="3" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <rect x="-72" y="-70" width="34" height="12" rx="3" fill="#fdba74"/>
    <rect x="-72" y="48" width="34" height="12" rx="3" fill="#fdba74"/>
    <!-- Pillar 2 -->
    <rect x="35" y="-60" width="20" height="110" rx="3" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <rect x="28" y="-70" width="34" height="12" rx="3" fill="#fdba74"/>
    <rect x="28" y="48" width="34" height="12" rx="3" fill="#fdba74"/>
    <!-- Arch -->
    <path d="M -50 -55 Q -5 -90, 40 -55" fill="none" stroke="#f97316" stroke-width="4"/>
  </g>

  <text x="50" y="65" fill="#fdba74" font-family="system-ui" font-size="14" font-weight="700">HISTORY • التاريخ والحضارة الإنسانية</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">الحضارات القديمة، التاريخ الإسلامي، والحديث</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="1"/>
    <text x="125" y="18" fill="#fed7aa" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">مصر القديمة • تاريخ السودان • النهضة الحديثة</text>
  </g>
</svg>`;

const makePhilosophySvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="philBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e112a"/>
      <stop offset="50%" stop-color="#3b1d54"/>
      <stop offset="100%" stop-color="#11071c"/>
    </linearGradient>
    <filter id="philGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#philBg)"/>

  <!-- The Thinker Head Silhouette with Illuminated Brain Gears -->
  <g transform="translate(200, 190)" filter="url(#philGlow)">
    <path d="M -45 55 Q -60 -10, -35 -45 Q 0 -85, 35 -60 Q 65 -35, 45 10 Q 35 30, 40 55 Z" fill="rgba(192,132,252,0.18)" stroke="#c084fc" stroke-width="3"/>
    <!-- Interlocking Gears of Logic -->
    <circle cx="0" cy="-15" r="22" stroke="#e879f9" stroke-width="2.5" fill="none" stroke-dasharray="6 3"/>
    <circle cx="28" cy="12" r="16" stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
    <circle cx="0" cy="-15" r="6" fill="#e879f9"/>
    <circle cx="28" cy="12" r="4" fill="#38bdf8"/>
  </g>

  <!-- Logic Venn Diagram and Philosophical Question Mark -->
  <g transform="translate(460, 180)" filter="url(#philGlow)">
    <circle cx="-25" cy="0" r="50" fill="rgba(168,85,247,0.2)" stroke="#a855f7" stroke-width="2"/>
    <circle cx="25" cy="0" r="50" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="0" y="8" fill="#ffffff" font-family="'Times New Roman', serif" font-size="28" font-weight="bold" text-anchor="middle">?</text>
  </g>

  <text x="50" y="65" fill="#e879f9" font-family="system-ui" font-size="14" font-weight="700">PHILOSOPHY &amp; LOGIC • الفلسفة والمنطق</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">التفكير الفلسفي، مبادئ المنطق وعلم النفس</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(192,132,252,0.2)" stroke="#c084fc" stroke-width="1"/>
    <text x="125" y="18" fill="#f5d0fe" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">الاستدلال المنطقي • نظريات المعرفة • الأخلاق</text>
  </g>
</svg>`;

const makeHealthScienceSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hlthBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f0714"/>
      <stop offset="50%" stop-color="#4a0e2e"/>
      <stop offset="100%" stop-color="#14020b"/>
    </linearGradient>
    <filter id="hlthGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#hlthBg)"/>

  <!-- Stethoscope forming Heart -->
  <g transform="translate(200, 190)" filter="url(#hlthGlow)">
    <path d="M 0 45 C -75 -25, -75 -85, 0 -60 C 75 -85, 75 -25, 0 45 Z" fill="rgba(244,63,94,0.15)" stroke="#fb7185" stroke-width="3"/>
    <circle cx="0" cy="45" r="14" fill="#f43f5e"/>
    <circle cx="0" cy="45" r="7" fill="#ffffff"/>
  </g>

  <!-- ECG Heartbeat Monitor Line -->
  <g transform="translate(440, 180)" filter="url(#hlthGlow)">
    <line x1="-120" y1="0" x2="-40" y2="0" stroke="#f43f5e" stroke-width="3"/>
    <polyline points="-40,0 -20,-12 -10,18 0,-55 12,38 22,-15 32,5 45,0 120,0" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
  </g>

  <text x="50" y="65" fill="#fda4af" font-family="system-ui" font-size="14" font-weight="700">HEALTH SCIENCES • مبادئ العلوم الصحية</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">الرعاية الصحية، الإسعافات، وعلم وظائف الأعضاء</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="1"/>
    <text x="125" y="18" fill="#fecdd3" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">مسار الصحة والحياة • السلامة الطبية • الوقاية</text>
  </g>
</svg>`;

const makeSaudiSocialStudiesSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="saBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="50%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#021a14"/>
    </linearGradient>
    <filter id="saGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#saBg)"/>

  <!-- Saudi Map Silhouette -->
  <g transform="translate(200, 190)" filter="url(#saGlow)">
    <path d="M -70 -50 Q -30 -65, 40 -40 Q 80 0, 60 45 Q 10 70, -40 50 Q -80 15, -70 -50 Z" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="3"/>
  </g>

  <!-- Palm Tree & Crossed Swords Emblem -->
  <g transform="translate(460, 180)" filter="url(#saGlow)">
    <!-- Palm Leaves -->
    <path d="M 0 -75 Q -40 -60, -45 -35 Q -20 -40, 0 -45" fill="#f59e0b"/>
    <path d="M 0 -75 Q 40 -60, 45 -35 Q 20 -40, 0 -45" fill="#f59e0b"/>
    <path d="M 0 -75 Q 0 -35, 0 -15" stroke="#f59e0b" stroke-width="6"/>
    <!-- Crossed Swords -->
    <line x1="-35" y1="20" x2="35" y2="60" stroke="#fde047" stroke-width="3.5"/>
    <line x1="35" y1="20" x2="-35" y2="60" stroke="#fde047" stroke-width="3.5"/>
  </g>

  <text x="50" y="65" fill="#a7f3d0" font-family="system-ui" font-size="14" font-weight="700">SAUDI SOCIAL STUDIES • الدراسات الاجتماعية والمواطنة</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">جغرافية وتاريخ المملكة العربية السعودية ورؤية 2030</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1"/>
    <text x="125" y="18" fill="#d1fae5" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">المواطنة الصالحة • التضاريس والآثار • التنمية</text>
  </g>
</svg>`;

const makeVisualArtsSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="artBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2d0612"/>
      <stop offset="50%" stop-color="#4c0519"/>
      <stop offset="100%" stop-color="#1f020a"/>
    </linearGradient>
    <filter id="artGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#artBg)"/>

  <!-- Painter Palette with Vibrant Color Blobs -->
  <g transform="translate(200, 190)" filter="url(#artGlow)">
    <path d="M -70 10 C -80 -50, 30 -75, 70 -30 C 95 0, 75 60, 20 65 C -20 70, -60 50, -70 10 Z" fill="#fed7aa" stroke="#fb7185" stroke-width="3"/>
    <!-- Thumb Hole -->
    <circle cx="35" cy="25" r="10" fill="#2d0612"/>
    <!-- Color Blobs -->
    <circle cx="-35" cy="-35" r="11" fill="#ef4444"/>
    <circle cx="-5" cy="-50" r="11" fill="#3b82f6"/>
    <circle cx="28" cy="-45" r="11" fill="#eab308"/>
    <circle cx="-48" cy="8" r="11" fill="#10b981"/>
    <circle cx="-15" cy="40" r="11" fill="#a855f7"/>
  </g>

  <!-- Paintbrushes -->
  <g transform="translate(450, 180)" filter="url(#artGlow)">
    <line x1="-50" y1="60" x2="40" y2="-60" stroke="#fbcfe8" stroke-width="6"/>
    <polygon points="40,-60 52,-75 60,-65" fill="#f43f5e"/>
    <line x1="-20" y1="70" x2="60" y2="-35" stroke="#fde047" stroke-width="5"/>
  </g>

  <text x="50" y="65" fill="#fda4af" font-family="system-ui" font-size="14" font-weight="700">VISUAL ARTS • التربية الفنية المعتمدة</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">الرسم، التصميم، الزخرفة، والتشكيل الخزفي</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(251,113,133,0.2)" stroke="#fb7185" stroke-width="1"/>
    <text x="125" y="18" fill="#ffe4e6" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">التكوين الفني • نظرية الألوان • التراث الفني</text>
  </g>
</svg>`;

const makeTechnicalEducationSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="techBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="50%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="techGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#techBg)"/>

  <!-- Mechanical Gears -->
  <g transform="translate(200, 190)" filter="url(#techGlow)">
    <circle cx="0" cy="0" r="50" stroke="#22c55e" stroke-width="10" fill="none" stroke-dasharray="14 10"/>
    <circle cx="0" cy="0" r="30" fill="rgba(34,197,94,0.15)" stroke="#16a34a" stroke-width="2"/>
    <circle cx="0" cy="0" r="10" fill="#22c55e"/>

    <circle cx="65" cy="-45" r="32" stroke="#38bdf8" stroke-width="8" fill="none" stroke-dasharray="10 8"/>
    <circle cx="65" cy="-45" r="8" fill="#38bdf8"/>
  </g>

  <!-- Drafting T-Square and Electronic Caliper -->
  <g transform="translate(450, 180)">
    <rect x="-80" y="-8" width="160" height="16" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
    <rect x="-90" y="-35" width="20" height="70" rx="3" fill="#94a3b8"/>
  </g>

  <text x="50" y="65" fill="#86efac" font-family="system-ui" font-size="14" font-weight="700">TECHNICAL EDUCATION • أساسيات التربية التقنية</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">التطبيقات الهندسية، الدوائر الكهربية، والإنتاج</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="1"/>
    <text x="125" y="18" fill="#bbf7d0" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">الرسم الهندسي • الطاقة والمحركات • الصيانة</text>
  </g>
</svg>`;

const makeGeneralScienceSvg = () => `
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sciBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#042f2e"/>
      <stop offset="50%" stop-color="#134e4a"/>
      <stop offset="100%" stop-color="#021c1a"/>
    </linearGradient>
    <filter id="sciGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="640" height="360" fill="url(#sciBg)"/>

  <!-- Integrated Ecosystem (Atmosphere, Hydrosphere, Biosphere) -->
  <g transform="translate(200, 190)" filter="url(#sciGlow)">
    <circle cx="0" cy="0" r="75" fill="rgba(45,212,191,0.12)" stroke="#2dd4bf" stroke-width="3"/>
    <path d="M -75 10 Q -25 35, 25 15 T 75 25 L 75 75 L -75 75 Z" fill="#0d9488" opacity="0.6"/>
    <!-- Sun & Clouds -->
    <circle cx="35" cy="-35" r="18" fill="#f59e0b"/>
  </g>

  <!-- Microscope & Atom Composite -->
  <g transform="translate(460, 180)" filter="url(#sciGlow)">
    <ellipse cx="0" cy="0" rx="65" ry="25" stroke="#38bdf8" stroke-width="2" fill="none" transform="rotate(-30)"/>
    <ellipse cx="0" cy="0" rx="65" ry="25" stroke="#a78bfa" stroke-width="2" fill="none" transform="rotate(30)"/>
    <circle cx="0" cy="0" r="12" fill="#2dd4bf"/>
  </g>

  <text x="50" y="65" fill="#5eead4" font-family="system-ui" font-size="14" font-weight="700">GENERAL SCIENCE • العلوم العامة والمتكاملة</text>
  <text x="50" y="105" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">المادة والطاقة، النظم الحية، والغلاف الجوي</text>

  <g transform="translate(50, 315)">
    <rect width="250" height="26" rx="13" fill="rgba(45,212,191,0.2)" stroke="#2dd4bf" stroke-width="1"/>
    <text x="125" y="18" fill="#99f6e4" font-family="system-ui" font-size="11.5" font-weight="700" text-anchor="middle">المنظومة البيئية • القوى والحركة • الكيمياء المبسطة</text>
  </g>
</svg>`;

// Educational Stages Artwork
const makePrimaryStageSvg = () => `
<svg width="640" height="280" viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pStageBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="50%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>
  <rect width="640" height="280" fill="url(#pStageBg)"/>
  <!-- Decorative Friendly Foundational Elements -->
  <circle cx="500" cy="70" r="90" fill="#34d399" opacity="0.15"/>
  <circle cx="100" cy="220" r="80" fill="#10b981" opacity="0.12"/>
  <text x="50" y="55" fill="#a7f3d0" font-family="system-ui" font-size="13" font-weight="bold">FOUNDATION STAGE • الصفوف 1 إلى 6</text>
  <text x="50" y="95" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">المرحلة الابتدائية — التأسيس المعرفي</text>
  <text x="50" y="125" fill="#cbd5e1" font-family="system-ui" font-size="13">بناء المهارات اللغوية والحسابية الأساسية والاستكشاف العلمي</text>
</svg>`;

const makeMiddleStageSvg = () => `
<svg width="640" height="280" viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mStageBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c4a6e"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#082f49"/>
    </linearGradient>
  </defs>
  <rect width="640" height="280" fill="url(#mStageBg)"/>
  <circle cx="520" cy="80" r="95" fill="#38bdf8" opacity="0.15"/>
  <circle cx="110" cy="210" r="75" fill="#0ea5e9" opacity="0.12"/>
  <text x="50" y="55" fill="#bae6fd" font-family="system-ui" font-size="13" font-weight="bold">INTERMEDIATE STAGE • الصفوف 7 إلى 9</text>
  <text x="50" y="95" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">المرحلة المتوسطة — التفكير المنطقي</text>
  <text x="50" y="125" fill="#cbd5e1" font-family="system-ui" font-size="13">العلوم العامة والمعادلات الرياضية وقواعد اللغة والمهارات الرقمية</text>
</svg>`;

const makeHighStageSvg = () => `
<svg width="640" height="280" viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hStageBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2e1065"/>
      <stop offset="50%" stop-color="#6b21a8"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
  <rect width="640" height="280" fill="url(#hStageBg)"/>
  <circle cx="510" cy="75" r="90" fill="#c084fc" opacity="0.16"/>
  <circle cx="120" cy="200" r="80" fill="#a855f7" opacity="0.12"/>
  <text x="50" y="55" fill="#e9d5ff" font-family="system-ui" font-size="13" font-weight="bold">HIGH SCHOOL &amp; STEM • الصفوف 10 إلى 12</text>
  <text x="50" y="95" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">المرحلة الثانوية — التخصص الدقيق</text>
  <text x="50" y="125" fill="#cbd5e1" font-family="system-ui" font-size="13">المسارات الأكاديمية المتقدمة: علمي، أدبي، صحي، وحاسوبي</text>
</svg>`;

// Cache mapped SVGs
const CACHED_SVGS: Record<string, string> = {
  PHYSICS: svgToDataUri(makePhysicsSvg()),
  CHEMISTRY: svgToDataUri(makeChemistrySvg()),
  BIOLOGY: svgToDataUri(makeBiologySvg()),
  MATH: svgToDataUri(makeMathSvg()),
  PRIMARY_MATH: svgToDataUri(makePrimaryMathSvg()),
  PRIMARY_ARABIC: svgToDataUri(makeArabicLitSvg(false, true)),
  ARABIC_LANG: svgToDataUri(makeArabicLitSvg(true, false)),
  ARABIC_LIT: svgToDataUri(makeArabicLitSvg(false, false)),
  ISLAMIC_STUDIES: svgToDataUri(makeIslamicSvg(false, false)),
  TAJWEED: svgToDataUri(makeIslamicSvg(true, false)),
  QURAN_RECITATION: svgToDataUri(makeIslamicSvg(false, true)),
  COMPUTER_SCIENCE: svgToDataUri(makeComputerScienceSvg()),
  ENGLISH: svgToDataUri(makeLanguageSvg('English')),
  FRENCH: svgToDataUri(makeLanguageSvg('French')),
  GERMAN: svgToDataUri(makeLanguageSvg('German')),
  ITALIAN: svgToDataUri(makeLanguageSvg('Italian')),
  GEOGRAPHY: svgToDataUri(makeGeographySvg()),
  HISTORY: svgToDataUri(makeHistorySvg()),
  PHILOSOPHY: svgToDataUri(makePhilosophySvg()),
  HEALTH_SCIENCE: svgToDataUri(makeHealthScienceSvg()),
  SAUDI_SOCIAL_STUDIES: svgToDataUri(makeSaudiSocialStudiesSvg()),
  VISUAL_ARTS: svgToDataUri(makeVisualArtsSvg()),
  LIFE_SKILLS: svgToDataUri(makeHealthScienceSvg()),
  PRIMARY_SCIENCE: svgToDataUri(makeGeneralScienceSvg()),
  GENERAL_SCIENCE: svgToDataUri(makeGeneralScienceSvg()),
  NATIONAL_EDUCATION: svgToDataUri(makeSaudiSocialStudiesSvg()),
  TECHNICAL_EDUCATION: svgToDataUri(makeTechnicalEducationSvg()),
};

const CACHED_STAGE_SVGS = {
  primary: svgToDataUri(makePrimaryStageSvg()),
  middle: svgToDataUri(makeMiddleStageSvg()),
  high: svgToDataUri(makeHighStageSvg())
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN GETTERS
// ─────────────────────────────────────────────────────────────────────────────

export const getSubjectVisual = (
  subject: Subject,
  country: CountryCode = 'SA',
  grade: GradeLevel = 'G10',
  _track?: EducationTrack
): SubjectVisualInfo => {
  const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(grade);
  const isMiddle = ['G7', 'G8', 'G9'].includes(grade);

  const getCountryBadge = (c: CountryCode) => {
    switch (c) {
      case 'SA': return { ar: 'مقرر عين المعتمد 🇸🇦', en: 'Saudi National Curriculum 🇸🇦' };
      case 'EG': return { ar: 'كتاب وزارة التعليم المصرية 🇪🇬', en: 'Egyptian Ministry Syllabus 🇪🇬' };
      case 'SD': return { ar: 'المنهاج القومي السوداني 🇸🇩', en: 'Sudan National Curriculum 🇸🇩' };
      default: return { ar: 'منهج وطني معتمد 100%', en: 'Accredited Curriculum 100%' };
    }
  };

  const badge = getCountryBadge(country);

  // Subject Visual Map
  switch (subject) {
    case 'PHYSICS':
      return {
        id: 'PHYSICS',
        titleAr: 'الفيزياء',
        titleEn: 'Physics',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#38bdf8',
        accentColor: '#818cf8',
        gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.05))',
        topicsAr: ['الميكانيكا والحركة', 'الكهرومغناطيسية', 'الضوء والموجات', 'الفيزياء الذرية'],
        topicsEn: ['Mechanics & Motion', 'Electromagnetism', 'Optics & Waves', 'Atomic Physics'],
        coverImage: CACHED_SVGS.PHYSICS,
        symbolIcon: '⚡'
      };

    case 'CHEMISTRY':
      return {
        id: 'CHEMISTRY',
        titleAr: 'الكيمياء',
        titleEn: 'Chemistry',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#ec4899',
        accentColor: '#a855f7',
        gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.05))',
        topicsAr: ['الروابط الكيميائية', 'الجدول الدوري', 'سرعة التفاعلات', 'الكيمياء العضوية'],
        topicsEn: ['Chemical Bonds', 'Periodic Table', 'Reaction Rates', 'Organic Chemistry'],
        coverImage: CACHED_SVGS.CHEMISTRY,
        symbolIcon: '🧪'
      };

    case 'BIOLOGY':
      return {
        id: 'BIOLOGY',
        titleAr: 'الأحياء',
        titleEn: 'Biology',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#10b981',
        accentColor: '#a3e635',
        gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(163, 230, 53, 0.05))',
        topicsAr: ['علم الوراثة والحمض النووي', 'تركيب الخلية', 'أجهزة الجسم', 'التنوع الحيوي'],
        topicsEn: ['Genetics & DNA', 'Cell Structure', 'Organ Systems', 'Biodiversity'],
        coverImage: CACHED_SVGS.BIOLOGY,
        symbolIcon: '🧬'
      };

    case 'MATH':
      return {
        id: 'MATH',
        titleAr: isMiddle ? 'الرياضيات المتوسطة' : 'الرياضيات المتقدمة',
        titleEn: isMiddle ? 'Middle Mathematics' : 'Advanced Mathematics',
        stageAr: isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#60a5fa',
        accentColor: '#38bdf8',
        gradient: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(56, 189, 248, 0.05))',
        topicsAr: isMiddle 
          ? ['الجبر والمعادلات', 'الهندسة والقياس', 'النسبة والتناسب', 'الإحصاء']
          : ['التفاضل والتكامل', 'المتجهات والمصفوفات', 'حساب المثلثات', 'الدوال اللوغاريتمية'],
        topicsEn: isMiddle
          ? ['Algebra & Equations', 'Geometry & Measure', 'Ratios & Proportions', 'Statistics']
          : ['Calculus', 'Vectors & Matrices', 'Trigonometry', 'Logarithmic Functions'],
        coverImage: CACHED_SVGS.MATH,
        symbolIcon: '📐'
      };

    case 'PRIMARY_MATH':
      return {
        id: 'PRIMARY_MATH',
        titleAr: 'الرياضيات الابتدائية',
        titleEn: 'Primary Mathematics',
        stageAr: 'المرحلة الابتدائية',
        stageEn: 'Elementary School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#38bdf8',
        accentColor: '#fbbf24',
        gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(251, 191, 36, 0.05))',
        topicsAr: ['الأعداد والعد', 'الجمع والطرح', 'جدول الضرب', 'الكسور والأشكال'],
        topicsEn: ['Numbers & Counting', 'Addition & Subtraction', 'Multiplication Table', 'Fractions & Shapes'],
        coverImage: CACHED_SVGS.PRIMARY_MATH,
        symbolIcon: '🔢'
      };

    case 'PRIMARY_ARABIC':
      return {
        id: 'PRIMARY_ARABIC',
        titleAr: 'لغتي الجميلة',
        titleEn: 'Primary Arabic Language',
        stageAr: 'المرحلة الابتدائية',
        stageEn: 'Elementary School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#34d399',
        accentColor: '#fbbf24',
        gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(251, 191, 36, 0.05))',
        topicsAr: ['الحروف والتهجئة', 'القراءة السليمة', 'الإملاء والخط', 'التعبير البسيط'],
        topicsEn: ['Letters & Phonics', 'Fluent Reading', 'Spelling & Handwriting', 'Simple Writing'],
        coverImage: CACHED_SVGS.PRIMARY_ARABIC,
        symbolIcon: '📖'
      };

    case 'PRIMARY_SCIENCE':
      return {
        id: 'PRIMARY_SCIENCE',
        titleAr: 'العلوم المبسطة',
        titleEn: 'Primary Science',
        stageAr: 'المرحلة الابتدائية',
        stageEn: 'Elementary School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#2dd4bf',
        accentColor: '#38bdf8',
        gradient: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(56, 189, 248, 0.05))',
        topicsAr: ['الكائنات الحية', 'المادة والطاقة', 'الأرض والفضاء', 'دورة الماء والطقس'],
        topicsEn: ['Living Organisms', 'Matter & Energy', 'Earth & Space', 'Water Cycle & Weather'],
        coverImage: CACHED_SVGS.PRIMARY_SCIENCE,
        symbolIcon: '🔬'
      };

    case 'ISLAMIC_STUDIES':
      return {
        id: 'ISLAMIC_STUDIES',
        titleAr: 'الدراسات الإسلامية',
        titleEn: 'Islamic Studies',
        stageAr: isPrimary ? 'المرحلة الابتدائية' : isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isPrimary ? 'Elementary' : isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#f59e0b',
        accentColor: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(16, 185, 129, 0.05))',
        topicsAr: ['القرآن الكريم والتفسير', 'العقيدة الإسلامية', 'الحديث الشريف', 'الفقه والآداب'],
        topicsEn: ['Holy Quran & Tafsir', 'Islamic Creed', 'Prophetic Hadith', 'Jurisprudence & Ethics'],
        coverImage: CACHED_SVGS.ISLAMIC_STUDIES,
        symbolIcon: '🕌'
      };

    case 'TAJWEED':
      return {
        id: 'TAJWEED',
        titleAr: 'التجويد',
        titleEn: 'Tajweed',
        stageAr: 'التعليم الأساسي',
        stageEn: 'Core Quranic Studies',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#f59e0b',
        accentColor: '#34d399',
        gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(52, 211, 153, 0.05))',
        topicsAr: ['أحكام النون الساكنة والتنوين', 'أحكام الميم الساكنة', 'مخارج الحروف', 'أحكام المدود'],
        topicsEn: ['Nun Sakinah & Tanween', 'Meem Sakinah', 'Letter Articulations', 'Madd Rules'],
        coverImage: CACHED_SVGS.TAJWEED,
        symbolIcon: '📜'
      };

    case 'QURAN_RECITATION':
      return {
        id: 'QURAN_RECITATION',
        titleAr: 'تلاوة القرآن الكريم وتجويده',
        titleEn: 'Quran Recitation and Tajweed',
        stageAr: 'المرحلة الابتدائية',
        stageEn: 'Elementary School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#d4a72c',
        accentColor: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(212, 167, 44, 0.2), rgba(16, 185, 129, 0.05))',
        topicsAr: ['التلاوة الصحيحة المرتلة', 'تطبيق أحكام التجويد', 'حفظ السور المقررة', 'معاني الآيات الكريمة'],
        topicsEn: ['Accurate Recitation', 'Tajweed Application', 'Surah Memorization', 'Verse Meanings'],
        coverImage: CACHED_SVGS.QURAN_RECITATION,
        symbolIcon: '🌟'
      };

    case 'COMPUTER_SCIENCE':
      return {
        id: 'COMPUTER_SCIENCE',
        titleAr: 'التقنية الرقمية وعلوم الحاسب',
        titleEn: 'Computer Science & ICT',
        stageAr: isPrimary ? 'المرحلة الابتدائية' : isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isPrimary ? 'Elementary' : isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#818cf8',
        accentColor: '#c084fc',
        gradient: 'linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(192, 132, 252, 0.05))',
        topicsAr: ['البرمجة بلغة بايثون', 'الذكاء الاصطناعي', 'الأمن السيبراني', 'هياكل البيانات والشبكات'],
        topicsEn: ['Python Programming', 'Artificial Intelligence', 'Cybersecurity', 'Data Structures & Networks'],
        coverImage: CACHED_SVGS.COMPUTER_SCIENCE,
        symbolIcon: '💻'
      };

    case 'ARABIC_LANG':
      return {
        id: 'ARABIC_LANG',
        titleAr: 'لغتي الخالدة',
        titleEn: 'Arabic Language & Grammar',
        stageAr: 'المرحلة المتوسطة',
        stageEn: 'Middle School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#34d399',
        accentColor: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(245, 158, 11, 0.05))',
        topicsAr: ['قواعد النحو والإعراب', 'الصرف والمشتقات', 'الأساليب اللغوية', 'الرسم الإملائي والكتابي'],
        topicsEn: ['Syntax & Parsing', 'Morphology', 'Linguistic Styles', 'Spelling & Writing'],
        coverImage: CACHED_SVGS.ARABIC_LANG,
        symbolIcon: '🖋️'
      };

    case 'ARABIC_LIT':
      return {
        id: 'ARABIC_LIT',
        titleAr: 'الدراسات الأدبية واللغوية',
        titleEn: 'Arabic Literature & Rhetoric',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#fbbf24',
        accentColor: '#f97316',
        gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.05))',
        topicsAr: ['تاريخ الأدب العربي', 'علم البيان والبديع والمعاني', 'النقد الأدبي وتحليل النصوص', 'الشعر والمعلقات'],
        topicsEn: ['Arabic Literature History', 'Rhetoric & Metaphor', 'Literary Criticism', 'Poetry & Odes'],
        coverImage: CACHED_SVGS.ARABIC_LIT,
        symbolIcon: '📜'
      };

    case 'ENGLISH':
      return {
        id: 'ENGLISH',
        titleAr: 'اللغة الإنجليزية',
        titleEn: 'English Language',
        stageAr: isPrimary ? 'المرحلة الابتدائية' : isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isPrimary ? 'Elementary' : isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#a78bfa',
        accentColor: '#38bdf8',
        gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(56, 189, 248, 0.05))',
        topicsAr: ['محادثة واستماع', 'قواعد اللغة Grammar', 'فهم المقروء Reading', 'الكتابة الإنشائية Writing'],
        topicsEn: ['Conversation & Listening', 'Grammar Rules', 'Reading Comprehension', 'Creative Writing'],
        coverImage: CACHED_SVGS.ENGLISH,
        symbolIcon: '🌐'
      };

    case 'FRENCH':
      return {
        id: 'FRENCH',
        titleAr: 'اللغة الفرنسية',
        titleEn: 'French Language',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#60a5fa',
        accentColor: '#f43f5e',
        gradient: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(244, 63, 94, 0.05))',
        topicsAr: ['التواصل والحوار', 'قواعد اللغة الفرنسية', 'النصوص والمفردات', 'الكتابة والمواقف'],
        topicsEn: ['Communication & Dialogue', 'French Grammar', 'Texts & Vocabulary', 'Writing & Scenarios'],
        coverImage: CACHED_SVGS.FRENCH,
        symbolIcon: '🇫🇷'
      };

    case 'GERMAN':
      return {
        id: 'GERMAN',
        titleAr: 'اللغة الألمانية',
        titleEn: 'German Language',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#f59e0b',
        accentColor: '#ef4444',
        gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.05))',
        topicsAr: ['التحدث والاستماع', 'قواعد الألمانية Grammatik', 'المفردات اليومية', 'التركيب اللغوي'],
        topicsEn: ['Speaking & Listening', 'German Grammar', 'Daily Vocabulary', 'Sentence Structure'],
        coverImage: CACHED_SVGS.GERMAN,
        symbolIcon: '🇩🇪'
      };

    case 'ITALIAN':
      return {
        id: 'ITALIAN',
        titleAr: 'اللغة الإيطالية',
        titleEn: 'Italian Language',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#10b981',
        accentColor: '#ef4444',
        gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(239, 68, 68, 0.05))',
        topicsAr: ['المحادثة والتفاعل', 'القواعد الإيطالية', 'المفردات والثقافة', 'القراءة والفهم'],
        topicsEn: ['Conversation', 'Italian Grammar', 'Vocabulary & Culture', 'Reading Comprehension'],
        coverImage: CACHED_SVGS.ITALIAN,
        symbolIcon: '🇮🇹'
      };

    case 'GEOGRAPHY':
      return {
        id: 'GEOGRAPHY',
        titleAr: 'الجغرافيا والدراسات البيئية',
        titleEn: 'Geography & Environmental Studies',
        stageAr: isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#38bdf8',
        accentColor: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(16, 185, 129, 0.05))',
        topicsAr: ['التضاريس والمناخ', 'الخرائط ونظم GIS', 'الموارد المائية والبيئية', 'الجغرافيا الاقتصادية'],
        topicsEn: ['Topography & Climate', 'Maps & GIS Systems', 'Water & Eco Resources', 'Economic Geography'],
        coverImage: CACHED_SVGS.GEOGRAPHY,
        symbolIcon: '🗺️'
      };

    case 'HISTORY':
      return {
        id: 'HISTORY',
        titleAr: 'التاريخ',
        titleEn: 'History',
        stageAr: isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#f59e0b',
        accentColor: '#b45309',
        gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(180, 83, 9, 0.05))',
        topicsAr: ['الحضارات القديمة', 'التاريخ الإسلامي', 'تاريخ الوطن العربي', 'العصر الحديث والمعاصر'],
        topicsEn: ['Ancient Civilizations', 'Islamic History', 'Arab World History', 'Modern Era'],
        coverImage: CACHED_SVGS.HISTORY,
        symbolIcon: '🏛️'
      };

    case 'PHILOSOPHY':
      return {
        id: 'PHILOSOPHY',
        titleAr: 'الفلسفة والمنطق',
        titleEn: 'Philosophy & Logic',
        stageAr: 'المرحلة الثانوية',
        stageEn: 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#c084fc',
        accentColor: '#ec4899',
        gradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(236, 72, 153, 0.05))',
        topicsAr: ['التفكير الفلسفي', 'مبادئ وقواعد المنطق', 'الاستدلال والمغالطات', 'علم النفس والاجتماع'],
        topicsEn: ['Philosophical Inquiry', 'Logical Principles', 'Reasoning & Fallacies', 'Psychology & Sociology'],
        coverImage: CACHED_SVGS.PHILOSOPHY,
        symbolIcon: '🧠'
      };

    case 'HEALTH_SCIENCE':
      return {
        id: 'HEALTH_SCIENCE',
        titleAr: 'مبادئ العلوم الصحية',
        titleEn: 'Health Sciences',
        stageAr: 'المرحلة الثانوية (مسار الصحة والحياة)',
        stageEn: 'High School (Health Track)',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#fb7185',
        accentColor: '#f43f5e',
        gradient: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2), rgba(244, 63, 94, 0.05))',
        topicsAr: ['أساسيات الرعاية الصحية', 'الإسعافات الأولية والسلامة', 'فسيولوجيا وصحة الإنسان', 'المهن الطبية والمصطلحات'],
        topicsEn: ['Healthcare Foundations', 'First Aid & Safety', 'Human Physiology', 'Medical Terminology'],
        coverImage: CACHED_SVGS.HEALTH_SCIENCE,
        symbolIcon: '🩺'
      };

    case 'SAUDI_SOCIAL_STUDIES':
      return {
        id: 'SAUDI_SOCIAL_STUDIES',
        titleAr: 'الدراسات الاجتماعية والمواطنة',
        titleEn: 'Saudi Social Studies',
        stageAr: isPrimary ? 'المرحلة الابتدائية' : 'المرحلة المتوسطة',
        stageEn: isPrimary ? 'Elementary' : 'Middle School',
        badgeAr: 'المملكة العربية السعودية 🇸🇦',
        badgeEn: 'Kingdom of Saudi Arabia 🇸🇦',
        themeColor: '#10b981',
        accentColor: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(245, 158, 11, 0.05))',
        topicsAr: ['تاريخ وطني المملكة', 'جغرافية شبه الجزيرة العربية', 'رؤية السعودية 2030', 'المواطنة ومؤسسات الدولة'],
        topicsEn: ['Saudi National History', 'Arabian Geography', 'Saudi Vision 2030', 'Citizenship & Institutions'],
        coverImage: CACHED_SVGS.SAUDI_SOCIAL_STUDIES,
        symbolIcon: '🇸🇦'
      };

    case 'VISUAL_ARTS':
      return {
        id: 'VISUAL_ARTS',
        titleAr: 'التربية الفنية',
        titleEn: 'Visual Arts Education',
        stageAr: isPrimary ? 'المرحلة الابتدائية' : 'المرحلة المتوسطة',
        stageEn: isPrimary ? 'Elementary' : 'Middle School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#fb7185',
        accentColor: '#eab308',
        gradient: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2), rgba(234, 179, 8, 0.05))',
        topicsAr: ['الرسم والتلوين', 'الزخارف التراثية والإسلامية', 'التشكيل بالخامات المتنوعة', 'التصميم والابتكار'],
        topicsEn: ['Drawing & Painting', 'Islamic Arabesque & Ornaments', 'Crafting & Materials', 'Design & Innovation'],
        coverImage: CACHED_SVGS.VISUAL_ARTS,
        symbolIcon: '🎨'
      };

    case 'LIFE_SKILLS':
      return {
        id: 'LIFE_SKILLS',
        titleAr: 'المهارات الحياتية والأسرية',
        titleEn: 'Life & Family Skills',
        stageAr: 'المرحلة الابتدائية',
        stageEn: 'Elementary School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#f43f5e',
        accentColor: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.2), rgba(16, 185, 129, 0.05))',
        topicsAr: ['صحة الأسرة والتغذية', 'السلامة المنزلية والإسعاف', 'إدارة الموارد والادخار', 'التواصل الإيجابي'],
        topicsEn: ['Family Health & Nutrition', 'Home Safety & First Aid', 'Resource Management', 'Positive Communication'],
        coverImage: CACHED_SVGS.LIFE_SKILLS,
        symbolIcon: '🏡'
      };

    case 'GENERAL_SCIENCE':
      return {
        id: 'GENERAL_SCIENCE',
        titleAr: country === 'SD' && ['G7', 'G8', 'G9'].includes(grade) ? 'العلوم الطبيعية' : 'العلوم العامة / المتكاملة',
        titleEn: country === 'SD' && ['G7', 'G8', 'G9'].includes(grade) ? 'Natural Science' : 'General / Integrated Science',
        stageAr: isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#2dd4bf',
        accentColor: '#38bdf8',
        gradient: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(56, 189, 248, 0.05))',
        topicsAr: ['القوى والحركة', 'المادة وتغيراتها', 'الأنظمة البيئية والغلاف الجوي', 'الطاقة والحرارة'],
        topicsEn: ['Forces & Motion', 'Matter & Changes', 'Ecosystems & Atmosphere', 'Energy & Heat'],
        coverImage: CACHED_SVGS.GENERAL_SCIENCE,
        symbolIcon: '🔬'
      };

    case 'NATIONAL_EDUCATION':
      return {
        id: 'NATIONAL_EDUCATION',
        titleAr: 'التربية الوطنية',
        titleEn: 'National Education',
        stageAr: 'المرحلة المتوسطة',
        stageEn: 'Middle School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#fb923c',
        accentColor: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(16, 185, 129, 0.05))',
        topicsAr: ['مفهوم الوطن والمواطنة', 'الدستور والقوانين', 'المجتمع والتعايش السلمي', 'المؤسسات القومية'],
        topicsEn: ['Nationhood & Citizenship', 'Constitution & Laws', 'Society & Harmony', 'National Institutions'],
        coverImage: CACHED_SVGS.NATIONAL_EDUCATION,
        symbolIcon: '🎖️'
      };

    case 'TECHNICAL_EDUCATION':
      return {
        id: 'TECHNICAL_EDUCATION',
        titleAr: 'أساسيات التربية التقنية',
        titleEn: 'Technical Education',
        stageAr: isMiddle ? 'المرحلة المتوسطة' : 'المرحلة الثانوية',
        stageEn: isMiddle ? 'Middle School' : 'High School',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#22c55e',
        accentColor: '#38bdf8',
        gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(56, 189, 248, 0.05))',
        topicsAr: ['الرسم الهندسي والمقاييس', 'الميكانيكا والتروس', 'الكهرباء المنزلية', 'الإنتاج التقني والورش'],
        topicsEn: ['Engineering Drafting', 'Mechanics & Gears', 'Domestic Electricity', 'Technical Workshops'],
        coverImage: CACHED_SVGS.TECHNICAL_EDUCATION,
        symbolIcon: '⚙️'
      };

    default:
      return {
        id: subject,
        titleAr: 'مقرر دراسي معتمد',
        titleEn: 'Accredited Course',
        stageAr: 'المنهاج الوطني',
        stageEn: 'National Curriculum',
        badgeAr: badge.ar,
        badgeEn: badge.en,
        themeColor: '#38bdf8',
        accentColor: '#818cf8',
        gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.05))',
        topicsAr: ['محاور المنهج المعتمدة', 'نماذج تطبيقية محلولة', 'بوابات تقييم ذكية'],
        topicsEn: ['Accredited Syllabus Topics', 'Worked Model Solutions', 'Smart Assessment Gates'],
        coverImage: CACHED_SVGS.MATH,
        symbolIcon: '📚'
      };
  }
};

export const getStageVisual = (stage: 'primary' | 'middle' | 'high'): StageVisualInfo => {
  switch (stage) {
    case 'primary':
      return {
        id: 'primary',
        titleAr: 'المرحلة الابتدائية',
        titleEn: 'Elementary Stage',
        gradesAr: 'الصفوف (1 – 6)',
        gradesEn: 'Grades 1 – 6',
        ageAr: '6 – 12 سنة',
        ageEn: 'Ages 6 – 12',
        badgeAr: 'التأسيس المعرفي',
        badgeEn: 'Foundational Stage',
        themeColor: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.05))',
        coverImage: CACHED_STAGE_SVGS.primary,
        highlightsAr: ['تأسيس الحساب والكسور', 'لغتي الجميلة والقراءة', 'العلوم والاستكشاف', 'التربية الإسلامية'],
        highlightsEn: ['Arithmetic & Fractions', 'Arabic Reading & Phonics', 'Science Exploration', 'Islamic Values']
      };

    case 'middle':
      return {
        id: 'middle',
        titleAr: 'المرحلة المتوسطة',
        titleEn: 'Middle / Intermediate',
        gradesAr: 'الصفوف (7 – 9)',
        gradesEn: 'Grades 7 – 9',
        ageAr: '13 – 15 سنة',
        ageEn: 'Ages 13 – 15',
        badgeAr: 'التفكير المنطقي',
        badgeEn: 'Logical Reasoning',
        themeColor: '#38bdf8',
        gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(14, 165, 233, 0.05))',
        coverImage: CACHED_STAGE_SVGS.middle,
        highlightsAr: ['المعادلات الجبرية', 'العلوم الطبيعية المتكاملة', 'قواعد النحو المتقدم', 'البرمجة والتقنية'],
        highlightsEn: ['Algebraic Equations', 'Integrated Sciences', 'Grammar Mastery', 'Coding & Tech']
      };

    case 'high':
      return {
        id: 'high',
        titleAr: 'المرحلة الثانوية و STEM',
        titleEn: 'High School & STEM',
        gradesAr: 'الصفوف (10 – 12)',
        gradesEn: 'Grades 10 – 12',
        ageAr: '16 – 18+ سنة',
        ageEn: 'Ages 16 – 18+',
        badgeAr: 'التخصص العلمي الدقيق',
        badgeEn: 'Specialized STEM Tracks',
        themeColor: '#8b5cf6',
        gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(192, 132, 252, 0.05))',
        coverImage: CACHED_STAGE_SVGS.high,
        highlightsAr: ['الفيزياء والميكانيكا', 'التفاضل والتكامل', 'التفاعلات الكيميائية', 'الوراثة وهياكل البيانات'],
        highlightsEn: ['Mechanics & Physics', 'Calculus', 'Chemical Reactions', 'Genetics & Algorithms']
      };
  }
};
