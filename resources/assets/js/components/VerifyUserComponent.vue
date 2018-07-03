<template>
    <div class="limiter">
        <div class="vue-flash-message">
            <flash-message></flash-message>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/auth/user/verify/'+this.$route.params.verification_code).then(response => {
                if (response.data.message) {
                    this.flash(response.data.message, 'success', {
                        timeout: 3000,
                        important: true,
                    });
                } else {
                    this.flash(response.data.error, 'error', {
                        timeout: 3000,
                        important: true,
                    });
                }
                this.$router.push({ name: 'login' })
            }).catch(error => {
                this.flash(error.response.data.error, 'success', {
                    timeout: 3000,
                    important: true,
                });
                this.$router.push({ name: 'login' })
            })
        }
    }
</script>

<style scoped>

</style>