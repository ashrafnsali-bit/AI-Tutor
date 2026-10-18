Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$rootDir = Split-Path -Parent $PSScriptRoot
$distDir = (Resolve-Path (Join-Path $rootDir "dist")).Path
$zipPath = Join-Path $rootDir "public_html.zip"

if (Test-Path $zipPath) {
    Remove-Item -Force $zipPath
}

$zipStream = [System.IO.File]::Open($zipPath, [System.IO.FileMode]::Create)
$archive = New-Object System.IO.Compression.ZipArchive($zipStream, [System.IO.Compression.ZipArchiveMode]::Create)

Get-ChildItem -Path $distDir -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($distDir.Length + 1).Replace('\', '/')
    $entry = $archive.CreateEntry($relativePath, [System.IO.Compression.CompressionLevel]::Optimal)
    $entryStream = $entry.Open()
    $fileStream = [System.IO.File]::OpenRead($_.FullName)
    $fileStream.CopyTo($entryStream)
    $fileStream.Dispose()
    $entryStream.Dispose()
}

$archive.Dispose()
$zipStream.Dispose()

Write-Host "SUCCESS: Created public_html.zip with Linux forward-slash paths."
