<quovo-user-accounts
  class="quovo-nav">
  <title>Accounts</title>
  <div class="{
    loading: !ctx.quovo__user__accounts,
    empty: ctx.quovo__user__accounts && !ctx.quovo__user__accounts.length}">
    <a
      each="{quovo__user__account in ctx.quovo__user__accounts}"
      href="{path__quovo__user__account(ctx, quovo__user__account)}"
      class="{
        selected-maybe: true,
        selected: quovo__user__account.id == ctx.quovo__account_id}"
      onclick="{link__onclick__in}">
      <quovo-account>
        <x-brokerage-name>{quovo__user__account.brokerage_name}</x-brokerage-name>
        <quovo-account-value>{format__currency(quovo__user__account.value)}</quovo-account-value>
      </quovo-account>
    </a>
  </div>
  <style>
    quovo-user-accounts {
      display: -webkit-box;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
    }
    quovo-user-accounts.loading:before,quovo-user-accounts.empty:before {
      padding: 10px 0;
    }
    quovo-user-accounts.empty:before {
      content: "No Accounts";
    }
    quovo-user-accounts > div {
      -webkit-flex: auto;
      flex: auto;
      display: block;
      overflow-x: hidden;
      overflow-y: auto;
    }
    quovo-user-accounts > div > a {
      display: block;
      padding: 10px;
      border: 1px dotted gray;
      color: #333333;
      text-decoration: none;
    }
    quovo-user-accounts > div > a > * {
      display: block;
    }
    quovo-user-accounts > div > a > * > * {
      display: block;
    }
  </style>
  <script type="text/babel">
    import {tag__assign} from "ctx-core/tag/lib";
    import {
      agent__quovo__user__accounts,
      agent__quovo__account_id} from "ctx-core/quovo/agent";
    import {mount__currency} from "ctx-core/currency/tag"
    import {path__quovo__user__account} from "ctx-core/quovo/path";
    import {log,debug} from "ctx-core/logger/lib";
    const tag = tag__assign(this, {
            path__quovo__user__account: path__quovo__user__account,
            registerElement: [
              "quovo-account",
              "x-brokerage-name",
              "quovo-account-value"]
          })
        , logPrefix = "ctx-core/quovo/quovo-user-accounts.tag";
    mount__currency(tag);
    let ctx = tag.ctx;
    log(logPrefix);
    agent__quovo__user__accounts(ctx);
    agent__quovo__account_id(ctx);
    tag.on("mount", on$mount);
    tag.on("unmount", on$unmount);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      ctx.agent__quovo__user__accounts.on("change", quovo__user__accounts__on$change);
    }
    function on$unmount() {
      log(`${logPrefix}|on$unmount`);
      ctx.agent__quovo__user__accounts.off("change", quovo__user__accounts__on$change);
    }
    function quovo__user__accounts__on$change() {
      log(`${logPrefix}|quovo__user__accounts__on$change`);
      tag.update__ctx(...arguments);
    }
  </script>
</quovo-user-accounts>