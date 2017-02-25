<quovo-user-tile
  class="quovo-tile {
    present: ctx.quovo__user && ctx.route__quovo__user$tile,
    quovo-user-details: ctx.route__quovo__user,
    quovo-sync-iframe: ctx.route__quovo__user$sync,
    quovo-user-account-tile: ctx.route__quovo__account$tile
  }"
>
  <quovo-user-nav class="quovo-nav" ctx="{opts.ctx}"></quovo-user-nav>
  <div>
    <quovo-user-details ctx="{opts.ctx}"></quovo-user-details>
    <quovo-sync-iframe ctx="{opts.ctx}"></quovo-sync-iframe>
    <quovo-user-account-tile ctx="{opts.ctx}"></quovo-user-account-tile>
  </div>
  <script type="text/ecmascript-6">
    import {tag__assign} from 'ctx-core/riot/tag'
    import {mount__route} from 'ctx-core/route/tag'
    import {quovo__user__agent} from 'ctx-core/quovo/agent'
    import {log,debug} from 'ctx-core/logger/lib'
    const tag = tag__assign(this)
        , logPrefix = 'ctx-core/quovo/quovo-user-tile.tag'
    log(logPrefix)
    let {ctx} = tag
    quovo__user__agent(ctx)
    mount__route(tag, {
      on$change__route
    })
    tag.on('mount', on$mount)
    tag.on('unmount', on$unmount)
    function on$mount() {
      log(`${logPrefix}|on$mount`)
      ctx.quovo__user__agent.pick__on({on$change__quovo__user})
    }
    function on$unmount() {
      log(`${logPrefix}|on$unmount`)
      ctx.quovo__user__agent.pick__off({on$change__quovo__user})
    }
    function on$change__route() {
      log(`${logPrefix}|on$change__route`)
      tag.update__ctx()
    }
    function on$change__quovo__user() {
      log(`${logPrefix}|on$change__quovo__user`)
      tag.update__ctx()
    }
  </script>
</quovo-user-tile>