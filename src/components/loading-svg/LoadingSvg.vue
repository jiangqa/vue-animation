<script lang="ts" setup>
import { toRefs } from 'vue'

interface Props {
    show: boolean
}
const props = defineProps<Props>()
const { show } = toRefs(props)
</script>
<template>
    <div v-if="show" class="loading-svg">
        <svg class="svg" viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none"></circle></svg>
    </div>
</template>
<style scoped lang="less">
.loading-svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    width: 20px;
    height: 20px;
    animation: rotate-keyframe 2s linear infinite;
    circle {
        animation: circular-keyframe 1.5s ease-in-out infinite;
        stroke: currentColor;
        stroke-width: 3;
        stroke-linecap: round;
    }
}
@keyframes rotate-keyframe {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes circular-keyframe {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120;
    }
}
</style>
