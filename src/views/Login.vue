<template>
    <div class="login-bg">
    <div class="login">
    <h2>登入 / 註冊</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">登入</button>
    <button @click="register">註冊</button>
    <hr />
    <button @click="loginWithGoogle">使用 Google 登入</button>
    <FallingPetals />
  </div>
</div>
</template>



<script setup>
import { ref } from 'vue'
import { auth } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import FallingPetals from '../components/FallingPetals.vue'


const router = useRouter()
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (error) {
    alert('登入失敗：' + error.message)
  }
}

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

const register = async () => {
  if (!isValidEmail(email.value)) {
    alert('請輸入正確的 Email 格式')
    return
  }

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (error) {
    alert('註冊失敗：' + error.message)
  }
}

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    router.push('/')
  } catch (error) {
    alert('Google 登入失敗：' + error.message)
  }
}
</script>

<style scoped>
.login {
  max-width: 320px;
  width: 90%;
  margin: 60px auto;
  padding: 20px;
  background-color: #fff;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
  font-family: 'Press Start 2P', cursive;
  image-rendering: pixelated;
}

.login-bg {
  background: url('/assets/bg/spring.png') no-repeat center center;
  background-size: cover;
  image-rendering: pixelated;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

body {
  background: url('/assets/bg/spring.png') no-repeat center center;
  background-size: cover;
  image-rendering: pixelated;
}

h2 {
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
}

input {
  width: 100%;
  font-family: inherit;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 12px;
  border: 2px solid #333;
  background: #fdfdfd;
  box-sizing: border-box;
}

button {
  font-family: inherit;
  font-size: 12px;
  padding: 10px 16px;
  border: 2px solid #333;
  background-color: #fff;
  margin-right: 8px;
  margin-bottom: 8px;
  box-shadow: 2px 2px 0px #000;
  transition: 0.1s;
}

button:hover {
  background-color: #eee;
  cursor: pointer;
}

hr {
  margin: 20px 0;
  border: none;
  border-bottom: 1px solid #aaa;
}

/* ✅ 響應式設計：手機時居中縮放 */
@media (max-width: 480px) {
  .login {
    width: 95%;
    padding: 16px;
  }

  h2 {
    font-size: 12px;
  }

  input, button {
    font-size: 10px;
    padding: 8px;
  }
}
</style>

