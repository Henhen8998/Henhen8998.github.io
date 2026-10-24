Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " Starting Henry Yang's Portfolio on Localhost:8000..." -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C in this terminal anytime to stop the server." -ForegroundColor Yellow
Write-Host ""

Start-Process "http://localhost:8000"
python -m http.server 8000
