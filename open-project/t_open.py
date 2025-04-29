import subprocess
import os

# Imprimir mensaje de inicio
print("Script")

# Abrir el proyecto Tedef-core-api
proyecto_core_api = r"C:\Users\dmondragon\projects\tdef\tedef-core-api\Chubb.Tedef.Api.v3.sln"
os.startfile(proyecto_core_api)
print("Proyecto Tedef-core-api abierto")

# Abrir el proyecto Tedef-web-api
proyecto_web_api = r"C:\Users\dmondragon\projects\tdef\tedef-web-api\chubb-tedef-ova.sln"
os.startfile(proyecto_web_api)
print("Proyecto Tedef-web-api abierto")

# Ejecutar fnm env y fnm use 16
subprocess.run("fnm env --use-on-cd", shell=True)
subprocess.run("fnm use 16", shell=True)

# Cambiar al directorio del proyecto Tedef web-client y abrir con VS Code
web_client_dir = r"C:\Users\dmondragon\projects\tdef\tedef-web-client"
os.chdir(web_client_dir)
subprocess.run("code .", shell=True)

# Mensaje final
print("Proyecto Tedef Listo")
