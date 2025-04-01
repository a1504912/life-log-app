<template>
    <div class="petal-container">
      <img
        v-for="petal in petals"
        :key="petal.id"
        src="/assets/particles/spring.png"
        class="petal"
        :style="{
          left: petal.left + 'vw',
          animationDuration: petal.duration + 's',
          animationDelay: petal.delay + 's'
        }"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const petals = ref([])
  
  onMounted(() => {
    for (let i = 0; i < 20; i++) {
      petals.value.push({
        id: i,
        left: Math.random() * 100,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 5
      })
    }
  })
  </script>
  
  <style scoped>
  .petal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
    z-index: 5;
  }
  
  .petal {
    position: absolute;
    width: 24px;
    height: 24px;
    top: -32px;
    width: 16px;
    height: 16px;
    image-rendering: pixelated;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  @keyframes fall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  50% {
    transform: translateY(50vh) translateX(10px) rotate(180deg);
  }
  100% {
    transform: translateY(110vh) translateX(0) rotate(360deg);
  }
}

  </style>
  