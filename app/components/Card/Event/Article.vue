<template >
    <div class="h-screen border px-2 bg-white py-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto w-96 sm:rounded-lg">
        <div
            class="relative h-full w-96 overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300">
            <img :src="props.image" class="h-80 w-full object-cover border-16 rounded-lg border-spacing-4" alt="" />
            <div class="flex-auto px-6 py-5">
                <span class="mb-2 flex items-center text-sm font-semibold">
                    <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"
                        height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" />
                    </svg>
                    {{ props.title }} </span>
                <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                    {{ props.subtitle }}
                </h3>
                <p class="mb-4 text-base font-light">
                    {{ props.description }}
                </p>
                <span
                    class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                    {{ props.cti }}
                </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" >
const props = defineProps({
    title: {
        type: String,
        default: "This is a Title",
    },
    subtitle: {
        type: String,
        default: "This is a subtitle",
    },
    image: {
        type: String,
        default: "/images/nightSky.jpg",
    },
    cti: {
        type: String,
        default: "This is a cti",
    },
    description: {
        type: String,
        default: "This is a description",
    }
});
</script>
