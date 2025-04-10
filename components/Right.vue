<template>
  <section class="body-font rounded bg-gray-100 text-gray-600 dark:text-white dark:bg-gray-700">
    <div
      class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row"
    >
      <div
        class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
      >
        <h1
          class="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-lima-400 sm:text-4xl"
        >
          Cooling Fan 1233
        </h1>
        <p class="mb-8 leading-relaxed dark:text-gray-100">
          Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
          typewriter affogato, hella selvage wolf narwhal dreamcatcher.
        </p>
        <div class="flex justify-center">
            <a href="/cooling" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">All Cooling</a>
        </div>
      </div>
      <div class="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <NuxtImg
          class="rounded object-cover object-center"
          alt="hero"
          src="/img/123.jpg"
          width="400"
          format="webp"
        />
      </div>
    </div>
  </section>
</template>
