// This function creates a single HTML node
function create(nodeName: string, attributes: {}, ...args: any) {
  let children = args.length
    ? ([].concat(...args) as unknown as [string])
    : null;

  return { nodeName, attributes, children };
}

export { create };
