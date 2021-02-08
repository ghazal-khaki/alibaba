<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    Object.prototype.customObject.func('test')
  },
  methods: {
    // DESCRIBE: this function big o notation is equal to O(2n),
    // the growth rate is as same as O(n) and "linear" growth rate.
    convertArray: function (array) {
      const indexOfZeros = []
      let newArray = []
      let multiplication = 1
      array.map((number, index) => {
        if (number === 0) indexOfZeros.push(index)
        if (number !== 0) multiplication = multiplication * number
      })
      newArray = new Array(array.length).fill(0)
      if (indexOfZeros.length === 1) {
        newArray[indexOfZeros[0]] = multiplication
      } else if (indexOfZeros.length === 0) {
        newArray = newArray.map((item, index) => multiplication / array[index])
      }
      return newArray
    }
  }
}
</script>
