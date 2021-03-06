import {clone} from 'ctx-core/object/lib'
import {ensure__agent} from 'ctx-core/agent/lib'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/repository/agent'
/**
 *
 * @param {module:ctx-core/object/lib~ctx}
 * @param opts
 * @param opts.key - agent is stored on ctx[key]
 * @param opts.scope - agent's domain is ctx[...scope]
 * @param {function} opts.fetch - Function to fetch data from the gateway resource
 * @param {function} opts.lookup - Alternative form to opts.fetch
 * @param {function<id>} opts.fetch - lookup function to get data
 * @returns {*}
 * @see {@link https://msdn.microsoft.com/en-us/library/ff649690.aspx}
 */
export function ensure__repo__agent(ctx, ...opts$$) {
  const opts = clone(...opts$$)
      , {key, query} = opts
  if (ctx[key]) return ctx[key]
  log(`${logPrefix}|ensure__repo__agent`, key)
  let agent, scope$0
  return ensure__agent(ctx, {
    init,
    reset,
    ensure,
    ensure__ctx,
    query
  }, opts)
  function init() {
    log(`${logPrefix}|ensure__repo__agent|init`, key)
    agent = this
    scope$0 = agent.scope[0]
  }
  async function reset() {
    log(`${logPrefix}|ensure__repo__agent|reset`, key)
    const $ = {}
    $[scope$0] = {cache: {}, promises: {}}
    agent.set($)
  }
  async function ensure(id, item) {
    const {cache, promises} = ctx[scope$0]
    if (cache[id] == null) {
      if (item != null) {
        cache[id] = item
      } else if (promises[id] == null) {
        promises[id] = query(id)
      }
      cache[id] = await promises[id]
    }
    return cache[id]
  }
  async function ensure__ctx(id) {
    log(`${logPrefix}|ensure__ctx`)
    const {scope__target} = opts
        , value = await ensure(id)
        , $ = {}
    $[scope__target] = value
    return $
  }
}