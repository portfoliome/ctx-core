<ctx-dialog-position-center>
  <style>
    ctx-dialog-position-center {
      display: none;
    }
    ctx-dialog {
    }
    ctx-dialog > section {
      display: none;
      transition: none;
    }
    ctx-dialog.start > section {
      display: block;
    }
    ctx-dialog > section > * > .topbar > .back-button {
      float: right;
    }
    ctx-dialog > section > * > .topbar > .back-button::before {
      content: "\2715";
    }
  </style>
</ctx-dialog-position-center>