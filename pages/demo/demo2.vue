<template>
  <div class="card justify-content-center flex">
    <Image alt="Image" preview>
      <template #indicatoricon>
        <i class="pi pi-search"></i>
      </template>
      <template #image>
        <NuxtImg src="/demo0.jpg" alt="image" width="250" />
      </template>
      <template #preview="slotProps">
        <NuxtImg
          class="h-[90vh]"
          src="/demo0.jpg"
          alt="preview"
          sizes="100vw sm:50vw md:1000px"
          :style="slotProps.style"
          @click="slotProps.onClick"
        />
      </template>
    </Image>
  </div>
</template>
