//import React from 'react';
import { expect } from 'chai';
//import { mount, shallow } from 'enzyme';

//const AjaxInputValidator = require('../source/index.js').default;
import AjaxInputValidator from '../source/index.js';


function validate_func(){
  return 'OK';
}

console.log('ok');
const aiv = new AjaxInputValidator({time:5000, validate_func:validate_func});


function keyPress() {
  aiv.keyDown();
  aiv.keyUp();
}

function pressKey() {
  setTimeout(function(){
    keyPress();
  }, 2000);
}

function blur() {
  aiv.blur();
}

//pressKey();
blur();
