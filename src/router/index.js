import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 加入導航守衛
router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next() // 有登入，繼續前往
      } else {
        next('/login') // 沒登入 → 導向 login 頁
      }
    })
  } else {
    next() // 不需要驗證的頁面（例如 login）直接進
  }
})

export default router
