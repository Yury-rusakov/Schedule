     class LaCroix {
         constructor(flavor) {
             this.flavor = flavor;
         }
     }
     
const registeredBeverages = [];

function register(beverage) {
    if (beverage instanceof LaCroix) {
        registeredBeverages.push(beverage);
        console.log(`${beverage.flavor} La Croix зарегистрирован.`);
    } else {
        console.log('Это не напиток La Croix.');
    }
}

function applyToAll(fn) {
    registeredBeverages.forEach(beverage => {
        fn(beverage); 
    });
}

test('registration applies correctly to orange La Croix', () => {
  const beverage = new LaCroix('orange');
  register(beverage);
  const f = jest.fn();
  applyToAll(f);
  expect(f).toHaveBeenCalledWith(beverage);
});
