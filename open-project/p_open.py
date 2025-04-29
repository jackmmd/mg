import subprocess
import os

print("Abriendo proyecto PERIFERICO")
# Abrir el core
periferico_core_api = r"C:\Users\dmondragon\projects\periferico\periferico-core-api\chubb-periferico-siteds-v3.sln"
os.startfile(periferico_core_api)

# Usar la version 16 de node js
subprocess.run("fnm env --use-on-cd",shell=True)
subprocess.run("fnm use 16",shell=True)

# Abrir el Frontend
web_client_dir = r"C:\Users\dmondragon\projects\periferico\periferico-web-client"
os.chdir(web_client_dir)
subprocess.run("code .",shell=True)

