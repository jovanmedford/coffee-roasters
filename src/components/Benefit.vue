<template>
  <div class="benefit">
    <img class="benefit__icon" :src="benefitIcon" />
    <div class="benefit__content">
      <h3 class="benefit__title">{{ title }}</h3>
      <p class="benefit__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefit",
  props: {
    title: {
      type: String,
      required: true,
      default: "Best Quality",
    },
    description: {
      type: String,
      required: true,
      default:
        "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    iconSrc: {
      type: String,
      required: true,
      default: "home/desktop/icon-coffee-bean.svg",
    },
  },
  computed: {
    benefitIcon() {
      return require(`../assets/${this.iconSrc}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.benefit {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: $color-primary;
  padding: rem-calc(72 12 48 12);
  border-radius: 8px;
  margin-bottom: rem-calc(24);

  @media screen and (min-width: $breakpoint-tablet) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: rem-calc(36 48 48 72);
    text-align: left;
  }

  @media screen and (min-width: $breakpoint-desktop) {
    flex-direction: column;
    justify-content: space-around;
    padding: rem-calc(72 40);
    text-align: center;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: rem-calc(32);
    }
  }
}

.benefit__icon {
  width: rem-calc(56);
  height: rem-calc(56);
  margin-bottom: rem-calc(56);

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: 0;
  }

  @media screen and (min-width: $breakpoint-desktop) {
    margin-bottom: rem-calc(56);
  }
}

.benefit__content {
  max-width: rem-calc(256);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: $breakpoint-tablet) {
    max-width: rem-calc(344);
  }
}

.benefit__title {
  font-size: rem-calc(24);
  margin-bottom: rem-calc(16);
}

.benefit__description {
  color: $color-background;
}
</style>
