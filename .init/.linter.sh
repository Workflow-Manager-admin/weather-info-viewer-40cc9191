#!/bin/bash
cd /home/kavia/workspace/code-generation/weather-info-viewer-40cc9191/frontend_weather_ui
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

