/* eslint-env node */

class TestASTTransform {
  constructor({ moduleName }) {
    console.log(moduleName);
  }

  transform(ast) {
    return ast;
  }
}

module.exports =  {
  name: 'test-ast-transform',
  plugin: TestASTTransform,
  baseDir: () => __dirname,
  parallelBabel: {
    requireFile: __filename,
  },
};
