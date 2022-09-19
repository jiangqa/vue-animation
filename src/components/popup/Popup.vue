<script lang="ts" setup>
import { toRefs, defineEmits } from 'vue'

interface Props {
    show: boolean
    position?: string
}

const props = withDefaults(defineProps<Props>(), {
    position: 'bottom'
})
const emit = defineEmits(['update:show'])
const { show, position } = toRefs(props)
const clickMask = () => {
    emit('update:show', false)
}
</script>
<template>
    <div class="popup">
        <!-- 蒙层 -->
        <transition name="fade">
            <van-overlay :show="show" @click="clickMask"></van-overlay>
            <!--            <div class="popup-overlay" ></div>-->
        </transition>
        <!-- 弹出层 -->
        <transition :name="'slide-' + position">
            <div v-show="show" class="popup-content" :class="'popup-content-' + position">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<style scoped lang="less">
.popup-content {
    position: fixed;
    z-index: 2;
    background: #fff;
    transition: all 0.3s ease-in-out;
}

.popup-content-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
}
.popup-content-center {
    top: 50%;
    left: 50%;
    width: 80%;
    height: 200px;
    transform: translate3d(-50%, -50%, 0);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-bottom-enter-from,
.slide-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
}

.slide-center-enter-active {
    animation: bounce-in 0.3s;
}
//.slide-center-enter-from,
.slide-center-leave-active {
    animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
    0% {
        transform: translate3d(-50%, -50%, 0) scale(1);
    }
    50% {
        transform: translate3d(-50%, -50%, 0) scale(1.1);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) scale(1);
    }
}
</style>
