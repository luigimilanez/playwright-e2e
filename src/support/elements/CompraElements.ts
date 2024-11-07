import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ContactElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchIcon(): Locator {
    return this.page.locator('button[class="c-gnb__item-link c-gnb__item-link--utility-top icon-search js-pop-open"]');
  }

  getSearchBar(): Locator {
    return this.page.locator('input[id="search-query"]');
  }

  getAnnounce(): Locator {
    return this.page.locator('span[id="ma-Smart TV 4K LG UHD UR7800 43 polegadas 2023"]');
  }

  getComprar(): Locator {
    return this.page.locator('div[class="c-tabs__extra"]');
  }

  getCep(): Locator {
    return this.page.locator('input[id="product-pincode-01"]');
  }

  getVerify(): Locator {
    return this.page.locator('div[class="button c-cta"]').nth(1);
  }
  
  getComprarFinal(): Locator {
    return this.page.locator('button[data-pim-model-name="Smart TV 4K LG UHD UR7800 43 polegadas 2023"]').first();
  }
  
}
