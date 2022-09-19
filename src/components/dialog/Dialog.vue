<script lang="ts" setup>
import { toRefs, defineEmits } from 'vue'

interface Props {
    show: boolean
    title: string
    message: string
}
const props = withDefaults(defineProps<Props>(), {
    show: false
})
const emit = defineEmits(['update:show'])
const { show, title, message } = toRefs(props)
const clickMask = () => {
    emit('update:show', false)
}
</script>
<template>
    <div class="popup">
        <!-- 蒙层 -->
        <transition name="fade">
            <div v-show="show" class="popup-overlay" @click="clickMask"></div>
        </transition>
        <!-- 弹出层 -->
        <transition name="slide">
            <div v-show="show" class="popup-content">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<style scoped lang="less"></style>
