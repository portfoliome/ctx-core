<ctx-dialog-position-center>
  <style>
    ctx-dialog-position-center {
      display: none;
    }
    ctx-dialog {
      align-items: center;
      justify-content: center;
    }
    ctx-dialog > content {
      display: none;
      transition: none;
    }
    ctx-dialog.start > content {
      display: block;
    }
    ctx-dialog > content > * > ctx-dialog-topbar > back-button {
      float: right;
    }
    ctx-dialog > content > * > ctx-dialog-topbar > back-button:before {
      content: "\2716";
    }
  </style>
</ctx-dialog-position-center>