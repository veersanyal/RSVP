<template>
  <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-end' }">
    <UButton
      color="white"
      :trailing-icon="icon"
      :label="label"
      variant="ghost"
      class="text-2xl"
    />
  </UDropdown>
</template>
<script lang="ts" setup>
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
  icon: {
    type: String,
    default: "i-heroicons-bars-3",
  },
  label: {
    type: String,
    default: "",
  },
});

let state = reactive({ currentUser: props.currentUser });
const { $logout, $fireBaseApp } = useNuxtApp();
if (process.client) {
  if (getAuth($fireBaseApp).currentUser) {
    state.currentUser = getAuth($fireBaseApp).currentUser || {};
    console.log(state.currentUser, "current user from firebaseauthcurrentuser");
  }
  onAuthStateChanged(getAuth($fireBaseApp), (user) => {
    if (user) {
      state.currentUser = user;
      console.log(state.currentUser, "current user from onAuthStateChanged");
    } else {
      state.currentUser = {};
      console.log(
        state.currentUser,
        "current user from onAuthStateChanged value reset"
      );
    }
    ProfileMenu = useMenu(state.currentUser).ProfileMenu;
  });
}
let { AppMenu, ProfileMenu, LoggedOutAppMenu, LoggedinAppMenu } = useMenu(
  state.currentUser
);
const handleLogout = async () => {
  const { $logout } = useNuxtApp();
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
console.log("currentuser in props", props.currentUser);

const items = computed(() => {
  if (state.currentUser && state.currentUser.uid) {
    if (props.onlyProfileMenu) {
      return [ProfileMenu, LoggedinAppMenu, signOutMenu];
    } else {
      return [AppMenu, ProfileMenu, LoggedinAppMenu, signOutMenu];
    }
  } else {
    if (props.onlyProfileMenu) {
      return [ProfileMenu, LoggedOutAppMenu];
    } else return [AppMenu, ProfileMenu, LoggedOutAppMenu];
  }
});
</script>
