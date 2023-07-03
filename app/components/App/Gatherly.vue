<!---- Large Medium Screen App Bar  uses MenuIcon Component Search Component 
       Needs the Search Handler function to be implemented 
-->
<template>
  <!-- Wrapper div for Navbar-->
  <div class="w-screen h-16 bg-navbg py-2 flex justify-between overflow-hidden">
    <div class="flex justify-start">
    <img
        :src="appConfig.logoImage ? appConfig.logoImage : '/logo.svg'"
        class="justify-center h-8 m-1 border"
      />
    <div class="flex align-middle">
      <AppListHorizontal :currentUser="{ ...state.currentUser }"></AppListHorizontal>
    </div>
    </div>
      <AppSearch class="w-2/5 hidden md:block px-2 my-1 min-w-60" @search="handleSearch">
    </AppSearch>
    <AppDropdown v-if="state.currentUser"
      :currentUser="state.currentUser"
      :onlyProfileMenu="onlyProfileMenu"
      icon="i-heroicons-user-circle"
      :avatar="state.currentUser.photoURL"
      :label="state.currentUser.displayName?state.currentUser.displayName:'Sign In for Free' " class="px-2"></AppDropdown >
    <!-- horizontal menu 
    <div class="flex align-middle">
      <AppListHorizontal :currentUser="{ ...currentUser }"></AppListHorizontal>
    </div>
    -->
  </div>
</template>
<script setup lang="ts">
import { onAuthStateChanged, getAuth } from "firebase/auth";

const handleSearch = (searchInput: String) => {
  console.log(searchInput);
};
const onlyProfileMenu = true;
const appConfig = useAppConfig();
const state: any = reactive({currentUser: {}});
let popperstate = ref(false);
const { $logout, $fireBaseApp } = useNuxtApp();
if (process.client) {
  if (getAuth($fireBaseApp).currentUser) {
    state.currentUser = getAuth($fireBaseApp).currentUser;
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
  });
}
const LoggedInAppMenu = [
  { title: "My Orders", icon: "mdi:package", link: "/" },
  { title: "My Profile", icon: "mdi:account", link: "/" },
  { title: "Help & Support", icon: "mdi:help-box", link: "/logout" },
  { title: "Give Feedback", icon: "mdi:comment", link: "/logout" },
  { title: "Settings & Privacy", icon: "mdi:gear", link: "/" },
  {
    title: "Logout",
    icon: "mdi:logout",
    fn: async () => {
      await $logout();
      await navigateTo("/");
    },
  },
];
const LoggedOutAppMenu = [
  {
    title: "Sign In",
    icon: "mdi:login",
    fn: async () => {
      popperstate.value = !popperstate.value;
      await navigateTo("/login");
    },
  },
];
const MainMenu = [
  { title: "HOME", link: "/" },
  { title: "ABOUT US", link: "/about-us" },
  { title: "BLOG", link: "/blog" },
  { title: "SHOP", link: "/shop" },
];
</script>
