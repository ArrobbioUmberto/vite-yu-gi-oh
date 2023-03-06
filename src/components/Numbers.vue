<script>
import store from '../store'
export default {
    data() {
        return {
            store
        }
    },
    methods: {

    }

}
// console.log(store)
</script>
<template>
    <div class="container info">
        <input @keyup.enter="$emit('onSearch')" type="text" placeholder="Inserisci il nome della carta" v-model="cardName">
        <!-- <select name="" id="">
            
                            </select> -->
        <span class="counter"> 20 di {{ store.total_rows }} carte nel deck </span>
    </div>
</template>
<style lang="scss" scoped>
span {
    color: white;
    font-size: 30px;
    font-weight: bold;
    background-color: black;
    padding: 10px 20px;
}

.counter {
    padding: 20px 0;
}

.info {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>