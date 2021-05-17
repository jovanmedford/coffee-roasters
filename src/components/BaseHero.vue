<template>
  <section :style="backgroundImage" class="hero">
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <h1 class="heading-2 hero__copy">{{ copy }}</h1>
      <p class="hero__text">
        {{ text }}
      </p>
      <button v-if="buttonText" class="btn">{{ buttonText }}</button>
    </div>
  </section>
</template>

<script>
import optimizeImage from "../utils/optimizeImage";

export default {
  props: {
    copy: {
      type: String,
      required: true,
      default: "Coffee done right.",
    },
    text: {
      type: String,
      required: true,
      default: "We love to serve you!",
    },
    buttonText: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "plan/mobile/image-hero-blackcup.jpg",
      required: true,
    },
  },
  computed: {
    backgroundImage: function () {
      const mobileSlug = optimizeImage(this.img, "mobile");
      const tabletSlug = optimizeImage(this.img, "tablet");
      const desktopSlug = optimizeImage(this.img, "desktop");
      return {
        "--background-image-mobile": `url(${require(`@/assets/${mobileSlug}`)})`,
        "--background-image-tablet": `url(${require(`@/assets/${tabletSlug}`)})`,
        "--background-image-desktop": `url(${require(`@/assets/${desktopSlug}`)})`,
      };
    },
  },
};
</script>

<style lang="scss">
.hero {
  margin: rem-calc(0 24 120 24);
  text-align: center;
  position: relative;
  background-image: var(--background-image-mobile);
  background-size: cover;
  border-radius: 10px;

  @media screen and (min-width: $breakpoint-tablet) {
    text-align: left;
    margin: rem-calc(0 40 144 40);
    background-image: var(--background-image-tablet);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    background-image: var(--background-image-desktop);
  }
}

.hero__content {
  position: relative;
  z-index: 100;
  padding: rem-calc(100 24);

  @media screen and (min-width: $breakpoint-tablet) {
    max-width: rem-calc(398);
    padding: rem-calc(104 0 104 56);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    max-width: rem-calc(493);
  }
}

.hero__copy {
  color: white;
  margin-bottom: rem-calc(24);

  @media screen and (min-width: $breakpoint-tablet) {
    font-size: rem-calc(48);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    font-size: rem-calc(72);
    line-height: rem-calc(80);
  }
}

.hero__text {
  color: white;
  line-height: rem-calc(25);
  margin-bottom: rem-calc(40);
  max-width: rem-calc(480);
  font-size: rem-calc(16);
}

.hero__overlay {
  background-color: black;
  position: absolute;
  opacity: 5%;
  width: 100%;
  height: 100%;

  @media screen and (min-width: $breakpoint-tablet) {
    display: none;
  }
}

.btn {
  padding: rem-calc(16 32);
  background-color: $color-primary;
  border: none;
  color: white;
  font-weight: 700;
  font-size: rem-calc(18);
  font-family: Fraunces;
  border-radius: 6px;
}
</style>
