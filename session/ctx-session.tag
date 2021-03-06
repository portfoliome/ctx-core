<ctx-session>
  <a
    class="login-link {
      present:
        ctx.onclick__login
        && !ctx[$ctx('authentication__agent.scope', 0)]
    }"
    onclick="{ctx.onclick__login}">login</a>
  <a
    class="signup-link {
      present:
        ctx.onclick__signup
        && !ctx[$ctx('authentication__agent.scope', 0)]
    }"
    onclick="{ctx.onclick__signup}">signup</a>
  <a
    class="logout-link {
      present:
        ctx.onclick__logout
        && !ctx[$ctx('authentication__agent.scope', 0)]
    }"
    onclick="{ctx.onclick__logout}">logout</a>
  <style type="text/css">
    ctx-session > * {
      display: none;
      cursor: pointer;
    }
    ctx-session > .present {
      display: block;
    }
  </style>
  <script type="buble">
    import {init} from 'ctx-core/session/ctx-session'
    init(this)
  </script>
</ctx-session>