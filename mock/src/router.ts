import * as Router from 'koa-router';
// import { words, shuffle, compact } from 'lodash';
import { empty, errors, sleep, AuthGuard, hook as hookOn } from './utils';

const router = new Router({ prefix: '/api' });
const hook = hookOn(router);

if (`******************* products ********************`) {
  const service = new Router()
    .post('/', async (ctx: any) => {
      const { something } = ctx.request.body;

      await sleep(1);

      ctx.status = 204;
    })

    .get('/', async (ctx: any) => {
      await sleep(1);

      ctx.body = {
        something: 'hello world',
      };
    });

  // hook('/products', service, { pipes: [AuthGuard] });
  hook('/products', service);
}

if (`******************** login ********************`) {
  const auth = new Router()
    .post('/login', (ctx: any) => {
      const { username = '', password = '' } = ctx.request.body;

      const invalid = username == null || password == null || username === password;

      ctx.assert(invalid === false, 401, errors('auth failure', { username }));

      ctx.session.info = { username };

      ctx.body = ctx.session.info;
    })

    .post('/logout', (ctx: any) => {
      delete ctx.session.info;
      empty(ctx);
      ctx.status = 204;
    })

    .get('/userinfo', AuthGuard, (ctx: any) => {
      ctx.body = ctx.session.info;
    });

  hook('', auth);
}

export default router;
