<!---- Large Medium Screen App Bar  uses MenuIcon Component Search Component 
       Needs the Search Handler function to be implemented 
-->
<template>
  <!-- Wrapper div for Navbar-->
  <div class="w-screen h-16 bg-navbg py-2 flex justify-between overflow-hidden">
    <div class="flex justify-start">
      <img :src="appConfig.logoImage ? appConfig.logoImage : '/logo.svg'" class="justify-center h-8 m-1 " />
      <div class="flex align-middle">
        <AppListHorizontal :currentUser="{ ...state.currentUser }"></AppListHorizontal>
      </div>
    </div>
    <AppSearch class="w-2/5 hidden md:block px-2 my-1 min-w-60" @search="handleSearch">
    </AppSearch>
    <AppDropdown class="md:hidden pl-6 " :currentUser="{ ...state.currentUser }"></AppDropdown>
    <AppDropdown v-if="state.currentUser" :currentUser="state.currentUser" :onlyProfileMenu="onlyProfileMenu"
      icon="i-heroicons-user-circle" :avatar="state.currentUser.photoURL"
      :label="state.currentUser.displayName ? state.currentUser.displayName : 'Sign In for Free'" class="px-2">
    </AppDropdown>
    <!-- horizontal menu 
    <div class="flex align-middle">
      <AppListHorizontal :currentUser="{ ...currentUser }"></AppListHorizontal>
    </div>
    -->
  </div>
</template>
<script setup >
import { onAuthStateChanged, getAuth } from "firebase/auth";
const handleSearch = (searchInput) => {
  console.log(searchInput);
};
const onlyProfileMenu = true;
const appConfig = useAppConfig();
const state = reactive({ currentUser: {} });
let popperstate = ref(false);
const { $fireBaseApp } = useNuxtApp();
if (process.client) {
  if (getAuth($fireBaseApp).currentUser) {
    state.currentUser = getAuth($fireBaseApp).currentUser;
  }
  onAuthStateChanged(getAuth($fireBaseApp), (user) => {
    if (user) {
      state.currentUser = user;
    } else {
      state.currentUser = {};
    }
  });
}

</script>
