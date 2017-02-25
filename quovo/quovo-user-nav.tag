<quovo-user-nav class="quovo-nav">
  <title>User</title>
  <div class="{loading: !ctx.quovo__user}">
    <a
      href="{path__quovo__user(ctx)}"
      class="dashboard selected-maybe {selected: ctx.route__quovo__user}"
      onclick="{onclick__navigate}">
      <quovo-user>
        <quovo-user-id>{$ctx('quovo__user.id')}</quovo-user-id>
        <quovo-user-username>{$ctx('quovo__user.username')}</quovo-user-username>
        <quovo-user-email>{$ctx('quovo__user.email')}</quovo-user-email>
        <quovo-user-value>{$format__currency({amount: $ctx('quovo__user.value')})}</quovo-user-value>
      </quovo-user>
    </a>
    <a
      href="{path__quovo__user$sync(ctx)}"
      class="sync {
        selected-maybe: true,
        selected: ctx.route__quovo__user$sync}"
      onclick="{onclick__navigate}">Sync Account(s)</a>
    <quovo-user-accounts ctx="{opts.ctx}"></quovo-user-accounts>
  </div>
  <script type="text/ecmascript-6">
    import {tag__assign} from 'ctx-core/riot/tag'
    import {$format__currency} from 'ctx-core/currency/lib'
    import {mount__currency} from 'ctx-core/currency/tag'
    import {mount__route} from 'ctx-core/route/tag'
    import {quovo__user__agent} from 'ctx-core/quovo/agent'
    import {
      path__quovo__user,
      path__quovo__user$sync} from 'ctx-core/quovo/path'
    import {log,debug} from 'ctx-core/logger/lib'
    const tag = tag__assign(this, {
            $format__currency,
            path__quovo__user,
            path__quovo__user$sync,
            registerElement: [
              'quovo-user',
              'quovo-user-id',
              'quovo-user-username',
              'quovo-user-email',
              'quovo-user-value']})
        , logPrefix = 'ctx-core/quovo/quovo-user-nav.tag'
    log(logPrefix)
    let {ctx} = tag
    mount__currency(tag)
    mount__route(tag, {
      on$change__route: on$change__route
    })
    tag.on('mount', on$mount)
    tag.on('unmount', on$unmount)
    function on$mount() {
      log(`${logPrefix}|on$mount`)
      quovo__user__agent(ctx)
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
</quovo-user-nav>