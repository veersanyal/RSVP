<template>
  <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-end' }">
    <UButton color="black" :label="props.label" :icon="icon" variant="ghost" class="text-2xl" />
    <template #leading>
      <UAvatar v-if="state.currentUser && state.currentUser.photoUrl" :src="state.currentUser.photoURL" size="3xs" />
    </template>
  </UDropdown>
</template>
<script  setup>
import { useMenu } from "@/composables/useMenu";
import { onAuthStateChanged, getAuth } from "firebase/auth";

let props = defineProps({
  currentUser: {
    type: Object,
  },
  onlyProfileMenu: {
    type: Boolean,
    default: false,
  },
  onlyAppMenu: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: "i-heroicons-bars-3",
  },
  label: {
    type: String,
    default: "",
  },
  avatar: {
    type: String
  }
});
let state = reactive({ currentUser: props.currentUser });
const { $logout, $fireBaseApp } = useNuxtApp();
if (process.client) {
  if (getAuth($fireBaseApp).currentUser) {
    state.currentUser = getAuth($fireBaseApp).currentUser || {};
  }
  onAuthStateChanged(getAuth($fireBaseApp), (user) => {
    if (user) {
      state.currentUser = user;
    } else {
      state.currentUser = {};
    }
    ProfileMenu = useMenu(state.currentUser).ProfileMenu;
  });
}
let { AppMenu, ProfileMenu, LoggedOutAppMenu, LoggedinAppMenu } = useMenu(
  state.currentUser
);
const handleLogout = async () => {
  await $logout();
  await navigateTo("/");
  state.currentUser = {};
};

const signOutMenu = [
  {
    label: "Sign Out",
    icon: "i-heroicons-arrow-left-on-rectangle",
    click: handleLogout,
  },
];

const items = computed(() => {
  if (state.currentUser && state.currentUser.uid) {
    if (props.onlyProfileMenu) {
      return [ProfileMenu, LoggedinAppMenu, signOutMenu];
    } else if (props.onlyAppMenu) {
      return [AppMenu]
    } else {
      return [AppMenu, ProfileMenu, LoggedinAppMenu, signOutMenu];
    }
  } else {
    if (props.onlyProfileMenu) {
      return [ProfileMenu, LoggedOutAppMenu];
    } else if (props.onlyAppMenu) {
      return [AppMenu]
    } else return [AppMenu, ProfileMenu, LoggedOutAppMenu];
  }
});
</script>
