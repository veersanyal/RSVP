<template>
    <FormEventOptions v-if="isEventTypeStep" @chosen="onEventypeSelected"></FormEventOptions>
    <FormEventDetails v-if="isEventDetailsStep" @detailschosen="onEventDetailsSelected"></FormEventDetails>
    <FormEventTemplate v-if="isEventTemplateStep" :titleContent="model.titleContent"
        :descriptionContent="model.descriptionContent" :locationContent="model.locationContent" :when="model.when"
        :from="model.from" :to="model.to"></FormEventTemplate>
</template>

<script setup lang="ts">
const isEventTypeStep = ref(true);
const isEventDetailsStep = ref(false);
const isEventTemplateStep = ref(false);
const isInviteStep = ref(false);
const onEventypeSelected = (type: string) => {
    isEventTypeStep.value = false;
    isEventDetailsStep.value = true;
    isEventTemplateStep.value = false;
    isInviteStep.value = false;
    model.EventTypeId = type;
}
const onEventDetailsSelected = (data: any) => {
    console.log("onEventDetialsSelected", data);
    isEventTypeStep.value = false;
    isEventDetailsStep.value = false;
    isEventTemplateStep.value = true;
    isInviteStep.value = false;
    model.titleContent = data.Title;
    model.descriptionContent = data.Description;
    model.when = data.When;
    model.from = data.From;
    model.to = data.To;
    model.locationContent = data.Location;
    console.log("model", model);
}
const onEventTemplateSelected = () => {
    isEventTypeStep.value = false;
    isEventDetailsStep.value = false;
    isEventTemplateStep.value = false;
    isInviteStep.value = true;
    console.log("onEventTemplateSelected");
}
const onInviteCompleted = () => {
    isEventTypeStep.value = false;
    isEventDetailsStep.value = false;
    isEventTemplateStep.value = false;
    isInviteStep.value = false;
}
const selectedEventType = ref('');
const model = reactive<Partial<EventCard>>({});
</script>