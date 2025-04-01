<template>
  <div class="character-view" style="position: relative; width: 128px; height: 128px;">
    <img :src="`/assets/character/background-${background}.png`" style="position: absolute; z-index: 0;" />
    <img :src="`/assets/character/base-body-${bmiType}.png`" style="position: absolute; z-index: 10;" />
    <img :src="`/assets/character/face-${emotion}.png`" style="position: absolute; z-index: 20;" />
    <img :src="`/assets/character/hair-${hair}.png`" style="position: absolute; z-index: 30;" />
    <img :src="`/assets/character/clothes-${clothes}.png`" style="position: absolute; z-index: 40;" />
    <img :src="`/assets/character/accessory-${accessory}.png`" style="position: absolute; z-index: 50;" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['bmi', 'emotion', 'hair', 'clothes', 'accessory', 'background'])

function getBodyType(bmi) {
  if (bmi < 18.5) return 'slim'
  if (bmi < 23) return 'normal'
  if (bmi < 25) return 'chubby'
  if (bmi < 30) return 'fat'
  return 'superfat'
}

const bmiType = computed(() => getBodyType(props.bmi))
</script>
