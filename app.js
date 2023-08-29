

const gestFormTest = (n) => {

  if (n <= -1000 || n >= 1000) {
    console.log('Введите число между - 1000 и 1000');
    return;
  }

  if (n % 3 !== 0 && n % 5 !== 0) {
    console.log(`${n} нацело не делится`);
    return;
  } 

  if (n % 3 === 0 && n % 5 === 0) {
    console.log('GestForm');
    return;
  } 

  if (n % 3 === 0) {
    console.log('Geste');
    return;
  }

  if (n % 5 === 0) {
    console.log('Forme');
    return;
  } 

  
};

gestFormTest(1002);
