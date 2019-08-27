import { render } from 'react-dom';

jest.mock('react-dom');

describe('render', (): void => {
  it('should render', (): void => {
    document.body.innerHTML = [
      '<div id="beforeRoot"></div>',
      '<div id="root"></div>',
      '<div id="afterRoot"></div>',
    ].join();

    require('./');

    const rootElement = document.createElement('div');
    rootElement.setAttribute('id', 'root');

    expect(render).toBeCalledWith(expect.anything(), rootElement);
    expect(render).toBeCalledTimes(1);
  });
});
