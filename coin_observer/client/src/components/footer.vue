<template>
    <div class="footer">
        <router-link to='/about/' class="link footer-link">ABOUT</router-link>
        <router-link to='/info/' class="link footer-link">INFO</router-link>
        <router-link to='/legal/' class="link footer-link">LEGAL</router-link>
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
    .footer {
        background-color: #475160;
        display: flex;
        justify-content: center;
        margin-top: 4px;
    }
</style>
