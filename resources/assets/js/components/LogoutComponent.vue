<template>
    
</template>

<script>
    import store from '../store'

    export default {
        mounted() {
            localStorage.removeItem('token');
            store.commit('logoutUser');
            this.flash('Awwww... You are logged out', 'success', {
                timeout: 3000,
                important: true,
            });
            this.$router.push({ name: 'login' })
        }
    }
</script>

<style scoped>

</style>