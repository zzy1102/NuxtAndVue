export default {
  getData(store, data) {
    setTimeout(() => {
      store.commit('add', data)
    }, 2000)
  },
}
