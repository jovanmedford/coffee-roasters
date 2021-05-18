<template>
  <div class="benefits-list">
    <Benefit
      v-for="benefit in benefits"
      :key="benefit.description"
      :title="benefit.title"
      :description="benefit.description"
      :iconSrc="benefit.iconSrc"
    />
  </div>
</template>

<script>
import Benefit from "../components/Benefit";

export default {
  name: "BenefitList",
  components: {
    Benefit,
  },
  data() {
    return {
      benefits: [
        {
          title: "Best Quality",
          description:
            "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
          iconSrc: "home/desktop/icon-coffee-bean.svg",
        },
        {
          title: "Exclusive Benefits",
          description:
            "Special offers and swag when you subscribe, including 30% off your first shipment.",
          iconSrc: "home/desktop/icon-gift.svg",
        },
        {
          title: "Free Shipping",
          description:
            "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
          iconSrc: "home/desktop/icon-truck.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.benefits-list {
  display: flex;
  flex-direction: column;
  left: rem-calc(24);
  right: rem-calc(24);

  @media screen and (min-wdith: $breakpoint-tablet) {
    left: rem-calc(56);
    right: rem-calc(56);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    flex-direction: row;
    left: rem-calc(88);
    right: rem-calc(88);
    justify-content: center;
  }
}
</style>
