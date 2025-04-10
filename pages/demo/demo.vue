<template>
  <div class="card">
    <div class="p-5 sm:p-8">
      <div
        class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8"
      >
        <Image v-for="img in images" :key="img.id" alt="Image" preview>
          <template #indicatoricon>
            <i class="pi pi-search"></i>
          </template>
          <template #image>
            <img :src="img.thumb" alt="image" class="rounded-lg" />
          </template>
          <template #preview="slotProps">
            <img
              :src="img.img"
              :alt="slotProps.style"
              :style="slotProps.style"
              @click="slotProps.onClick"
              class="h-[90vh] p-3"
            />
          </template>
        </Image>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  {
    id: 0,
    thumb:
      "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    thumb:
      "https://images.unsplash.com/photo-1570631810862-1dcfe1d4060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=380",
    img: "https://images.unsplash.com/photo-1570631810862-1dcfe1d4060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 2,
    thumb:
      "https://images.unsplash.com/photo-1560509659-f33343b94e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1560509659-f33343b94e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    thumb:
      "https://images.unsplash.com/photo-1615194787278-25ca9b7c5a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1615194787278-25ca9b7c5a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    thumb:
      "https://images.unsplash.com/photo-1557090038-f0d4cd5f29f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1557090038-f0d4cd5f29f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    thumb:
      "https://images.unsplash.com/photo-1511516781637-877ae8444896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM0MDA0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=380",
    img: "https://images.unsplash.com/photo-1511516781637-877ae8444896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM0MDA0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 6,
    thumb:
      "https://images.unsplash.com/photo-1617198191368-a7441bf5df95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1617198191368-a7441bf5df95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 7,
    thumb:
      "https://images.unsplash.com/photo-1557308442-c40d04f891e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=380",
    img: "https://images.unsplash.com/photo-1557308442-c40d04f891e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 8,
    thumb:
      "https://images.unsplash.com/photo-1549488497-7c9f55bfeca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1549488497-7c9f55bfeca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 9,
    thumb:
      "https://images.unsplash.com/photo-1551893948-d31ec1f58bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1551893948-d31ec1f58bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 10,
    thumb:
      "https://images.unsplash.com/photo-1560830913-db410393bcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1560830913-db410393bcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 11,
    thumb:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODYxNw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODYxNw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 12,
    thumb:
      "https://images.unsplash.com/photo-1556607173-eca49c3c4f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1556607173-eca49c3c4f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 13,
    thumb:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzOA&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1545241047-6083a3684587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzOA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 14,
    thumb:
      "https://images.unsplash.com/photo-1541540533799-d8f1ccf57bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzOA&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1541540533799-d8f1ccf57bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzOA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 15,
    thumb:
      "https://images.unsplash.com/photo-1572206443494-b07cc12d6921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzOA&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1572206443494-b07cc12d6921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzOA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 16,
    thumb:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTkwMTE3NQ&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTkwMTE3NQ&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 17,
    thumb:
      "https://images.unsplash.com/photo-1570631810862-1dcfe1d4060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=380",
    img: "https://images.unsplash.com/photo-1570631810862-1dcfe1d4060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 18,
    thumb:
      "https://images.unsplash.com/photo-1560830913-db410393bcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1560830913-db410393bcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 19,
    thumb:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODYxNw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODYxNw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 20,
    thumb:
      "https://images.unsplash.com/photo-1556607173-eca49c3c4f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNw&ixlib=rb-4.0.3&q=80&w=380",
    img: "https://images.unsplash.com/photo-1556607173-eca49c3c4f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3NzUzNw&ixlib=rb-4.0.3&q=80&w=1080",
  },
];
</script>
