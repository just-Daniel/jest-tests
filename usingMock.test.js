// const forEachElement = require('./usingMock');

// const mockCallback = jest.fn(x => 42 + x);

// forEachElement([0, 1], mockCallback);

// test('called twice', () => {
//     expect(mockCallback.mock.calls.length).toBe(2);
// })

// test('first argument of the first call to the function was 0', () => {
//     expect(mockCallback.mock.calls[0][0]).toBe(0);
// })

// test('first argument of the second call to the function was 1', () => {
//     expect(mockCallback.mock.calls[1][0]).toBe(1);
// })

// test('return value of the first call to the function was 42', () => {
//     expect(mockCallback.mock.results[0].value).toBe(42);
// })

const {diff} = require('jest-diff');

const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};
test('res', () => {
const result = diff(a, b);

// вивід відмінностей
console.log(result);
})
