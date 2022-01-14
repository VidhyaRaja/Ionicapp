<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <tool-bar-layout title="Home"> </tool-bar-layout>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

export default {
  components: {
    ExploreContainer,
    IonContent,
    IonPage,
  },
};
</script>
<style scoped>
ion-content {
  --background: none;
  background-image: url("../assests/img/MainMetro-Blur.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
