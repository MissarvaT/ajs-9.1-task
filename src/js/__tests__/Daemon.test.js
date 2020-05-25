import Daemon from '../Daemon';

test('возвращает атаку без оглушения', () => {
  const daemon = new Daemon(100);
  daemon.attack = 2;

  expect(daemon.attack).toBe(90);
});

test('возвращает атаку c расчетом оглушения', () => {
  const daemon = new Daemon(100);
  daemon.stoned = true;
  daemon.attack = 2;

  expect(daemon.attack).toBe(85);
});

test('атака равна нулю', () => {
  const daemon = new Daemon(100);
  daemon.attack = 12;
  daemon.stoned = true;

  expect(daemon.attack).toBe(0);
});

test('возвращает показатель оглушения', () => {
  const daemon = new Daemon(100);
  daemon.stoned = true;

  expect(daemon.stoned).toBe(true);
});
