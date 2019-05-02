const path = require('path');
const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const send = require('koa-send');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/service-worker.js', async ctx => {
    const filePath = path.join(__dirname, '/sw.js');

    await send(ctx, '/service-worker.js', {
      root: __dirname + '/.next',
      maxage: 86400,
    });
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
