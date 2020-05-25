import Magician from '../Magician';

test('возвращает атаку без оглушения', () => {
  const magician = new Magician(100);
  magician.attack = 2;

  expect(magician.attack).toBe(90);
});

test('возвращает атаку c расчетом оглушения', () => {
  const magician = new Magician(100);
  magician.stoned = true;
  magician.attack = 2;

  expect(magician.attack).toBe(85);
});

test('атака равна нулю', () => {
  const magician = new Magician(100);
  magician.attack = 12;
  magician.stoned = true;

  expect(magician.attack).toBe(0);
});

test('возвращает показатель оглушения', () => {
  const magician = new Magician(100);
  magician.stoned = true;

  expect(magician.stoned).toBe(true);
});
