import {assign,clone} from "ctx-core/object/lib";
import env from "ctx-core/quovo/env";
import {throw__missing_argument,throw__unauthorized} from "ctx-core/error/lib";
import {
  new__fetch,
  new__fetch$ctx as new__fetch$ctx__core,
  ensure__headers as ensure__headers__core} from "ctx-core/fetch/lib";
import {
  assign__http$headers,
  contentType__json,
  assign__http$headers__contentType__json} from "ctx-core/http/lib";
import {array$splice__selector} from "ctx-core/array/lib";
import {yyyymmddhhmmss} from "ctx-core/date/lib"
import btoa from "btoa-lite";
import {log,debug} from "ctx-core/logger/lib";
const quovo$fetch = new__fetch({
        new__fetch$ctx: new__fetch$ctx,
        ensure__headers: ensure__headers
      })
    , url_base = env.QUOVO_API_URL
    , logPrefix = "ctx-core/quovo/fetch";
export function *http$get__accounts(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__accounts`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__accounts) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: "/accounts"});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__accounts: (yield response$ctx.response.json()).accounts
  });
}
export function *http$get__user__accounts(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__user__accounts`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__user__accounts) return ctx;
  yield http$post__token(ctx);
  let quovo__user_id = ctx.quovo__user_id;
  if (!quovo__user_id) {
    throw__missing_argument(ctx, {key: "ctx.quovo__user_id", type: "http$get__user__accounts"}); }
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: `/users/${quovo__user_id}/accounts`});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__user__accounts: (yield response$ctx.response.json()).accounts
  });
}
export function *http$post__user__accounts(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$post__user__accounts`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__account || ctx.quovo__account_id) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$post(
          ctx,
          request$ctx,
          {path: `/users/${ctx.quovo__user_id}/accounts`})
      , quovo__account = (yield response$ctx.response.json()).account;
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__account: quovo__account,
    quovo__account_id: quovo__account.id
  });
}
export function *http$delete__account(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$delete__account`);
  const request$ctx = clone(...request$ctx$$)
      , quovo__account_id = ctx.quovo__account_id;
  if (!quovo__account_id) return ctx;
  yield http$post__token(ctx);
  yield quovo$fetch.http$delete(
    ctx,
    request$ctx,
    {path: `/accounts/${request$ctx.quovo__account_id}`});
  delete ctx.quovo__account;
  delete ctx.quovo__account_id;
  if (ctx.quovo__accounts) {
    array$splice__selector(ctx.quovo__accounts, quovo__account => quovo__account.id == quovo__account_id);
  }
  return ctx;
}
export function *http$post__account__sync(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$post__account__sync`);
  const request$ctx = clone(...request$ctx$$);
  if (!ctx.quovo__account_id) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$post(
          ctx,
          request$ctx,
          {path: `/accounts/${request$ctx.quovo__account_id}/sync`});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__account__sync: (yield response$ctx.response.json()).sync
  });
}
export function *http$get__account__sync(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__account__sync`);
  const request$ctx = clone(...request$ctx$$);
  if (!ctx.quovo__account_id) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: `/accounts/${request$ctx.quovo__account_id}/sync`});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__account__sync: (yield response$ctx.response.json()).sync
  });
}
export function *http$get__accounts__challenges(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__accounts__challenges`);
  const request$ctx = clone(...request$ctx$$);
  if (!ctx.quovo__account_id) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: `/accounts/${request$ctx.quovo__account_id}/challenges`});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__account__challenges: (yield response$ctx.response.json()).challenges
  });
}
export function *http$put__accounts__challenges(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$put__accounts__challenges`);
  const request$ctx = clone(...request$ctx$$);
  if (!ctx.quovo__account_id) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$put(
          ctx,
          request$ctx,
          {path: `/accounts/${request$ctx.quovo__account_id}/challenges`});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__account__challenges: (yield response$ctx.response.json()).challenges
  });
}
export function *http$get__brokerages(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__brokerages`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__brokerages) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: "/brokerages"});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__brokerages: (yield response$ctx.response.json()).brokerages
  });
}
export function *http$post__user__iframe_token(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$post__user__iframe_token`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__iframe$token && ctx.quovo__iframe$url) return ctx;
  const quovo__user_id = ctx.quovo__user_id;
  if (!quovo__user_id) {throw__missing_argument(ctx, {key: "ctx.quovo__user_id", type: "http$post__user__iframe_token"}); }
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$post(
          ctx,
          request$ctx,
          {
            path: `/users/${quovo__user_id}/iframe_token`,
            body: "{}"})
      , json = yield response$ctx.response.json()
      , iframe_token = json.iframe_token
      , quovo__iframe$token = iframe_token.token;
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__iframe$token: quovo__iframe$token,
    quovo__iframe$url: `https://www.quovo.com/index.php?action=remoteauth&u=${quovo__user_id}&k=${quovo__iframe$token}`
  });
}
export function *http$get__portfolios(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__portfolios`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__portfolios) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: "/portfolios"});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__portfolios: (yield response$ctx.response.json()).portfolios
  });
}
export function *http$get__accounts__portfolios(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__accounts__portfolios`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__account__portfolios) return ctx;
  yield http$post__token(ctx);
  const quovo__account_id = ctx.quovo__account_id;
  if (!quovo__account_id) {
    throw__missing_argument(ctx, {key: "quovo__account_id", type: "http$get__accounts__portfolios"}); }
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: `/accounts/${quovo__account_id}/portfolios`});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__account__portfolios: (yield response$ctx.response.json()).portfolios
  });
}
export function *http$get__accounts__portfolios(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__accounts__portfolios`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__account__portfolios) return ctx;
  yield http$post__token(ctx);
  const quovo__account_id = ctx.quovo__account_id
      , response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {
            path: quovo__account_id ?
              `/accounts/${quovo__account_id}/portfolios` :
              "/portfolios"});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__account__portfolios: (yield response$ctx.response.json()).portfolios
  });
}
export function *http$get__portfolio__history(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__portfolio__history`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__portfolio__history) return ctx;
  yield http$post__token(ctx);
  const quovo__portfolio_id = ctx.quovo__portfolio_id
      , response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: `/portfolios/${quovo__portfolio_id}/history`});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__portfolio__history: (yield response$ctx.response.json()).history
  });
}
export function *http$get__positions(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__positions`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__positions) return ctx;
  yield http$post__token(ctx);
  const quovo__account_id = ctx.quovo__account_id
      , response$ctx = yield quovo$fetch.http$get(
            ctx,
            request$ctx,
            {
              path: quovo__account_id ?
                `/accounts/${quovo__account_id}/positions` :
                "/positions"});
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__positions: (yield response$ctx.response.json()).positions
  });
}
export function *http$get__users(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__users`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__users) return ctx;
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: "/users"})
      , response$json = yield response$ctx.response.json();
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__users: response$json.users
  });
}
export function *http$get__user(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$get__user`);
  const request$ctx = clone(...request$ctx$$);
  if (ctx.quovo__user) return ctx;
  yield http$post__token(ctx);
  const quovo__user_id = ctx.quovo__user_id
      , response$ctx = yield quovo$fetch.http$get(
          ctx,
          request$ctx,
          {path: `/users/${quovo__user_id}`})
      , quovo__user = (yield response$ctx.response.json()).user
      ;
  return assign(ctx, {
    quovo__access_token: ctx.quovo__access_token,
    quovo__user: quovo__user
  });
}
export function *http$delete__user(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$delete__user`);
  const request$ctx = clone(...request$ctx$$);
  if (!ctx.quovo__user_id) {
    throw__missing_argument(ctx, {key: "ctx.quovo__user_id", type: "http$delete__user"}); }
  yield http$post__token(ctx);
  yield quovo$fetch.http$delete(
    ctx,
    request$ctx,
    {path: `/users/${request$ctx.quovo__user_id}`});
  delete ctx.quovo__user_id;
  return ctx;
}
export function *http$post__users(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$post__users`);
  const request$ctx = clone(...request$ctx$$);
  yield http$post__token(ctx);
  const response$ctx = yield quovo$fetch.http$post(
          ctx,
          assign__http$headers__contentType__json(request$ctx),
          {path: "/users", body: ctx.body})
      , quovo__user = (yield response$ctx.response.json()).user
      , quovo__user_id = quovo__user.id;
  return assign(ctx, {
    quovo__access_token: response$ctx.quovo__access_token,
    quovo__user: quovo__user,
    quovo__user_id: quovo__user_id
  });
}
export function *http$post__token(ctx, ...request$ctx$$) {
  log(`${logPrefix}|http$post__token`);
  if (ctx.quovo__access_token && ctx.quovo__access_token__expires > new Date()) return ctx;
  let request$ctx = clone(...request$ctx$$);
  assign__http$headers(
    request$ctx,
    contentType__json,
    {"Authorization": `Basic ${quovo__access__credentials(ctx)}`});
  const response$ctx = yield quovo$fetch.http$post(
          ctx,
          request$ctx,
          {
            path: "/tokens",
            body: JSON.stringify(new$body__http$post__token(request$ctx))})
      , response$json = yield response$ctx.response.json()
      , access_token = response$json.access_token;
  if (response$json.status === 401) {
    throw__unauthorized(ctx, {error_message: JSON.stringify(response$json)});
  }
  return assign(ctx, {
    quovo__access_token: access_token.token,
    quovo__access_token__expires: new Date(access_token.expires)
  });
}
function new$body__http$post__token() {
  return {
    name: `${env.QUOVO_ACCESS_TOKEN_KEY_PREFIX}-${yyyymmddhhmmss()}-${Math.random()}`
  };
}
function quovo__access__credentials(ctx) {
  const QUOVO_LOGIN = env.QUOVO_LOGIN ||
          (env && env.QUOVO_LOGIN) ||
          throw__missing_argument(ctx, {key: "env.QUOVO_LOGIN", type: "quovo__access__credentials"})
      , QUOVO_PASSWORD = env.QUOVO_PASSWORD ||
          (env && env.QUOVO_PASSWORD) ||
          throw__missing_argument(ctx, {key: "env.QUOVO_PASSWORD", type: "quovo__access__credentials"});
  return btoa(`${QUOVO_LOGIN}:${QUOVO_PASSWORD}`);
}
function new__fetch$ctx(ctx, ...fetch$ctx$$) {
  log(`${logPrefix}|new__fetch$ctx`);
  let fetch$ctx = new__fetch$ctx__core(ctx, {url_base: url_base}, ...fetch$ctx$$);
  if (["POST", "PUT"].indexOf(fetch$ctx.method) > -1) {
    assign__http$headers__contentType__json(fetch$ctx, ...ctx.headers);
  }
  return fetch$ctx;
}
function ensure__headers(fetch$ctx, ctx) {
  log(`${logPrefix}|ensure__headers`);
  ensure__headers__core(fetch$ctx, ctx);
  const quovo__access_token = ctx.quovo__access_token;
  if (quovo__access_token) {
    assign__http$headers(fetch$ctx, {"Authorization": `Bearer ${quovo__access_token}`});
  }
  return ctx;
}