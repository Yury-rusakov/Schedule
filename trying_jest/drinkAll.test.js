function drinkEach(callback, flavours) {
  flavours.forEach(flavour => {
    if (flavour !== 'octopus') {
      callback(flavour);
    }
  });
}


test('drinkEach drinks each drink', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus']);
  expect(drink).toHaveBeenCalledTimes(1);
});