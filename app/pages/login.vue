<template >
  <div class="flex mx-auto h-screen border items-center">
    <div>
      <div class="justify-center w-screen flex content-center">
        <div class="font-bold">Sign In</div>
      </div>
      <ClientOnly>
        <FirebaseUI></FirebaseUI>
      </ClientOnly>
    </div>
  </div>
</template>
