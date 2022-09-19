<script lang="ts" setup>
import Popup from '@/components/popup/Popup.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import TabItem from '@/components/tabs/TabItem.vue'
import LoadingSvg from '@/components/loading-svg/LoadingSvg.vue'
import { ref } from 'vue'
const show = ref(false)
const position = ref('center')
const handleClick = (p: string) => {
    position.value = p
    show.value = true
}
const showLoading = ref(true)
const active = ref(0)
</script>
<template>
    <LayoutContainer>
        <van-button @click="handleClick('center')">popup-center</van-button>
        <van-button @click="handleClick('bottom')">popup-bottom</van-button>
        <Popup v-model:show="show" :position="position"> 这是popup </Popup>
        <Tabs v-model:active="active">
            <TabItem>123</TabItem>
            <TabItem>456</TabItem>
            <TabItem>789</TabItem>
            <TabItem>789</TabItem>
        </Tabs>
        <LoadingSvg v-model:show="showLoading"></LoadingSvg>
    </LayoutContainer>
</template>
<style lang="less" scoped>
.btn {
    > div {
        margin-top: 10px;
    }
}
</style>
