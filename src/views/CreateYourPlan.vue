<template>
  <div class="create-your-plan">
    <Header />
    <BaseHero
      copy="Create a plan"
      text="Build a subscription plan that best fits your needs. 
            We offer an assortment of the best artisan coffees from around 
            the globe delivered fresh to your door."
      img="plan/mobile/image-hero-blackcup.jpg"
    />
    <SectionInstructions />
    <SubscriptionFormOption />
    <TheFooter />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BaseHero from "@/components/BaseHero.vue";
import SectionInstructions from "@/components/SectionInstructions.vue";
import SubscriptionFormOption from "@/components/SubscriptionFormOption.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "CreateYourPlan",
  components: {
    Header,
    BaseHero,
    SectionInstructions,
    SubscriptionFormOption,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped></style>
