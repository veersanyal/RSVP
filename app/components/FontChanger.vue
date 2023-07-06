<template>
    <div>
        <span v-show="!editMode" @click="handleEditionMode" v-bind="$attrs" :style="customstyle">
            {{ content }}
        </span>
        <div v-show="editMode" class="border p-2 bg-gray-100 rounded-xl">
            <input ref="input" v-model="content" aria-describedby="item-content" v-bind="$attrs" name="content" type="text"
                tabindex="0" @keydown.enter="editMode = false" :style="customfont ? customstyle : ''"
                class="text-gray-600 bg-inherit" />
            <div class="text-xs font-light  text-gray-700 p-2">Font</div>
            <div class="w-32 text-xs font-light  text-gray-700">
                <USelectMenu v-model="customfont" :options="fontOptions" class="text-xs font-light  text-gray-700">
                </USelectMenu>
            </div>
            <div class="text-xs font-light  text-gray-700 p-2">Color</div>
            <div class="w-32 text-xs font-light  text-gray-700">
                <USelectMenu v-model="customcolor" :options="colorOptions" class="text-xs font-light  text-gray-700">
                </USelectMenu>
            </div>
            <button class=" p-3 text-4xl" @click="editMode = false">
                <Icon name="carbon:close-outline" color="black" size="18px" />
            </button>
        </div>
    </div>
</template>
<script setup>
const content = defineModel('content');
const customfont = defineModel('customfont');
const customcolor = defineModel('customcolor');
useHead({
    link: [{ rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=${customfont.value}&display=swap` }]
})
const customstyle = computed(() => {
    return `fontFamily: ${customfont.value}; color: ${customcolor.value}`
});
watchEffect(() => {
    useHead({
        link: [{ rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=${customfont.value}&display=swap` }]
    })
});
const editMode = ref(false);
const input = ref(null);
const handleEditionMode = () => {
    editMode.value = true;
    nextTick(() => {
        if (input.value) {
            input.value.focus()
        }
    });
};
const fontOptions = ['Roboto', 'Lato', 'Caveat', 'Charm']
const colorOptions = ['gray', 'blue', 'red', 'orange', 'yellow', 'green', 'teal', 'purple', 'pink', 'indigo', 'white', 'black']

</script>