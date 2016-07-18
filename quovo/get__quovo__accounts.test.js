#!/usr/bin/env babel-node
import {co__promise$catch} from "ctx-core/co/lib";
import env from "ctx-core/quovo/env";
import {get__quovo__accounts} from "ctx-core/quovo/rpc";
import {assert__equal} from "ctx-core/test/asserts";
import {log,info,debug} from "ctx-core/logger/lib";
const logPrefix = "ctx-core/quovo/get__quovo__accounts.test";
let ctx = {};
co__promise$catch(ctx, function *() {
  log(`${logPrefix}|co`);
  let ctx = {};
  yield get__quovo__accounts(ctx, {
    quovo__user_id: env.QUOVO_USER_ID_DEMO
  });
  assert__equal({actual: env.QUOVO_USER_ID_DEMO > 0, expected: true, error_message$header: "env.QUOVO_USER_ID_DEMO > 0"});
  assert__equal({actual: ctx.quovo__user_id, expected: env.QUOVO_USER_ID_DEMO, error_message$header: "ctx.quovo__user_id == env.QUOVO_USER_ID_DEMO"});
  const quovo__accounts = ctx.quovo__accounts;
  assert__equal({actual: quovo__accounts.length > 0, expected: true, error_message$header: "quovo__accounts.length > 0"});
  info(JSON.stringify(quovo__accounts));
  return ctx;
});