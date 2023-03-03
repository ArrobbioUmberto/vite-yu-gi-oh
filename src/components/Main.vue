<script>
import axios from 'axios'
import Cards from './Cards.vue'
export default {
    components: {
        Cards
    },
    data() {
        return {
            card: [],
        }
    },
    methods: {
        getCards() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((res) => {
                    console.log(res.data.data)
                    this.card = res.data.data
                })
        }
    },
    created() {
        this.getCards()
    }
}
</script>
<template>
    <main>
        <div class="card-list container">
            <ul>
                <Cards v-for="element in card" :key="element.id" :el="element"></Cards>
            </ul>
        </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    background-image: url('./img/bg-image.webp');
    background-repeat: no-repeat;
    background-size: cover;
}

ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
}

.card-list {
    overflow: auto;
}
</style>