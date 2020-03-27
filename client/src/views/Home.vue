<template>
    <div class="home-wrap">
        <CategoriesMenu :menu="categories" :loading="loading"/>
        <router-view/>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        components: {
            CategoriesMenu: () => import('../components/CategoriesMenu')
        },
        data: () => ({
            loading: true,
            categories: []
        }),
        mounted() {
            setTimeout(async () => {
                const categories = await axios.get('/api/categories')
                this.categories = categories.data
                this.loading = false
            }, 500)
        }
    }
</script>

<style lang="scss" scoped>
    .home-wrap {
        display: flex;
    }
</style>
