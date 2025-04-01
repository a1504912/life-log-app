<template>
  <div>
    <h1>Home Page</h1>
    <CharacterView :bmi="22" emotion="happy" hair="default" clothes="basic" accessory="none" background="day" />
  </div>
</template>

<script setup>
import CharacterView from '../components/CharacterView.vue'
</script>
