const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// 代理中间件
app.use('/proxy', createProxyMiddleware({
    target: 'http://example.com', // 目标地址
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // 重写路径
    },
}));

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
