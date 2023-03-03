<script>
import axios from 'axios'
export default {
    data() {
        return {
            Card: [],
        }
    },
    methods: {
        getCards() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
                .then((res) => {
                    console.log(res)
                })
        }
    },
    created() {
        this.getCards()
    }
}
</script>
<template>
    <h2>spazione main con carte</h2>
</template>
<style lang="scss" scoped></style>