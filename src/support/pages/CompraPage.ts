import { Page, expect } from '@playwright/test';
import ContactElements from '../elements/CompraElements';
import BasePage from './BasePage';

export default class ContactPage extends BasePage {
  readonly contactElements: ContactElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.contactElements = new ContactElements(page);
  }

  async selecionandoProdutoERealizandoCompra(query: string): Promise<void> {
    await this.contactElements.getSearchIcon().click();
    await this.contactElements.getSearchBar().fill(query);
    await this.contactElements.getSearchBar().press("Enter");
    await this.contactElements.getAnnounce().click();
    await this.contactElements.getComprar().click();
    await this.contactElements.getCep().fill("88865000");
    await this.contactElements.getVerify().click();
    await this.contactElements.getComprarFinal().click();
  }

}
