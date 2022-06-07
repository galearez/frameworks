import * as Framework from './render';

let element = {
  nodeName: 'div',
  attributes: {
    id: 'foo',
  },
  children: ['Hello!'],
};

let dom = Framework.render(element);

document.body.appendChild(dom);
