import { test } from '@playwright/test';
test.use({ storageState:'auth.json' })

test.describe('Tedef - Bandeja de comprobantes observados',()=>{
    test('Bandeja de comprobantes observados',async({ page })=>{
        test.slow()
        await page.goto('http://localhost:4200/bandeja-de-comprobantes-observados');
        await page.getByRole('button', { name: 'VER EVALUACIÓN' }).click();
        await page.locator('#mat-dialog-title-0').getByRole('button').click();
        await page.getByRole('button', { name: 'REVISAR' }).click();
    })
})
