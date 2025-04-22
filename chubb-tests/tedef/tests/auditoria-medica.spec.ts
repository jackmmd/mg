import { test } from '@playwright/test';
test.use({ storageState:'auth.json' })

test.describe('Tedef - Auditoría medica', () => {
  test('Auditoría medica', async ({ page }) => {
    page.goto('http://localhost:4200/auditoria-medica')
    await page.getByRole('button', { name: 'MONITOREO' }).click();
    await page.getByRole('button', { name: 'CONFIGURACIÓN' }).click();
    await page.getByRole('button', { name: 'GUARDAR CAMBIOS' }).click();
    await page.getByRole('button', { name: 'Si' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('heading', { name: 'Monitoreo de integración' }).getByRole('button').click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Recibido' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'En espera' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Conciliado' }).click();
    await page.locator('a').filter({ hasText: 'Todos' }).nth(3).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Pendiente' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Aprobado' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Observado' }).click();
    await page.locator('mat-drawer-content a').filter({ hasText: 'Rechazado' }).click();
  })})