const objectPath = require('object-path');
const getProjection = require('./get-projection');

module.exports = ({
  returnType,
  fieldNodes,
  schema,
  fragments,
}) => {
  let projection;
  const { projectUsing } = returnType.ofType || returnType;
  if (projectUsing) {
    const edges = objectPath.get(fieldNodes[0], 'selectionSet.selections', []).find(s => s.name.value === 'edges');
    const node = objectPath.get(edges, 'selectionSet.selections', []).find(s => s.name.value === 'node');
    if (node) {
      // Project based on the node's selectionSet
      projection = getProjection(
        schema,
        schema.getType(projectUsing),
        node.selectionSet,
        fragments,
      );
    } else {
      // Do not return any fields, since `node` was not selected.
      projection = {};
    }
  }
  return projection;
};
