'use strict';

class AjaxInputValidator {

  constructor(args) {
    this.timeoutHandle = null;
    Object.assign(this, args);
    //this.setTimer();
  }

  setTimer() {
    let timeoutHandle2 = setTimeout(function(){
      console.log('awake!');
      this.validate();
    }.bind(this), this.time);

    this.timeoutHandle = timeoutHandle2;
  }

  keyDown() {
    //this.clearTimeout2();
    const timeoutHandle2 = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle2);
  }

  keyUp() {
    //this.clearTimeout2();
    const timeoutHandle2 = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle2);
    this.setTimer();
  }

  paste() {
    this.validate();
  }

  blur() {
    this.validate();
  }

  validate() {
    //this.clearTimeout2();
    const timeoutHandle2 = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle2);
    this.validate_func();
  }

  clearTimeout2() {
    let timeoutHandle2 = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle2);
  }

}

export { AjaxInputValidator };
