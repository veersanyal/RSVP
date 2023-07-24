<template >
    <div class="flex justify-center p-4">
        <div class="text-2xl" :style="appConfig.customLabelStyle">
            Choose a Style for the Invitation Card ?
        </div>
    </div>
    <div class=" flex p-4 flex-wrap justify-center justify-items-center items-center  m-2">
        <CardEventImageBackground :titleContent="data.titleContent" :titleFont="data.titleFont"
            :titleColor="data.titleColor" :descriptionContent="props.descriptionContent"
            :descriptionFont="data.descriptionFont" :descriptionColor="data.descriptionColor" :dateFont="data.dateFont"
            :dateColor="data.dateColor" :locationFont="data.locationFont" :locationColor="data.locationColor"
            :locationContent="data.locationContent" :imageContent="data.imageContent"
            :dateContent="`On ${data.when}   from ${data.from} till ${data.to}`" class="p-2 m-2">
        </CardEventImageBackground>
        <CardEventImageTop :titleContent="data.titleContent" :titleFont="data.titleFont" :titleColor="data.titleColor"
            :descriptionContent="data.descriptionContent" :descriptionFont="data.descriptionFont"
            :descriptionColor="data.descriptionColor" :dateFont="data.dateFont" :dateColor="data.dateColor"
            :locationFont="data.locationFont" :locationColor="data.locationColor" :locationContent="data.locationContent"
            :imageContent="data.imageContent" :dateContent="`On ${data.when}   from ${data.from} till ${data.to}`"
            class="p-2 m-2">
        </CardEventImageTop>
        <CardEventImageCircle :titleContent="data.titleContent" :titleFont="data.titleFont" :titleColor="data.titleColor"
            :descriptionContent="data.descriptionContent" :descriptionFont="data.descriptionFont"
            :descriptionColor="data.descriptionColor" :dateFont="data.dateFont" :dateColor="data.dateColor"
            :locationFont="data.locationFont" :locationColor="data.locationColor" :locationContent="data.locationContent"
            :imageContent="data.imageContent" :dateContent="`On ${data.when}   from ${data.from} till ${data.to}`"
            class="p-2 m-2">
        </CardEventImageCircle>
    </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
const props = defineProps({
    titleContent: String,
    imageContent: String,
    descriptionContent: String,
    locationContent: String,
    when: String,
    from: String,
    to: String
});
const styleOptions = {
    titleFont: "Caveat",
    titleColor: "#7c2d12",
    descriptionFont: "Caveat",
    descriptionColor: "#7c2d12",
    dateFont: "Caveat",
    dateColor: "#7c2d12",
    locationFont: "Caveat",
    locationColor: "#7c2d12",
}
const data = { ...props, ...styleOptions }
</script>