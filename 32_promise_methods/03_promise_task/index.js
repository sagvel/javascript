/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */
// input: any
// output: promise
const makePromise = value => Promise.resolve(value);

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
