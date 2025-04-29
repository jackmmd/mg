Estos scripts facilitan tareas pequeñas repetitivas
#### Archivos
- generate-report.py: Genera un reporte para el consolidado
- open.py: Habre un proyecto y depende de [p_open.py,r_open.py,t_open.py,m_open.py]     
 
### Uso
#### 1. Script <code>open.py</code>

```bash
python open.py --help
```
```bash
python open.py
```
```bash
Parameter -p is required

|--------------------------------------------------|
|                                                  |
| Projects: tedef | periferico | reportero | medik |
| Example: python open.py -p tedef                 |
|                                                  |
|--------------------------------------------------|
```

#### 1. Script <code>generate-report.py</code>

```bash
python generate-report.py --help
```
```bash
python generate-report.py 
```
```bash
Parameter -f is required

|-----Example--------------------------------------------------|
|                                                              |
| python generate-report.py -f "Del 5 de marzo al 11 de marzo" |
|                                                              |
|--------------------------------------------------------------|
```