<template>
	<div ref="chartRef" class="es-chart"></div>
</template>

<script setup>
import { onMounted, shallowRef, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
	option: {
		type: Object,
		required: true,
		default: () => ({})
	},
	loading: Boolean
})
const chartRef = shallowRef(null)

const chart = shallowRef(null)
function init() {
	if (props.option && chartRef.value) {
		chart.value = echarts.init(chartRef.value)
		setOption(props.option)
	}
}
function setOption(option, notMerge, lazyUpdate) {
	if (chart.value) {
		chart.value.setOption(option, notMerge, lazyUpdate)
	}
}

function resize() {
	if (chart.value) {
		chart.value.resize()
	}
}

watch(() => props.option, () => {
	setOption(props.option)
})

watch(() => props.loading, (val) => {
	if (!chart.value) return
	if (val) {
		chart.value.showLoading()
	} else {
		chart.value.hideLoading()
	}
})

onMounted(() => {
	init()
})

defineExpose({
	chart,
	setOption,
	resize
})
</script>

<style scoped>
.es-chart {
	width: 100%;
	height: 100%;
}
</style>