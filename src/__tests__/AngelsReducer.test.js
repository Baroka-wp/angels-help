import angelsReducer, { filterAngels, getAngels } from '../redux/angels/angels';
import store from '../__mocks__/store';

test('should return an empty array', () => {
  expect(angelsReducer([], {})).toEqual([]);
});

test('should get state from store', () => {
  const state = angelsReducer([], getAngels(store));
  expect(state.length).toEqual(store.length);
});

test('should find one angel in the store if filtered by existed category', () => {
  const state = angelsReducer(store, filterAngels('health'));
  expect(state.length).toEqual(1);
});

test('should find one angel in the store if filtered by unexisted category', () => {
  const state = angelsReducer(store, filterAngels('Money'));
  expect(state.length).toEqual(0);
});
