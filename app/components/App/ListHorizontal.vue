<template>
  <div class="flex justify-center items-center overflow-auto">
    <div v-for="menu in menus" :key="menu.label" class="hidden md:flex">
      <div class="flex px-2 hover:font-bold hover:underline">
        <NuxtLink
          v-if="menu.to"
          class="text-sm cursor-pointer font-sans w-full whitespace-nowrap px-2 flex"
          :to="menu.to"
        >
          <div
            v-if="menu.icon"
            class="border p-0 m-0 text-2xl"
            :class="menu.icon"
          />
          <div
            v-if="menu.label"
            class="w-full item-center px-2 pt-1 align-middle cursor-pointer"
          >
            {{ menu.label }}
          </div>
        </NuxtLink>
        <div
          v-if="menu.click"
          class="text-sm font-sans cursor-pointer w-full whitespace-nowrap px-2 flex"
          @click="menu.click"
        >
          <i v-if="menu.icon" class="border" :class="menu.icon" />

          <div
            v-if="menu.label"
            class="w-full item-center px-2 pt-1 align-middle cursor-pointer"
          >
            {{ menu.label }}
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:flex">
      <AppDropdown
        :currentUser="props.currentUser"
        :onlyProfileMenu="showonlyProfileMenu"
        icon="i-heroicons-user-circle"
        label="Profile"
      ></AppDropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMenu } from "@/composables/useMenu";
const props = defineProps({
  currentUser: {
    type: Object,
  },
});
const { AppMenu } = useMenu(props.currentUser);
const menus = AppMenu;
const showonlyProfileMenu = true;
</script>
