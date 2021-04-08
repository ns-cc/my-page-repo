onmessage = (event) => {
  let calcCount = 0
  let redArr = []
  let blueArr = []
  for (let i = 1; i < 36; i++) {
    redArr.push(i)
  }
  for (let i = 1; i < 13; i++) {
    blueArr.push(i)
  }
  const { maxTry, matchOrigin } = event.data
  for (let i = 0; i < maxTry; i++) {
    calcCount++
    const onePick =
      shuffle(redArr)
        .slice(0, 5)
        .sort((a, b) => a - b)
        .join('') +
      shuffle(blueArr)
        .slice(0, 2)
        .sort((a, b) => a - b)
        .join('')
    if (matchOrigin == onePick) {
      postMessage(`第${calcCount}次 ${onePick} jackpot`)
      return
    }
  }
  postMessage(`没有中 ${calcCount}次都没有中`)
  return
}

/**
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 * @param {*} array
 * @returns
 */
function shuffle(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  let index = -1
  const lastIndex = length - 1
  const result = copyArray(array)
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return result
}

/**
 * lodash copyArray.js
 * @param {*} source
 * @param {*} array
 * @returns
 */
function copyArray(source, array) {
  let index = -1
  const length = source.length

  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}
