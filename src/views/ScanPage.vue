<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <tool-bar-layout title="Scan"> </tool-bar-layout>
      <ExploreContainer name="Tab 2 page" />
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