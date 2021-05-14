module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/styles/_variables.scss";
              @import "@/styles/_typography.scss";
              @import "@/styles/_functions.scss";`,
      },
    },
  },
};
