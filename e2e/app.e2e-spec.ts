import { UnicornsOfLovePage } from './app.po';

describe('unicorns-of-love App', () => {
  let page: UnicornsOfLovePage;

  beforeEach(() => {
    page = new UnicornsOfLovePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Unicorns of Love');
  });
});
