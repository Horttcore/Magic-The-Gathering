<template>
  <nuxt-link to="/" class="app-logo">
    <img v-for="m in mana" :key="m" :src="m" width="40" />
    <span class="app-title">Magic The Gathering</span>
  </nuxt-link>
</template>

<style lang="sass">
    .app

        &-logo
            align-items: center
            display: flex
            margin-right: 2em
            text-decoration: none

            img
                &:not(:first-child)
                    margin-left: .5em

        &-title
            color: white
            font-family: fantasy
            font-size: 1.5rem
            line-height: 1
            margin-left: 1em
            text-transform: uppercase

</style>

<script>
import { shuffle } from 'lodash'
export default {
    data () {
        return {
            mana: shuffle([
                '/mana-white.svg',
                '/mana-blue.svg',
                '/mana-black.svg',
                '/mana-red.svg',
                '/mana-green.svg'
            ])
        }
    }
}
</script>
