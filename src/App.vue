<template>
    <div class="welcome container">
        <p>Welcome to InADaze</p>
        <div v-if="showLogin">
            <h2>Login</h2>
             <LoginForm />
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
import SignupForm from './components/SignupForm.vue'
import LoginForm from './components/LoginForm.vue'
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
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
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