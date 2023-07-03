// Simple MEnu Icon Class with icon, title and subtitle as props
<template>
  <div class="flex">
    <Icon v-if="props.icon" :name="props.icon" size="48" class="text-primary" />
    <div class="w-full item-center md:px-2 xs:hidden">
      <div
        v-if="props.title"
        class="text-sm font-bold w-full whitespace-nowrap pt-1"
      >
        {{ props.title }}
      </div>
      <div v-if="props.subtitle" class="text-xs font-light whitespace-nowrap">
        {{ props.subtitle }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: { type: String },
  title: { type: String },
  subtitle: { type: String },
});
</script>
<style lang=""></style>
