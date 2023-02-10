import Validator from '../nicknames';

test.each([
  ['Надя', false],
  ['fhВff', false],
  ['%%%', false],
  ['ff-ff', true],
  ['ff_ff', true],
  ['ff111fff', true],
  ['ff5555ff', false],
  ['5fff', false],
  ['fff5', false],
  ['_fff', false],
  ['fff_', false],
  ['-fff', false],
  ['fff-', false],
  ['ff$ff', false],
])('regexp', (obj, expected) => {
  const result = new Validator(obj).validateUsername();
  expect(result).toBe(expected);
});
