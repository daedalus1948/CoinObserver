<template>
  <div class="flex-master">
    <v-header class="flex-header"></v-header>
    <router-view class="flex-content"></router-view>
    <v-footer class="flex-footer"></v-footer>
  </div>
</template>

<script>

import header from './components/header.vue';
import content from './components/content.vue';
import footer from './components/footer.vue';

export default {
  components: {
    'v-header': header,
    'v-footer': footer
  },
  data () {
      return { 
      }
  },
  created() {
    this.$store.dispatch('fetchData');
  },
}
</script>

<style>
  * {
    font-family: Helvetica;
    font-weight: bold;
    color: #475160;
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
  }

  p {
    padding: 5px;
  }

  body {
    background-color: whitesmoke;
  }

  .green-text {
    color: rgb(38, 163, 38);
  }

  .red-text {
    color: darkred;
  }

  .flex-master {
    display: flex;
    height: 100vh;
    flex-direction: column;
    padding: 5px;
  }

  .flex-content {
    flex:1;
    overflow: auto;
  }

  .link {
    margin: 8px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 8px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    color: whitesmoke;
    font-size: 21px;
    font-weight: bold;
  }

  .link:hover {
    background-color: gold;
    color: #475160;
  }

  .router-link-exact-active {
    background-color: rgb(223, 223, 223);
    color: #475160;
  }

  .content-link {
    text-decoration: none;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .text-container {
    background-color: rgb(223, 223, 223);
    width: 50%;
    text-align: center;
    padding: 20px;
    overflow: auto;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 500px)
  {

    .link {
      font-size: 18px;
    }

    .item{
      font-size: 13px;
    }

    .text-container {
      width: 80%;
      font-size: 13px;
    }

  }

</style>
