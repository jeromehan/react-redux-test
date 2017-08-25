var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var path=require('path')
var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	progress: true,
	stats: {
		colors: true,
	},
});
var ROOT_PATH = path.resolve(__dirname,'../');
//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
	res.sendFile(ROOT_PATH + '/index.html')
});
server.listen(8088, function() {
	console.log('正常打开8088端口')
});
