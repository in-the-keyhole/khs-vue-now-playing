<template>
<div class="login">
    <img class="logo" :src="'/images/logo.gif'"/>
    <div class="login-body">
        <div class="login-content">
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group" >
                    <span class="errorMessage">{{error}}</span>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="username" type="text" autocomplete="username" class="form-control" formControlName="username" required>
                    <div class="input-error"></div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" autocomplete="password" class="form-control" formControlName="password" required>
                    <div class="input-error">
                     
                    </div>
                </div>

                <button type="submit" class="btn btn-default" >Sign In</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import {HTTP} from '../http-common';


export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',    
            }
    },

    methods: {
        onSubmit: function () {
            this.error = '';
            const params = {
                username: this.username,
                password: this.password
            };

            HTTP.post('authenticate', params)
                .then(res => {
                    console.log(res);
                    this.$router.push('/');
                })
                .catch(err => {
                    console.log(err);
                     this.error = 'An invalid username or password was entered.'
                }) 
        }
    },
}
</script>

<style scoped>
.logo {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 125px;
}

.login-body {
    display: flex;
    width: 100%;
    height: -webkit-fill-available;
    color: black;
    background-image: url(/images/backdrops/login-backdrop.jpg);
    background-size: cover;
}

.login-content {
    margin: auto;
    width: 15%;
    background-color: #f3f3f3;
    padding: 30px;
}

h1 {
    font-size: 1em;
}


label {
    display: block;
    font-size: .75em;
    margin-bottom: 2px;
}

.form-group {
    margin-bottom: 10px;
}

input {
    font-size: 16px;
    border: 1px solid #b3b3b3;
    display: block;
    width: 100%;
    line-height: 18px;
    padding: 10px 11px;
    height: 30px;
}

.input-error {
    color: red;
    font-size: 12px;
}

button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    color: #FFFFFF;
    background-color: #3093c7;
    border: 1px solid #25729a;
}

button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
}

.errorMessage {
    font-weight: bold;
    color: red;
}
</style>

