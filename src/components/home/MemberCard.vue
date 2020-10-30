<template>
  <div>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index">
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
            <v-img
            height="250"
            :src="card.src"
            ></v-img>
        
            <v-card-title v-text="card.name"></v-card-title>
        
            <v-card-text>
            {{card.position}}
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
export default {
  props: ["cards"]
}
</script>

<style>

</style>