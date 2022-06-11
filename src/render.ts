// This type fixed ts(2345)
type ChildrenType = string | VNode;

// This is the common structure a JSX element must follow
interface VNode {
  nodeName: string;
  attributes?: any;
  children?: ChildrenType[] | null;
}

// This function will render a JSX element and all its children
function render(vnode: string | VNode) {
  if (typeof vnode === 'string') return document.createTextNode(vnode);

  let node = document.createElement(vnode.nodeName);

  let attr = vnode.attributes || {};
  Object.keys(attr).forEach((k) => node.setAttribute(k, attr[k]));

  (vnode.children || []).forEach((c) => node.appendChild(render(c)));

  return node;
}

export { render };
