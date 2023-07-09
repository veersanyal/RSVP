import { CardBlogArticles, CardEventArticle, CardEventEditCard } from '../.nuxt/components';
<template >
  <FormEventOptions />
  <ContainerRibbon>
    <div class="flex flex-wrap  justify-start overflow-auto  ">
      <CardEventTextOnImage class=""></CardEventTextOnImage>
      <CardEventTextOnImage class=""></CardEventTextOnImage>
      <CardEventTextOnImage class=""></CardEventTextOnImage>
      <CardEventArticle :title="data.title" :subtitle="data.subtitle" :cti="data.cti" :description="data.description"
        :image="data.image">
      </CardEventArticle>
      <CardEventArticle :title="data.title" :subtitle="data.subtitle" :cti="data.cti" :description="data.description"
        :image="data.image">
      </CardEventArticle>
      <CardEventTextOnImage class=""></CardEventTextOnImage>
      <CardEventTextOnImage class=""></CardEventTextOnImage>
      <CardEventTextOnImage class=""></CardEventTextOnImage>
      <CardEventArticle :title="data.title" :subtitle="data.subtitle" :cti="data.cti" :description="data.description"
        :image="data.image">
      </CardEventArticle>
    </div>
  </ContainerRibbon>
</template>
<script setup lang="ts">
const data = reactive({
  title: "This is a Title",
  subtitle: "This is a subtitle",
  description: "This is a description",
  image: "/images/nightSky.jpg",
  cti: "This is a cti",
  font: "Caveat",
  color: "text-gray-900"
})
</script>