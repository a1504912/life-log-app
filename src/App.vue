<template>
  <router-view />
</template>

<script setup>
</script>

<style>
body {
  font-family: 'Press Start 2P', cursive;
  background-color: #f4f1de;
  color: #2f2f2f;
  image-rendering: pixelated;
}

button, input {
  font-family: inherit;
  padding: 10px;
  border: 2px solid #444;
  background-color: #fff;
  image-rendering: pixelated;
}

button:hover {
  background-color: #eee;
  cursor: pointer;
}

.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
</style>
