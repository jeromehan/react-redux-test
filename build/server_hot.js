var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.hot');
var proxyMiddleware = require('http-proxy-middleware')
var path =require('path')
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));
var ROOT_PATH = path.resolve(__dirname,'../');
app.use(require('webpack-hot-middleware')(compiler));
//将其他路由，全部返回index.html
app.get('*', function(req, res) {
	res.sendFile(ROOT_PATH + '/index.html')
});

app.listen(8089, function() {
	console.log('正常打开8088端口')
});
