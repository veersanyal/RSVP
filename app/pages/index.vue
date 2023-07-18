<template >
  <FormEvent />
</template>
<script setup lang="ts">
const data: Partial<EventCard> = {
  titleContent: 'This is a title', descriptionContent: 'This is a description',
  when: 'March 07 2023', from: "5:00 PM", to: "10:00 PM", locationContent: 'At the Beach'
};
const cards = useTemplateOptions(data);
</script>