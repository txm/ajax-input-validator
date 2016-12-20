'use strict';

export default class AjaxInputValidator {

  constructor(args) {
    this.timeoutHandle;
    Object.assign(this, args);
    //this.setTimer();
  }

  setTimer() {
    let timeoutHandle = setTimeout(function(){
      console.log('awake!');
      this.validate();
    }.bind(this), this.time);

    this.timeoutHandle = timeoutHandle;
  }

  keyDown() {
    //this.clearTimeout2();
    const timeoutHandle = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle);
  }

  keyUp() {
    //this.clearTimeout2();
    const timeoutHandle = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle);
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
    const timeoutHandle = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle);
    this.validate_func();
  }

  clearTimeout2() {
    let timeoutHandle = this.timeoutHandle;
    this.timeoutHandle = undefined;
    clearTimeout(this.timeoutHandle);
    clearTimeout(timeoutHandle);
  }

}
