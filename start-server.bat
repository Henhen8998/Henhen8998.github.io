@echo off
title Henry Yang Portfolio - Local Server
echo ========================================================
echo  Starting Henry Yang's Portfolio on Localhost...
echo ========================================================
echo.
echo  Opening browser at http://localhost:8000
echo  Press Ctrl+C in this window anytime to stop the server.
echo.

start "" "http://localhost:8000"
python -m http.server 8000
pause
