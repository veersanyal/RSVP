<template >
    <div class=" flex justify-center w-full">
        <div class=" w-full flex justify-start overflow-x-auto flex-nowrap ">
            <div v-for="(card, index) in cards" :key="index" class="p-2">
                <CardEventTextOnImage :titleContent="card.titleContent" :titleFont="card.titleFont"
                    :titleColor="card.titleColor" :descriptionContent="card.descriptionContent"
                    :descriptionFont="card.descriptionFont" :dateFont="card.dateFont" :dateColor="card.dateColor"
                    :locationFont="card.locationFont" :locationColor="card.locationColor"
                    :locationContent="card.locationContent" :imageContent="card.imageContent"
                    :dateContent="`on ${card.when}   from ${card.from} till ${card.to}`">
                </CardEventTextOnImage>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    titleContent: String,
    imageContent: String,
    descriptionContent: String,
    locationContent: String,
    when: String,
    from: String,
    to: String
});
const cards: Array<Partial<EventCard>> = useTemplateOptions(props);
console.log("cards", cards);
</script>