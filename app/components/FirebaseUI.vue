<template>
  <div id="firebaseui-auth-container"></div>
</template>
<script setup >
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
const props = defineProps({
  target: {
    type: String,
    default: '/'
  }
})
const emit = defineEmits(["signInSuccessWithAuthResult"]);
const signInResult = () => {
  emit('signInSuccessWithAuthResult');
};
onMounted(() => {
  const { $fireBaseApp } = useNuxtApp();
  const ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(getAuth($fireBaseApp));
  const config = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [GoogleAuthProvider.PROVIDER_ID, EmailAuthProvider.PROVIDER_ID],
    signInFlow: "popup",
    tosUrl: "/tos",
    privacyPolicyUrl: "/privacy-policy",
    callbacks: {
      signInSuccessWithAuthResult: signInResult,
    },
  };
  ui.start("#firebaseui-auth-container", config);
});
</script>
<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
