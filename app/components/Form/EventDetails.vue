<template>
    <div class="flex justify-center w-full">
        <div class="w-full sm:w-1/3 p-2 m-2 ">
            <FormKit type="form" id="EventDetail" submit-label="Next" :actions="false" #default="{ value }"
                @submit="submit">
                <div class="flex justify-center ">
                    <div class="text-2xl p-2 m-2 " :style="config.customLabelStyle"> Tell us more about your Event ? </div>
                </div>
                <FormKit type="text" name="Title" placeholder="Birthday " help="What do you want the event to be called ?"
                    validation="required" class="border" />
                <FormKit type="textarea" name="Description"
                    placeholder="We are Celebrating Veer's 1st Birthday. Please join us for a fun filled day."
                    help="What best describes your event" validation="required" />
                <FormKit type="date" name="When" placeholder="2023-01-01:05:00 PM" validation="required|after:2010-01-01"
                    help="When is your event" validation-visibility="live">
                </FormKit>
                <FormKit type="time" name="From" placeholder="15:30" validation-visibility="live"
                    help="when does your event start">
                </FormKit>
                <FormKit type="time" name="To" placeholder="20:30" help="When does your event end"
                    validation-visibility="live">
                </FormKit>
                <FormKit type="text" name="Location" placeholder="At the Beach" help="Where is your event"
                    validation-visibility="live">
                </FormKit>
                <button type="submit" form='EventDetail' @submit="submit"
                    class="hover:transform hover:scale-105 bg-blue-600 text-white hover:text-blue-600 hover:bg-blue-200 duration-300 align-center justify-center items-center p-2 px-6 rounded-lg border shadow-lg">
                    Next
                </button>
            </FormKit>
        </div>
    </div>
</template>
<script setup lang="ts">
const config = useAppConfig();
const submit = (value: any) => {
    console.log("submit", value);
    emit('detailschosen', value);
}
const emit = defineEmits<{
    detailschosen: [model: Partial<EventCard>]
}>()
useHead({
    link: [{ rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=Caveat&display=swap` }]
})
</script>
