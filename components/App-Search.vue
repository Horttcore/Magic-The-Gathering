<template>
    <div class="app-search">
        <input v-model="searchFor" @input="search" class="app-search__field" placeholder="Enter Card Name">
    </div>
</template>

<script>
import { debounce } from "lodash";
export default {
    data() {
        return {
            searchFor: ""
        };
    },
    methods: {
        search: debounce(function() {
            this.$emit("cards:searching");
            this.$store.commit("App-Cards/search", this.searchFor);
        }, 400)
    }
};
</script>

<style lang="sass">
  .app-search
      flex: 1 0 auto
      max-width: 400px
      text-align: center

      &__field
          padding: 1em
          width: 100%
</style>
