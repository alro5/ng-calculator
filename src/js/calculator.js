angular
  .module('app', [])
  .component('calculator', {
    controller: calculatorCtrl,
    templateUrl: '/js/calculator.html'
  });

function calculatorCtrl() {
  var ctrl = this;

  ctrl.operators = [' / ', ' * ', ' - ', ' + '];
  ctrl.input = [];
  ctrl.keys = [
    { 'value': '(', 'color': 'grey' },
    { 'value': ')', 'color': 'grey' },
    { 'value': ' % ', 'color': 'grey' },
    { 'value': '7', 'color': 'white' },
    { 'value': '8', 'color': 'white' },
    { 'value': '9', 'color': 'white' },
    { 'value': '4', 'color': 'white' },
    { 'value': '5', 'color': 'white' },
    { 'value': '6', 'color': 'white' },
    { 'value': '1', 'color': 'white' },
    { 'value': '2', 'color': 'white' },
    { 'value': '3', 'color': 'white' },
    { 'value': '0', 'color': 'white' },
    { 'value': '.', 'color': 'white' }
  ];

  ctrl.clearOne = function() {
    ctrl.input.splice(-1, 1);
    ctrl.result = ctrl.input.join('');
  }
  
  ctrl.pressNumber = function(key) {
    ctrl.input.push(key).toString();
    ctrl.result = ctrl.input.join(''); 
  }

  ctrl.pressOperator = function(operator) {
    ctrl.input.push(operator).toString();
    ctrl.result = ctrl.input.join('');
  }

  ctrl.inputType = function() {
    // 
  }

  ctrl.equals = function() {
    var evalString = ctrl.input.join('');
    ctrl.result = eval(evalString);
    ctrl.input = [ctrl.result];
  }

  ctrl.clear = function() {
    ctrl.result = [];
    ctrl.input = [];
  }
  
}