<script lang="ts" setup>
import { toRefs, watch } from 'vue'

interface Props {
    applyShake: boolean
    inputValue: string
}
const props = defineProps<Props>()
const { applyShake, inputValue } = toRefs(props)
const emit = defineEmits(['update:inputValue', 'update:applyShake'])
watch(
    () => applyShake.value,
    (v) => {
        console.log(v)
        if (v) {
            setTimeout(() => {
                emit('update:applyShake', false)
            }, 820)
        }
    }
)
</script>
<template>
    <input
        :value="inputValue"
        :class="{ applyShake1: applyShake }"
        placeholder="shakeInput"
        @input="(e) => emit('update:inputValue', e.target.value)"
    />
</template>
<style scoped lang="less">
input {
    width: 200px;
}
@keyframes shake {
    10%,
    90% {
        transform: translate3d(1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(-2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(-4px, 0, 0);
    }
}

.applyShake1 {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>
