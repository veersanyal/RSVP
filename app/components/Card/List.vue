<template >
    <div v-for="data in cards">
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
const { getAll } = useCard();
const cards = await getAll();
const getComponent = (name: string) => {
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
};
console.log(cards);
</script>
<style lang="">
    
</style>