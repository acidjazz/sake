<template lang="pug">
  .container
    router-link#d(to="/")
      include ../static/vector/d.svg
    NavBar
    .inner
      nuxt
</template>

<script>
import NavBar from '~/components/layout/NavBar.vue'
export default {
  components: { NavBar }
}
</script>
