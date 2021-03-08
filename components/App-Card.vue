<template>
    <div class="card" v-if="card.imageUrl">
        <img @click="addCard(card)" :src="card.imageUrl" :alt="card.name">
    </div>
</template>

<script>
export default {
    props: ["card"],
    methods: {
        addCard(card) {
            this.$store.commit("App-Decks/addCard", card);
        }
    }
};
</script>

<style lang="sass">
.card
    background: url(/loading.svg) center center no-repeat
    min-height: 40px

    img
        border-radius: 12px
        box-shadow: 2px 2px 2px rgba(black, .8)
        left: 0
        max-width: 100%
        position: relative
        top: 0
        transition: all .1s

    &:hover

        img
            box-shadow: none
            left: 2px
            top: 2px

</style>
