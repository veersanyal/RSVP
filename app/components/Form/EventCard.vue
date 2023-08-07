<template >
    <div class="flex justify-center p-4">
        <div class="text-2xl" :style="appConfig.customLabelStyle">
            Edit Text and Styles and Save
        </div>
    </div>
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
    <div class="block p-2 m-2">
        <div class="flex justify-center content-center">
            <button @click="emit('save', data)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
const props = defineProps({
    model: {
        type: Object as PropType<EventCard>,
        default: {
            titleContent: "This is a Title",
            titleFont: "Caveat",
            titleColor: "text-black",
            descriptionContent: "Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.",
            descriptionFont: "Caveat",
            descriptionColor: "text-black",
            when: "24th June 2021",
            from: "8:00AM",
            to: "12:00PM",
            dateFont: "Caveat",
            dateColor: "text-black",
            imageContent: "sunset.jpg",
            locationContent: "At the beach",
            locationFont: "Caveat",
            locationColor: "text-black",
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
            templateType: "CardEventImageBG",
        }
    },
});
const data = reactive({
    titleContent: props.model.titleContent || "",
    titleFont: props.model.titleFont,
    titleColor: props.model.titleColor,
    descriptionContent: props.model.descriptionContent,
    descriptionFont: props.model.descriptionFont,
    descriptionColor: props.model.descriptionColor,
    when: props.model.when,
    from: props.model.from,
    to: props.model.to,
    dateFont: props.model.dateFont,
    dateColor: props.model.dateColor,
    imageContent: props.model.imageContent,
    locationContent: props.model.locationContent,
    locationFont: props.model.locationFont,
    locationColor: props.model.locationColor,
    locationBlend: props.model.locationBlend,
    locationWeight: props.model.locationWeight,
    locationSize: props.model.locationSize,
    dateBlend: props.model.dateBlend,
    dateWeight: props.model.dateWeight,
    dateSize: props.model.dateSize,
    descriptionBlend: props.model.descriptionBlend,
    descriptionWeight: props.model.descriptionWeight,
    descriptionSize: props.model.descriptionSize,
    titleBlend: props.model.titleBlend,
    titleWeight: props.model.titleWeight,
    titleSize: props.model.titleSize,
    templateType: props.model.templateType,
});
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
const emit = defineEmits<{
    save: [data: EventCard]
}>()
</script>