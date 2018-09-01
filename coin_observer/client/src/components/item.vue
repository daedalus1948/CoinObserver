<template>
    <router-link v-bind:to="coin.symbol" class="content-link">
        <div class="item">
            <div class="item-div image"><img class="coin-image" v-bind:src="coin.logo"/></div>
            <div class="item-div symbol">{{ coin.symbol }}</div>
            <div class="item-div name">{{ coin.name }}</div>
            <div class="item-div price">{{ coin.price }}</div>
            <div v-bind:class="coin.percentage > 0 ? 'item-div percentage green-text' : 'item-div percentage red-text'">{{ coin.percentage }}%</div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['coin'], 
    data () {
        return {
        }
    }
}
</script>

<style>

    .item {
        background-color: rgb(223, 223, 223);
        margin: 4px;
        padding: 2px;
        display: flex;
        justify-content:space-around;
    }

    .item:hover {
        background-color: gold;
    }

    .item-div {
        display: flex;
        margin: 2px;
        padding: 2px;
        align-items: center;
    }

    .coin-image {
        max-width: 20px;
        max-height: 20px;
    }

    .image {
        flex: 1;
    }

    .symbol {
        flex: 1;
    }

    .name {
        flex: 1;
    }

    .price {
        flex: 1;
        justify-content: center;
    }

    .percentage {
        flex: 1;
        justify-content: flex-end;
    }

</style>
