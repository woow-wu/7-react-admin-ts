### (1) commitlint
- [官网教程](https://github.com/conventional-changelog/commitlint)
- 安装
  - npm install --save-dev @commitlint/config-conventional @commitlint/cli
  - npm install --save-dev husky
- 新建
  - 新建.huskyrc文件或者在package.json中配置husky选项
  - 新建 `commitlint.config.js` 注意是js文件，不能是ts，或者`.commitlintrc.json`等
  - `commitlint.config.js`中添加扩展`@commitlint/config-conventional`
- 单词
  - conventional：常规的
  - chore：日常事务，乏味无聊的工作

### (2) husky
- [官网教程](https://typicode.github.io/husky/#/)
- 安装
  - yarn add husky --save-dev
- 配置
  - 在 `package.json` 中配置 `husky` 字段

### (3) lint-staged 
- [官网教程](https://github.com/okonet/lint-staged)
- 安装
  - yarn add lint-staged -save-dev
- 相关案例
  - [tianbo-h5](https://github.com/woow-wu/tianbo-h5)
- 配置
  - lint-stage
  - .eslintrc.js
  - .eslintignore
    - 在 `package.json` 中配置  `"lint-staged"` 字段
    - 如果使用 `pre-commit`中用到 `eslint` 就需要配置 `.eslintrc.js` 和 `.eslintignore` 不然会报错
    - 在 `.eslintrc.js` 中，通过 `/* eslint-disable */` 

### (4) eslint
- [官网教程](https://cn.eslint.org/docs/user-guide/command-line-interface)
- [配置实例详细教程](https://juejin.im/post/6844904056591220750#heading-4)

### (6) stylelint
- [官网教程](https://stylelint.io/)
- npm install --save-dev stylelint stylelint-config-standard
- .stylelintrc.js
- stylelint 
- stylelint-config-standard
- stylelint-scss
- stylelint-webpack-plugin
- 然后添加到 `husky` 的 `hooks` 中


### (7) react-router-dom
- npm install react-router-dom
- npm install @types/react-router-dom
- **集中式路由插件** ( `react-router-config` )
  - npm install --save react-router-config
  - [官网](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)
  - [使用教程](https://www.cnblogs.com/yetiezhu/p/12966026.html)




# create-react-app

### 别名

### require.context => ts报错不存在属性
- npm install @tyeps/webpack-env -D