<template>
  <Navbar />
  <div class="bg-dark bg-gradient">
    <div class="container pt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style></style>
