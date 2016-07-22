# ReactNativeDemo
使用ReactNative编写的一个原生App应用，并在CodePush上热部署。

### 安装 react native
[http://reactnative.cn/docs/0.28/getting-started.html](http://reactnative.cn/docs/0.28/getting-started.html)

### Code Push
[Code Push](https://github.com/Microsoft/react-native-code-push)
目前，热更新动态修复补丁，这个几乎是App的标配。这是一个微软团队构建的，技术能力有保证，但是服务器在国外。详细使用请看官方github

### 本地运行
默认是从code push中拉取

1.安装react native 环境
2.已经将node_modules上传至github，所以只需在当前项目目录下
```
cd ./node_modules/react-native
npm start

