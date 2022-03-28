const test = {
  state: {
      navState: true
  },
  mutations: {
      SET_NAV_STATE(state:any, data: Boolean) {
          console.log('state',state);
          
          state.navState = data
          console.log(data);
          
      }
  },
  actions: {
      setNavState({ commit }:any, data:Boolean) {
        commit('SET_NAV_STATE', data)
      }
  }
}
export default test