interface VNode {
  nodeName: string;
  attributes?: {};
  children?: [string, VNode] | null;
}

// This function creates a single HTML node
function create(nodeName: string, attributes: {}, ...args: any): VNode {
  let children = args.length
    ? ([].concat(...args) as unknown as [string, VNode])
    : null;

  return { nodeName, attributes, children };
}

export { create };
