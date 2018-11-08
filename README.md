# egg-react-typescript-boilerplate

基于 Egg + React + TypeScript + Webpack 同构工程骨架

## 1. 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,
- Webpack 版本: ^4.x.x
- React 版本: ^16.0.0
- TypeScript: ^3.0.0

## 2. 文档

- http://hubcarl.github.io/easywebpack/react
- https://www.yuque.com/easy-team/egg-react


## 3. 特性

- 支持 Egg Node 端代码和前端代码 TypeScript 编写和构建

- 支持 AntD 按需加载和主题配置功能

- 支持 server 和 client 端代码修改, Webpack 时时编译和热更新, `npm run dev` 一键启动应用

- 支持开发环境, 测试环境，正式环境 Webpack 编译
 

## 4. 依赖

- [easywebpack-react](https://github.com/hubcarl/easywebpack)
- [egg-view-react-ssr](https://github.com/hubcarl/egg-view-react-ssr) 
- [egg-webpack](https://github.com/hubcarl/egg-webpack) 
- [egg-webpack-react](https://github.com/hubcarl/egg-webpack-react)

## 5. 使用

#### 5.1 安装依赖

```bash
npm install
```

#### 5.2 本地启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

#### 5.3 构建文件

- TypeScript Egg 构建

```bash
npm run tsc
```

- TypeScript 前端工程构建

```bash
npm run build
```

#### 5.4 打包部署

1. 先运行 `npm run tsc` 和 `npm run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 `npm start` 启动应用


## License

[MIT](LICENSE)
