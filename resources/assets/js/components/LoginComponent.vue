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

                <form class="login100-form validate-form" v-on:submit.prevent="submitLogin">
					<span class="login100-form-title">
						Member Login
					</span>

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
                            Login
                        </button>
                    </div>

                    <div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
                        <a class="txt2" href="#">
                            Username / Password?
                        </a>
                    </div>

                    <div class="text-center p-t-136">
                        <router-link class="txt2" :to="{ name: 'register' }">
                            Create your Account
                            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
                loginError: '',
                flashMsg: '',
            }
        },
        validations: {
            email: {
                required,
                email
            },
        },
        methods: {
            submitLogin() {
                this.loginError = false;
                axios.post('/api/auth/login', {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    store.commit('loginUser');
                    localStorage.setItem('token', response.data.access_token);
                    this.flash('You are logged in', 'success', {
                        timeout: 3000,
                        important: true,
                    });
                    this.$router.push({ name: 'dashboard' })
                }).catch(error => {
                    this.loginError = true;
                    if (this.email === '' && this.password === '') {
                        this.flashMsg = 'Please provide email and password';
                    } else if (this.email === '' && this.password !== '') {
                        this.flashMsg = 'Please provide email';
                    } else if (this.email !== '' && this.password === '') {
                        this.flashMsg = 'Please provide password';
                    } else {
                        this.flashMsg = 'You are not authorized person';
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