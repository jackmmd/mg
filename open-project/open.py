import argparse
import os

parser = argparse.ArgumentParser()
parser.add_argument("-p","--project",help="Nombre del proyecto (tedef | periferico | reportero | validator)")
args = parser.parse_args()
project = args.project
if project=="tedef":
   print("tedef")
   os.system("python t_open.py")
elif project=="periferico":
   print("periferico")
   os.system("python p_open.py")
elif project=="reportero":
   print("reportero")
   os.system("python r_open.py")
elif project=="medik":
   print("medi-k")
   os.system("python m_open.py")
else:
   print("\nParameter -p is required\n")
   print("|--------------------------------------------------|")
   print("|                                                  |")	
   print("| Projects: tedef | periferico | reportero | medik |")
   print('| Example: python open.py -p tedef                 |')
   print("|                                                  |")
   print("|--------------------------------------------------|")

