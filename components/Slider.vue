<template>
   <div class="mx-auto w-[1100px] text-center text-slate-800 text-[18px] mt-10 mb-10">
      <h3 class="text-[42px] font-bold"> Browse Recent Products</h3>
    </div>

  <div class="card rounded text-white dark:bg-gray-100">
    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div
          class="border-1 surface-border border-round m-2 rounded bg-gray-100 p-3 mx-auto"
        >
          <div class="mb-0">
            <div class="relative mx-auto">
              <nuxt-link to="/">
                <NuxtImg
                  :src="slotProps.data.feature_image"
                  format="webp"
                  width="350"
                  height="350"
                  :alt="slotProps.data.slug"
                  class="border-round w-full"
                />
                <Tag
                  :value="slotProps.data.inventoryStatus"
                  class="absolute !bg-gray-800"
                  style="left: 5px; top: 5px"
                />
              </nuxt-link>
            </div>
          </div>
          <nuxt-link to="/">
            <div class="mb-3 font-medium text-gray-700">
              {{ slotProps.data.title }}
            </div>
          </nuxt-link>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
// const { data } = await useFetch(
//   "http://localhost:8080/ghost/api/content/posts/?key=5c2ee25d9a6c47d0cd7f9ac970&order=published_at%20desc&limit=6"
// );

const data = {
  products: [
    {
      slug: "Slug",
      feature_image: "/img/V920.jpg",
      inventoryStatus: "Upcoming",
      title: "Casing V920",
    },
    {
      slug: "Slug",
      feature_image: "/img/V930.jpg",
      inventoryStatus: "Upcoming",
      title: "Casing V930",
    },
    {
      slug: "Slug",
      feature_image: "/img/1233big.jpg",
      inventoryStatus: "Coming Soon",
      title: "Fan 1233",
    },
    {
      slug: "Slug",
      feature_image: "/img/1237.jpg",
      inventoryStatus: "New Arrival",
      title: "Fan 1237",
    },
    {
      slug: "Slug",
      feature_image: "/img/550.png",
      inventoryStatus: "Upcoming",
      title: "PSU 550",
    },
    {
      slug: "Slug",
      feature_image: "/img/6502.png",
      inventoryStatus: "Coming Soon",
      title: "PSU 650",
    },
  ],
};

const products = data.products;

const responsiveOptions = ref([
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 2,
    numScroll: 1,
  },
]);
</script>
