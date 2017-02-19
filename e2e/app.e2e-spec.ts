import { DebugNg2Page } from './app.po';

describe('debug-ng2 App', () => {
  let page: DebugNg2Page;

  beforeEach(() => {
    page = new DebugNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
