<template>
    <FormEventOptions v-if="display == `EVENTOPTIONS`" @chosen="onEventypeSelected"></FormEventOptions>
    <FormEventDetails v-if="display == `EVENTDETAILS`" @detailschosen="onEventDetailsSelected"></FormEventDetails>
    <FormImageOptions v-if="display == `EVENTIMAGES`" @imagechosen="onEventImageSelected"></FormImageOptions>
    <FormEventTemplate v-if="display == `EVENTTEMPLATES`" :titleContent="model.titleContent"
        :imageContent="model.imageContent" :descriptionContent="model.descriptionContent"
        :locationContent="model.locationContent" :when="model.when" :from="model.from" :to="model.to"
        @templatechosen="onEventTemplateSelected"></FormEventTemplate>
    <FormEventCard v-if="display == `EVENTCARD`" :model="model" @save="onSave"></FormEventCard>
    <UNotification v-if="display == `EVENTCARD` && showNotification" description="This is a notification."
        title="Event Created" :timeout="timeout" id="id"
        :actions="[{ variant: 'solid', color: 'primary', label: 'Share' }, { variant: 'outline', color: 'primary', label: 'Other' }]" />
</template>

<script setup lang="ts">
const model = reactive<Partial<EventCard>>({});
const display = ref('EVENTOPTIONS');
const showNotification = ref(false);
const timeout = 6000;
const onEventypeSelected = (type: string) => {
    display.value = 'EVENTDETAILS';
    model.eventTypeId = type;
}
const onEventDetailsSelected = (data: any) => {
    display.value = 'EVENTIMAGES';
    model.titleContent = data.Title;
    model.descriptionContent = data.Description;
    model.when = data.When;
    model.from = data.From;
    model.to = data.To;
    model.locationContent = data.Location;
}
const onEventImageSelected = (data: any) => {
    model.imageContent = data;
    display.value = 'EVENTTEMPLATES';
}
const onEventTemplateSelected = async (data: any, template: string) => {
    display.value = 'EVENTCARD';
    const modeldata: EventCard = { ...model, ...data };
    for (const [key, value] of Object.entries(modeldata)) {
        // @ts-ignore
        model[key] = value;
    }
    console.log('from save', data);
    model.templateType = template;
}
const onSave = async (data: EventCard) => {
    const modeldata: EventCard = { ...model, ...data };
    for (const [key, value] of Object.entries(modeldata)) {
        // @ts-ignore
        model[key] = value;
    }
    console.log('from save', model);
    const { save } = useCard();
    const card = await save(model);
    showNotification.value = true;
};

const onInviteCompleted = () => {
    display.value = 'COMPLETE';
}
const selectedEventType = ref('');
</script>
