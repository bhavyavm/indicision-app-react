'use strict';

console.log('App.js is running!');

var app = {
  title: 'My First Indecision App',
  subtitle: 'First reat app for testing',
  options: ['one', 'two']
};
var OnFormSubmit = function OnFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
var removeOptions = function removeOptions() {
  app.options = [];
  render();
};
var makeDecesion = function makeDecesion() {
  var random = Math.floor(Math.random() * app.options.length);
  var option = app.options[random];
  alert(option);
};

var root = document.getElementById('app');
var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h4',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options && app.options.length > 0 ? 'here are the options' : 'no options has added yet'
    ),
    React.createElement(
      'p',
      null,
      [1, 2, 3, 4, 5, 'dddd', null, true, undefined]
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: removeOptions },
      'Clear Options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeDecesion },
      'What should i do?'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (item, index) {
        return React.createElement(
          'li',
          { key: index },
          item
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: OnFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, root);
};
render();
