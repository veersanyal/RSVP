<template>
  <div class="relative w-72 bg-white rounded-lg shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300">
    <nuxt-img provider="imagekit" :src="data.imageContent" :modifiers="{ radius: 40, bg: '272B38' }"
      class=" h-96 object-cover p-2 w-full border rounded-lg backdrop-opacity-10" alt="Flower and sky" />
    <div class="absolute top-10 left-6 px-6 py-4 backdrop-opacity-90">
      <FontChanger v-model:content="data.titleContent" v-model:customfont="data.titleFont"
        v-model:customcolor="data.titleColor"
        class="block mb-3 text-3xl font-semibold tracking-tight text-gray overflow-hidden" />
      <FontChanger v-model:content="data.descriptionContent" v-model:customfont="data.descriptionFont"
        v-model:customcolor="data.descriptionColor" class="block leading-normal text-xl text-gray-800 pt-4 sm:pt-0" />
      <FontChanger v-model:content="data.dateContent" v-model:customfont="data.dateFont"
        v-model:customcolor="data.dateColor" class="block leading-normal font-bold text-sm text-gray-100 pt-4 sm:pt-2" />
      <FontChanger v-model:content="data.locationContent" v-model:customfont="data.locationFont"
        v-model:customcolor="data.locationColor" class="block leading-normal font-bold text-sm text-gray-100 pt-2" />
    </div>
  </div>
</template>
<script setup lang="ts">
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
