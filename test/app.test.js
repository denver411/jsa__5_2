import getAttackTypes from '../src/js/app';

const hero = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://8',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 3,
      name: 'Ядерный удар',
      icon: 'http://4',
    },
  ],
};

getAttackTypes(hero);

test('Поле описание имеет значение из входящих данных', () => {
  expect(getAttackTypes(hero)[0].description).toBe('Двойной выстрел наносит двойной урон');
});

test('Поле описание имеет значение "Описание недоступно", при отсутствии в входящих данных', () => {
  expect(getAttackTypes(hero)[1].description).toBe('Описание недоступно');
});
