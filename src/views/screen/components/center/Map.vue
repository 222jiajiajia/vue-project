<template>
	<div class="es-block">
		<Title>商家分布</Title>
    <div style="width: 100%;height: 98%;">
			<Chart :option="option" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '../Title.vue'
import Chart from '@/components/chart/Chart.vue'
import allData from '@/assets/data/map.json'
import chinaJson from '@/assets/data/china.json'
import * as echarts from 'echarts'

echarts.registerMap('china', chinaJson)
const option = ref({
	geo: {
		type: 'map',
		map: 'china',
		top: '5%',
		bottom: '5%',
		itemStyle: {
			areaColor: '#2E72BF',
			borderColor: '#333'
		}
	},
	legend: {
		left: '5%',
		bottom: '5%',
		orient: 'vertical',
		data: allData.map(item => item.name),
		textStyle: {
			color: '#aaa'
		}
	},
	series: allData.map(item => {
		return {
			type: 'effectScatter',
			rippleEffect: {
				scale: 5,
				brushType: 'stroke'
			},
			name: item.name,
			data: item.children,
			coordinateSystem: 'geo'
		}
	})
})
</script>

<style scoped>
.es-block {
	width: 100%;
	height: 100%;
	padding: 16px;
}
</style>