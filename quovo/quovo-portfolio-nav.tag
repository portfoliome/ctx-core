<quovo-portfolio-nav class="quovo-nav">
  <title>Portfolio</title>
  <div>
    <a
      href="{path__portfolio__account__user__quovo(ctx)}"
      class="selected-maybe {
        selected: ctx.route === 'portfolio__account__user__quovo'}"
      onclick="{onclick__navigate}">Positions</a>
    <a
      href="{path__portfolio_history__account__user__quovo(ctx)}"
      class="selected-maybe {
        selected: ctx.route === 'portfolio_history__account__user__quovo'}"
      onclick="{onclick__navigate}"
    >Transaction History</a>
  </div>
  <script type="buble"></script>
</quovo-portfolio-nav>