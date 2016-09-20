import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import { InputWatch } from './';


function validate_func(){
  return 'OK';
}

let IW = new InputWatch({time:5000, validate_func:validate_func});


function keyPress() {
  IW.keyDown();
  IW.keyUp();
}

function pressKey() {
  setTimeout(function(){
    keyPress();
  }, 2000);
}


describe('InputWatch', () => {

  it('simulate keypress', () => {
    pressKey();
    //expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});


describe('InputWatch', () => {

  it('simulate timeout', () => {
    IW.blur();
    //expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
