<template>
  <div class="bg-black py-2 text-surface-100">
    <div class="container mx-auto flex justify-between">
      <div>
        <i
          class="pi pi-th-large cursor-pointer text-lima-400"
          @click="toggleitem"
          style="font-size: 1rem"
        ></i>
        <div
          v-if="show"
          class="absolute z-10 grid w-36 grid-flow-col grid-rows-4 gap-4 bg-black py-3 text-center"
        >
          <div>
            <nuxt-link to="/casing">
              <span class="material-symbols-outlined"> devices </span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/power">
              <span class="material-symbols-outlined"> bolt </span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/cooling">
              <span class="material-symbols-outlined"> recenter </span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/fan">
              <span class="material-symbols-outlined"> mode_fan </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="text-lima-400">
        Acer Bangladesh Product Provided by Computer City Technologies Ltd.
      </div>
      <div>
        <i
          class="cursor-pointer text-lima-400"
          :class="sunmoon ? 'pi pi-sun' : 'pi pi-moon'"
          @click="toggle"
          style="font-size: 1rem"
        ></i>
      </div>
    </div>
  </div>
</template>
<script setup>
const show = ref(false);
const sunmoon = ref(false);
const toggleitem = () => {
  show.value = !show.value;
};
const toggle = () => {
  document.documentElement.classList.toggle("dark");
  sunmoon.value = !sunmoon.value;
};
</script>
