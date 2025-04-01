<template>
  <div>
    <h1>Home Page</h1>
    <p v-if="user">👤 歡迎你：{{ user.email }}</p>
    <button @click="logout">登出</button>

    <CharacterView
      :bmi="22"
      emotion="happy"
      hair="default"
      clothes="basic"
      accessory="none"
      background="day"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import CharacterView from '../components/CharacterView.vue'

const auth = getAuth()
const router = useRouter()
const user = ref(null)

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })
})

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}
</script>
