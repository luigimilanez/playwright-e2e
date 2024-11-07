import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CadastroElements from '../elements/CadastroElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly cadastroElements: CadastroElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElements = new CadastroElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.cadastroElements.getCampoEmail().fill('tinytmp+wugti@gmail.com');
    await this.cadastroElements.getCampoPassword().fill('Teste@12');
  }

  async validarCadastro(): Promise<void> {
    await expect(this.cadastroElements.getMessageOK()).toBeVisible();
  }
  
}
