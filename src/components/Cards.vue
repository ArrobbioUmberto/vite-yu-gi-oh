<script>
export default {
    props: {
        el: {
            type: Object,
            required: true
        }
    }
}
</script>
<template>
    <li>
        <img :src="el.card_images[0].image_url" alt="">
        <h3>{{ el.name }}</h3>
    </li>
</template>
<style lang="scss" scoped>
li {
    background-color: rgba($color: blue, $alpha: 0.5);
}

h3 {
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}
</style>