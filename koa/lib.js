import {assign} from 'ctx-core/object/lib'
import send__koa from 'koa-send'
import {log,info,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/koa/lib'
export function use__send(app, _opts={}) {
  log(`${logPrefix}|use__send`)
  const opts =
          assign({
            root: './public',
            index: 'index.html'
          }, _opts)
  app.use(async (ctx, next) => {
    ctx.compress = true
    try {
      await send__koa(ctx, ctx.path, opts)
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e
      }
    }
    await next()
  })
}
export function use__log__request$time(app) {
  log(`${logPrefix}|use__log__request$time`)
  app.use(async (ctx, next) => {
    const start = new Date()
    try {
      await next()
    } finally {
      const ms = new Date - start
      info(`${logPrefix}|log__request$time`, `${ms}ms`, ctx.method, ctx.url)
    }
  })
}
export function use__echo(app) {
  log(`${logPrefix}|use__echo`)
  app.use(async (ctx) => {
    if (!ctx.body) {
      const {method, url} = ctx
      info(`${logPrefix}|default|${method} ${url}`)
      ctx.body = `${method} ${url}`
    }
  })
}
export function http$cache(self, cache_control='public, max-age=3600') {
  log(`${logPrefix}|http$cache`)
  self.set('Cache-Control', cache_control)
}
export function http$cache__5min(self) {
  log(`${logPrefix}|http$cache__5min`)
  http$cache(self, 'public, max-age=300')
}
export function http$cache__1hour(self) {
  log(`${logPrefix}|http$cache__5min`)
  http$cache(self, 'public, max-age=3600')
}
export function http$cache__1day(self) {
  log(`${logPrefix}|http$cache__5min`)
  http$cache(self, 'public, max-age=86400')
}
export function set__headers(self, ...ctx$$) {
  log(`${logPrefix}|set__headers`)
  const ctx = assign(...ctx$$)
      , {headers=[]} = ctx
  for (let key in headers) {
    self.set(key, headers[key])
  }
}