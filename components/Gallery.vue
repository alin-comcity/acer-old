<template>
  <section
    class="body-font rounded bg-gray-100 p-2 text-gray-600 dark:text-white dark:bg-gray-700"
  >
    <div class="container mx-auto px-5 py-24">
      <div class="grid grid-cols-4 gap-2 lg:grid-cols-4 lg:gap-4">
        <div v-for="photo in photos" class="h-[300px] rounded-lg bg-white dark:bg-gray-800">
          <a class="relative block h-[200px] overflow-hidden rounded">
            <Image
              alt="Image"
              preview
              class="block h-full w-full object-cover object-center"
            >
              <template #indicatoricon>
                <i class="pi pi-search"></i>
              </template>
              <template #image>
                <NuxtImg
                  :src="photo.image"
                  format="webp"
                  alt="image"
                  height="200"
                  class="block h-full w-full object-cover object-center"
                />
              </template>
              <template #preview="slotProps">
                <NuxtImg
                  class="h-[90vh]"
                  :src="photo.image"
                  format="webp"
                  alt="preview"
                  sizes="100vw sm:50vw md:1000px"
                  :style="slotProps.style"
                  @click="slotProps.onClick"
                />
              </template>
            </Image>
          </a>
          <div class="mt-4 pl-4">
            <h3
              class="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-lima-400"
            >
              {{ photo.title }}
            </h3>
            <h2
              class="title-font text-lg font-medium text-gray-900 dark:text-gray-100"
            >
              {{ photo.subtitle }}
            </h2>
            <p class="mt-1 dark:text-lima-400">
              {{ photo.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const photos = [
  {
    image: "/img/550.png",
    title: "PSU",
    subtitle: "550",
    price: "00.00 BDT",
  },
  {
    image: "/img/5502.png",
    title: "PSU",
    subtitle: "550W",
    price: "00.00 BDT",
  },
  {
    image: "/img/650.png",
    title: "PSU",
    subtitle: "650",
    price: "00.00 BDT",
  },
  {
    image: "/img/650w.png",
    title: "PSU",
    subtitle: "650W",
    price: "00.00 BDT",
  },
  {
    image: "/img/750-1.png",
    title: "PSU",
    subtitle: "750",
    price: "00.00 BDT",
  },
  {
    image: "/img/7501.png",
    title: "PSU",
    subtitle: "750W",
    price: "00.00 BDT",
  },
  {
    image: "/img/ac1000.png",
    title: "PSU",
    subtitle: "AC1000",
    price: "00.00 BDT",
  },
  {
    image: "/img/1000W.png",
    title: "PSU",
    subtitle: "AC1000W",
    price: "00.00 BDT",
  },
];
</script>
