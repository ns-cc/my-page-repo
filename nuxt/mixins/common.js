export default {
  methods: {
    /**
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     * @param {*} array
     * @returns
     */
    shuffle(array) {
      const copyArray = (source, array) => {
        let index = -1
        const length = source.length

        array || (array = new Array(length))
        while (++index < length) {
          array[index] = source[index]
        }
        return array
      }

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
    },
  },
}
