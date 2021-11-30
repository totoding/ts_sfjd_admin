<template>
	<el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
		<el-menu-item index="4">
			<el-icon>
				<setting />
			</el-icon>
			<template #title>123</template>
		</el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { Setting } from '@element-plus/icons'

const store = useStore()
const isCollapse = computed(() => {
	return store.state.app.sidebar.opened
})
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
}
</style>