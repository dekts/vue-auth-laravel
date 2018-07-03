<template>
    <div class="limiter">
        <div class="vue-flash-message">
            <flash-message></flash-message>
        </div>
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="images/img-01.png" alt="IMG">
                </div>

                <form class="login100-form validate-form" v-on:submit.prevent="submitRegister">
					<span class="login100-form-title">
						Member Registration
					</span>

                    <div class="wrap-input100 validate-input" data-validate = "Please enter your name">
                        <input type="text" class="input100" placeholder="Name" autofocus v-model="name">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-user" aria-hidden="true"></i>
						</span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input type="email" class="input100" placeholder="Email address" autofocus v-model="email">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Password is required">
                        <input type="password" class="input100" placeholder="Password" v-model="password">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" type="submit">
                            Register
                        </button>
                    </div>

                    <div class="text-center p-t-116">
                        <router-link class="txt2" :to="{ name: 'login' }">
                            Go Back to Login
                            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                flashMsg: '',
            }
        },
        validations: {
            name: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required
            },
        },
        methods: {
            submitRegister() {
                axios.post('/api/auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }).then(response => {
                    this.flash(response.data.message, 'success', {
                        timeout: 3000,
                        important: true,
                    });
                    if (response.data.error) {
                        this.flash(response.data.error.email[0], 'error', {
                            timeout: 3000,
                            important: true,
                        });
                    }
                    this.$router.push({ name: 'login' })
                }).catch(error => {
                    console.log(error);
                    if (this.email === '' || this.email === '' || this.password === '') {
                        this.flashMsg = 'Please provide required information';
                    } else {
                        this.flashMsg = 'Entered information not in proper way';
                    }
                    this.flash(this.flashMsg, 'error', {
                        timeout: 3000,
                        important: false, // if true the close button removed
                    });
                });
            }
        }
    }
</script>

<style scoped>
    
</style>