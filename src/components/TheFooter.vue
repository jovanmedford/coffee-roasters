<template>
  <footer>
    <div class="footer__logo-and-links">
      <TheLogo class="footer__logo" />
      <div class="footer__links-container">
        <router-link
          class="footer__link"
          :key="link.text"
          v-for="link in links"
          :to="link.to"
          >{{ link.text }}
        </router-link>
      </div>
    </div>
    <SocialIcons />
  </footer>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";
import TheLogo from "@/components/TheLogo.vue";

export default {
  name: "TheFooter",
  components: {
    SocialIcons,
    TheLogo,
  },
  data() {
    return {
      links: [
        { text: "Home", to: "/" },
        { text: "About Us", to: "/about" },
        { text: "Create Your Plan", to: "/create-your-plan" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  background-color: #2c343e;
  margin: rem-calc(0 24 72 24);
  padding: rem-calc(54 0);

  @media screen and (min-width: $breakpoint-desktop) {
    margin: rem-calc(0 80 88 80);
    padding: rem-calc(47 85);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}

.footer__logo-and-links {
  @media screen and (min-width: $breakpoint-desktop) {
    display: flex;
  }
}

.footer__logo {
  display: block;
  margin: 0 auto rem-calc(48) auto;

  @media screen and (min-width: $breakpoint-desktop) {
    margin-bottom: 0;
    margin-right: rem-calc(100);
  }
}

.footer__links-container {
  margin-bottom: rem-calc(48);
  font-size: rem-calc(12);
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: $breakpoint-tablet) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: $breakpoint-desktop) {
    margin-bottom: 0;
  }
}

.footer__link {
  display: block;
  color: $color-text-light;
  text-decoration: none;

  &:hover {
    color: white;
    cursor: pointer;
  }
}

.footer__link:not(:last-child) {
  margin-bottom: rem-calc(24);
  @media screen and (min-width: $breakpoint-tablet) {
    margin-right: rem-calc(32);
    margin-bottom: 0;
  }
}
</style>
