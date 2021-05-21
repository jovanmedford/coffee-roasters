<template>
  <div class="about">
    <Header />
    <BaseHero
      copy="About Us"
      text="Coffeeroasters began its journey of exotic discovery in 1999, 
            highlighting stories of coffee from around the world. We have 
            since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      img="about/desktop/image-hero-whitecup.jpg"
    />
    <SectionMissionStatement />
    <SectionValueProposition />
    <SectionLocation />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import BaseHero from "@/components/BaseHero.vue";
import TheFooter from "@/components/TheFooter.vue";
import SectionMissionStatement from "@/components/SectionMissionStatement.vue";
import SectionValueProposition from "@/components/SectionValueProposition.vue";
import SectionLocation from "@/components/SectionLocation";

export default {
  name: "Home",
  components: {
    Header,
    BaseHero,
    SectionMissionStatement,
    SectionValueProposition,
    SectionLocation,
    TheFooter,
  },
};
</script>
