<template>
  <Navbar />
  <div class="bg-dark bg-gradient">
    <div class="container pt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  methods: {
    ...mapActions(["checkUser"]),
  },
  created() {
    this.checkUser();
  },
};
</script>

<style></style>
