<template>
  <div class="part">
    <ARow>
      <ACol v-bind:xs="16" v-bind:sm="6" v-bind:md="6">
        <div class="part-title-wrap">
          <h3 class="part-title">{{type}}</h3>
          <ASwitch :disabled="!optional" :checked="active" v-on:change="toggle" />
        </div>
      </ACol>
      <ACol v-bind:xs="24" v-bind:sm="18" v-bind:md="18">
        <ARow v-bind:gutter="12">
          <ACol
            v-bind:xs="24"
            v-bind:sm="12"
            v-bind:md="8"
            v-bind:lg="6"
            v-for="{best, group, link, name, price, selector} of listings"
          >
            <Listing
              v-bind:best="best.toFixed(2)"
              v-bind:group="group"
              v-bind:name="name"
              v-bind:price="price.toFixed(2)"
              v-bind:link="link"
              v-bind:selector="selector"
              v-bind:selected="selected"
              @change="setSelected"
            />
          </ACol>
        </ARow>
      </ACol>
    </ARow>
  </div>
</template>

<script>
import Listing from "./Listing";

export default {
  components: { Listing },
  data: function() {
    return {
      selected: (
        this.listings.find(l => l.selected === true) || this.listings[0]
      ).selector
    };
  },
  methods: {
    toggle: function(checked) {
      this.$emit("toggle", this.type, checked);
    },
    setSelected: function(selector) {
      this.selected = selector;
      this.$emit("change", this.type, selector);
    }
  },
  name: "PartType",
  props: {
    active: Boolean,
    icon: String,
    listings: Array,
    optional: Boolean,
    type: String
  }
};
</script>

<style>
.part {
  border-bottom: solid 1px #f5f5f5;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.part-title-wrap {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  margin-bottom: 8px;
  padding: 0 10px 0 0;
  text-align: left;
}
.part-title {
  margin: 0 15px 0 0;
}
</style>
