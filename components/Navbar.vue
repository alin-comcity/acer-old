<template>
  <div class="flex justify-between text-[18px]">
    <nuxt-link to="/" class="flex">
      <NuxtImg
        src="/acergadgetlogo.png"
        width="100px"
        alt="logo"
        class="py-3"
      />
    </nuxt-link>
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            :href="href"
            v-bind="props.action"
            @click="navigate"
            class="flex items-center rounded hover:bg-lima-400 hover:text-white"
          >
            <!-- <span class="material-symbols-outlined"> {{ item.gicon }} </span> -->
            <span class="ml-2 text-gray-900 dark:text-white">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
          class="flex items-center rounded hover:bg-lima-400 hover:text-white"
        >
          <!-- <span class="material-symbols-outlined"> {{ item.gicon }} </span> -->
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    gicon: "house",
    route: "/",
  },
  {
    label: "Products",
    gicon: "category",
    route: "#",
    items: [
      {
        label: "Casing",
        gicon: "devices",
        route: "/casing",
      },
      {
        label: "Power Supply",
        gicon: "bolt",
        route: "/power",
      },
      {
        label: "Fan",
        gicon: "mode_fan",
        route: "/fan",
      },
      {
        label: "Cooling",
        gicon: "mode_fan",
        route: "/cooling",
      },
    ],
  },
  {
    label: "About Us",
    gicon: "apartment",
    route: "/about",
  },
  // {
  //   label: "Certificate",
  //   gicon: "workspace_premium",
  //   route: "/certificate",
  // },
  {
    label: "Contact",
    gicon: "phone_in_talk",
    route: "/contact",
  },
]);
</script>
