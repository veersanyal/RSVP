// Search Bar with placeholder as a prop and search event as an emit
<template>
  <form @submit.prevent="$emit('search', searchInput)">
    <div class="relative">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <Icon name="material-symbols:search" size="24" class="text-primary" />
      </div>
      <input
        type="search"
        v-model="searchInput"
        id="default-search"
        class="block w-full rounded-lg bg-white border p-2 pl-10 text-sm text-primary focus:border focus:outline-none focus:border-gray-200 hover:border-gray-200"
        :placeholder="placeholder"
        required
      />
      <button
        type="submit"
        class="absolute bottom-0 right-0 rounded-lg bg-primarybtnbg px-4 py-2 text-sm font-medium text-white focus:outline-none"
      >
        Search
      </button>
    </div>
  </form>
</template>
<script lang="ts" setup>
let searchInput = "";
defineProps({
  placeholder: {
    type: String,
    default: "Search Templates ...",
  },
});
defineEmits(["search"]);
</script>
