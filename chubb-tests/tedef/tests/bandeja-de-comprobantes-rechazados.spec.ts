import { test } from '@playwright/test';
test.use({ storageState: 'auth.json' })
test.describe('Tedef - Bandeja de comprobantes rechazados', () => {
  test('Bandeja de comprobantes rechazados', async ({ page }) => {
    await page.goto('http://localhost:4200/bandeja-de-comprobantes-rechazados');
    await page.getByRole('button', { name: 'VER EVALUACIÓN' }).click();
    await page.locator('#mat-dialog-title-0').getByRole('button').click();
    await page.getByRole('button', { name: 'REVISAR' }).click()
  })
})