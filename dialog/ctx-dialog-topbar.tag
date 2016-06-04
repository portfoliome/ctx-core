<ctx-dialog-topbar class="topbar">
  <title show="{ctx.dialog.title}">&nbsp;{ctx.dialog.title}&nbsp;</title>
  <back-button onclick="{back_button$onclick}"></back-button>
  <style>
    ctx-dialog-topbar {
      -webkit-flex-grow: 0;
      flex-grow: 0;
      display: -webkit-box;
      display: flex;
      width: 100%;
      -webkit-align-items: flex-end;
      align-items: flex-end;
      -webkit-justify-content: flex-end;
      justify-content: flex-end;
      overflow: hidden;
      min-height: 1.25em;
      line-height: 1.25em;
      background: #efefef;
      border-bottom: 1px dotted #111111;
      padding: 10px 0;
    }
    ctx-dialog-topbar > title {
      -webkit-flex: auto;
      flex: auto;
      display: block;
      padding: 8px 0;
      font-size: 18px;
      font-weight: bold;
    }
    ctx-dialog-topbar > back-button {
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-grow: 0;
      flex-grow: 0;
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      padding: 8px 0;
      font-size: 20px;
      cursor: pointer;
    }
    ctx-dialog-topbar > back-button:before {
      display: block;
      width: 2em;
      text-align: center;
    }
  </style>
  <script type="text/babel">
    import {assign} from "ctx-core/object/lib";
    import {fn$tag} from "ctx-core/tag/lib";
    import {assign__dialog_agent} from "ctx-core/dialog/agent";
    import {log,debug} from "ctx-core/logger/lib";
    const tag = fn$tag(this, {
            back_button$onclick: back_button$onclick
          })
        , logPrefix = "dialog/ctx-dialog-topbar.tag";
    tag.on("mount", on$mount);
    tag.on("unmount", on$unmount);
    log(logPrefix);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      let ctx = tag.ctx;
      assign__dialog_agent(ctx);
    }
    function on$unmount() {
      log(`${logPrefix}|on$unmount`);
    }
    function back_button$onclick() {
      log(`${logPrefix}|back_button$onclick`);
      clear();
    }
    function clear() {
      log(`${logPrefix}|clear`);
      const dialog_agent = tag.ctx.dialog_agent;
      if (dialog_agent) dialog_agent.remove();
    }
  </script>
</ctx-dialog-topbar>