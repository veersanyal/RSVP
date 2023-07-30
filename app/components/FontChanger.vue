<template>
    <div>
        <span v-show="!editMode" @click="handleEditionMode" v-bind="$attrs" :style="customstyle"
            class="on-hover:cursor-pointer">
            {{ content }}
        </span>
        <!-- </div> -->
        <div v-show="editMode" class=" absolute z-10 border bg-gray-100 rounded-xl flex-auto w-42">
            <input ref="input" v-model="content" aria-describedby="item-content" v-bind="$attrs" name="content" type="text"
                tabindex="0" @keydown.enter="editMode = false" :style="customfont ? customfontstyle : ''"
                class="w-48  m-2" />
            <div class=" w-42 grid grid-flow-row-dense grid-cols-2 text-xs font-light  text-black p-2 ">
                <p class="mx-2">Font</p>
                <USelectMenu v-model="customfont" :options="fontOptions"
                    class="col-span-2 text-xs font-light  text-gray-700">
                </USelectMenu>
                <p class="mx-2">Color</p>
                <USelectMenu v-model="customcolor" :options="colorOptions"
                    class="col-span-2 text-xs font-light  text-gray-700">
                </USelectMenu>
                <p class="mx-2">Blend</p>
                <USelectMenu v-model="customblend" :options="blendOptions"
                    class="text-xs font-light  text-gray-700 col-span-2">
                </USelectMenu>
                <p class="mx-2">Size</p>
                <USelectMenu v-model="customsize" :options="fontsizeOptions"
                    class="text-xs font-light  text-gray-700 col-span-2">
                </USelectMenu>
                <p class="mx-2">Weight</p>
                <USelectMenu v-model="customweight" :options="fontweightOptions"
                    class="text-xs font-light  text-gray-700 col-span-2">
                </USelectMenu>
            </div>
            <div class=" p-2 flex justify-end border">
                <button class="text-4xl" @click="editMode = false">
                    <Icon name="carbon:close-outline" color="black" size="18px" />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const content = defineModel('content');
const customfont = defineModel('customfont');
const customcolor = defineModel('customcolor');
const customblend = defineModel('customblend');
const customweight = defineModel('customweight');
const customsize = defineModel('customsize');
useHead({
    link: [{ rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=${customfont.value}&display=swap` }]
})
const customstyle = computed(() => {
    return `fontFamily:${customfont.value};color:${customcolor.value};mix-blend-mode:${customblend.value};font-weight:${customweight.value};font-size:${customsize.value}`
});
const styleArray = []
console.log('custom style ', customstyle.value.split(';').forEach(element => {
    const item = element.split(':');
    console.log('item', item);
    styleArray.push(item);
}));
const styleObject = Object.fromEntries(styleArray);
console.log('styleObject', styleObject);
const customfontstyle = computed(() => {
    return `fontFamily: ${customfont.value};color:black; font-weight:${customweight.value};font-size:${customsize.value}`
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
const blendOptions = ['normal', 'multiply', 'screen;', 'overlay', 'darken;', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']
const fontsizeOptions = ['5px', '10px', '20px', '30px', '40px', '50px'];
const fontweightOptions = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
</script>