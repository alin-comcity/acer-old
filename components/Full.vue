<template>
  <section class="relative rounded py-20 shadow-lg dark:bg-gray-100">
    <div class="container mx-auto w-full px-6 lg:px-8">
      <h1
        class="font-manrope mb-10 text-4xl font-medium text-gray-900 max-md:text-center"
      >
        Professional Project Achievements
      </h1>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(image, index) in images"
          class="group flex w-full flex-col items-center gap-8"
        >
          <div class="block">
            <Image alt="Image" preview>
              <template #indicatoricon>
                <i class="pi pi-search"></i>
              </template>
              <template #image>
                <NuxtImg
                  :src="image.src"
                  format="webp"
                  alt="image"
                  width="400"
                  height="376"
                />
              </template>
              <template #preview="slotProps">
                <NuxtImg
                  class="h-[90vh]"
                  :src="image.src"
                  format="webp"
                  alt="preview"
                  sizes="100vw sm:50vw md:1000px"
                  :style="slotProps.style"
                  @click="slotProps.onClick"
                />
              </template>
            </Image>
          </div>
          <div
            class="flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0"
          >
            <div class="block">
              <h2
                class="font-manrope mb-1 text-2xl font-semibold text-gray-900"
              >
                {{ image.name }}
              </h2>
              <p class="text-lg font-medium text-gray-400">
                {{ image.desc }}
              </p>
            </div>
            <button
              :id="`id ${index}`"
              :title="image.name"
              class="rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black"
            >
              <svg
                class="stroke-black transition-all duration-300 group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                  stroke=""
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  {
    name: "Casing V920",
    desc: "V920",
    src: "/img/V920.jpg",
  },
  {
    name: "Casing V950",
    desc: "V950",
    src: "/img/V950.jpg",
  },
  {
    name: "Casing U510",
    desc: "U510",
    src: "/img/U510.jpg",
  },
];
</script>
