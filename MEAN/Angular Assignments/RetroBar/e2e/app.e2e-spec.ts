import { RetroBarPage } from './app.po';

describe('retro-bar App', () => {
  let page: RetroBarPage;

  beforeEach(() => {
    page = new RetroBarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
