export default {
    minMaxCoins: (state) => {
      const coins = Object.values(state.items);
      const len = coins.length;
      let maxCoin = coins[0];
      let minCoin = coins[0];
      for (let i = 0;i<len;i++) {
          if (coins[i].percentage > maxCoin.percentage) {
              maxCoin = coins[i];
          }
          if (coins[i].percentage < minCoin.percentage) {
              minCoin = coins[i];
          }  
      }
      return {max: maxCoin, min: minCoin};
    },
    getItemByRouteParam: (state, getters) => (routeParamID) => {
        let coins = getters.minMaxCoins;
        if (routeParamID == 'winner') {
          return coins.max;
        }
        if (routeParamID == 'loser') {
          return coins.min;
        }
        return state.items[routeParamID];
    },
    itemData: (state) => {
        return state.items;
    }
  }

