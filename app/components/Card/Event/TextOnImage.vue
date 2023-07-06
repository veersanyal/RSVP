<template>
  <div class="h-screen border px-2 bg-white py-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto min-w-96 sm:rounded-lg">
    <div
      class="relative h-full w-96 overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300">
      <img class="object-cover h-5/6 w-full p-4 border rounded-lg" :src="props.image" alt="Flower and sky" />
      <div class="absolute top-10 left-6 px-6 py-4">
        <FontChanger v-model:content="data.titleContent" v-model:customfont="data.titleFont"
          v-model:customcolor="data.titleColor" class="block mb-3 text-3xl font-semibold tracking-tight text-gray" />
        <FontChanger v-model:content="data.descriptionContent" v-model:customfont="data.descriptionFont"
          v-model:customcolor="data.descriptionColor" class="block leading-normal text-xl text-gray-800 pt-4 sm:pt-0" />
        <FontChanger v-model:content="data.dateContent" v-model:customfont="data.dateFont"
          v-model:customcolor="data.dateColor"
          class="block leading-normal font-bold text-sm text-gray-100 pt-4 sm:pt-2" />
        <FontChanger v-model:content="data.locationContent" v-model:customfont="data.locationFont"
          v-model:customcolor="data.locationColor" class="block leading-normal font-bold text-sm text-gray-100 pt-2" />
      </div>
      <div class="flex justify-end align-bottom">
        <button class="p-2 px-8 my-4 z-30 justify-end rounded-md m-2 bg-indigo-500 hover:bg-indigo-700 text-white">
          Edit
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const data = reactive({
  titleContent: "This is a Title",
  titleFont: "Caveat",
  titleColor: "text-gray-900",
  descriptionContent: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
  descriptionFont: "Caveat",
  descriptionColor: "text-gray-900",
  dateContent: "24th June 2021 8:00AM - 12:00 PM",
  dateFont: "Caveat",
  dateColor: "text-gray-900",
  imageContent: "/images/sunset.jpg",
  imageFont: "Caveat",
  imageColor: "text-gray-900",
  locationContent: "At the beach",
  locationFont: "Caveat",
  locationColor: "text-gray-900"
});
const props = defineProps({
  title: { type: String, default: "This is the title" },
  description: { type: String, default: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud." },
  date: { type: String, default: "24th June 2021 8:00AM - 12:00 PM" },
  location: { type: String, default: "At the beach" },
  image: { type: String, default: "/images/sunset.jpg" }
});
</script>
