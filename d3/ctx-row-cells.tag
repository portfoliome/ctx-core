<ctx-row-cells class="{
  present: !!(ctx && ctx.ctx_row),
  compact: !!(ctx && ctx.tag$row_details$compact)}">
  <ctx-row-cells-present if="{ctx && ctx.ctx_row}">
    <ctx-cell-dom-column-list>
      <ctx-cell-dom-column>
        Column
      </ctx-cell-dom-column>
      <ctx-cell-dom-column>
        <span if="{ctx && ctx.tag$row_details$compact}">Rank ({ctx && ctx.ctx_row$$.length})</span>
        <span if="{ctx && !ctx.tag$row_details$compact}">Rank (out of {ctx && ctx.ctx_row$$.length})</span>
      </ctx-cell-dom-column>
      <ctx-cell-dom-column>
        <span if="{ctx && ctx.tag$row_details$compact}">Rating</span>
        <span if="{ctx && !ctx.tag$row_details$compact}">MSCI Rating</span>
      </ctx-cell-dom-column>
    </ctx-cell-dom-column-list>
    <ctx-cell
      each="{ctx_cell in ctx.ctx_row.ctx_cell$$}">
      <column>{ctx_cell.column$display}</column>
      <cell-rank>{ctx_cell.cell$rank}</cell-rank>
      <cell-value>{ctx_cell.cell$value}</cell-value>
    </ctx-cell>
  </ctx-row-cells-present>
  <ctx-row-cells-blank if="{!(ctx && ctx.ctx_row)}">
    Select a company&hellip;
  </ctx-row-cells-blank>
  <style>
    ctx-row-cells {
      border: 1px dotted #111111;
    }
    ctx-row-cells ctx-row-cells-present {
      display: table;
    }
    ctx-row-cells ctx-row-cells-present > * {
      display: table-row;
    }
    ctx-row-cells ctx-row-cells-present > * > * {
      display: table-cell;
      padding: 2px 20px;
    }
    ctx-row-cells.compact ctx-row-cells-present > * > * {
      padding: 2px 10px;
    }
    ctx-row-cells ctx-row-cells-present ctx-cell-dom-column {
      text-decoration: underline;
    }
    ctx-row-cells ctx-row-cells-blank {
      display: block;
    }
  </style>
  <script type="text/babel">
    import {tag$assign__opts} from "ctx-core/tag/lib";
    import {assign} from "ctx-core/object/lib";
    import {assign__ctx_row_agent} from "ctx-core/table/lib";
    import {log,error,debug} from "ctx-core/logger/lib";
    const self = tag$assign__opts(this, {
            assign__ctx$update: assign__ctx$update,
            self$update: self$update
          })
        , logPrefix = "ctx-core/d3/ctx-row-cells.tag";
    log(logPrefix);
    self.on("mount", on$mount);
    self.on("unmount", on$unmount);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      let ctx = self.ctx;
      assign__ctx_row_agent(ctx);
      ctx.ctx_row$agent.on("change", ctx_row$agent$on$change);
      ctx_row$agent$on$change();
    }
    function on$unmount() {
      log(`${logPrefix}|on$unmount`);
      let ctx = self.ctx;
      ctx.ctx_row$agent.off("change", ctx_row$agent$on$change);
    }
    function ctx_row$agent$on$change() {
      log(`${logPrefix}|ctx_row$agent$on$change`);
      assign__ctx$update();
    }
    function assign__ctx$update() {
      log(`${logPrefix}|assign__ctx$update`);
      let ctx = assign(self.ctx, ...arguments);
      assign(self, {ctx: ctx});
      self$update();
    }
    function self$update() {
      log(`${logPrefix}|self$update`);
      self.update();
    }
  </script>
</ctx-row-cells>