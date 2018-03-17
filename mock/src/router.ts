import * as Router from 'koa-router';
// import { words, shuffle, compact } from 'lodash';
import { empty, errors, sleep, AuthGuard, hook as hookOn } from './utils';

const router = new Router({ prefix: '/api' });
const hook = hookOn(router);

import { EVENTS } from './database/events';
import { USERS } from './database/users';

if (`******************* events ********************`) {
  const service = new Router()
    .post('/', async (ctx: any) => {
      const { something } = ctx.request.body;

      await sleep(1);

      ctx.status = 204;
    })

    .get('/:id', async (ctx: any) => {
      await sleep(1);
      ctx.body = EVENTS.find((x) => x.id === +ctx.params.id);
    })

    .get('/', async (ctx: any) => {
      await sleep(1);

      ctx.body = EVENTS;
    });

  // hook('/products', service, { pipes: [AuthGuard] });
  hook('/events', service);
}

if (`******************** login ********************`) {
  const auth = new Router()
    .post('/login', (ctx: any) => {
      const { username = '', password = '' } = ctx.request.body;

      const user = USERS.find((x) => x.username === username);

      const invalid =
        username === '' || password === '' || username === password || user === undefined;

      ctx.assert(invalid === false, 401, errors('auth failure', { username }));

      ctx.session.info = user;

      ctx.body = ctx.session.info;
    })

    .post('/logout', (ctx: any) => {
      delete ctx.session.info;
      empty(ctx);
      ctx.status = 204;
    })

    .put('/users/:id', async (ctx: any) => {
      const id = +ctx.params.id;

      const { firstName, lastName } = ctx.request.body;

      USERS.forEach((u) => {
        if (u.id === id) {
          u.firstName = firstName;
          u.lastName = lastName;
        }
      });

      await sleep(1);

      ctx.session.info = USERS.filter((u) => u.id === id);

      empty(ctx);
    })

    .get('/userinfo', AuthGuard, (ctx: any) => {
      ctx.body = ctx.session.info;
    });

  hook('', auth);
}

export default router;
