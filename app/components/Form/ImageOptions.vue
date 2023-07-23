<template >
    <div class="flex justify-center ">
        <div class="text-2xl p-2 m-2 " :style="config.customLabelStyle"> Choose an Image for the Event </div>
    </div>
    <div class="flex justify-center">
        <div class="w-full flex justify-center overflow-x-auto  flex-wrap">
            <div v-for="(card, index) in  cards " :key="index" class="p-2">
                <nuxt-img provider="imagekit" :src="card" :modifiers="{ radius: 10, bg: '272B38' }"
                    class="h-24 w-24 sm:h-48 sm:w-48 object-cover  border rounded-lg backdrop-opacity-10 cursor-pointer hover:transform hover:scale-105 duration-300 hover:shadow-lg hover:border-purple-700 hover:border-4"
                    alt="Flower and sky" @click="emit('imagechosen', card)" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    event: String,
});
const config = useAppConfig();
const cards = useImageOptions(props.event as string);
const emit = defineEmits<{
    imagechosen: [card: string]
}>();
</script>