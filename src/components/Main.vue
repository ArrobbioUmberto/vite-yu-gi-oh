<script>
import axios from 'axios'
// import Cards from './Cards.vue'
export default {
    components: {
        // Cards
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
                <li v-for="el in card" :key="el.id">
                    <img :src="el.card_images[0].image_url" alt="">
                    <h3>{{ el.name }}</h3>
                </li>
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

li {
    background-color: rgba($color: blue, $alpha: 0.5);
}

h3 {
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}

.card-list {
    overflow: auto;
}
</style>