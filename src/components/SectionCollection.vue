<template>
  <section class="collection-section">
    <h2 class="collection-section-title">our collection</h2>
    <div class="product-list">
      <Product
        title="Gran Espresso"
        description="Light and flavorful blend with cocoa and black pepper for an intense experience"
        imageSrc="home/desktop/image-gran-espresso.png"
      />
      <Product
        title="Planalto"
        description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
        imageSrc="home/desktop/image-planalto.png"
      />
      <Product
        title="Piccollo"
        description="Mild and smooth blend featuring notes of toasted almond and dried cherry"
        imageSrc="home/desktop/image-piccollo.png"
      />
      <Product
        title="Danche"
        description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
        imageSrc="home/desktop/image-danche.png"
      />
    </div>
  </section>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  name: "SectionCollection",
  components: { Product },
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
