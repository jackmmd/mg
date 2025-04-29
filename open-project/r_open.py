import subprocess
import os

print("Abriendo proyecto Reportero")

# Usar la version 16 de node js

# Abrir el Frontend
web_client_dir = r"C:\Users\dmondragon\projects\reportero"
os.chdir(web_client_dir)
subprocess.run("code .",shell=True)

