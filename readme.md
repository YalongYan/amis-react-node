博客地址：https://www.cnblogs.com/yalong/p/15479411.html
#### 背景：
想自己实现一套完整的搭建系统，来应对常规的看板需求， 但是精力有限，所以想采用别人开发的搭建工具，特此 基于AMIS编辑器做了个简单的管理系统，
可以生成、编辑由AMIS生成的看板，对于常规的看板完全需求可以使用该系统制作完成，解放了前端生产力。
想使用该系统还需要后端的配合，后端需要根据AMIS的数据格式要求返回数据

AMIS的示例看这个： https://baidu.gitee.io/amis/examples/index

AMIS官网： https://baidu.gitee.io/amis/zh-CN/docs/index   

项目仓库地址： https://github.com/YalongYan/amis-react-node

项目技术栈： `react hook`、 `typescript`、 `koa2`、`mysql sequelize`

---

#### 1、安装依赖
```
npm i 
```

#### 2、创建mysql数据库

mysql数据库的配置信息在 `server/conf/db.js` 里面
如下所示：
```
const { isProd } = require('../utils/env');

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: '3306',
  database: 'ugp',
};

if (isProd) {
  // 生产环境的数据库配置 这里先用本地配置代替了
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: '3306',
    database: 'ugp',
  };
}

module.exports = {
  MYSQL_CONF,
};

```
这里生产环境和本地环境都写成一样的配置了，实际线上的配置可自行修改


#### 3、通过sequelize 创建数据表
如下图所示，在`server/db`目录下执行 `node sync.js` 就可以创建数据表

![](https://img2020.cnblogs.com/blog/872412/202110/872412-20211029105350043-1699538103.png)

这里创建了`chart` 和 `user` 两个数据表
然后在`user`表里添加一条测试账号的数据，如下图所示

![](https://img2020.cnblogs.com/blog/872412/202110/872412-20211029105442062-193211385.png)


#### 4、启动项目
`npm run start` 启动前端项目
`npm run server` 启动server端项目
然后通过 `http://localhost:8000` 就可以访问项目了

#### 5、项目展示
登录页面如下：

![](https://img2020.cnblogs.com/blog/872412/202110/872412-20211029105524399-1567878919.png)

账号密码 都是 test

列表页面如下，对看板的创建、删除、编辑、发布、撤销都在这个页面

![](https://img2020.cnblogs.com/blog/872412/202110/872412-20211029105621504-1559552439.png)


编辑页面如下， 可以编辑、保存、预览

![](https://img2020.cnblogs.com/blog/872412/202110/872412-20211029105630761-605102962.png)

用测试数据生成的看板示例如下：

![](https://img2020.cnblogs.com/blog/872412/202110/872412-20211029141628909-1157214217.png)


#### 6、 script 命令介绍
- start 前端项目启动
- umiBuild 前端代码打包
- build 把前端代码打包，并把打包后的index.html 移动到 server/views目录下，作为server的静态资源的入口文件
- prod 通过pm2 启动项目，一般就是在生产环境上使用该命令，就可以node项目的守护进程 
- debDebug   node项目的热更新启动，平常开发node项目的时候用，可实现热更新
- server 正常启动node项目，这个不能热更新，如果对node端代码修改，需要重启server才能生效

#### 7、项目发布
在线上机器上执行 `npm run build` 打包前端代码
然后执行   `npm run prod`  启动pm2
该机器的ip 加上 `1751` 端口号就可以访问了

项目整体做的比较简单，可以在此基础上继续添加所需的功能，比如看板的权限控制、登录体系的完善等

#### 总结与思考：
搭建系统好多家都在做，其实搭建系统实现本身不难，难点在于需求的不确定性，这时候需要的是产品、开发、以及其他相关同学有搭建系统的意识，

搭建系统无非就是把常用的功能组件化，确实一般的需求也都是可以组件化的，当大家都有这个意识后，产品再提出需求就可以围绕搭建系统来进行，

具体操作可以是：首先看下搭建系统的组件里是否可以满足需求，如果满足需求最好，如果不能满足当前的需求，那么当前需求是否可以做成组件，积累到搭建系统中，

长此以往，搭建不仅可以推动公司需求往标准化发展，还可以积累搭建的组件，从而为开发同学减轻压力

