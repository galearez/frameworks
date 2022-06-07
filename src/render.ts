type ChildrenType = string | VNode;

interface VNode {
  nodeName: string;
  attributes?: any;
  children?: ChildrenType[] | null;
}

// This function creates a single HTML node
function create(nodeName: string, attributes: {}, ...args: any): VNode {
  let children = args.length
    ? ([].concat(...args) as unknown as ChildrenType[])
    : null;

  return { nodeName, attributes, children };
}

function render(vnode: string | VNode) {
  if (typeof vnode === 'string') return document.createTextNode(vnode);

  let node = document.createElement(vnode.nodeName);

  let attr = vnode.attributes || {};
  Object.keys(attr).forEach((k) => node.setAttribute(k, attr[k]));

  (vnode.children || []).forEach((c) => node.appendChild(render(c)));

  return node;
}

export { create, render };
