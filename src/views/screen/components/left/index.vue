<template>
	<div ref="containerRef">
		<component
			v-for="item in components"
			:key="item.name"
			:is="item.component"
			class="es-screen-left-item"
			:name="item.name"
		>
			<Left1 />
		</component>
	</div>
</template>

<script setup>
import { shallowRef } from 'vue'
import { useSortable } from '@/utils/useSortable'

import Left1 from './Left1.vue'
import Left2 from './Left2.vue'

const components = shallowRef([
	{ name: 'left1', component: Left1 },
	{ name: 'left2', component: Left2 }
])

const { containerRef } = useSortable(components)
</script>

<style scoped>
.es-screen-left-item {
	width: 100%;
	height: 430px;
	background-color: var(--es-block-bg);
	padding: 16px;
	animation-name: slide;
}

.es-screen-left-item + .es-screen-left-item {
	margin-top: 20px;
}

.es-screen-left-item[name="left1"] {
	height: 550px;
	animation-duration: 0.8s;
}

.es-screen-left-item[name="left2"] {
	animation-duration: 1.5s;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  80% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>