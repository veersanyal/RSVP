<template >
    <div class="flex justify-center p-4">
        <div class="text-2xl" :style="appConfig.customLabelStyle">
            Choose a Style for the Invitation Card ?
        </div>
    </div>
    <div class=" flex p-4 flex-wrap justify-center justify-items-center items-center m-2">
        <CardEventImageBG :titleContent="data.titleContent" :titleFont="data.titleFont" :titleColor="data.titleColor"
            :descriptionContent="props.descriptionContent" :descriptionFont="data.descriptionFont"
            :descriptionColor="data.descriptionColor" :dateFont="data.dateFont" :dateColor="data.dateColor"
            :locationFont="data.locationFont" :locationColor="data.locationColor" :locationContent="data.locationContent"
            :imageContent="data.imageContent" :dateContent="`On ${data.when}   from ${data.from} till ${data.to}`"
            :dateBlend="data.dateBlend" :dateWeight="data.dateWeight" :dateSize="data.dateSize"
            :locationBlend="data.locationBlend" :locationWeight="data.locationWeight" :locationSize="data.locationSize"
            :descriptionBlend="data.descriptionBlend" :descriptionWeight="data.descriptionWeight"
            :descriptionSize="data.descriptionSize" :titleBlend="data.titleBlend" :titleWeight="data.titleWeight"
            :titleSize="data.titleSize" class="p-2 m-2" @click="emit('templatechosen', data, 'CardEventImageBG')">
        </CardEventImageBG>
        <CardEventImageTop :titleContent="data.titleContent" :titleFont="data.titleFont" :titleColor="data.titleColor"
            :descriptionContent="data.descriptionContent" :descriptionFont="data.descriptionFont"
            :descriptionColor="data.descriptionColor" :dateFont="data.dateFont" :dateColor="data.dateColor"
            :locationFont="data.locationFont" :locationColor="data.locationColor" :locationContent="data.locationContent"
            :imageContent="data.imageContent" :dateContent="`On ${data.when}   from ${data.from} till ${data.to}`"
            :dateBlend="data.dateBlend" :dateWeight="data.dateWeight" :dateSize="data.dateSize"
            :locationBlend="data.locationBlend" :locationWeight="data.locationWeight" :locationSize="data.locationSize"
            :descriptionBlend="data.descriptionBlend" :descriptionWeight="data.descriptionWeight"
            :descriptionSize="data.descriptionSize" :titleBlend="data.titleBlend" :titleWeight="data.titleWeight"
            :titleSize="data.titleSize" class="p-2 m-2" @click="emit('templatechosen', data, 'CardEventImageTop')">
        </CardEventImageTop>
        <CardEventImageCircle :titleContent="data.titleContent" :titleFont="data.titleFont" :titleColor="data.titleColor"
            :descriptionContent="data.descriptionContent" :descriptionFont="data.descriptionFont"
            :descriptionColor="data.descriptionColor" :dateFont="data.dateFont" :dateColor="data.dateColor"
            :locationFont="data.locationFont" :locationColor="data.locationColor" :locationContent="data.locationContent"
            :imageContent="data.imageContent" :dateContent="`On ${data.when}   from ${data.from} till ${data.to}`"
            :dateBlend="data.dateBlend" :dateWeight="data.dateWeight" :dateSize="data.dateSize"
            :locationBlend="data.locationBlend" :locationWeight="data.locationWeight" :locationSize="data.locationSize"
            :descriptionBlend="data.descriptionBlend" :descriptionWeight="data.descriptionWeight"
            :descriptionSize="data.descriptionSize" :titleBlend="data.titleBlend" :titleWeight="data.titleWeight"
            :titleSize="data.titleSize" class="p-2 m-2" @click="emit('templatechosen', data, 'CardEventImageCircle')">
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
    titleColor: "Gray",
    descriptionFont: "Caveat",
    descriptionColor: "Gray",
    dateFont: "Caveat",
    dateColor: "Gray",
    locationFont: "Caveat",
    locationColor: "Gray",
    locationBlend: "normal",
    locationWeight: "100",
    locationSize: "30px",
    dateBlend: "normal",
    dateWeight: "100",
    dateSize: "30px",
    descriptionBlend: "normal",
    descriptionWeight: "100",
    descriptionSize: "30px",
    titleBlend: "normal",
    titleWeight: "100",
    titleSize: "30px",
}
const data = { ...props, ...styleOptions }
const emit = defineEmits<{
    templatechosen: [data: typeof data, template: string]
}>();
</script>