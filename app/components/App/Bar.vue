import { onAuthStateChanged, getAuth } from 'firebase/auth';
<!---- Large Medium Screen App Bar  uses MenuIcon Component Search Component 
       Needs the Search Handler function to be implemented 
-->
<template>
  <!-- Wrapper div for Navbar-->
  <div class="w-screen h-16 bg-navbg flex py-2 overflow-hidden">
    <AppDropdown :currentUser="{ ...currentUser }"></AppDropdown>
    <!-- burger bar-->
    <!--logo and Search bar-->
    <div class="flex w-full justify-center items-center text-primary">
      <!-- Logo  -->
      <img
        :src="appConfig.logoImage ? appConfig.logoImage : '/logo.png'"
        class="justify-center md:px-8 w-32 md:w-48"
      />
      <!--Search Bar -->
      <AppSearch class="w-full hidden md:block min-w-60" @search="handleSearch">
      </AppSearch>
    </div>

    <!-- horizontal menu -->
    <div class="flex align-middle">
      <AppListHorizontal :currentUser="{ ...currentUser }"></AppListHorizontal>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onAuthStateChanged, getAuth } from "firebase/auth";

const handleSearch = (searchInput: String) => {
  console.log(searchInput);
};
const appConfig = useAppConfig();
let currentUser: any = reactive;
let popperstate = ref(false);
const { $logout, $fireBaseApp } = useNuxtApp();
if (process.client) {
  if (getAuth($fireBaseApp).currentUser) {
    currentUser = getAuth($fireBaseApp).currentUser;
    console.log(currentUser, "current user from firebaseauthcurrentuser");
  }
  onAuthStateChanged(getAuth($fireBaseApp), (user) => {
    if (user) {
      currentUser = user;
      console.log(currentUser, "current user from onAuthStateChanged");
    } else {
      currentUser.value = {};
      console.log(
        currentUser,
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
