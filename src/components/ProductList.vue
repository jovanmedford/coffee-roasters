<template>
  <div class="product-list">
    <Product
      :key="product.title"
      :title="product.title"
      :description="product.description"
      :imageSrc="product.imageSrc"
      v-for="product in products"
    />
  </div>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  name: "ProductList",
  components: { Product },
  data() {
    return {
      products: [
        {
          title: "Gran Espresso",
          description:
            "Light and flavorful blend with cocoa and black pepper for an intense experience",
          imageSrc: "home/desktop/image-gran-espresso.png",
        },
        {
          title: "Planalto",
          description:
            "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
          imageSrc: "home/desktop/image-planalto.png",
        },
        {
          title: "Piccollo",
          description:
            "Mild and smooth blend featuring notes of toasted almond and dried cherry",
          imageSrc: "home/desktop/image-piccollo.png",
        },
        {
          title: "Danche",
          description:
            "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
          imageSrc: "home/desktop/image-danche.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  text-align: center;
  flex-direction: column;

  @media screen and (min-width: $breakpoint-tablet) {
    position: relative;
    top: -50px;
    text-align: left;
  }

  @media screen and (min-width: $breakpoint-desktop) {
    flex-direction: row;
    text-align: center;
  }
}
</style>
