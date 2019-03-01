<template>
  <div class="recipes-show">
    <h1>{{ recipe.title }}</h1>
    <img v-bind:src=" recipe.image_url " :alt="recipe.title">
    <h4>Chef: {{ recipe.chef }}</h4>
    <h4>Prep Time: {{ recipe.formatted.prep_time }}</h4>
    <h3>Ingredients:</h3>

      <ul>
        <li v-for="ingredient in recipe.formatted.ingredients">{{ ingredient }}</li>
      </ul>

    <h3>Directions:</h3>

      <ol>
        <li v-for="direction in recipe.formatted.directions">{{ direction }}</li>
      </ol>
      <router-link :to=" '/recipes/' + recipe.id + '/edit' " class="btn btn-warning">Edit</router-link>
      <button v-on:click="destroyRecipe()" class="btn btn-danger">Delete</button>
  </div>
</template>

<style>
  
</style>
<script>
  var axios = require('axios')

  export default {
    data: function() {
      return {
        recipe: {
            id: "",
            title: "",
            chef: "",
            image_url: "",
            ingredients: "",
            directions: "",
            prep_time: "",
            formatted:{
              ingredients: [],
              directions: [],
              prep_time: "",
              created_at: ""}
             }
      };
    },
    created: function() {
      axios.get("/api/recipes/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.recipe = response.data;
        });
    },
    methods: {
      destroyRecipe: function() {
        axios.delete("/api/recipes/" + this.recipe.id)
          .then(response => {
            console.log("Success", response.data);
            this.$router.push("/");
          });
      }
    }
  }
</script>