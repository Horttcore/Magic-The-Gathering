export const state = () => ({
    cards: []
})

export const mutations = {
    addCard (state, card) {
        state.cards.push(card)
    }
}
