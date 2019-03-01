<template>
  <div class="recipes-index">
    <h1>All Recipes</h1>
    <div>
      Filter Title: <input v-model="titleFilter" list="titles">
    </div>

    <datalist id="titles">
      <option v-for="recipe in recipes">{{ recipe.title }}</option>
    </datalist>

    <div class="row">
      <div v-for="recipe in filterBy(recipes, titleFilter, 'title')" class="col-md-4">
        <h2>{{ recipe.title }}</h2>
        <router-link v-bind:to="'/recipes/' + recipe.id">
          <img v-bind:src="recipe.image_url" v-bind:alt="recipe.title">
        </router-link>
      </div>     
    </div>
    
  </div>
</template>

<style>
img{
  width: 250px; 
}
</style>

<script>
var axios = require('axios');
import Vue2Filters from'vue2-filters';

export default {
  data: function() {
    return {
      recipes: [],
      currentRecipe: {},
      titleFilter: "",
    };
  },
  created: function() {
    axios.get("/api/recipes")
      .then(response => {
        this.recipes = response.data;
      });
  },
  methods: {
  },
  mixins: [Vue2Filters.mixin]
};
</script>