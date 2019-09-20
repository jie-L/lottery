module.exports = {
    devServer: {
        proxy: {
          '/users': {//一级路由
            target: 'http://localhost:8000/',//路由地址
            ws: true,//必须要写的
            changeOrigin: true//必须要写的
          },
          '/index': {//一级路由
            target: 'http://localhost:8000/',//路由地址
            ws: true,//必须要写的
            changeOrigin: true//必须要写的
          },
          '/filess': {//一级路由
            target: 'http://localhost:8000/',//路由地址
            ws: true,//必须要写的
            changeOrigin: true//必须要写的
          },
        }
    }
}