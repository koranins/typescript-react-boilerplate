import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
// import { any } from 'prop-types';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target): void {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

declare var global: any;

function setupDomEnvironment(): void {
  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
  global.requestAnimationFrame = (callback): number => setTimeout(callback, 0);
  global.cancelAnimationFrame = (id): void => clearTimeout(id);
  copyProps(window, global);
}

setupDomEnvironment();

configure({ adapter: new Adapter() });
