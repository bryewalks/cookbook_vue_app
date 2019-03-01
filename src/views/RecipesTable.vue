<template>
  <div class="recipes-table">
    <h1> All Recipes </h1>

    <div>
      Filter Title: <input v-model="titleFilter" list="titles">

      <datalist id="titles">
        <option v-for="recipe in recipes">{{recipe.title}}</option>
      </datalist>
    </div>

  <table class="table table-striped table-dark">
    <thead class="thead-light"> 
     <tr>
       <th scope="col" v-on:click="setSortAttribute('id')">ID s</th>
       <th scope="col" v-on:click="setSortAttribute('title')">Title <span v-if="sortAttribute === 'title'"> *</span></th>
       <th scope="col" v-on:click="setSortAttribute('chef')">Chef <span v-if="sortAttribute === 'chef'"> *</span></th>
       <th scope="col" v-on:click="setSortAttribute('prep_time')">Prep Time <span v-if="sortAttribute === 'prep_time'"> *</span></th>
     </tr>
    </thead>
    <tbody is="transition-group" class="fadeLeftBig-enter-active">
     <tr v-for="recipe in orderBy(filterBy(recipes, titleFilter, 'title'), sortAttribute, sortOrder)" v-bind:key="recipe.id">
       <th scope="row">
       {{recipe.id}}
      </th scope="row">
       <td>
      <router-link v-bind:to="'/recipes/' + recipe.id">
        {{recipe.title}}
      </router-link>
      </td>
       <td>
       {{recipe.chef}}
      </td>
       <td>
       {{recipe.formatted.prep_time}}
      </td>
     </tr>
    </tbody>
   </table>

  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
import Vue2Filters from "vue2-filters";

export default {
  data: function() {
    return {
      recipes: [],
      currentRecipe: {},
      titleFilter: "",
      sortAttribute: 'id',
      sortOrder: 1
    };
  },
  created: function() { 
    axios.get("/api/recipes")
    .then(response => {
        this.recipes = response.data;
      });
  },
  methods: {
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        this.sortOrder *= -1;       
      } else {
        this.sortAttribute = inputAttribute;
        this.sortOrder = 1;
      }
    }
  },

  mixins: [Vue2Filters.mixin]
};
</script>