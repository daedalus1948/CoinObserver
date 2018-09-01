<template>
    <div v-if="Object.keys(items).length > 0" class="content">
        <metaitem  v-bind:key=-1></metaitem>
        <item v-bind:key=coin.id v-bind:coin=coin v-for="coin in items"></item>
    </div>
    <loading v-else></loading>
</template>

<script>

import item from './item.vue';
import metaItem from './metaItem.vue';
import loading from './loading.vue';

export default {
    components: {
      'item': item,
      'metaitem': metaItem,
      'loading': loading
    },
    data () {
        return { 
        }
    },
    computed: {
        items: function () {
            return this.$store.getters.itemData;
        }
    }
}
</script>

<style>    
</style>
