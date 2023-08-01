<template >
    <div class="flex justify-center">
        <component :is="getComponent(data.templateType)" :titleContent="data.titleContent" :titleFont="data.titleFont"
            :titleColor="data.titleColor" :descriptionContent="data.descriptionContent"
            :descriptionFont="data.descriptionFont" :descriptionColor="data.descriptionColor" :dateFont="data.dateFont"
            :dateColor="data.dateColor" :locationFont="data.locationFont" :locationColor="data.locationColor"
            :locationContent="data.locationContent" :imageContent="data.imageContent"
            :dateContent="`On ${data.when}   from ${data.from} till ${data.to}`" :dateBlend="data.dateBlend"
            :dateWeight="data.dateWeight" :dateSize="data.dateSize" :locationBlend="data.locationBlend"
            :locationWeight="data.locationWeight" :locationSize="data.locationSize"
            :descriptionBlend="data.descriptionBlend" :descriptionWeight="data.descriptionWeight"
            :descriptionSize="data.descriptionSize" :titleBlend="data.titleBlend" :titleWeight="data.titleWeight"
            :titleSize="data.titleSize" class="p-2 m-2">
        </component>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    id: String,
});
const data: Partial<EventCard> = reactive({});
if (!props.id) {
    throw new Error('id is required');
} else {
    const { get } = useCard();
    const response = await get(props.id);
    for (const [key, value] of Object.entries(response)) {
        // @ts-ignore
        data[key] = value;
    };
}
const getComponent = (name?: string) => {
    switch (name) {
        case 'CardEventImageBG':
            const imagebg = resolveComponent('CardEventImageBG');
            return imagebg;
        case 'CardEventImageCircle':
            const imagecircle = resolveComponent('CardEventImageCircle');
            return imagecircle;
        case 'CardEventImageTop':
            const imagetop = resolveComponent('CardEventImageTop');
            return imagetop;
        default:
            const imagedefault = resolveComponent('CardEventImageBG');
            return imagedefault;
    }
}
</script>
<style lang="">
    
</style>