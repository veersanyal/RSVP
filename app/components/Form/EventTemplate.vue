<template >
    <ContainerRibbon>
        <div class="grid grid-cols-3 auto-cols-max gap-5 m-2">
            <div v-for="(card, index) in cards" :key="index">
                <CardEventTextOnImage :titleContent="card.titleContent" :titleFont="card.titleFont"
                    :titleColor="card.titleColor" :descriptionContent="card.descriptionContent"
                    :descriptionFont="card.descriptionFont" :descriptionColor="card.descriptionColor"
                    :dateFont="card.dateFont" :dateColor="card.dateColor" :locationFont="card.locationFont"
                    :locationColor="card.locationColor" :locationContent="card.locationContent" :image="card.image"
                    :date-content="`on ${card.when}   from ${card.from} till ${card.to}`">
                </CardEventTextOnImage>
            </div>
        </div>
    </ContainerRibbon>
</template>
<script setup lang="ts">
const props = defineProps({
    titleContent: String,
    descriptionContent: String,
    locationContent: String,
    when: String,
    from: String,
    to: String
});
console.log("props", props);
const cards: Array<Partial<EventCard>> = useTemplateOptions(props);
</script>