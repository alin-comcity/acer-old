<template>
  <div class="relative z-0">
    <NuxtImg
      src="/img/banner-acer.jpg"
      format="webp"
      class="absolute inset-0 h-full w-full object-cover"
      width="1920"
      alt="banner"
    />

    <div class="relative bg-gray-900 bg-opacity-0">
      <div class="container mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-64">
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
            <h2
              class="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              Acer Gadget
              <span class="block text-lime-600">Now In Bangladesh </span>
            </h2>
            <p class="mb-4 max-w-xl text-base text-gray-400 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold tracking-wider text-lima-400 transition-colors duration-200 hover:text-lima-600"
            >
              <NuxtLink to="/about">About Us</NuxtLink>
              <svg
                class="ml-2 inline-block w-3"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
