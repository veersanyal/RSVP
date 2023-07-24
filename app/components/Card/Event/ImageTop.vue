<template >
    <div class="  bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto w-96 sm:rounded-lg">
        <nuxt-img provider="imagekit" :src="data.imageContent"
            class="h-64 w-full object-cover border-16 rounded-lg border-spacing-4" alt="" />
        <div class="flex-auto px-6 py-2">
            <span class="mb-2 flex items-center text-2xl font-bold" :color=data.titleColor>
                {{ data.titleContent }} </span>
            <p class="mb-2 text-base font-light" :color=data.descriptionColor>
                {{ data.descriptionContent }}
            </p>
            <p class="mb-2 text-base font-light" :color=data.dateColor>
                {{ data.dateContent }}
            </p>
            <p class="text-base font-light" :color=data.locationColor>
                {{ data.locationContent }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts" >
const props = defineProps({
    titleContent: { type: String, default: "This is a Title" },
    titleFont: { type: String, default: "Caveat" },
    titleColor: { type: String, default: "text-gray-900" },
    descriptionContent: { type: String, default: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud." },
    descriptionFont: { type: String, default: "Caveat" },
    descriptionColor: { type: String, default: "text-gray-900" },
    dateContent: { type: String, default: "24th June 2021 8:00AM - 12:00 PM" },
    dateFont: { type: String, default: "Caveat" },
    dateColor: { type: String, default: "text-gray-900" },
    imageContent: { type: String, default: "sunset.jpg" },
    imageFont: { type: String, default: "Caveat" },
    imageColor: { type: String, default: "text-gray-900" },
    locationContent: { type: String, default: "At the beach" },
    locationFont: { type: String, default: "Caveat" },
    locationColor: { type: String, default: "text-gray-900" },
});
const data = reactive({
    titleContent: props.titleContent,
    titleFont: props.titleFont,
    titleColor: props.titleColor,
    descriptionContent: props.descriptionContent,
    descriptionFont: props.descriptionFont,
    descriptionColor: props.descriptionColor,
    dateContent: props.dateContent,
    dateFont: props.dateFont,
    dateColor: props.dateColor,
    imageContent: props.imageContent,
    imageFont: props.imageFont,
    imageColor: props.imageColor,
    locationContent: props.locationContent,
    locationFont: props.locationFont,
    locationColor: props.locationColor,
});
</script>
