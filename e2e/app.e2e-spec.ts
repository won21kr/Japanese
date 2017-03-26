import { JapaneseAppPage } from './app.po';

describe('japanese-app App', () => {
  let page: JapaneseAppPage;

  beforeEach(() => {
    page = new JapaneseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
