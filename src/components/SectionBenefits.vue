<template>
  <section clsss="benefits-section">
    <div class="benefits-section__content">
      <h2 class="benefits-section__title">Why choose us?</h2>
      <p class="benefits-section__description">
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
    </div>
    <BenefitList />
  </section>
</template>

<script>
import BenefitList from "@/components/BenefitList.vue";

export default {
  name: "SectionBenefits",
  components: {
    BenefitList,
  },
};
</script>

<style lang="scss" scoped>
section {
  display: block;
  background-color: #2c343e;
  color: white;
  padding: rem-calc(64 24 664 24);
  margin: rem-calc(0 12 717 12);
  position: relative;
  border-radius: 10px;

  @media screen and (min-width: $breakpoint-tablet) {
    padding: rem-calc(56 72 296 72);
    margin: rem-calc(0 40 460 40);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    padding: rem-calc(104 320 317 320);
    margin: rem-calc(0 40 352 40);
  }
}

.benefits-section__content {
  text-align: center;
  margin-bottom: rem-calc(64);

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: rem-calc(72);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    margin: 0 auto rem-calc(86) auto;
    max-width: rem-calc(540);
  }
}

.benefits-section__title {
  font-size: rem-calc(32);
  margin-bottom: rem-calc(24);
}

.benefits-section__description {
  font-size: rem-calc(16);
  line-height: rem-calc(25);
}

.benefits-list {
  position: absolute;
}
</style>
