import {assign,clone} from "ctx-core/object/lib";
import env from "ctx-core/env";
import {error$throw} from "ctx-core/error/lib";
import {
  XhrFn,
  assign__http$headers__contentType$json} from "ctx-core/xhr/lib";
import {array$splice$$selector$$} from "ctx-core/array/lib";
import {yyyymmddhhmmss} from "ctx-core/date/lib"
import btoa from "btoa-lite";
import {log,debug} from "ctx-core/logger/lib";
const quovo$xhr = XhrFn()
    , xhr$lib__xhr$ctx = quovo$xhr.xhr$ctx
    , xhr$lib__ctx$request$setRequestHeader = quovo$xhr.ctx$request$setRequestHeader
    , url$base = "https://api.quovo.com/v2"
    , logPrefix = "ctx-core/quovo/xhr";
assign(quovo$xhr, {
  xhr$ctx: xhr$ctx,
  ctx$request$setRequestHeader: ctx$request$setRequestHeader
});
export function *http$get$account$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$account$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$account$$) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {
          path: "/accounts"});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account$$: JSON.parse(response$ctx.request.responseText).accounts
  });
}
export function *http$get$user$account$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$user$account$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$user$account$$) return ctx;
  yield fn$quovo$access$token(ctx);
  let quovo$user$id = ctx.quovo$user$id;
  if (!quovo$user$id) error$throw__ctx$keys$missing(ctx, {ctx$keys$missing: ["quovo$user$id"] });
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {
          path: `/users/${quovo$user$id}/accounts`});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$user$account$$: JSON.parse(response$ctx.request.responseText).accounts
  });
}
export function *http$post$user$account$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$post$user$account$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$account || ctx.quovo$account$id) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$post(request$ctx, {
          path: `/users/${ctx.quovo$user$id}/accounts`})
      , quovo$account = JSON.parse(response$ctx.request.responseText).account;
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account: quovo$account,
    quovo$account$id: quovo$account.id
  });
}
export function *http$delete$account(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$delete$account`);
  const ctx$rest = clone(...ctx$rest$$)
      , quovo$account$id = ctx.quovo$account$id;
  if (!quovo$account$id) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest);
  yield quovo$xhr.http$delete(request$ctx, {path: `/accounts/${request$ctx.quovo$account$id}`});
  delete ctx.quovo$account;
  delete ctx.quovo$account$id;
  if (ctx.quovo$account$$) {
    array$splice$$selector$$(ctx.quovo$account$$, quovo$account => quovo$account.id == quovo$account$id);
  }
  return ctx;
}
export function *http$post$account$sync(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$post$account$sync`);
  const ctx$rest = clone(...ctx$rest$$);
  if (!ctx.quovo$account$id) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$post(request$ctx, {
          path: `/accounts/${request$ctx.quovo$account$id}/sync`});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account$sync: JSON.parse(response$ctx.request.responseText).sync
  });
}
export function *http$get$account$sync(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$account$sync`);
  const ctx$rest = clone(...ctx$rest$$);
  if (!ctx.quovo$account$id) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {
          path: `/accounts/${request$ctx.quovo$account$id}/sync`});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account$sync: JSON.parse(response$ctx.request.responseText).sync
  });
}
export function *http$get$account$$challenge$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$account$$challenge$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (!ctx.quovo$account$id) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {
          path: `/accounts/${request$ctx.quovo$account$id}/challenges`});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account$challenge$$: JSON.parse(response$ctx.request.responseText).challenges
  });
}
export function *http$put$account$$challenge$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$put$account$$challenge$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (!ctx.quovo$account$id) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$put(request$ctx, {
          path: `/accounts/${request$ctx.quovo$account$id}/challenges`});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account$challenge$$: JSON.parse(response$ctx.request.responseText).challenges
  });
}
export function *http$get$brokerage$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$brokerage$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$brokerage$$) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {
          path: "/brokerages"});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$brokerage$$: JSON.parse(response$ctx.request.responseText).brokerages
  });
}
export function *http$post$user$iframe_token(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$post$user$iframe_token`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$iframe$token && ctx.quovo$iframe$url) return ctx;
  const quovo$user$id = ctx.quovo$user$id;
  if (!quovo$user$id) error$throw__ctx$keys$missing(ctx, {
    ctx$keys$missing: ["quovo$user$id"] });
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$post(request$ctx, {
          path: `/users/${quovo$user$id}/iframe_token`,
          body: "{}"})
      , quovo$iframe$token = JSON.parse(response$ctx.request.responseText).iframe_token.token;
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$iframe$token: quovo$iframe$token,
    quovo$iframe$url: `https://www.quovo.com/index.php?action=remoteauth&u=${quovo$user$id}&k=${quovo$iframe$token}`
  });
}
export function *http$get$portfolio$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$portfolio$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$portfolio$$) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$get(
            request$ctx,
            {
              path: "/portfolios"});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$portfolio$$: JSON.parse(response$ctx.request.responseText).portfolios
  });
}
export function *http$get$account$portfolio$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$account$portfolio$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$account$portfolio$$) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , quovo$account$id = ctx.quovo$account$id;
  if (!quovo$account$id) error$throw__ctx$keys$missing(ctx, {ctx$keys$missing: ["quovo$account$id"] });
  const response$ctx = yield quovo$xhr.http$get(
            request$ctx,
            {
              path: `/accounts/${quovo$account$id}/portfolios`});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account$portfolio$$: JSON.parse(response$ctx.request.responseText).portfolios
  });
}
export function *http$get$account$portfolio$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$account$portfolio$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$account$portfolio$$) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , quovo$account$id = ctx.quovo$account$id
      , response$ctx = yield quovo$xhr.http$get(
            request$ctx,
            {
              path: quovo$account$id ?
                `/accounts/${quovo$account$id}/portfolios` :
                "/portfolios"});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$account$portfolio$$: JSON.parse(response$ctx.request.responseText).portfolios
  });
}
export function *http$get$portfolio$history(ctx, ...ctx$rest$$) {
  const ctx$rest = clone(...ctx$rest$$);
  log(`${logPrefix}|http$get$portfolio$history`);
  if (ctx.quovo$portfolio$history) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , quovo$portfolio$id = ctx.quovo$portfolio$id
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {
          path: `/portfolios/${quovo$portfolio$id}/history`});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$portfolio$history: JSON.parse(response$ctx.request.responseText).history
  });
}
export function *http$get$position$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$position$$`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$position$$) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , quovo$account$id = ctx.quovo$account$id
      , response$ctx = yield quovo$xhr.http$get(
            request$ctx,
            {
              path: quovo$account$id ?
                `/accounts/${quovo$account$id}/positions` :
                "/positions"});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$position$$: JSON.parse(response$ctx.request.responseText).positions
  });
}
export function *fn$quovo$access$token(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|fn$quovo$access$token`);
  if (ctx.quovo$access$token && ctx.quovo$access$token$agent$expires > new Date()) return ctx;
  let request$ctx = clone(ctx, ...ctx$rest$$);
  assign__http$headers__contentType$json(request$ctx, {
    "Authorization": `Basic ${quovo$access$credentials(ctx)}`});
  const response$ctx = yield quovo$xhr.http$post(request$ctx, {
          path: "/tokens",
          body: JSON.stringify(fn$quovo$access$token$body(request$ctx))})
      , response$body = JSON.parse(response$ctx.request.responseText)
      , access_token = response$body.access_token;
  return assign(ctx, {
    quovo$access$token: access_token.token,
    quovo$access$token$agent$expires: new Date(access_token.expires)
  });
}
function fn$quovo$access$token$body() {
  return {
    name: `${env.quovo$access$token$key$prefix}-${yyyymmddhhmmss()}-${Math.random()}`
  };
}
function quovo$access$credentials(ctx) {
  const quovo$login = env.quovo$login || (env && env.quovo$login) || error$throw(ctx, {error$message: "env.quovo$login missing"})
      , quovo$password = env.quovo$password || (env && env.quovo$password) || error$throw(ctx, {error$message: "env.quovo$password missing"});
  return btoa(`${quovo$login}:${quovo$password}`);
}
export function *http$get$user$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$users`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$user$$) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {path: "/users"});
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$user$$: JSON.parse(response$ctx.request.responseText).users
  });
}
export function *http$get$user(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$get$user`);
  const ctx$rest = clone(...ctx$rest$$);
  if (ctx.quovo$user) return ctx;
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , quovo$user$id = ctx.quovo$user$id
      , response$ctx = yield quovo$xhr.http$get(request$ctx, {path: `/users/${quovo$user$id}`})
      , quovo$user = JSON.parse(response$ctx.request.responseText).user
      ;
  return assign(ctx, {
    quovo$access$token: ctx.quovo$access$token,
    quovo$user: quovo$user
  });
}
export function *http$delete$user(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$delete$user`);
  const ctx$rest = clone(...ctx$rest$$);
  if (!ctx.quovo$user$id) error$throw(ctx, {error$message: "ctx.quovo$user$id not defined"});
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest);
  yield quovo$xhr.http$delete(request$ctx, {path: `/users/${request$ctx.quovo$user$id}`});
  delete ctx.quovo$user$id;
  return ctx;
}
export function *http$post$user$$(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|http$post$user$$`);
  const ctx$rest = clone(...ctx$rest$$);
  yield fn$quovo$access$token(ctx);
  const request$ctx = clone(ctx, ctx$rest)
      , response$ctx = yield quovo$xhr.http$post(
          assign__http$headers__contentType$json(request$ctx),
          {path: "/users", body: ctx.body})
      , quovo$user = JSON.parse(response$ctx.request.responseText).user
      , quovo$user$id = quovo$user.id;
  return assign(ctx, {
    quovo$access$token: response$ctx.quovo$access$token,
    quovo$user: quovo$user,
    quovo$user$id: quovo$user$id
  });
}
function error$throw__ctx$keys$missing(ctx, error$, ...error$rest$$) {
  log(`${logPrefix}|error$throw__ctx$keys$missing`);
  let error$ctx = (ctx && ctx.error$ctx) || {};
  assign(error$ctx, error$, ...error$rest$$);
  let error$message =
    ctx.error$message ||
    (error$ctx && error$ctx.error$message) ||
    `Missing keys: ${JSON.stringify(ctx.ctx$keys$missing)}`;
  assign(error$ctx, {
    error$message: error$message,
    http$status: 400
  });
  assign(ctx, {error$ctx: error$ctx});
  error$throw(ctx);
}
function xhr$ctx(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|xhr$ctx`);
  let ctx$clone = xhr$lib__xhr$ctx(ctx, {url$base: url$base}, ...ctx$rest$$);
  if (["POST", "PUT"].indexOf(ctx$clone.method) > -1) {
    assign__http$headers__contentType$json(ctx$clone);
  }
  return ctx$clone;
}
function ctx$request$setRequestHeader(ctx) {
  log(`${logPrefix}|ctx$request$setRequestHeader`);
  if (!ctx.headers) ctx.headers = {};
  let headers = ctx.headers;
  const quovo$access$token = ctx.quovo$access$token;
  if (quovo$access$token) {
    headers["Authorization"] = `Bearer ${quovo$access$token}`;
  }
  return xhr$lib__ctx$request$setRequestHeader(ctx);
}