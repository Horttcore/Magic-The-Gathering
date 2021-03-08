<template>
  <div class="app">
    <app-header/>
    <nuxt/>
  </div>
</template>

<script>
import appHeader from '~/components/App-Header.vue'

export default {
    components: {
        appHeader
    }
}
</script>
