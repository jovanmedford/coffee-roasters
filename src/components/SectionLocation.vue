<template>
  <section class="section-location">
    <h2 class="section-location__title">Our headquarters</h2>
    <div class="location-list">
      <LocationList />
    </div>
  </section>
</template>

<script>
import LocationList from "@/components/LocationList.vue";

export default {
  name: "SectionLocation",
  components: {
    LocationList,
  },
};
</script>

<style lang="scss" scoped>
section {
  text-align: center;
  margin: rem-calc(0 24 120 24);

  @media screen and (min-width: $breakpoint-tablet) {
    text-align: left;
    margin: rem-calc(0 40 144 40);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    margin: rem-calc(0 0 144 165);
  }
}

.section-location__title {
  color: $color-text-light;
  margin-bottom: rem-calc(72);
  font-size: rem-calc(24);
  line-height: rem-calc(32);
}
</style>
