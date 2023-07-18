<template >
    <div class="flex justify-center p-4">
        <div class="text-2xl" :style="appConfig.customLabelStyle">
            What is the Occcasion ?
        </div>
    </div>
    <div class=" flex justify-center pb-4 ">
        <div class=" w-full sm:w-3/4 flex justify-start sm:justify-center overflow-x-auto sm:flex-wrap ">
            <div v-for="option in appConfig.eventTypeList" :key="option.id">
                <button type="button" @click="emit('chosen', option.id)"
                    class="hover:transform hover:scale-105 hover:text-blue-600 hover:bg-blue-200 duration-300 align-center justify-center items-center m-1 h-24 w-32 rounded-xl border shadow-lg">
                    <Icon :name="option.icon" size="4em" @click="emit('chosen', option.id)"> </Icon>
                    <div class=" text-lg pr-2 hover:font-semibold" @click="emit('chosen', option.id)"
                        :style="appConfig.customLabelStyle">{{ option.label }}
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
useHead({
    link: [{ rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=Caveat&display=swap` }]
})
const emit = defineEmits<{
    chosen: [id: string]
}>();
</script>
