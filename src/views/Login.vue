<template>
<div class="login">
    <img class="logo" :src="'/images/logo.gif'"/>
    <div class="login-body">
        <div class="login-content">
            <form>
                <div class="form-group" >
                    <span class="errorMessage"></span>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" class="form-control" formControlName="username" required>
                    <div  class="input-error"></div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" formControlName="password" required>
                    <div  class="input-error">
                     
                    </div>
                </div>

                <button type="submit" class="btn btn-default" >Sign In</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>


export default {

}
</script>

<style>
.logo {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 125px;
}

.login-body {
    display: flex;
    width: 100%;
    height: 100%;
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

.login-form {
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

