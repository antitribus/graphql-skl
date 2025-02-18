// const appsResolvers = require("./appsResolvers");
// const appsGroupResolvers = require("./appsGroupResolvers");
// const banksResolvers = require("./banksResolvers");

export default {
  Query: {
    hello: () => "world",
    // ...appsGroupResolvers,
    // ...banksResolvers,
  },
};
