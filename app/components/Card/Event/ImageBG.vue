<template>
  <div
    class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center w-96 min-h-[460px] border shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300 "
    :style="{
      'background-image': 'url(https://ik.imagekit.io/ztutmqiyjy/rsvp/' + data.imageContent + ')'
    }">
    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full text-ellipsis overflow-hidden">
      <div class=" flex h-full items-center justify-center p-2">
        <div>
          <FontChanger :color=data.titleColor v-model:content="data.titleContent" v-model:customfont="data.titleFont"
            v-model:customcolor="data.titleColor"
            class="block p-2 mb-3 text-4xl font-semibold tracking-tight overflow-hidden mix-blend-plus-lighter" />
          <FontChanger v-model:content="data.descriptionContent" v-model:customfont="data.descriptionFont"
            v-model:customcolor="data.descriptionColor" :color=data.descriptionColor
            class="block leading-normal text-xl  pt-4 sm:pt-0 mix-blend-plus-lighter" />
          <FontChanger v-model:content="data.dateContent" v-model:customfont="data.dateFont"
            v-model:customcolor="data.dateColor" :color=data.dateColor
            class="block leading-normal font-bold text-sm  pt-4 sm:pt-2 mix-blend-plus-lighter" />
          <FontChanger v-model:content="data.locationContent" v-model:customfont="data.locationFont"
            v-model:customcolor="data.locationColor" :color=data.locationColor
            class="block leading-normal font-bold text-sm  pt-2 mix-blend-plus-lighter" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  titleContent: { type: String, default: "This is a Title" },
  titleFont: { type: String, default: "Caveat" },
  titleColor: { type: String, default: "text-black" },
  descriptionContent: { type: String, default: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud." },
  descriptionFont: { type: String, default: "Caveat" },
  descriptionColor: { type: String, default: "text-black" },
  dateContent: { type: String, default: "24th June 2021 8:00AM - 12:00 PM" },
  dateFont: { type: String, default: "Caveat" },
  dateColor: { type: String, default: "text-black" },
  imageContent: { type: String, default: "sunset.jpg" },
  imageFont: { type: String, default: "Caveat" },
  imageColor: { type: String, default: "text-black" },
  locationContent: { type: String, default: "At the beach" },
  locationFont: { type: String, default: "Caveat" },
  locationColor: { type: String, default: "text-black" },
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
