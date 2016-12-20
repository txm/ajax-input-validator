'use strict';

export default class AjaxInputValidator {

  constructor(args) {
    this.timeoutHandle;
    Object.assign(this, args);
    this.setTimer();
  }

  setTimer() {
    let timeoutHandle = setTimeout(function(){
      console.log('awake!');
      this.validate();
    }.bind(this), this.time);

    this.timeoutHandle = timeoutHandle;
  }

  keyDown() {
    this.clearTimeout();
  }

  keyUp() {
    this.clearTimeout();
    this.setTimer();
  }

  paste() {
    this.validate();
  }

  blur() {
    this.validate();
  }

  validate() {
    this.clearTimeout();
    this.validate_func();
  }

  clearTimeout() {
    let timeoutHandle = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle);
  }

}
