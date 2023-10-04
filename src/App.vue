<script setup>
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <div class="w-screen py-3 bg-white border-gray-300 shadow-xl flex flex-row justify-center">
    <img src="./assets/ugal.png" class="w-10 h-10 ml-5">
    <router-link to="/" class="p-2 text-lg">Ask2Win</router-link>
  </div>
  <router-view></router-view>
</template>
