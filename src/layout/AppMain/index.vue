<template>
	<div class="wrapper">
		<SideBar />
		<div class="content">
			<AppHeader />
			<router-view />
		</div>
	</div>
</template>

<script setup lang="ts">
import SideBar from "./components/SideBar.vue"
import AppHeader from "./components/appHeader.vue"
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
computed(() => {
	const res = store.state.app.sidebar.opened
	const width = res ? "calc(100% - 60px)" : "calc(100% - 200px)"
	document.getElementsByTagName('body')[0].style.setProperty('--content-lengt', width)
	return true
})
</script>

<style scoped lang="scss">
$content-length: var(--content-lengt, calc(100% - 200px));
.wrapper {
	display: flex;
	.content {
		width: $content-length;
		height: 100%;
	}
}
</style>