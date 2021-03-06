import {assign} from 'ctx-core/object/lib'
import $ctx
      , {mount as _mount
      , assign__ctx} from 'ctx-core/dom/api'
import {log,error,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/dom/riot'
assign($ctx, {
  mount
})
export default $ctx
export function mount() {
  log(`${logPrefix}|mount`)
  const ctx__mount = _mount(...arguments)
      , {ctx, components: _components} = ctx__mount
  for (let i=0; i < _components.length; i++) {
    const _component = _components[i]
    let name__component, opts__component = {}
    if (typeof _component === 'string') {
      name__component = _component
    } else {
      name__component = _component[0] || component.name__component
      opts__component = _component[1] || component.opts__component
    }
    try {
      new components[name__component](assign({
        data: {ctx},
        target: document.body
      }, opts__component))
    } catch (e) {
      error(`${logPrefix}|mount|error`, {
        e,
        name__component,
        opts__component
      })
      throw e
    }
  }
  return ctx
}
export {assign__ctx}
export const components = {}
export function assign__components() {
  assign(components, ...arguments)
}