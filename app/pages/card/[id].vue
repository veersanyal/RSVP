<template>
    <div v-if="!displayLogin" class="block p-2 ">
        <Card :id="pageId">
        </Card>
        <div class="flex justify-center items-center container m-2 p-2 pt-4 text-xl text-green-500">
            Are you attending this event?
        </div>
        <div class="flex justify-center items-center container m-2">
            <button class="p-4 rounded-xl bg-green-600 text-white font-bold w-32 m-2 hover:bg-green-800" @click="accept">
                Yes
            </button>
            <button class="p-4 rounded-xl bg-transparent border w-32 border-gray-400 m-2 hover:bg-gray-200"
                @click="decline">
                No
            </button>
        </div>
    </div>
    <ClientOnly>
        <div v-if="displayLogin">
            <FirebaseUI :target="target" @signInSuccessWithAuthResult="displayLogin = !displayLogin"></FirebaseUI>
        </div>
    </ClientOnly>
</template>
<script setup lang="ts">
import { onAuthStateChanged, getAuth } from "firebase/auth";
const route = useRoute()
const pageId: string = route.params.id as string;
const target = pageId;
let currentUser: any = reactive;
const displayLogin = ref(false);
const { $logout, $fireBaseApp } = useNuxtApp();
if (process.client) {
    console.log("Client");
    if (getAuth($fireBaseApp).currentUser) {
        currentUser = getAuth($fireBaseApp).currentUser;
    }
    onAuthStateChanged(getAuth($fireBaseApp), (user) => {
        if (user) {
            currentUser = user;
        } else {
            currentUser.value = {};
        }
    });
}
const accept = async () => {
    currentUser.value = getAuth($fireBaseApp).currentUser;
    if (currentUser.value.uid) {
        displayLogin.value = false;
        const data = {
            id: pageId, rsvp: { uid: currentUser.value.uid, name: currentUser.value.displayName, email: currentUser.value.email, photoURL: currentUser.value.photoURL, attending: true }
        }
        const { setRSVP } = useCard();
        const response = await setRSVP(data);
    }
    else {
        displayLogin.value = true;
    }
}
const decline = async () => {
    currentUser.value = getAuth($fireBaseApp).currentUser;
    if (currentUser.value.uid) {
        displayLogin.value = false;
        const data = {
            id: pageId, rsvp: { uid: currentUser.value.uid, name: currentUser.value.displayName, email: currentUser.value.email, photoURL: currentUser.value.photoURL, attending: false }
        }
        const { setRSVP } = useCard();
        const response = await setRSVP(data);
    }
    else {
        displayLogin.value = true;
    }
}

</script>