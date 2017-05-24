<template>
  <div id="app">
    <h1>Async component example</h1>
    <hr>
    <button @click="show = true">Load async component</button>
    <div v-if="show">

      <Async/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return { show: false }
  }
}
</script>
