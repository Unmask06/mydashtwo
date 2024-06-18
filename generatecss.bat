@echo off
echo Generating Tailwind CSS...

:: Assuming tailwindcss.exe is now in the bin directory at the project root
tailwindcss.exe -i .\mydashtwo\tailwind\styles.css -o .\mydashtwo\assets\tailwind.css --minify 

echo Tailwind CSS generated successfully.
pause
