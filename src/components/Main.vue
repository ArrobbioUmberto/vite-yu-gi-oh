<script>
import axios from 'axios'
import Cards from './Cards.vue'
import Numbers from './Numbers.vue'
import store from '../store'
export default {
    components: {
        Cards,
        Numbers
    },
    data() {
        return {
            // card: [],
            infoNumber: {},
            store,
        }
    },
    methods: {
        getCards() {
            const search = this.store.search
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0', {
                parameters: {
                    name: search,
                }
            })
                .then((res) => {
                    // console.log(res.data)
                    this.store.card = res.data.data
                    this.store.total_rows = res.data.meta.total_rows
                }).catch((error) => {
                    this.store.card = []
                    console.log(error)
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
            <div>
                <Numbers @onSearch="getCards"></Numbers>
            </div>
            <ul>
                <Cards v-for="element in store.card" :key="element.id" :el="element"></Cards>
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
    padding: 30px 0;
}
</style>