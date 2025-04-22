// save-auth.ts
const { test, expect, Page,chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({ headless: false }); // headless false para ver el login
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:4200/bandeja-de-lotes');
  await page.getByRole('button', { name: 'USUARIO IPRESS' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('cesar.mechato@materiagris.pe');
  await page.getByRole('textbox', { name: 'Password' }).fill('Zopa7001');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Esperar que el login se complete
  await page.waitForURL('**/bandeja-de-lotes');

  // Guardar sesión en un archivo
  await context.storageState({ path: 'auth.json' });

  await browser.close();
})();
