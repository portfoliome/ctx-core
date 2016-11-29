import {clone} from 'ctx-core/object/lib'
import {
  route$name__agent,
  route$query__agent} from 'ctx-core/route/agent'
import route__riot from 'riot-route'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/route/tag'
export function mount__route(tag, ...mount$ctx$$) {
  log(`${logPrefix}|mount__route`)
  let {ctx} = tag
  const mount$ctx = clone(...mount$ctx$$)
  route$query__agent(ctx)
  route$name__agent(ctx)
  tag.on('mount', on$mount)
  tag.on('unmount', on$unmount)
  return tag
  function on$mount() {
    log(`${logPrefix}|mount__route|on$mount`)
    ctx.route$query__agent.pick__on(mount$ctx)
    ctx.route$name__agent.pick__on(mount$ctx)
    tag.schedule__update__ctx()
  }
  function on$unmount() {
    log(`${logPrefix}|mount__route|on$unmount`)
    ctx.route$query__agent.pick__off(mount$ctx)
    ctx.route$name__agent.pick__off(mount$ctx)
  }
  function on$change__route$name() {
    log(`${logPrefix}|mount__router|on$change__route$name`)
    tag.update__ctx()
  }
}
export function mount__router(tag, ...mount$ctx$$) {
  log(`${logPrefix}|mount__router`)
  let {ctx} = tag
  const mount$ctx = clone(...mount$ctx$$)
      , {assign__routes} = mount$ctx
  mount__route(tag, ...mount$ctx$$)
  tag.on('mount', on$mount)
  tag.on('unmount', on$unmount)
  return tag
  function on$mount() {
    log(`${logPrefix}|on$mount`)
    if (assign__routes) assign__routes(ctx)
    route__riot.exec()
  }
  function on$unmount() {
    log(`${logPrefix}|mount__router|on$unmount`)
    route__riot.stop()
  }
}