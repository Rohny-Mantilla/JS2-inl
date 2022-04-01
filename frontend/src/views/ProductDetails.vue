<template>
  <div class="vh-100">
    <div v-if="product" class="card">
      <div class="row card-body">
        <div class="col-lg-5">
          <img :src="product.imageUrl" class="card-img img-fluid" />
        </div>
        <div class="col-lg-6 text-light">
          <div class="text-center card-title">
            <h1>{{ product.name }}</h1>
            <p class="h3 text-danger">{{ product.price }} SEK</p>
          </div>
          <div class="mt-6 card-text">
            <p>{{ product.desc }}</p>
          </div>
          <div class="text-end pt-4">
            <button @click="addToCart({ product, quantity })" class="btn btn-info">
              <i class="fa-solid fa-cart-plus p-1"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions([
      "getProductById",
      // ,
      // 'addToCart'
    ]),
  },
  computed: {
    ...mapGetters(["product"]),
  },
  created() {
    this.getProductById(this.id);
  },
};
</script>

<style>
.card {
  background-color: transparent;
}
</style>
