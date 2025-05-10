<template></template>

<script setup lang="js" name="test">
import { useAttrs,defineProps } from 'vue';

    const props = defineProps(["name"]);
    console.log(props.name);
    const attrs = useAttrs()
    const slots = defineSlots();
</script>

<style></style>