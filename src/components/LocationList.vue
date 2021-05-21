<template>
  <div class="location-list">
    <Location
      :key="location.image"
      v-for="location in locations"
      :image-src="location.image"
      :country="location.country"
      :city="location.city"
      :street-number="location.streetNumber"
      :postal-code="location.postalCode"
      :contact-number="location.contactNumber"
    />
  </div>
</template>

<script>
import Location from "@/components/Location.vue";
export default {
  name: "LocationList",
  components: {
    Location,
  },
  data() {
    return {
      locations: [
        {
          image: "about/desktop/illustration-uk.svg",
          country: "United kingdom",
          city: "Alcaston",
          streetNumber: "68 Asfordby Rd",
          postalCode: "SY6 1YA",
          contactNumber: "+44 1241 918425",
        },
        {
          image: "about/desktop/illustration-canada.svg",
          country: "Canada",
          city: "Toronto",
          streetNumber: "1528  Eglinton Avenue",
          postalCode: "M4P 1A6",
          contactNumber: "+1 416 485 2997",
        },
        {
          image: "about/desktop/illustration-australia.svg",
          country: "Australia",
          city: "Kewell",
          streetNumber: "36 Swanston Street",
          postalCode: "SY6 1YA",
          contactNumber: "+61 4 9928 3629",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.location-list {
  @media screen and (min-width: $breakpoint-tablet) {
    display: flex;
    &:not(:last-child) {
      margin-bottom: rem-calc(0);
    }
  }
}
</style>
