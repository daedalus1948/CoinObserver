<template>
    <div v-if="item" class="item-container">
        <div class="item-detail">
            <div class="item-div image"><img class="coin-image" v-bind:src="item.logo"/></div>
            <div class="item-div symbol">{{ item.symbol }}</div>
            <div class="item-div name">{{ item.name.toUpperCase()}}</div>
            <div class="item-div price">{{ item.price }}$</div>
            <div v-bind:class="item.percentage > 0 ? 'item-div percentage green-text' : 'item-div percentage red-text'">{{ item.percentage }}%</div>
        </div>
    </div>
    <loading v-else></loading>
</template>



<script>

import loading from './loading.vue';

export default {
    components: {
      'loading': loading
    },
    data () {
        return {
        }
    },
    computed: {
        item: function () {
            return this.$store.getters.getItemByRouteParam(this.$route.params.item_symbol);
            }
        }
}
</script>


<style>

    .item-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .item-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        text-align: center;
    }

    .coin-image {
        max-width: 20px;
        max-height: 20px;
    }

</style>
