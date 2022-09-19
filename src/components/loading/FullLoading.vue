<script setup lang="ts">
import useIndexStore from '@/store/index'
import { computed } from 'vue'
const loading = computed(() => {
    return useIndexStore().loading
})
</script>

<template>
    <div v-show="loading" class="loading center">
        <van-loading color="#666" />
    </div>
</template>

<style>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 100%;
}
</style>
