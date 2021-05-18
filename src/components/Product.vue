<template>
  <div class="product">
    <img class="product__image" :src="productImage" />
    <div class="product__content">
      <h3 class="product__title">{{ title }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    title: {
      type: String,
      required: true,
      default: "Awesome Coffee Product",
    },
    description: {
      type: String,
      required: true,
      default: "Handcrafted from the finest beans to meet your needs.",
    },
    imageSrc: {
      type: String,
      required: true,
      default: "home/desktop/image-gran-espresso.png",
    },
  },
  computed: {
    productImage() {
      return require(`../assets/${this.imageSrc}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: rem-calc(48);

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: rem-calc(32);
  }
}

.product__title {
  font-family: Fraunces;
  font-size: rem-calc(24);
  margin-bottom: rem-calc(16);
}

.product__description {
  font-size: rem-calc(16);
  line-height: rem-calc(25);
}

.product__image {
  width: rem-calc(200);
  height: rem-calc(150);

  @media screen and (min-width: $breakpoint-tablet) {
    width: rem-calc(256);
    height: rem-calc(192);
  }
}

.product__content {
  max-width: rem-calc(282);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
