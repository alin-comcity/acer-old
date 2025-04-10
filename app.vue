<template>
  <div>
    <Topbar class="hidden md:block" />
    <div class="container mx-auto">
      <Navbar />
    </div>
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
import "primeicons/primeicons.css";
import "material-symbols";

useSeoMeta({
  description: "[description]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  title: "Acer",
  htmlAttrs: {
    lang: "en",
    // class: "dark",
  },
  link: [
    {
      rel: "icon",
      type: "image/svg",
      href: "/acer.svg",
    },
  ],
});
</script>
<style>
html.dark body {
  background-color: #2d3748;
}
</style>
