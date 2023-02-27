import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';
import {mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    runningTotal.simulate('click')
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add numbers to running total', () => {
    const button1 = container.find('#number1');
    const operator_add = container.find('#operator_add');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    const operator_equals = container.find('#operator-equals');
    button1.simulate('click');
    operator_add.simulate('click');
    button4.simulate('click');
    runningTotal.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract numbers to running total', () => {
    const button7 = container.find('#number7');
    const operator_subtract = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    const operator_equals = container.find('#operator-equals');
    button7.simulate('click');
    operator_subtract.simulate('click');
    button4.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should multiply numbers to running total', () => {
    const button3 = container.find('#number3');
    const operator_multiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const runningTotal = container.find('#running-total');
    const operator_equals = container.find('#operator-equals');
    button3.simulate('click');
    operator_multiply.simulate('click');
    button5.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should divide numbers to running total', ()=> {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const operator_divide = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    const operator_equals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    operator_divide.simulate('click');
    button7.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');

  })

  it('should concatenate multiple button clicks', ()=> {
    const button2 = container.find('#number2');
    const button0 = container.find('#number0');
    const button1 = container.find('#number1');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button0.simulate('click');
    button2.simulate('click');
    button1.simulate('click');
    expect(runningTotal.text()).toEqual('2021');
  });

  it('should chain multiple operations together and return a running total', ()=> {
    const button2 = container.find('#number2');
    const button0 = container.find('#number0');
    const button1 = container.find('#number1');
    const button5 = container.find('#number5');
    const operator_subtract = container.find('#operator-subtract');
    const operator_multiply = container.find('#operator-multiply');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button0.simulate('click');
    button2.simulate('click');
    button1.simulate('click');
    operator_multiply.simulate('click');
    button5.simulate('click');
    operator_subtract.simulate('click');
    button1.simulate('click');
    button0.simulate('click');
    button0.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('10005');

  })
    

})



