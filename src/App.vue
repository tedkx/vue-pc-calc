<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <PartType
      v-for="{active, listings, optional, type} in parts"
      v-bind:active="active"
      v-bind:listings="listings"
      v-bind:type="type"
      v-bind:optional="optional"
      @change="selectPart"
      @toggle="togglePart"
    />
    <div id="total">
      Total:
      <strong>€{{total}}</strong>
    </div>
  </div>
</template>

<script>
import PartType from "./components/PartType.vue";
import data from "./data.json";

export default {
  name: "app",
  data: function() {
    return {
      parts: data.parts.map(p => {
        if (!p.listings.some(l => l.selected === true))
          p.listings[0].selected = true;
        const listings = p.listings.map(l => ({
          ...l,
          selector: this.generateSelector(p.type, l)
        }));
        return {
          ...p,
          listings,
          selected: (listings.find(l => l.selected) || listings[0]).selector,
          active: p.optional !== true
        };
      })
    };
  },
  methods: {
    generateSelector: function(type, listing) {
      return `${type}_${listing.group || ""}_${listing.name}`;
    },
    selectPart: function(type, listingSelector) {
      this.parts = this.parts.map(p =>
        p.type !== type
          ? p
          : {
              ...p,
              selected: listingSelector
            }
      );
    },
    togglePart: function(type, active) {
      this.parts = this.parts.map(p =>
        p.type === type
          ? {
              ...p,
              active
            }
          : p
      );
    }
  },
  computed: {
    total: function() {
      return (this.parts || [])
        .reduce(
          (sum, part) =>
            sum +
              (part.active &&
                (part.listings.find(l => l.selector === part.selected) || {})
                  .price) || 0,
          0
        )
        .toFixed(2);
    }
  },
  el: "#app",
  components: {
    PartType
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px 8px 0;
}
#total {
  font-size: 24px;
  margin-left: 30%;
  text-align: left;
}
</style>
