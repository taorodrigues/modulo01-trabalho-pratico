window.addEventListener('load', start);

var inputRedId = '#inputRedColor';
var inputGreenId = '#inputGreenColor';
var inputBlueId = '#inputBlueColor';

var textRedId = '#textRedColor';
var textGreenId = '#textGreenColor';
var textBlueId = '#textBlueColor';

var squareId = '#mySquare';

function start() {
  setInitialValueOnInputsAndTextAreas(inputRedId, textRedId);
  setInitialValueOnInputsAndTextAreas(inputGreenId, textGreenId);
  setInitialValueOnInputsAndTextAreas(inputBlueId, textBlueId);

  addEvents();
}

/**
 * Adiciona evento de listener para ao mudar o valor do range, alterar o texto da cor.
 */
function addEvents() {
  document
    .querySelector(inputRedId)
    .addEventListener('input', handleInputRedChange);

  document
    .querySelector(inputGreenId)
    .addEventListener('input', handleInputGreenChange);

  document
    .querySelector(inputBlueId)
    .addEventListener('input', handleInputBlueChange);
}

function handleInputRedChange(event) {
  var textArea = document.querySelector(textRedId);
  setTextAreaValue(textArea, event.target.value);
  changeSquareColor();
}

function handleInputGreenChange(event) {
  var textArea = document.querySelector(textGreenId);
  setTextAreaValue(textArea, event.target.value);
  changeSquareColor();
}

function handleInputBlueChange(event) {
  var textArea = document.querySelector(textBlueId);
  setTextAreaValue(textArea, event.target.value);
  changeSquareColor();
}

/**
 * Inicia o input com o valor minimo.
 */
function setInitialValueOnInputsAndTextAreas(inputId, textAreaId) {
  document.querySelector(inputId).value = '0';
  document.querySelector(textAreaId).value = '0';
}

/**
 * Retorna o valor do input text desejado.
 */
function getValue(inputId) {
  return document.querySelector(inputId).value;
}

/**
 * Altera o valor do input text desejado.
 */
function setTextAreaValue(object, newValue) {
  object.value = newValue;
}

function changeSquareColor() {
  var redValue = getValue(textRedId);
  var greenValue = getValue(textGreenId);
  var blueValue = getValue(textBlueId);
  document.querySelector(squareId).style.backgroundColor =
    'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
}
