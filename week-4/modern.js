let farmer = {
    name: "Andrew",
    age: 35,
    location: "kla",
    requestChicks: function(quantity) {
      return this.name + " requested " + quantity + " chicks";
    }
  }
//module.exports = farmer;
export default farmer;