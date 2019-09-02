//http组件
var http = require('http')

//返回服务器实例
var server = http.createServer()

//注册request请求事件
server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    console.log('收到了客户端的请求了' + request.url)
    var url = request.url
    if (url === '/') {
        response.end('主页')
    } else if (url === '/login') {
        response.end('登录界面')
    } else if (url === '/products') {
        var products = [
            {
                name: 'apple',
                price: 8888
            },
            {
                name: 'apple',
                price: 8888
            },
            {
                name: 'apple',
                price: 8888
            }
        ]
        response.end(JSON.stringify(products))
    } else {
        response.end('404 Not Found.')
    }
})

server.listen(3000, function () {
    console.log('服务器启动成功，正在监听3000接口')
})
