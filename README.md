# Vue 3 + Typescript + Vite h5 template

### 工具版本

node v14.15.0

npm v6.14.8

git v2.33.1

### 12/29 更新内容

1. vuex v4 ---> [pinia](https://pinia.vuejs.org/introduction.html)
2. add loading (除了 get 请求都会展示 loading)

### 更新内容

1. webpack ---> [vite](https://vitejs.cn/config/)
2. vue v2.\* ---> [vue v3.\* (setup)](https://v3.cn.vuejs.org/)
3. vue-router v3.\* ---> [vue-router v4.\* ](https://next.router.vuejs.org/)
4. vuex v3.\* ---> [vuex v4.\* ](https://next.vuex.vuejs.org/)
5. vant v2.\* ---> [vant v3.\* ](https://vant-contrib.gitee.io/vant/v3/#/zh-CN)
6. [eslint](https://eslint.bootcss.com/) 检测代码质量
7. [prettier](https://prettier.io/) 统一代码风格
8. [stylelint](http://stylelint.docschina.org/) 规范 css less
9. [commitlint](https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup) 规范 commit message

```
commitlint 规范 [type]：[message]

//   build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
//   ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
//   docs：文档更新
//   feat：新增功能
//   fix：bug 修复
//   perf：性能优化
//   refactor：重构代码(既没有新增功能，也没有修复 bug)
//   style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
//   test：新增测试用例或是更新现有测试
//   revert：回滚某个更早之前的提交
//   chore：不属于以上类型的其他类型
```
