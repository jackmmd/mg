### Comandos
```bash
npx playwright test #Ejecuta todos los tests 
```

```bash
npx playwright test example.spec.ts #Ejecuta solo los test de este archivo 
```

```bash
npx playwright test -g "descripción del test" #Ejecuta los test por titulo 
```

```bash
npx playwright test --ui #Ejecuta los test con interfáz 
```

```bash
npx playwright codegen "http://localhost:4200" #Ejecutar el generador de pruebas 
```

```bash
npx playwright codegen --load-storage=auth.json "http://localhost:4200/auditoria-medica" # No es necesariio volver a iniciar sesión
```

```bash
node save-auth.ts # Crea la sesión para la authenticación para usar los demás test
```