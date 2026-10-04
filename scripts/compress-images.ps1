Add-Type -AssemblyName System.Drawing

function Compress-Image($srcPath, $dstPath, $maxWidth, $maxHeight, $quality) {
    $fullSrc = (Resolve-Path $srcPath).Path
    $bytes = [System.IO.File]::ReadAllBytes($fullSrc)
    $ms = New-Object System.IO.MemoryStream(,$bytes)
    $img = [System.Drawing.Image]::FromStream($ms)

    $ratioX = $maxWidth / $img.Width
    $ratioY = $maxHeight / $img.Height
    $ratio = [Math]::Min($ratioX, $ratioY)
    $newWidth = [int]($img.Width * $ratio)
    $newHeight = [int]($img.Height * $ratio)
    $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graph = [System.Drawing.Graphics]::FromImage($bmp)
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
    
    $bmp.Save($dstPath, $codec, $encParams)
    $graph.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    $ms.Dispose()
}

$rawOg = 'C:/Users/abu lara/.gemini/antigravity-ide/brain/70c88826-a9cf-4500-ae54-bef2a9847d78/platform_og_banner_1791127086463.jpg'
$rawIcon = 'C:/Users/abu lara/.gemini/antigravity-ide/brain/70c88826-a9cf-4500-ae54-bef2a9847d78/platform_app_icon_1791127104141.jpg'

Compress-Image $rawOg 'public/og-image.jpg' 1200 630 82
Compress-Image $rawOg 'public/og-preview.jpg' 800 420 80
Compress-Image $rawIcon 'public/logo.jpg' 512 512 85
Compress-Image $rawIcon 'public/apple-touch-icon.png' 180 180 90
Compress-Image $rawIcon 'public/favicon-32x32.png' 32 32 90

Copy-Item 'public/og-image.jpg' 'og-image.jpg' -Force
Copy-Item 'public/og-preview.jpg' 'og-preview.jpg' -Force
Copy-Item 'public/logo.jpg' 'logo.jpg' -Force
Copy-Item 'public/apple-touch-icon.png' 'apple-touch-icon.png' -Force

Write-Host "Compressed OG size:" (Get-Item 'public/og-image.jpg').Length "bytes"
Write-Host "Compressed Preview size:" (Get-Item 'public/og-preview.jpg').Length "bytes"
Write-Host "Compressed Logo size:" (Get-Item 'public/logo.jpg').Length "bytes"
