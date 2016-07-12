<ctx-rows>
  <ctx-rows-present show="{ctx && ctx.ctx_row$$filter$$.length}">
    <ctx-row
      each="{ctx_row in ctx.ctx_row$$filter$$}"
      class="{select: ctx_row.ctx_row_id === ctx.ctx_row_id}"
      onclick="{tag$row__onclick}"
      data-ctx-row-id="{ctx_row.ctx_row_id}"
    >{ctx_row.name}</ctx-row>
  </ctx-rows-present>
  <ctx-rows-blank show="{!(ctx && ctx.ctx_row$$filter$$.length)}">
    Loading&hellip;
  </ctx-rows-blank>
  <style>
    ctx-rows ctx-rows-present ctx-row {
      display: block;
      padding: 2px;
      list-style-type: none;
      cursor: pointer;
    }
    ctx-rows ctx-rows-present ctx-row.select {
      background: #cccccc;
      font-weight: bold;
    }
    ctx-rows ctx-rows-blank {
      display: block;
    }
  </style>
  <script type="text/babel">
    import {tag__assign,new__ctx$update} from "ctx-core/tag/lib";
    import {route} from "ctx-core/route/lib";
    import {array$from} from "ctx-core/array/lib";
    import {tag$mount__table} from "ctx-core/table/tag";
    import {dom$$} from "ctx-core/dom/lib";
    import dom$classes from "ctx-core/dom-classes/lib";
    import {log,debug} from "ctx-core/logger/lib";
    const ctx$update = new__ctx$update({after: assign__ctx$update$after})
        , tag = tag__assign(this, {
            ctx$update: ctx$update,
            tag$row__onclick: tag$row__onclick,
            registerElement: ["ctx-rows-present", "ctx-row", "ctx-rows-blank"]
          })
        , logPrefix = "ctx-core/d3/ctx-rows.tag";
    let ctx = tag.ctx;
    log(logPrefix);
    tag$mount__table(tag, {
      ctx_row_id__on$change: ctx_row_id__on$change,
      ctx_row$$filter$$__on$change: ctx_row$$filter$$__on$change
    });
    tag.on("mount", on$mount);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      tag.ctx$update(ctx);
    }
    function ctx_row$$filter$$__on$change(ctx) {
      log(`${logPrefix}|ctx_row$$filter$$__on$change`);
      tag.ctx$update(ctx);
    }
    function ctx_row_id__on$change(ctx) {
      log(`${logPrefix}|ctx_row_id__on$change`);
      tag.ctx$update(ctx);
    }
    function assign__ctx$update$after() {
      log(`${logPrefix}|assign__ctx$update$after`);
      let ctx_row_id = tag.ctx.ctx_row_id;
      dom$row_data_ctx_row_id$$(ctx_row_id).forEach(
        dom$row_data_ctx_row_id =>
          dom$classes.add(dom$row_data_ctx_row_id, "highlight"));
    }
    function tag$row__onclick(e) {
      log(`${logPrefix}|tag$row__onclick`);
      const tag$row_list$target = e.target
          , ctx_row_id = parseInt(tag$row_list$target.getAttribute("data-ctx-row-id"));
      route(ctx, `${ctx.route$path}?ctx_row_id=${encodeURIComponent(ctx_row_id)}`);
    }
    function dom$row_data_ctx_row_id$$(ctx_row_id) {
      return array$from(dom$$(`ctx-row[data-ctx-row-id="${ctx_row_id}"]`));
    }
  </script>
</ctx-rows>