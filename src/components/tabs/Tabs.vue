<script lang="ts" setup>
import { toRefs, defineEmits, useSlots, onMounted, ref, reactive, defineExpose, watch } from 'vue'

interface Props {
    active: number
}

const props = withDefaults(defineProps<Props>(), {
    active: 0
})
const emit = defineEmits(['update:active'])
const { active } = toRefs(props)

const slot = useSlots()
const style = reactive({
    width: 0,
    transform: 'translate3d(0,0,0)'
})
const tabsRef = ref()
const tabsWidth = ref(0)
if (!slot.default) {
    throw Error('子元素不存在')
}
const tabsLength = ref(slot.default?.().length)
const transform = () => {
    style.transform = `translate3d(${(style.width / 2) * (1 + 4 * active.value) + 'px'},0,0)`
}
const t = 1 / tabsLength.value
const arr: number[] = []
for (let i = 0; i < tabsLength.value + 1; i++) {
    arr.push(t * i)
}
const handleClick = (e: PointerEvent) => {
    const position = e.x / tabsWidth.value
    for (let i = 0; i < tabsLength.value + 1; i++) {
        if (position < arr[i]) {
            emit('update:active', i - 1)
            break
        }
    }
}
watch(
    () => active.value,
    () => {
        transform()
    }
)
// watch(
//     () => slot.default?.().length,
//     () => {
//         tabsLength.value = slot.default?.().length
//         init()
//     }
// )
const init = () => {
    tabsWidth.value = tabsRef.value.clientWidth
    style.width = tabsWidth.value / tabsLength.value / 2
    console.log(style.width)
    transform()
}
onMounted(() => {
    init()
    // window.addEventListener('resize', () => {
    //     init()
    // })
})
</script>
<template>
    <div>
        <div ref="tabsRef" class="tabs" @click="handleClick">
            <slot></slot>
        </div>
        <div class="bottom-line" :style="{ ...style, width: style.width + 'px' }"></div>
    </div>
</template>
<style scoped lang="less">
.tabs {
    display: flex;
    height: 30px;
    > div {
        flex: 1;
        height: 30px;
    }
}

.bottom-line {
    border-radius: 1px;
    height: 2px;
    background: green;
    transition: transform 0.3s ease-in-out;
}
</style>
