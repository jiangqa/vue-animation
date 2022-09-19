<script setup lang="ts">
import FullLoading from '@/components/loading/FullLoading.vue'
</script>

<template>
    <router-view></router-view>
    <full-loading />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f5f5;
}
.loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 100%;
}
</style>
