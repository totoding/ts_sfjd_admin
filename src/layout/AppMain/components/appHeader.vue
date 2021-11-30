<template>
	<div class="header-container">
		<div class="left-icon">
			<el-icon @click="toggle" :class="isRotate ? 'rotate' : ''">
				<Expand />
			</el-icon>
		</div>
		<div class="right-info"></div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Expand } from '@element-plus/icons'
import { useStore } from '@/store'
import { AppMutationTypes } from '@/store/modules/app/mutations'

const store = useStore()
const toggle = () => {
	store.commit(AppMutationTypes.TOGGLE_SIDEBAR)
}
const isRotate = computed(() => {
	return store.state.app.sidebar.opened
})
</script>

<style scoped lang="scss">
.header-container {
	height: 50px;
	width: 100%;
	border-bottom: 1px solid #e6e6e6;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.el-icon {
		font-size: 28px;
		cursor: pointer;
		color: rgb(156, 156, 154);
		transition: transform 0.5s;
		margin-left: 5px;
		&.rotate {
			transform: rotate(90deg);
		}
	}
}
</style>