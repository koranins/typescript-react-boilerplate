import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target): void {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

declare var global: any; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * Create JSDOM headless browser to create more realistic testing.
 * The code in this function comes from the link below:
 * https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md#using-enzyme-with-jsdom
 */
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

/**
 * Setup Enzyme for testing React components.
 */
function setupEnzyme(): void {
  configure({ adapter: new Adapter() });
}

setupDomEnvironment();
setupEnzyme();
