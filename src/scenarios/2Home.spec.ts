import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ContactPage from '../support/pages/CompraPage';

test.describe('Formulário de contato', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let contactPage: ContactPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.lg_HOME')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto(BASE_URL);
  });

  test('Pesquisando TV', async () => {
    await contactPage.selecionandoProdutoERealizandoCompra('TV 4K smart');
  });
});
