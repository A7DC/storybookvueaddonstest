<button>
  {{ label }}
</button>

<script>
export default {
  name: 'HelloWorld',
  props: {
    label: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: red;
}
</style>
