export default {
    updateItems: (state, newData) => {
      state.items = newData;
    },
    setIntervalID: (state, intervalID) => {
      state.intervalID = intervalID;
    },
    clearIntervalID: (state) => {
      clearInterval(state.intervalID);
    }
}