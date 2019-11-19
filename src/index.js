module.exports = function({ types: babelTypes }) {
  return {
    name: "add-key-for-each-child",
    visitor: {
      Identifier(path, state) {
        if (path.node.name === 'bad') {
          path.node.name = 'good';
        }
      }
    }
  };
};