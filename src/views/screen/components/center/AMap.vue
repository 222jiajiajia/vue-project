<template>
	<div id="mapContainer"></div>
</template>

<script setup>
import { onMounted, shallowRef } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

const map = shallowRef(null)

function initMap() {
  AMapLoader.load({
		key: '1e7166f6d0b8f7f9be02f4f0f0944a26',
		version: '2.0',
		plugins: [],
	}).then((MyAMap)=>{
		map.value = new MyAMap.Map('mapContainer',{
			mapStyle: 'amap://styles/darkblue'
		})
	}).catch(e=>{
		console.log(e);
	})
}

onMounted(() => {
	initMap()
})

defineExpose({
	map
})
</script>

<style>
#mapContainer {
	width: 100%;
	height: 100%;
}
.amap-logo, .amap-copyright {
	opacity: 0;
}
</style>