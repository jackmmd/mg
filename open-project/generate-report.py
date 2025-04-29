import subprocess
import argparse
import sys
import os

parser = argparse.ArgumentParser()
parser.add_argument("-f","--folder",help="Nombre del archivo")
args = parser.parse_args()
folder = args.folder
if folder:
   f = open(r"C:\Users\dmondragon\projects\reportero\src\core\variables.ts","w")
   f.write(f'export const CONSOLIDADO_FOLDER_NAME="{folder}"')
   f.close() 
   subprocess.run(["cmd", "/c", "cd /d C:\\Users\\dmondragon\\projects\\reportero && npm run apertura"], shell=True) 
   os.startfile(r"C:\Users\dmondragon\Documents\MEGADATA\Consolidados")
else:
   print("\nParameter -f is required\n")
   print("|-----Example--------------------------------------------------|")
   print("|                                                              |")
   print('| python generate-report.py -f "Del 5 de marzo al 11 de marzo" |')
   print("|                                                              |")
   print("|--------------------------------------------------------------|")

