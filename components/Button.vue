<template>
    <p data-testid="count">{{ doubleValue }}</p>
    <p>{{ hello }}</p>
    <button class="udin" @click="store.increment()">{{ name }}</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

// props
defineProps({
    name: { require: true, type: String }
})

//store
const store = useCounterStore()
const doubleValue = computed(() => store.doubleCount)

// composable
const { hello } = useHello()

</script>