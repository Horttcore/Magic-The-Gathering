<template>

  <header class="header">

    <div class="container container--flex">

        <app-logo />

        <app-search />

    </div>

  </header>

</template>

<script>
import appLogo from '~/components/App-Logo.vue'
import appSearch from '~/components/App-Search.vue'

export default {
    components: {
        appLogo,
        appSearch
    }
}
</script>

<style lang="sass">
  .header
    background: #222
    box-shadow: 2px 2px 2px rgba(black, .4)
    color: #fff
    left: 0
    padding: 1em 0
    position: fixed
    top: 0
    width: 100%
    z-index: 100
</style>
