<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <tool-bar-layout title="Inbox"> </tool-bar-layout>
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

export default {
  components: { IonPage, IonContent },
  setup() {
    return {};
  },
};
</script>