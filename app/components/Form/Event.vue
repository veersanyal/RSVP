<template>
    <FormEventOptions v-if="display == `EVENTOPTIONS`" @chosen="onEventypeSelected"></FormEventOptions>
    <FormEventDetails v-if="display == `EVENTDETAILS`" @detailschosen="onEventDetailsSelected"></FormEventDetails>
    <FormImageOptions v-if="display == `EVENTIMAGES`" @imagechosen="onEventImageSelected"></FormImageOptions>
    <FormEventTemplate v-if="display == `EVENTTEMPLATES`" :titleContent="model.titleContent"
        :imageContent="model.imageContent" :descriptionContent="model.descriptionContent"
        :locationContent="model.locationContent" :when="model.when" :from="model.from" :to="model.to"></FormEventTemplate>
</template>

<script setup lang="ts">
const model = reactive<Partial<EventCard>>({});
const display = ref('EVENTOPTIONS');

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
const onEventTemplateSelected = () => {
    display.value = 'EVENTINVITES';
    console.log("onEventTemplateSelected");
}
const onInviteCompleted = () => {
    display.value = 'COMPLETE';
}
const selectedEventType = ref('');
</script>