<template>
	<div class="home">{{ a }}</div>
	<div class="home">{{ b }}</div>
</template>

<script setup lang="ts">
import { Ref, ref } from "@vue/reactivity"
const a: Ref<number> = ref(1)
const b = ref(2)

</script>
