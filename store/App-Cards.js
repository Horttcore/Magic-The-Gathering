import axios from 'axios'
import { remove } from 'lodash'
export const state = () => ({
    cards: [],
    filters: {
        cmc: '',
        colors: [],
        search: '',
        type: ''
    }
})

export const mutations = {
    query (state) {
        let that = this
        let query = {}
        if (state.filters.colors.length > 0) {
            query.colors = state.filters.colors.join(',')
        }
        if (state.filters.search) query.name = state.filters.search
        axios
            .get('https://api.magicthegathering.io/v1/cards', {
                params: query
            })
            .then(response => {
                that.commit('App-Cards/setCards', response.data.cards)
            })
    },
    search (state, query) {
        state.filters.search = query
        this.commit('App-Cards/query')
    },
    setCards (state, cards) {
        state.cards = cards
    },
    toggleColorFilter (state, color) {
        if (state.filters.colors.indexOf(color) === -1) {
            // Add color filter
            state.filters.colors.push(color)
        } else {
            // Remove color filter
            remove(state.filters.colors, function (element) {
                return color === element
            })
            state.filters.colors.splice(state.filters.colors.length) // Trigger rerender: https://vuejs.org/v2/guide/list.html#Caveats
        }
        this.commit('App-Cards/query')
    }
}
