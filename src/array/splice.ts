import { ref, watch, type Ref } from 'vue'

const array: Ref<Array<any>> = ref([1, 2, 3, 4, 5, [6, 7, 8]])

watch(array.value, () => {
  console.log(array.value)
})
const deleteIndex = 2
array.value.splice(deleteIndex, 1)
Promise.resolve().then(() => array.value[array.value.length - 1].push(9))
