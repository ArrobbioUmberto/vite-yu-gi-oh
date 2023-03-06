import { reactive } from 'vue'

const store = reactive({
    card: [],
    total_rows: 0,
    search: '',
    number: 20,
})
export default store