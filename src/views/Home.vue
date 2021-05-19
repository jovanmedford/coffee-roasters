<template>
  <div class="home">
    <Header />
    <BaseHero
      copy="Great coffee made simple."
      text="Start your mornings with the world’s best coffees. 
            Try our expertly curated artisan coffees from our best roasters 
            delivered directly to your door, at your schedule."
      button-text="Create your plan"
      img="home/mobile/image-hero-coffeepress.jpg"
    />
    <SectionCollection />
    <SectionBenefits />
    <SectionInstructions />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import BaseHero from "@/components/BaseHero.vue";
import SectionCollection from "@/components/SectionCollection.vue";
import SectionBenefits from "@/components/SectionBenefits.vue";
import SectionInstructions from "@/components/SectionInstructions.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Home",
  components: {
    Header,
    BaseHero,
    SectionCollection,
    SectionBenefits,
    SectionInstructions,
    TheFooter,
  },
};
</script>
