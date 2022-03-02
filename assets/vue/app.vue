<template>
  <div>
    <h2>This is a vue template</h2>
    <button @click="counter++">Click me {{ counter }}</button>
  </div>
</template>

<script>
export default {
    data: () => ({
      counter: 0
    })
}
</script>
<style>
</style>