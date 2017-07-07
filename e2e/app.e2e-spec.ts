import { EbillPage } from './app.po';

describe('ebill App', () => {
  let page: EbillPage;

  beforeEach(() => {
    page = new EbillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
