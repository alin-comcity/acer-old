<template>

  <section class="bg-white py-24">
    <div class="container mx-auto py-8 sm:py-12">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
          <div class="mx-auto max-w-md text-center lg:text-left">
            <header>
              <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Cooling
              </h2>

              <p class="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                rerum quam amet provident nulla error!
              </p>
            </header>

            <a
              href="#"
              class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
            >
              Shop All
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 lg:py-8">
          <ul class="grid grid-cols-2 gap-4">
            <li>
              <a href="#" class="group block">
                <NuxtImg
                  src="/img/1233big.jpg"
                  width="400"
                  class="aspect-square w-full rounded object-cover"
                />

                <div class="mt-3">
                  <h3
                    class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    Simple Watch
                  </h3>

                  <p class="mt-1 text-sm text-gray-700">$150</p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block">
                <NuxtImg
                  src="/img/1237.jpg"
                  width="400"
                  class="aspect-square w-full rounded object-cover"
                />
                <div class="mt-3">
                  <h3
                    class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    Simple Watch
                  </h3>

                  <p class="mt-1 text-sm text-gray-700">$150</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          New Collection
        </h2>

        <p class="mx-auto mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>

      <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <li>
          <a href="#" class="group relative block">
            <NuxtImg
              src="/img/123.jpg"
              width="395"
              class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div
              class="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
              <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

              <span
                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Shop Now
              </span>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="group relative block">
            <NuxtImg
              src="/img/12330.jpg"
              width="395"
              class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div
              class="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
              <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

              <span
                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Shop Now
              </span>
            </div>
          </a>
        </li>

        <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <a href="#" class="group relative block">
            <NuxtImg
              src="/img/12331.jpg"
              width="805"
              class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div
              class="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
              <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

              <span
                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Shop Now
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Product Collection
        </h2>

        <p class="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>

      <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li>
          <a href="#" class="group block overflow-hidden">
            <NuxtImg
              src="/img/12332.jpg"
              width="292"
              height="450"
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="group block overflow-hidden">
            <NuxtImg
              src="/img/1237.jpg"
              width="292"
              height="450"
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="group block overflow-hidden">
            <NuxtImg
              src="/img/12332.jpg"
              width="292"
              height="450"
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="group block overflow-hidden">
            <NuxtImg
              src="/img/12370.jpg"
              width="292"
              height="450"
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
