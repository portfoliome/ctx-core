import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/localStorage/agent'
export function init__localStorage__agent(agent) {
  log(`${logPrefix}|init__localStorage__agent`, agent.key)
  const {scope} = agent
      , scope$0 = scope[0]
      , json = localStorage.getItem(scope$0)
  if (json) {
    let $ = {}
    $[scope$0] = JSON.parse(json)
    agent.set($)
  }
  return agent
}
export function store__localStorage__agent(agent) {
  log(`${logPrefix}|store__localStorage__agent`, agent.key)
  const {ctx,scope} = agent
      , key = scope[0]
      , value = ctx[key]
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.removeItem(key)
  }
  return agent
}