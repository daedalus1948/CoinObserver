<template>
    <div class="header">
        <router-link to='/' class="link header-link">HOME</router-link>
        <router-link to='/winner/' class="link header-link">WINNER</router-link>
        <router-link to='/loser/' class="link header-link">LOSER</router-link>
    </div>
</template>

<script>
export default {
  data () {
      return {
        }
    }
}
</script>

<style>
    .header {
        background-color: #475160;
        display: flex;
        justify-content: center;
        margin-bottom: 4px;
    }
</style>