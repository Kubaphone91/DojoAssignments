import { TimeZonePage } from './app.po';

describe('time-zone App', () => {
  let page: TimeZonePage;

  beforeEach(() => {
    page = new TimeZonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
