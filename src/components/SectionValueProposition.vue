<template>
  <section class="value-proposition">
    <div class="value-proposition__image-container">
      <img
        class="value-proposition__image"
        src="../assets/about/mobile/image-quality.jpg"
      />
    </div>
    <div class="value-proposition__content">
      <h2 class="value-proposition__title">Uncompromising quality</h2>
      <p class="value-proposition__description">
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionValueProposition",
};
</script>

<style lang="scss" scoped>
.value-proposition {
  position: relative;
  text-align: center;
  margin: rem-calc(0 24 120 24);
  padding: rem-calc(142 24 61 24);
  background-color: #2c343e;
  color: $color-background;
  border-radius: 10px;

  @media screen and (min-width: $breakpoint-tablet) {
    padding: rem-calc(224 74 67 74);
    margin: rem-calc(0 24 120 24);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    padding: rem-calc(88 88 120 88);
    text-align: left;
    margin: rem-calc(0 40 168 40);
  }
}

.value-proposition__image-container {
  display: block;
  position: absolute;
  overflow: hidden;
  margin-bottom: rem-calc(32);
  top: rem-calc(-46);
  left: rem-calc(20);
  right: rem-calc(24);
  border-radius: 8px;

  @media screen and (min-width: $breakpoint-tablet) {
    top: rem-calc(-140);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    left: 57%;
    width: rem-calc(445);
    height: rem-calc(474);
  }
}

.value-proposition__image {
  object-fit: cover;
  width: rem-calc(279);
  height: rem-calc(156);
  border-radius: 8px;

  @media screen and (min-width: $breakpoint-tablet) {
    width: rem-calc(573);
    height: rem-calc(320);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    width: rem-calc(445);
    height: rem-calc(474);
  }
}

.value-proposition__content {
  @media screen and (min-width: $breakpoint-desktop) {
    max-width: rem-calc(540);
  }
}

.value-proposition__title {
  font-size: rem-calc(28);
  margin-bottom: rem-calc(24);

  @media screen and (min-width: $breakpoint-tablet) {
    font-size: rem-calc(32);
  }
}

.value-proposition__description {
  font-size: rem-calc(15);
  line-height: rem-calc(25);
}
</style>
