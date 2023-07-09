<template>
  <div class="flex justify-center items-center overflow-auto ">
    <div v-for="menu in  menus " :key="menu.label" class="hidden md:flex">
      <div class="flex px-2 hover:font-bold hover:underline">
        <NuxtLink v-if="menu.to" class=" cursor-pointer text-lg font-sans w-full whitespace-nowrap px-2 py-0 flex"
          :to="menu.to">
          <div v-if="menu.icon" class="border p-0 m-0 text-3xl" :class="menu.icon" />
          <div v-if="menu.label" class="w-full item-center px-2 pt-0 align-middle cursor-pointer"
            :style="config.customLabelStyle">
            {{ menu.label }}
          </div>
        </NuxtLink>
        <div v-if="menu.click" class="text-sm font-sans cursor-pointer w-full whitespace-nowrap px-2 flex"
          @click="menu.click">
          <i v-if="menu.icon" class="border" :class="menu.icon" />
          <div v-if="menu.label" :style="config.customLabelStyle"
            class="w-full item-center px-2 pt-1 align-middle cursor-pointer">
            {{ menu.label }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="props.showProfileMenu" class="hidden md:flex">
      <AppDropdown :currentUser="props.currentUser" :onlyProfileMenu="showonlyProfileMenu" icon="i-heroicons-user-circle"
        label="Profile"></AppDropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMenu } from "@/composables/useMenu";
const props = defineProps({
  currentUser: {
    type: Object,
  },
  showProfileMenu: {
    type: Boolean,
    default: false
  },
});
const { AppMenu } = useMenu(props.currentUser);
const menus = AppMenu;
const showonlyProfileMenu = true;
const config = useAppConfig();
</script>
