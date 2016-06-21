import {clone} from "ctx-core/object/lib";
import {
  assign__ctx_row$$_agent,
  assign__ctx_row$agent,
  assign__column$$_agent,
  assign__ctx_row$$filter$$_agent,
  assign__ctx_row_index$agent,
  assign__ctx_row$$filter$$ctx_row_agent
} from "ctx-core/table/agent";
import {log,debug} from "ctx-core/logger/lib";
const logPrefix = "msci_demo/tag";
export function tag$mount__table(tag, ...mount$ctx$$) {
  log(`${logPrefix}|tag$mount__msci_demo$table`);
  let ctx = tag.ctx;
  const mount$ctx = clone(...mount$ctx$$)
      , column$$$on$change = mount$ctx.column$$$on$change
      , ctx_row$$$on$change = mount$ctx.ctx_row$$$on$change
      , ctx_row$agent$on$change = mount$ctx.ctx_row$agent$on$change
      , ctx_row$$filter$$$on$change = mount$ctx.ctx_row$$filter$$$on$change
      , ctx_row_index$agent$on$change = mount$ctx.ctx_row_index$agent$on$change
      , ctx_row$$filter$$ctx_row$on$change = mount$ctx.ctx_row$$filter$$ctx_row$on$change;
  tag.on("mount", on$mount);
  tag.on("unmount", on$unmount);
  return tag;
  function on$mount() {
    log(`${logPrefix}|on$mount`);
    assign__ctx_row_index$agent(ctx);
    assign__ctx_row$$_agent(ctx);
    assign__ctx_row$agent(ctx);
    assign__column$$_agent(ctx);
    assign__ctx_row$$filter$$_agent(ctx);
    assign__ctx_row$$filter$$ctx_row_agent(ctx);
    if (column$$$on$change) ctx.column$$_agent.on("change", column$$$on$change);
    if (ctx_row_index$agent$on$change) ctx.ctx_row_index$agent.on("change", ctx_row_index$agent$on$change);
    if (ctx_row$$$on$change) ctx.ctx_row$$_agent.on("change", ctx_row$$$on$change);
    if (ctx_row$agent$on$change) ctx.ctx_row$agent.on("change", ctx_row$agent$on$change);
    if (ctx_row$$filter$$$on$change) ctx.ctx_row$$filter$$_agent.on("change", ctx_row$$filter$$$on$change);
    if (ctx_row$$filter$$ctx_row$on$change) ctx.ctx_row$$filter$$ctx_row_agent.on("change", ctx_row$$filter$$ctx_row$on$change);
  }
  function on$unmount() {
    log(`${logPrefix}|on$unmount`);
    if (column$$$on$change) ctx.column$$_agent.off("change", column$$$on$change);
    if (ctx_row$$filter$$$on$change) ctx.ctx_row$$filter$$_agent.off("change", ctx_row$$filter$$$on$change);
    if (ctx_row$$$on$change) ctx.ctx_row$$_agent.off("change", ctx_row$$$on$change);
    if (ctx_row$agent$on$change) ctx.ctx_row$agent.off("change", ctx_row$agent$on$change);
    if (ctx_row_index$agent$on$change) ctx.ctx_row_index$agent.off("change", ctx_row_index$agent$on$change);
    if (ctx_row$$filter$$ctx_row$on$change) ctx.ctx_row$$filter$$ctx_row_agent.off("change", ctx_row$$filter$$ctx_row$on$change);
  }
}