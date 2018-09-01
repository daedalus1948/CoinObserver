import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
    fetchData: (context) => {
    let timeoutID = setInterval(()=>{
      Vue.http.get("http://127.0.0.1:3000/data")
      .then((itemData)=>{
        context.commit('updateItems', itemData.body);
      })
      .catch((error)=>{
        console.log(error);
      });
    }, 700);
    context.commit('setIntervalID', timeoutID);
    }
  }