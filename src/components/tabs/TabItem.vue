<script lang="ts" setup></script>
<template>
    <div class="tabItem">
        <slot></slot>
    </div>
</template>
<style scoped lang="less">
.tabItem {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}
</style>
