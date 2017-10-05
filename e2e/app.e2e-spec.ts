import { PlaylistPage } from './app.po';

describe('playlist App', () => {
  let page: PlaylistPage;

  beforeEach(() => {
    page = new PlaylistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
