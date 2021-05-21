<template>
  <div class="location">
    <img class="location__image" :src="locationImage" />
    <h3 class="location__country-name">{{ country }}</h3>
    <ul class="location__address">
      <li class="location__address-line">{{ streetNumber }}</li>
      <li class="location__address-line">{{ city }}</li>
      <li class="location__address-line">{{ postalCode }}</li>
      <li class="location__address-line">{{ contactNumber }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Location",
  props: {
    imageSrc: {
      type: String,
      required: true,
      default: "about/desktop/illustration-australia.svg",
    },
    country: {
      type: String,
      required: true,
      default: "Australia",
    },
    streetNumber: {
      type: String,
      required: true,
      default: "68 Asfordby Rd",
    },
    city: {
      type: String,
      required: true,
      default: "Alcaston",
    },
    postalCode: {
      type: String,
      required: true,
      default: "SY6 1YA",
    },
    contactNumber: {
      type: String,
      required: true,
      default: "+44 1241 918425",
    },
  },
  computed: {
    locationImage() {
      return require(`../assets/${this.imageSrc}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.location {
  margin-bottom: rem-calc(80);

  @media screen and (min-width: $breakpoint-tablet) {
    margin-right: rem-calc(32);
    margin-bottom: 0;
  }

  @media screen and (min-width: $breakpoint-tablet) {
    margin-right: rem-calc(95);
    margin-bottom: 0;
  }
}

.location__image {
  margin-bottom: rem-calc(48);
  width: rem-calc(48);
  height: rem-calc(44);
}

.location__address {
  list-style: none;

  line-height: rem-calc(25);

  @media screen and (min-width: $breakpoint-tablet) {
    line-height: rem-calc(26);
  }
}

.location__country-name {
  margin-bottom: rem-calc(24);
  font-size: rem-calc(28);
  line-height: rem-calc(36);
}
</style>
