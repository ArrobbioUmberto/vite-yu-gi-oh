<script>
import store from '../store'
export default {
    data() {
        return {
            store
        }
    }

}
console.log(store)
</script>
<template>
    <div class="container counter">
        <span> 20 di {{ store.total_rows }} carte nel deck </span>
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
</style>