<template>
    <div class="cards">
        <app-card :card="card" v-model="cards" v-for="card in cards" :key="card.id" />
    </div>
</template>

<script>
import axios from "axios";
import appCard from "~/components/App-Card.vue";
export default {
    components: {
        appCard
    },
    computed: {
        cards() {
            return this.$store.state["App-Cards"].cards;
        }
    },
    mounted() {
        var that = this;
        axios
            .get("https://api.magicthegathering.io/v1/cards")
            .then(response => {
                that.$store.commit("App-Cards/setCards", response.data.cards);
            });
    }
};
</script>

<style lang="sass">
.cards
    align-items: center
    display: grid
    flex-wrap: wrap
    grid-gap: 2em
    grid-template-columns: repeat(5, auto);
    justify-content: space-between
    padding: 2em
</style>
