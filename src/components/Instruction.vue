<template>
  <div class="instruction">
    <span class="instruction__number">{{ number }}</span>
    <div class="instruction__content">
      <h3 class="instruction__title">{{ title }}</h3>
      <p class="instruction__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instruction",
  props: {
    number: {
      type: String,
      required: true,
      default: "01",
    },
    title: {
      type: String,
      required: true,
      default: "Pick your coffee",
    },
    description: {
      type: String,
      required: true,
      default:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
  },
};
</script>

<style lang="scss" scoped>
.instruction {
  display: flex;
  flex-direction: column;
  margin-bottom: rem-calc(56);

  @media screen and (min-width: $breakpoint-tablet) {
    text-align: left;
    max-width: rem-calc(223);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    text-align: left;
    max-width: rem-calc(240);
  }
}

.instruction__number {
  color: $color-secondary;
  font-family: Fraunces, serif;
  font-size: rem-calc(72);
  margin-bottom: rem-calc(24);

  @media screen and (min-width: $breakpoint-desktop) {
    font-size: rem-calc(72);
  }
}

.instruction__title {
  font-size: rem-calc(28);
  margin-bottom: rem-calc(24);

  @media screen and (min-width: $breakpoint-desktop) {
    font-size: rem-calc(32);
  }
}

.instruction__description {
  font-size: rem-calc(15);
  line-height: 25px;

  @media screen and (min-width: $breakpoint-desktop) {
    font-size: rem-calc(16);
  }
}
</style>
