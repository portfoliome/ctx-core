import {assign} from "ctx-core/object/lib";
import {
  http$get$account$$,
  http$get$user$account$$,
  http$get$brokerage$$,
  http$post$user$account$$,
  http$delete$account,
  http$post$account$sync,
  http$get$account$sync,
  http$get$account$$challenge$$,
  http$put$account$$challenge$$,
  http$post$user$iframe_token,
  http$get$portfolio$$,
  http$get$account$portfolio$$,
  http$get$portfolio$history,
  http$get$position$$,
  http$get$user$$,
  http$post$user$$
} from "./xhr";
import {delegate$cmd$map__assign,cmd$security as cmd$lib_cmd$security} from "ctx-core/cmd/lib";
import {log,debug} from "ctx-core/logger/lib";
const logPrefix = "ctx-core/quovo/cmd";
log(logPrefix);
delegate$cmd$map__assign({
  quovo$account$$cmd: quovo$account$$cmd,
  quovo$user$account$$cmd: quovo$user$account$$cmd,
  quovo$brokerage$$post$cmd: quovo$brokerage$$post$cmd,
  quovo$user$iframe_token$post$cmd: quovo$user$iframe_token$post$cmd,
  quovo$portfolio$$cmd: quovo$portfolio$$cmd,
  quovo$account$portfolio$$cmd: quovo$account$portfolio$$cmd,
  quovo$portfolio$history$cmd: quovo$portfolio$history$cmd,
  quovo$position$$cmd: quovo$position$$cmd,
  quovo$user$$post$cmd: quovo$user$$post$cmd,
  quovo$user$$cmd: quovo$user$$cmd
});
export
function *quovo$account$$cmd() {
  log(`${logPrefix}|quovo$account$$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$$"
    ],
    security$web$request_required: [
      "quovo$user$id"
    ],
    cmd$fn: quovo$account$$cmd$fn
  });
}
function *quovo$account$$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$account$$cmd$fn`);
  if (cmd$ctx.quovo$account$$) return;
  yield http$get$account$$(cmd$ctx);
  return {quovo$account$$: cmd$ctx.quovo$account$$};
}
export
function *quovo$user$account$$cmd() {
  log(`${logPrefix}|quovo$user$account$$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$user$account$$",
      "quovo$user$id"
    ],
    security$web$request_required: [
      "quovo$user$id"
    ],
    cmd$fn: quovo$user$account$$cmd$fn
  });
}
function *quovo$user$account$$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$user$account$$cmd$fn`);
  if (cmd$ctx.quovo$user$account$$) return;
  if (cmd$ctx.quovo$user$id) {
    yield http$get$user$account$$(cmd$ctx);
  }
  return {quovo$user$account$$: cmd$ctx.quovo$user$account$$};
}
export
function *quovo$account$$post$cmd() {
  log(`${logPrefix}|quovo$account$$post$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account",
      "quovo$account$id",
      "quovo$user$id",
      "quovo$brokerage$username",
      "quovo$brokerage$password"
    ],
    cmd$fn: quovo$account$$post$cmd$fn
  });
}
function *quovo$account$$post$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$account$$post$cmd$fn`);
  if (cmd$ctx.quovo$account || cmd$ctx.quovo$account$id) return;
  const quovo$brokerage$id = cmd$ctx.quovo$brokerage$id
      , quovo$brokerage$username = cmd$ctx.quovo$brokerage$username
      , quovo$brokerage$password = cmd$ctx.quovo$brokerage$password;
  yield http$post$user$account$$(cmd$ctx, {
    body: JSON.stringify({
      brokerage: quovo$brokerage$id,
      username: quovo$brokerage$username,
      password: quovo$brokerage$password
    })
  });
  return {
    quovo$account: cmd$ctx.quovo$account,
    quovo$account$id: cmd$ctx.quovo$account$id};
}
export
function *quovo$account$delete$cmd() {
  log(`${logPrefix}|quovo$account$delete$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id"
    ],
    cmd$fn: quovo$account$delete$cmd$fn
  });
}
function *quovo$account$delete$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$account$delete$cmd$fn`, cmd$ctx.quovo$account$id);
  if (!cmd$ctx.quovo$account$id) return;
  yield http$delete$account(cmd$ctx);
  return {
    quovo$account: null,
    quovo$account$id: null
  };
}
export
function *quovo$account$sync$post$cmd() {
  log(`${logPrefix}|quovo$account$sync$post$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id",
      "body"
    ],
    cmd$fn: quovo$account$sync$post$cmd$fn
  });
}
function *quovo$account$sync$post$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$account$sync$post$cmd$fn`);
  if (!cmd$ctx.quovo$account$id) return;
  yield http$post$account$sync(cmd$ctx);
  return {
    quovo$account$sync: cmd$ctx.quovo$account$sync
  };
}
export
function *quovo$user$account$$sync$cmd() {
  log(`${logPrefix}|quovo$user$account$$sync$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id"
    ],
    cmd$fn: quovo$user$account$$sync$cmd$fn
  });
}
function *quovo$user$account$$sync$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$user$account$$sync$cmd$fn`);
  if (!cmd$ctx.quovo$account$id) return;
  yield http$post$account$sync(cmd$ctx);
  yield http$get$account$sync(cmd$ctx);
  return {
    quovo$account$sync: cmd$ctx.quovo$account$sync};
}
export
function *quovo$account$challenge$$cmd() {
  log(`${logPrefix}|quovo$account$challenge$$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id"
    ],
    cmd$fn: quovo$account$challenge$$cmd$fn
  });
}
function *quovo$account$challenge$$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$account$challenge$$cmd$fn`);
  if (!cmd$ctx.quovo$account$id) return;
  yield http$get$account$$challenge$$(cmd$ctx);
  return {
    quovo$account$challenge$$: cmd$ctx.quovo$account$challenge$$};
}
export
function *quovo$account$challenge$$put$cmd() {
  log(`${logPrefix}|quovo$account$challenge$$put$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id"
    ],
    cmd$fn: quovo$account$challenge$$put$cmd$fn
  });
}
function *quovo$account$challenge$$put$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$account$challenge$$put$cmd$fn`);
  if (!cmd$ctx.quovo$account$id) return;
  yield http$put$account$$challenge$$(cmd$ctx);
  return {
    quovo$account$challenge$$: cmd$ctx.quovo$account$challenge$$};
}
export
function *quovo$brokerage$$post$cmd() {
  log(`${logPrefix}|quovo$brokerage$$post$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [],
    cmd$fn: quovo$brokerage$$post$cmd$fn
  });
}
function *quovo$brokerage$$post$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$brokerage$$post$cmd$fn`);
  if (cmd$ctx.quovo$brokerage$$) return;
  yield http$get$brokerage$$(cmd$ctx);
  return {quovo$brokerage$$: cmd$ctx.quovo$brokerage$$};
}
export
function *quovo$user$iframe_token$post$cmd() {
  log(`${logPrefix}|quovo$user$iframe_token$post$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id",
      "quovo$user$id",
      "quovo$iframe$token",
      "quovo$iframe$url"
    ],
    cmd$fn: quovo$user$iframe_token$post$cmd$fn
  });
}
function *quovo$user$iframe_token$post$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$user$iframe_token$post$cmd$fn`);
  if (cmd$ctx.quovo$iframe$token && cmd$ctx.quovo$iframe$url) return;
  yield http$post$user$iframe_token(cmd$ctx);
  return {
    quovo$iframe$token: cmd$ctx.quovo$iframe$token,
    quovo$iframe$url: cmd$ctx.quovo$iframe$url
  };
}
export
function *quovo$portfolio$history$cmd() {
  log(`${logPrefix}|quovo$portfolio$history$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$portfolio$id"
    ],
    cmd$fn: quovo$portfolio$history$cmd$fn
  });
}
function *quovo$portfolio$history$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$portfolio$history$cmd$fn`);
  if (cmd$ctx.quovo$portfolio$history) return;
  yield http$get$portfolio$history(cmd$ctx);
  return {quovo$portfolio$history: cmd$ctx.quovo$portfolio$history};
}
export
function *quovo$portfolio$$cmd() {
  log(`${logPrefix}|quovo$portfolio$$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id",
      "quovo$portfolio$$"
    ],
    cmd$fn: quovo$portfolio$$cmd$fn
  });
}
function *quovo$portfolio$$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$portfolio$$cmd$fn`);
  if (cmd$ctx.quovo$portfolio$$) return;
  yield http$get$portfolio$$(cmd$ctx);
  return {quovo$portfolio$$: cmd$ctx.quovo$portfolio$$};
}
export
function *quovo$account$portfolio$$cmd() {
  log(`${logPrefix}|quovo$account$portfolio$$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id",
      "quovo$account$portfolio$$"
    ],
    cmd$fn: quovo$account$portfolio$$cmd$fn
  });
}
function *quovo$account$portfolio$$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$account$portfolio$$cmd$fn`);
  if (cmd$ctx.quovo$account$portfolio$$) return;
  yield http$get$account$portfolio$$(cmd$ctx);
  return {quovo$account$portfolio$$: cmd$ctx.quovo$account$portfolio$$};
}
export
function *quovo$position$$cmd() {
  log(`${logPrefix}|quovo$position$$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "quovo$account$id",
      "quovo$portfolio$id",
      "quovo$position$$"
    ],
    cmd$fn: quovo$position$$cmd$fn
  });
}
function *quovo$position$$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$position$$cmd$fn`);
  if (cmd$ctx.quovo$position$$) return;
  yield http$get$position$$(cmd$ctx);
  return {quovo$position$$: cmd$ctx.quovo$position$$};
}
export
function *quovo$user$$cmd() {
  log(`${logPrefix}|quovo$user$$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [],
    cmd$fn: quovo$user$$cmd$fn
  });
}
function *quovo$user$$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$user$$cmd$fn`);
  if (cmd$ctx.quovo$user$$) return;
  yield http$get$user$$(cmd$ctx);
  return {quovo$user$$: cmd$ctx.quovo$user$$};
}
export
function *quovo$user$$post$cmd() {
  log(`${logPrefix}|quovo$user$$post$cmd`);
  return yield cmd$security(assign(...arguments), {
    ctx$key$whitelist: [
      "body"
    ],
    cmd$fn: quovo$user$$post$cmd$fn
  });
}
function *quovo$user$$post$cmd$fn(cmd$ctx) {
  log(`${logPrefix}|quovo$user$$post$cmd$fn`);
  yield http$post$user$$(cmd$ctx);
  return {
    quovo$user: cmd$ctx.quovo$user,
    quovo$user$id: cmd$ctx.quovo$user$id
  };
}
export function cmd$security(ctx, ...security$ctx$$) {
  log(`${logPrefix}|cmd$security`);
  return cmd$lib_cmd$security(
    ctx,
    ...security$ctx$$);
}