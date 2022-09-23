// https://www.omnicalculator.com/health/pack-years

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const packyearsRadio = document.getElementById('packyearsRadio');
const cigarettesperdayRadio = document.getElementById('cigarettesperdayRadio');
const yearsRadio = document.getElementById('yearsRadio');

let packyears;
let cigarettesperday = v1;
let years = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

packyearsRadio.addEventListener('click', function() {
  variable1.textContent = 'Cigarettes per day';
  variable2.textContent = 'Years';
  cigarettesperday = v1;
  years = v2;
  result.textContent = '';
});

cigarettesperdayRadio.addEventListener('click', function() {
  variable1.textContent = 'Pack years';
  variable2.textContent = 'Years';
  packyears = v1;
  years = v2;
  result.textContent = '';
});

yearsRadio.addEventListener('click', function() {
  variable1.textContent = 'Pack years';
  variable2.textContent = 'Cigarettes per day';
  packyears = v1;
  cigarettesperday = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(packyearsRadio.checked)
    result.textContent = `Pack years = ${computepackyears().toFixed(2)}`;

  else if(cigarettesperdayRadio.checked)
    result.textContent = `Cigarettes per day = ${computecigarettesperday().toFixed(2)}`;

  else if(yearsRadio.checked)
    result.textContent = `Years = ${computeyears().toFixed(2)}`;
})

// calculation

// packyears = (cigarettesperday / 20) * years

function computepackyears() {
  return (Number(cigarettesperday.value) / 20) * Number(years.value);
}

function computecigarettesperday() {
  return (Number(packyears.value) / Number(years.value)) * 20;
}

function computeyears() {
  return  Number(packyears.value) / (Number(cigarettesperday.value) / 20);
}