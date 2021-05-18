<template>
  <section class="collection-section">
    <h2 class="collection-section-title">our collection</h2>
    <ProductList />
  </section>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "SectionCollection",
  components: { ProductList },
};
</script>

<style lang="scss" scoped>
.collection-section {
  margin: rem-calc(0 40 144 40);

  @media screen and (min-width: $breakpoint-tablet) {
  }

  @media screen and (min-width: $breakpoint-desktop) {
  }
}

.collection-section-title {
  text-align: center;
  margin-bottom: rem-calc(32);
  font-size: rem-calc(40);
  font-family: Fraunces;
  background-image: linear-gradient(0deg, #fff, #83888f);
  background-clip: text;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: 0;
    font-size: rem-calc(96);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    font-size: rem-calc(150);
  }
}
</style>
