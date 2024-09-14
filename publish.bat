@echo off

call login-code-artifact.bat
call npm-install.bat
call npm-build.bat

npm publish