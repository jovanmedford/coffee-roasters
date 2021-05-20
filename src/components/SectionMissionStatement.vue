<template>
  <div class="mission-statement">
    <div class="mission-statement__image-container">
      <img
        class="mission-statement__image"
        src="@/assets/about/mobile/image-commitment.jpg"
      />
    </div>
    <div class="mission-statement__content">
      <h2 class="mission-statement__title">Our commitment</h2>
      <p class="mission-statement__description">
        We’re built on a simple mission and a commitment to doing good along the
        way. We want to make it easy for you to discover and brew the world’s
        best coffee at home. It all starts at the source. To locate the specific
        lots we want to purchase, we travel nearly 60 days a year trying to
        understand the challenges and opportunities in each of these places. We
        collaborate with exceptional coffee growers and empower a global
        community of farmers through with well above fair-trade benchmarks. We
        also offer training, support farm community initiatives, and invest in
        coffee plant science. Curating only the finest blends, we roast each lot
        to highlight tasting profiles distinctive to their native growing
        region.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionMissionStatement",
};
</script>

<style lang="scss" scoped>
.mission-statement {
  text-align: center;
  margin: rem-calc(0 24 120 24);

  @media screen and (min-width: $breakpoint-tablet) {
    text-align: left;
    margin: rem-calc(0 40 304 40);
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: $breakpoint-desktop) {
    text-align: left;
    margin: rem-calc(0 40 256 40);
    display: flex;
    justify-content: center;
  }
}

.mission-statement__image-container {
  overflow: hidden;
  border-radius: 8px;
  height: rem-calc(400);
  margin-bottom: rem-calc(48);

  @media screen and (min-width: $breakpoint-tablet) {
    width: rem-calc(281);
    height: rem-calc(470);
    margin-bottom: 0;
    margin-right: rem-calc(70);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    width: rem-calc(445);
    margin-bottom: 0;
    margin-right: rem-calc(125);
  }
}

.mission-statement__image {
  width: rem-calc(327);

  @media screen and (min-width: $breakpoint-tablet) {
    width: rem-calc(281);
    height: rem-calc(470);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    width: rem-calc(445);
  }
}

.mission-statement__content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: $breakpoint-tablet) {
    max-width: rem-calc(339);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    max-width: rem-calc(540);
  }
}

.mission-statement__title {
  font-size: rem-calc(32);
  margin-bottom: rem-calc(32);

  @media screen and (min-width: $breakpoint-desktop) {
    font-size: rem-calc(40);
  }
}

.mission-statement__description {
  font-size: rem-calc(15);
  line-height: rem-calc(25);

  @media screen and (min-width: $breakpoint-tablet) {
    font-size: rem-calc(16);
    line-height: rem-calc(26);
  }
}
</style>
