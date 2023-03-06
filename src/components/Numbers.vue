<script>
import store from '../store'
export default {
    data() {
        return {
            numberOptions: [
                20,
                40,
                60,
                100
            ],
            store
        }
    },


}
// console.log(store)
</script>
<template>
    <div class="container info">
        <input @keyup.enter="$emit('onSearch')" type="text" placeholder="Cerca la tua carta" class="input-search"
            v-model="store.search">
        <select @change="$emit('setNumber')" id="" class="searching" v-model="store.number">
            <option :value="number" v-for="number in numberOptions" :key="number">{{ number }}</option>
        </select>
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

.input-search {
    padding: 5px 30px;
    border: none;
    border-radius: 25px;
    height: 25px;
    font-size: 16px;
    text-align: center;
}

.searching {
    font-size: 16px;
    border: 2px solid red;
    padding: 5px 10px;
}
</style>