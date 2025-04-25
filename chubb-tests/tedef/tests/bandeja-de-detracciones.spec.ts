import { test } from '@playwright/test'
test.use({storageState:'auth.json'})
test.describe('Tedef - Bandeja de detracciones',()=>{
    test('Bandeja de detracción',async({page})=>{
        await page.goto('http://localhost:4200/bandeja-de-detracciones');
        await page.getByRole('button', { name: 'GENERAR REPORTE' }).click();
        await page.getByRole('button', { name: 'Si' }).click();
        await page.locator('mat-drawer-content a').filter({ hasText: 'Todos' }).click();
        await page.locator('mat-drawer-content a').filter({ hasText: 'Pendiente' }).click();
        await page.locator('mat-drawer-content a').filter({ hasText: 'Enviado' }).click();
        await page.locator('mat-drawer-content a').filter({ hasText: 'Todos' }).click();
        await page.getByRole('button', { name: 'DESCARTAR' }).click();
        await page.getByRole('button', { name: 'Cancelar' }).click();
        await page.getByRole('button', { name: 'REGISTRAR OP' }).click();
        await page.locator('#mat-dialog-title-0').getByRole('button').click();
        await page.getByRole('button', { name: 'REVISAR' }).click(); 
    })
})
