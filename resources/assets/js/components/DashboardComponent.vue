<template>
    <div class="container">
        <div class="row">
            <div class="vue-flash-message">
                <flash-message></flash-message>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <h1>Dashboard</h1>

                <p>
                    <span>
                        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
                    </span>
                    <span v-if="!data">
                        <router-link :to="{ name: 'login' }">Login</router-link> |
                    </span>
                    <span v-else>
                        <router-link :to="{ name: 'logout' }">Logout</router-link>
                    </span>
                </p>

                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>
                    <div class="panel-body">
                        <p v-if="data">Data: {{ data }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: 'nothing'
            }
        },
        mounted() {
            axios.get('/api/dashboard', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => {
                // console.log(response);
                this.data = response.data.data;
            }).catch(error => {

            });
        }
    }
</script>

<style scoped>
    .vue-flash-message {
        position: absolute;
        top: 10px;
        right: 10px;
        display: inline-block;
    }
</style>