import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="name"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[id="email"]');
  }

  getCampoPassword(): Locator {
    return this.page.locator('input[id="password"]')
  }

  getMessageOK(): Locator {
    return this.page.locator(
      'text=Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    );
  }

}
