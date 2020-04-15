<template>
  <h2>
    <span> {{ title }} </span>
    <Icon  v-if="icon"/>
  </h2>
</template>

<script>
import Icon from './icons/Icon'
export default {
  name: 'PageTitle',
  components: { Icon },
  props: {
    title: String,
    icon: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: red;
}
</style>
