<template >
  <div
    class="bg-gray-200  ring-1 ring-gray-900/5 sm:mx-auto w-96 min-h-[460px] sm:rounded-lg border shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300">
    <div class="flex justify-center text-ellipsis">
      <nuxt-img provider="imagekit" :src="data.imageContent" width="240px" :modifiers="{ radius: 240, bg: '272B38' }"
        class=" m-2 border-spacing-4 rounded-full ring-2 ring-gray-100 ring-offset-2 " alt="" />
    </div>
    <div class="block w-full p-2 ">
      <div class="flex justify-center text-ellipsis">
        <FontChanger :color=data.titleColor v-model:content="data.titleContent" v-model:customfont="data.titleFont"
          v-model:customcolor="data.titleColor" v-model:customblend="data.titleBlend"
          v-model:customweight="data.titleWeight" v-model:customsize="data.titleSize"
          class="block mb-3 p-2 text-4xl font-semibold tracking-tight text-ellipsis overflow-hidden text-center" />
      </div>
      <div class="flex justify-center text-ellipsis">
        <FontChanger v-model:content="data.descriptionContent" v-model:customfont="data.descriptionFont"
          v-model:customcolor="data.descriptionColor" :color=data.descriptionColor
          v-model:customblend="data.descriptionBlend" v-model:customweight="data.descriptionWeight"
          v-model:customsize="data.descriptionSize"
          class="block tracking-tight text-ellipsis overflow-hidden text-xl  pt-4 sm:pt-0 text-center" />
      </div>
      <div class="flex justify-center text-ellipsis">
        <FontChanger v-model:content="data.dateContent" v-model:customfont="data.dateFont"
          v-model:customcolor="data.dateColor" :color=data.dateColor v-model:customblend="data.dateBlend"
          v-model:customweight="data.dateWeight" v-model:customsize="data.dateSize"
          class="block leading-normal font-bold text-ellipsis overflow-hidden text-sm text-center pt-4 sm:pt-2" />
      </div>
      <div class="flex justify-center text-ellipsis">
        <FontChanger v-model:content="data.locationContent" v-model:customfont="data.locationFont"
          v-model:customcolor="data.locationColor" :color=data.locationColor v-model:customblend="data.locationBlend"
          v-model:customweight="data.locationWeight" v-model:customsize="data.locationSize"
          class="block leading-normal font-bold text-ellipsis overflow-hidden text-sm text-center pt-2" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" >
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
  locationBlend: { type: String, default: "normal" },
  locationWeight: { type: String, default: "100" },
  locationSize: { type: String, default: "30px" },
  dateBlend: { type: String, default: "normal" },
  dateWeight: { type: String, default: "100" },
  dateSize: { type: String, default: "30px" },
  descriptionBlend: { type: String, default: "normal" },
  descriptionWeight: { type: String, default: "100" },
  descriptionSize: { type: String, default: "30px" },
  titleBlend: { type: String, default: "normal" },
  titleWeight: { type: String, default: "100" },
  titleSize: { type: String, default: "30px" },
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
  locationBlend: props.locationBlend,
  locationWeight: props.locationWeight,
  locationSize: props.locationSize,
  dateBlend: props.dateBlend,
  dateWeight: props.dateWeight,
  dateSize: props.dateSize,
  descriptionBlend: props.descriptionBlend,
  descriptionWeight: props.descriptionWeight,
  descriptionSize: props.descriptionSize,
  titleBlend: props.titleBlend,
  titleWeight: props.titleWeight,
  titleSize: props.titleSize,
});
</script>
