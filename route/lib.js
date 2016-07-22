import {assign,clone} from "ctx-core/object/lib";
import {throw__error} from "ctx-core/error/lib";
import {change__agents} from "ctx-core/agent/lib";
import co from "co";
import {ensure__agent} from "ctx-core/agent/lib";
import {log,debug} from "ctx-core/logger/lib";
const logPrefix = "ctx-core/route/lib";
export function route(ctx, ...route$arg$$) {
  log(`${logPrefix}|route`);
  assign(ctx, {route$in_process: true});
  return riot.route(...route$arg$$);
}
export function start__routes(autoExec=true) {
  log(`${logPrefix}|start__routes`);
  riot.route.start(autoExec);
}
export function assign__route$base(ctx, route$base) {
  log(`${logPrefix}|assign__route$base`);
  riot.route.base(route$base);
  change__agents(ctx, {route$base: route$base});
}
export function assign__routes(ctx, ...routes) {
  log(`${logPrefix}|assign__routes`);
  let ctx$routes = ctx.routes || [];
  ctx$routes.push(...routes);
  assign(ctx, {routes: ctx$routes});
  ensure__agent__route$name(ctx);
  return ctx;
}
export function ensure__agent__route$name(ctx, ...agent$ctx$$) {
  log(`${logPrefix}|ensure__agent__route$name`);
  return ensure__agent(ctx, {
    key: "agent__route$name",
    scope: ["route$name"]
  }, ...agent$ctx$$);
}
export function new__routeset(ctx, ...opts$ctx$$) {
  log(`${logPrefix}|new__routeset`);
  const opts$ctx = clone(...opts$ctx$$)
      , new__route$ = opts$ctx.new__route || new__route
      , path = opts$ctx.path;
  return [
    new__route$(ctx, opts$ctx),
    new__route$(ctx, opts$ctx, {path: `${path}\\?*`})
  ];
}
export function new__route(ctx, ...opts$ctx$$) {
  log(`${logPrefix}|new__route`);
  const opts$ctx = clone(...opts$ctx$$)
      , route = riot.route.create()
      , path = opts$ctx.path
      , route$name = opts$ctx.route$name
      , new__route$ctx = opts$ctx.new__route$ctx
      , fn = opts$ctx.fn;
  route(path, co.wrap(route__fn));
  return route;
  function *route__fn() {
    log(`${logPrefix}|new__route|route__fn`, path);
    try {
      const route$fragment = window.location.hash.replace(/^#/, "")
          , route$fragment$split = route$fragment.split("?")
          , route$path = route$fragment$split[0]
          , route$query = route$fragment$split.slice(1).join("?")
          , route$query$statement$$ = route$query.replace("?", "&").split("&")
          , route$query$table = route$query$statement$$.reduce(
              (memo, query$statement) => {
                const kv = query$statement.split("=");
                memo[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
                return memo;}, {});
      let route$ctx = new__route$ctx({
        route$fragment: route$fragment,
        route$path: route$path,
        route$path$url: route$path||"/",
        route$query$table: route$query$table,
        route$name: route$name
      });
      route$ctx[`route$name__${route$name}`] = true;
      if (fn) fn(route$ctx, ...arguments);
      assign(ctx, {route$in_process: false});
      change__agents(ctx, route$ctx);
    } catch (error$ctx) {
      assign(ctx, {route$in_process: false});
      throw__error(ctx, error$ctx);
    }
  }
}