<template>
    <div id="view-scroll">
        <slot />
    </div>
</template>
<style scoped>
#view-scroll {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 15px;
}
</style>
