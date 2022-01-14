<template>
  <ion-page :fullscreen="true">
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img
            alt="logo"
            style="display: inline-block"
            height="30"
            src="../assests/logo/Firm-dark-neon.png"
          />
        </ion-title>
        <ion-buttons slot="secondary">
          <ion-button @click="clickedUserProfile()">
            <ion-icon
              slot="icon-only"
              color="primary"
              :icon="personCircle"
            ></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon
              color="warning"
              slot="icon-only"
              :icon="notifications"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  personCircle,
  sunnyOutline,
  notifications,
} from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  components: {
    IonButton,
    IonButtons,
    IonIcon,
    IonToolbar,
    IonTitle,
  },
  methods: {},
  setup() {
    return {
      ellipsisHorizontal,
      ellipsisVertical,
      helpCircle,
      personCircle,
      sunnyOutline,
      notifications,
    };
  },
});
</script>