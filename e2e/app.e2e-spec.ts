import { SocketAngularPage } from './app.po';

describe('socket-angular App', () => {
  let page: SocketAngularPage;

  beforeEach(() => {
    page = new SocketAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
