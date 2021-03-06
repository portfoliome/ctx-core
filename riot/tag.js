import {clone} from 'ctx-core/object/lib'
import {registerElement} from 'ctx-core/dom/lib'
import {$$versioned} from 'ctx-core/html/lib'
import {closest} from 'ctx-core/dom/lib'
import {$chain
      , $$ctx
      , $$ctx__or__fn
      , $$ctx__or__a} from 'ctx-core/chain/lib'
import parseUri from 'parseUri'
import {navigate} from 'ctx-core/route/lib'
import {log,$console,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/riot/tag'
export function tag__assign(tag, ...tag_overrides$$) {
  log(`${logPrefix}|tag__assign`, tag)
  let {opts} = tag
    , {ctx} = opts
  const tag_overrides = clone(...tag_overrides$$)
  tag_overrides.registerElement =
    [].concat(...(tag_overrides.registerElement||[]))
  tag_overrides.registerElement.push(tag.root.tagName)
  tag.mixin(clone({
    ctx,
    $chain,
    $$ctx,
    $ctx: $$ctx(ctx),
    $ctx__or__fn: $$ctx__or__fn(ctx),
    $ctx__or__a: $$ctx__or__a(ctx),
    schedule__update: schedule__update.bind(tag),
    $versioned: $$versioned(ctx),
    onclick__navigate: $onclick__nagivate(ctx).bind(tag),
    onclick__outbound: $onclick__outbound(ctx).bind(tag)
  }, tag_overrides))
  for (let i=0; i < tag_overrides.registerElement.length; i++) {
    const element = tag_overrides.registerElement[i]
    registerElement(ctx, element)
  }
  return tag
}
export function $onclick__outbound(ctx, ...opts$$) {
  const opts = clone(...opts$$)
      , { tag$name='a'
        , href$key='href'} = opts
  return e => {
    log(`${logPrefix}|onclick__outbound`)
    e.preventDefault()
    const el = closest(tag$name, e.target, true)
    window.location.href = el[href$key]
  }
}
export function $onclick__nagivate(ctx, ...opts$$) {
  const opts = clone(...opts$$)
      , { tag$name='a'
        , href$key='href'} = opts
  return e => {
    const el = closest(tag$name, e.target, true)
    log(`${logPrefix}|onclick__navigate`)
    if (e.preventDefault) e.preventDefault()
    const link$uri = parseUri(el[href$key])
        , {path,query} = link$uri
        , query$ =
            query
            ? `?${query}`
            : ''
    navigate(ctx, `${path}${query$}`)
    return false
  }
}
export function schedule__update(timeout=0) {
  log(`${logPrefix}|schedule__update`)
  const tag = this
  setTimeout(
    $console(
      () => tag.update(),
      {info: `${logPrefix}|schedule__update|setTimeout`}),
    timeout)
}