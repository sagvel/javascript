// input: object, array
// output: undefined
export function markFavorites(tree, favorites) {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
}

// test data
const testTree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};
const testFavorites = ['id-2'];
const res = markFavorites(testTree, testFavorites);

console.log(res);
