import Validation from '../src/validationType';

test('Проверка наличия недопустимых символов', () => {
  const value = new Validation('g^^^1s');
  const result = () => value.validateUsername();
  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('Проверка на недопустимый первый символ', () => {
  const value = new Validation('_Alex');
  const result = () => value.validateUsername();
  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9), начинаться имя и заканчиваться может только на буквы');
});

test('Проверка подряд 3-4 цифры', () => {
  const value = new Validation('Al2222lex');
  const result = () => value.validateUsername();
  expect(result).toThrow('Имя не подходит! Вы выбрали подряд 3 цифры');
});

test('Проверка последнего символа', () => {
  const value = new Validation('Alex123');
  const result = () => value.validateUsername();
  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9), начинаться имя и заканчиваться может только на буквы');
});