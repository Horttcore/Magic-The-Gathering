<template>
    <div class="card-filters">
      <fieldset>
        <legend>Farbe</legend>
        <input type="checkbox" @click="toggleColorFilter('White')" name="colors[]" value="White" class="card-filter-color" id="card-filter-white" /> <label class="card-filter-color-label" for="card-filter-white"><img src="~/static/mana-white.svg" width="20" /></label>
        <input type="checkbox" @click="toggleColorFilter('Blue')" name="colors[]" value="Blue" class="card-filter-color" id="card-filter-blue" /> <label class="card-filter-color-label" for="card-filter-blue"><img src="~/static/mana-blue.svg" width="20" /></label>
        <input type="checkbox" @click="toggleColorFilter('Black')" name="colors[]" value="Black" class="card-filter-color" id="card-filter-black" /> <label class="card-filter-color-label" for="card-filter-black"><img src="~/static/mana-black.svg" width="20" /></label>
        <input type="checkbox" @click="toggleColorFilter('Red')" name="colors[]" value="Red" class="card-filter-color" id="card-filter-red" /> <label class="card-filter-color-label" for="card-filter-red"><img src="~/static/mana-red.svg" width="20" /></label>
        <input type="checkbox" @click="toggleColorFilter('Green')" name="colors[]" value="Green" class="card-filter-color" id="card-filter-green" /> <label class="card-filter-color-label" for="card-filter-green"><img src="~/static/mana-green.svg" width="20" /></label>
      </fieldset>
      <fieldset>
        <legend>Converted Mana Costs</legend>
        <input type="range">
      </fieldset>
    </div>
</template>

<script>
export default {
    methods: {
        toggleColorFilter: function (color) {
            this.$store.commit('App-Cards/toggleColorFilter', color)
        }
    }
}
</script>


<style lang="sass">
.card-filters
  background-color: #eee
  display: flex
  padding: 1em

.card-filter-color
  display: none

  &:checked

    & + label
      opacity : 1

  &-label
    opacity: .5

    &:not(:first-of-type)
      margin-left: 1em
</style>
