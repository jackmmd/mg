import { test } from '@playwright/test';

test.use({ storageState:'auth.json' })

test.describe('Tedef - Bandeja de lotes', () => {
  test('Bandeja de lotes', async ({ page }) => {
    test.slow()
    await page.goto('http://localhost:4200/bandeja-de-lotes');
    await page.getByRole('button', { name: 'CARGAR LOTE' }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Pendiente' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Aprobado' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Aprobación Parcial' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Rechazado' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Todos' }).click();
    await page.getByRole('button', { name: 'VER CONST.' }).first().click();
    await page.getByText('Envío de constancia').click();
    await page.locator('#mat-dialog-title-1').getByRole('button').click();
    await page.getByRole('button', { name: 'REVISAR' }).first().click();
    await page.getByRole('button', { name: 'VER EVALUACIÓN' }).click();
    await page.locator('#mat-dialog-title-2').getByRole('button').click();
    await page.getByRole('button', { name: 'REVISAR' }).click();
    await page.getByRole('link', { name: 'General' }).click();
    await page.getByRole('link', { name: 'Detalles' }).click();
    await page.getByRole('link', { name: 'Farmacia' }).click();
    await page.getByRole('link', { name: 'Odontológico' }).click();
    await page.getByRole('link', { name: 'Archivos' }).click();
    await page.getByRole('button', { name: 'Cargar Archivos' }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Ver evaluación' }).click();
    await page.locator('#mat-dialog-title-4').getByRole('button').click();
    await page.getByRole('button', { name: 'Re-evaluar' }).click();
    await page.locator('#mat-dialog-title-5').click();
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
  });
});
