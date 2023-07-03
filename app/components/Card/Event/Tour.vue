<template>
  <div
    class="relative flex h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 hover:shadow-xl"
  >
    <img
      src="/images/beams.jpg"
      alt=""
      class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      width="1308"
    />
    <div
      class="absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="h-screen border px-2 bg-white py-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg"
    >
      <div
        class="relative h-full overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300"
      >
        <img
          class="object-cover h-5/6 w-full p-4 border rounded-lg"
          src="/images/sunset.jpg"
          alt="Flower and sky"
        />
        <div class="absolute top-10 left-6 px-6 py-4">
          <h4 class="mb-3 text-3xl font-semibold tracking-tight text-gray">
            This is the title
          </h4>
          <p class="leading-normal text-xl text-gray-800 pt-4 sm:pt-0">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
          <p
            class="leading-normal font-bold text-sm text-gray-100 pt-4 sm:pt-2"
          >
            24th June 2021 8:00AM - 12:00 PM
          </p>
          <p class="leading-normal font-bold text-sm text-gray-100 pt-2">
            At the beach
          </p>
        </div>
        <div class="flex justify-end align-bottom">
          <button
            class="p-2 px-8 my-4 z-30 justify-end rounded-md m-2 bg-indigo-500 hover:bg-indigo-700 text-white"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
