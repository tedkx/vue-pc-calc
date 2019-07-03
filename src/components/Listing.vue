<template>
  <div class="listing">
    <div class="listing-content">
      <a v-bind:href="link" target="_blank">{{fullName}}</a>
    </div>
    <div class="listing-price">
      €{{price}}
      <br />
      <span :class="bestClass">€{{best}}</span>
    </div>
    <div class="listing-radio" v-on:click="select">
      <ARadio v-model="value" class="ant-radio-group-small" />
      <input type="radio" :name="name" :value="selector" v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bestClass: function() {
      return `best ${this.best === this.price ? "match" : ""}`;
    },
    fullName: function() {
      return `${this.group ? this.group + " " : ""}${this.name}`;
    },
    value: {
      get: function() {
        return this.selector === this.selected;
      },
      set: function() {
        this.select();
      }
    }
  },
  methods: {
    select: function() {
      this.$emit("change", this.selector);
    }
  },
  name: "Listing",
  props: {
    best: String,
    group: String,
    link: String,
    name: String,
    price: Number,
    selected: String,
    selector: String
  }
};
</script>

<style>
.listing {
  align-items: center;
  background-color: #f7f7fb;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  float: left;
  height: 50px;
  justify-content: flex-end;
  margin: 0 15px 5px 0;
  max-height: 60px;
  overflow: hidden;
  padding: 0 0 0 8px;
  transition: all 0.3s;
  width: calc(25% - 15px);
  width: 100%;
}
.listing-content {
  flex-grow: 1;
  font-weight: bold;
  margin-right: 5px;
  text-align: left;
}
.listing-content a {
  color: #999;
  display: block;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
}
.listing-price {
  font-size: 14px;
  text-align: right;
  width: calc(35% - 25px);
}
.listing-price .best {
  color: #888;
  font-weight: bold;
}
.listing-price .best.match {
  color: #8b8;
}
.listing-radio {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  margin-left: 5px;
  width: 22px;
}
.listing-radio input {
  cursor: pointer;
}
</style>