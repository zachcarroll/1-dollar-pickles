import { PicklesPage } from './app.po';

describe('pickles App', function() {
  let page: PicklesPage;

  beforeEach(() => {
    page = new PicklesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
