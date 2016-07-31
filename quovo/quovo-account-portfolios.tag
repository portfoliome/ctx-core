<quovo-account-portfolios class="quovo-nav">
  <title>Portfolios</title>
  <div class="{loading: !ctx.quovo__account__portfolios}">
    <a
      each="{quovo__portfolio in ctx.quovo__account__portfolios}"
      href="{path__quovo__user__account$portfolio(ctx, quovo__portfolio)}"
      class="selected-maybe {selected: quovo__portfolio.id === ctx.quovo__portfolio_id}"
      onclick="{link__onclick__in}">
      <quovo-portfolio>
        <quovo-portfolio-name title="{quovo__portfolio.portfolio_name}">{quovo__portfolio.portfolio_name}</quovo-portfolio-name>
        <quovo-portfolio-type title="{quovo__portfolio.portfolio_type}">{quovo__portfolio.portfolio_type}</quovo-portfolio-type>
        <quovo-portfolio-category title="{quovo__portfolio.portfolio_category}">{quovo__portfolio.portfolio_category}</quovo-portfolio-category>
        <quovo-portfolio-value title="{format__currency(quovo__portfolio.value)}">{format__currency(quovo__portfolio.value)}</quovo-portfolio-value>
      </quovo-portfolio>
    </a>
  </div>
  <style>
    quovo-account-portfolios {
      display: -webkit-box;
      display: flex;
    }
    quovo-account-portfolios > div > a {
      display: block;
      padding: 10px;
      overflow: hidden;
      color: #333333;
      text-decoration: none;
    }
    quovo-account-portfolios > div > a > * {
      display: block;
    }
    quovo-account-portfolios > div > a > * > * {
      display: block;
    }
  </style>
  <script type="text/babel">
    import {tag__assign} from "ctx-core/tag/lib";
    import {
      agent__quovo__account__portfolios,
      agent__quovo__portfolio_id} from "ctx-core/quovo/agent";
    import {path__quovo__user__account$portfolio} from "ctx-core/quovo/path";
    import {mount__currency} from "ctx-core/currency/tag"
    import {log,debug} from "ctx-core/logger/lib";
    const tag = tag__assign(this, {
            path__quovo__user__account$portfolio: path__quovo__user__account$portfolio,
            registerElement: [
              "quovo-portfolio",
              "quovo-portfolio-name",
              "quovo-portfolio-type",
              "quovo-portfolio-category",
              "quovo-portfolio-value"
            ]
          })
        , logPrefix = "ctx-core/quovo/quovo-account-portfolios.tag";
    log(logPrefix);
    let ctx = tag.ctx;
    mount__currency(tag);
    tag.on("mount", on$mount);
    tag.on("unmount", on$unmount);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      agent__quovo__account__portfolios(ctx);
      agent__quovo__portfolio_id(ctx);
      ctx.agent__quovo__account__portfolios.on("change", quovo__account__portfolios__on$change);
      ctx.agent__quovo__portfolio_id.on("change", quovo__portfolio__on$change);
      tag.update__ctx();
    }
    function on$unmount() {
      log(`${logPrefix}|on$unmount`);
      ctx.agent__quovo__account__portfolios.off("change", quovo__account__portfolios__on$change);
      ctx.agent__quovo__portfolio_id.off("change", quovo__portfolio__on$change);
    }
    function quovo__account__portfolios__on$change() {
      log(`${logPrefix}|quovo__account__portfolios__on$change`);
      tag.update__ctx();
    }
    function quovo__portfolio__on$change() {
      log(`${logPrefix}|quovo__portfolio__on$change`);
      tag.update__ctx();
    }
  </script>
</quovo-account-portfolios>