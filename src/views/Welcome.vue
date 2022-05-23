<template>
    <div class="nav">
        <router-link class="about" to="/about">About</router-link>
    </div>
    <div class="welcome container">
        <h4>Welcome to 无聊</h4>
        <div v-if="showLogin">
            <h2>Login</h2>
             <LoginForm/>
             <p>No account yet? <span @click="showLogin = false">Signup</span> instead</p>
        </div>
        <div v-else>
            <h2>Sign up</h2>
            <SignupForm/>
             <p>Already registered? <span @click="showLogin = true">Login</span> instead</p>

        </div>
    </div>

</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)
        return {showLogin}
    }
}
</script>

<style>
    .nav{
        border: 0px solid #ccc;
        width: 100px;
        border-radius: 5%;
        
    }
    .nav a.router-link-exact-active{
        background-color: orange;
        color: #fff;
    }
    .nav>a{
		color:#222;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: italic;
        font-size: 16px;
        padding-left: 10px;
	}
    .welcome {
      padding: 20px 0;
      text-align: center;  
    }
    /* form style */
    .welcome form {
        margin: 20px auto;
        width: 300px;
    }

    .welcome label {
        display: block;
        margin: 20px 0 10px;
    }

    .welcome input {
        margin: 10px auto;
        padding: 10px;
        width: 100%;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
    }

    .welcome span {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }

    .welcome button {
        margin: 20px auto;
        cursor: pointer;
    }

    @media (max-width: 576px) {
        .welcome input {
            width: 90%;
        }
    }
</style>