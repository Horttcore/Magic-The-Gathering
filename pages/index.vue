<template>
  <div class="content-container">
    <app-card-filters />
    <app-cards />
  </div>
</template>

<script>
import AppCards from '~/components/App-Cards.vue'
import AppCardFilters from '~/components/App-Card-Filters.vue'

export default {
    components: {
        AppCards,
        AppCardFilters
    }
}
</script>
