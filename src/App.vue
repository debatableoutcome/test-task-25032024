<template>
  <div
    class="w-screen h-screen bg-sky-100 flex-auto flex justify-center items-center"
  >
    <div
      class="w-1/2 h-5/6 bg-orange-100 rounded-lg p-20 flex justify-start items-center flex-col relative"
    >
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
}
</style>
