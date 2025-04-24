import { test } from '@playwright/test';



test.use({ storageState:'auth.json' })

test.describe('Tedef - Bandeja de lotes', () => {
  test('Bandeja de lotes', async ({ page }) => {
    test.slow()
    await page.goto('http://localhost:4200/bandeja-de-lotes');
    await page.getByRole('button', { name: 'CARGAR LOTE' }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    
    await Promise.all(
      ['Pendiente','Aprobado','Aprobación Parcial','Rechazado','Todos'].map(async(item)=>{
        await page.locator('mat-drawer-content a').filter({ hasText: item }).click();
      })
    )

    await page.getByRole('button', { name: 'REVISAR' }).first()
    await page.getByRole('row', { name: 'F35700319794 DNI 75124426 01-' }).getByRole('button').nth(1)
    await page.getByRole('link', { name: 'Doc. Facturador' }).click();
    await page.getByRole('link', { name: 'General' }).click();
    await page.getByRole('link', { name: 'Detalles' }).click();
    await page.getByRole('link', { name: 'Farmacia' }).click();
    await page.getByRole('link', { name: 'Odontológico' }).click();
    await page.getByRole('link', { name: 'Archivos' }).click();
    // await Promise.all(
    //   ['General','Detalles','Farmacia','Odontológico','Archivos'].map(async(item)=>{
    //     await page.getByRole('link', { name: item }).click();
    //   })
    // )
    
    // await page.getByRole('button', { name: 'Cargar Archivos' }).click();
    // await page.getByRole('button').filter({ hasText: /^$/ }).click();
    // await page.getByRole('button', { name: 'Ver evaluación' }).click();
    // await page.locator('#mat-dialog-title-4').getByRole('button').click();
    // await page.getByRole('button', { name: 'Re-evaluar' }).click();
    // await page.locator('#mat-dialog-title-5').click();
    // await page.getByRole('button').filter({ hasText: /^$/ }).click();
  });
});