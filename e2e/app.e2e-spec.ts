import { StickerBossPage } from './app.po';

describe('sticker-boss App', () => {
  let page: StickerBossPage;

  beforeEach(() => {
    page = new StickerBossPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
