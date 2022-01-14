<template>
  <ion-grid>
    <ion-row class="ion-align-items-center border">
      <ion-col class="border" size="10">
        <ion-searchbar color="dark"></ion-searchbar>
      </ion-col>
      <ion-col class="ion-text-center border" size="2">
        <a class="addbtn border" href="/tabs/scan">
          <ion-icon slot="icon-only" size="large" :icon="add"></ion-icon>
        </a>
      </ion-col>
    </ion-row>
    <ion-row class="ion-align-items-center border">
      <ion-col class="border">
        <div class="transbox">
          <a href="/tabs/inbox" style="text-decoration: none">
            <div class="content border">
              <ion-grid>
                <ion-row>
                  <ion-col size="8">
                    <div>
                      <ion-icon
                        class="border"
                        size="large"
                        slot="icon-only"
                        :icon="notifications"
                      ></ion-icon>
                    </div>
                  </ion-col>
                  <ion-col size="4" class="ion-text-uppercase border">
                    <ion-text
                      ><span class="font-size-15rem">OPEN</span></ion-text
                    >
                  </ion-col>
                </ion-row>
                <ion-row class="border">
                  <ion-col class="ion-text-center">
                    <ion-text color="#ffc409" class="openNumber"
                      ><h1>4</h1></ion-text
                    >
                  </ion-col>
                </ion-row>
              </ion-grid>
              <hr color="#ffc409" />
              <ion-row>
                <ion-col class="border" size="1">
                  <ion-icon
                    class="border"
                    size="small"
                    color="secondary"
                    :icon="ticket"
                  ></ion-icon>
                </ion-col>
                <ion-col>
                  <ion-text>
                    <span class="border font-size">Total : 1</span>
                  </ion-text>
                </ion-col>
              </ion-row>
            </div>
          </a>
        </div>
      </ion-col>
    </ion-row>
    <ion-row class="ion-align-items-center border">
      <ion-col class="border">
        <div class="transbox">
          <a href="/tabs/inbox" style="text-decoration: none">
            <div class="content border">
              <ion-grid>
                <ion-row>
                  <ion-col size="8">
                    <div>
                      <ion-icon
                        class="border"
                        size="large"
                        slot="icon-only"
                        :icon="notifications"
                      ></ion-icon>
                    </div>
                  </ion-col>
                  <ion-col size="4" class="ion-text-uppercase border">
                    <ion-text
                      ><span class="font-size-15rem">ASSIGNED</span></ion-text
                    >
                  </ion-col>
                </ion-row>
                <ion-row class="border">
                  <ion-col class="ion-text-center">
                    <ion-text class="assignedNumber"><h1>4</h1></ion-text>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <hr color="#ffc409" />
              <ion-row>
                <ion-col class="border" size="1">
                  <ion-icon
                    class="border"
                    size="small"
                    color="secondary"
                    :icon="ticket"
                  ></ion-icon>
                </ion-col>
                <ion-col>
                  <ion-text>
                    <span class="border font-size">In Progress : 0</span>
                  </ion-text>
                </ion-col>
              </ion-row>
            </div>
          </a>
        </div>
      </ion-col>
    </ion-row>
    <ion-row class="ion-align-items-center border">
      <ion-col class="border">
        <div class="transbox">
          <a href="/tabs/inbox" style="text-decoration: none">
            <div class="content border">
              <ion-grid>
                <ion-row>
                  <ion-col size="8">
                    <div>
                      <ion-icon
                        class="border"
                        size="large"
                        slot="icon-only"
                        :icon="notifications"
                      ></ion-icon>
                    </div>
                  </ion-col>
                  <ion-col size="4" class="ion-text-uppercase border">
                    <ion-text
                      ><span class="font-size-15rem"
                        >In Progress</span
                      ></ion-text
                    >
                  </ion-col>
                </ion-row>
                <ion-row class="border">
                  <ion-col class="ion-text-center">
                    <ion-text class="inprogressNumber"><h1>4</h1></ion-text>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <hr color="#ffc409" />
              <ion-row>
                <ion-col class="border" size="1">
                  <ion-icon
                    class="border"
                    size="small"
                    color="secondary"
                    :icon="ticket"
                  ></ion-icon>
                </ion-col>
                <ion-col>
                  <ion-text>
                    <span class="border font-size">Cancelled : 1</span>
                  </ion-text>
                </ion-col>
              </ion-row>
            </div>
          </a>
        </div>
      </ion-col>
    </ion-row>
    <ion-row class="ion-align-items-center border">
      <ion-col class="border">
        <div class="transbox">
          <a href="/tabs/inbox" style="text-decoration: none">
            <div class="content border">
              <ion-grid>
                <ion-row>
                  <ion-col size="8">
                    <div>
                      <ion-icon
                        class="border"
                        size="large"
                        slot="icon-only"
                        :icon="notifications"
                      ></ion-icon>
                    </div>
                  </ion-col>
                  <ion-col size="4" class="ion-text-uppercase border">
                    <ion-text
                      ><span class="font-size-15rem">Resolved</span></ion-text
                    >
                  </ion-col>
                </ion-row>
                <ion-row class="border">
                  <ion-col class="ion-text-center">
                    <ion-text class="resolvedNumber"><h1>4</h1></ion-text>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <hr color="#ffc409" />
              <ion-row>
                <ion-col class="border" size="1">
                  <ion-icon
                    class="border"
                    size="small"
                    color="secondary"
                    :icon="ticket"
                  ></ion-icon>
                </ion-col>
                <ion-col>
                  <ion-text>
                    <span class="border font-size">Total : 1</span>
                  </ion-text>
                </ion-col>
              </ion-row>
            </div>
          </a>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonCol, IonGrid, IonRow, IonSearchbar } from "@ionic/vue";
import { defineComponent } from "vue";
import { sunny, notifications, mail, add, ticket } from "ionicons/icons";

export default defineComponent({
  name: "ExploreContainer",
  props: {
    name: String,
  },
  components: { IonCol, IonGrid, IonRow, IonSearchbar },
  setup() {
    return {
      sunny,
      notifications,
      mail,
      add,
      ticket,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.border {
  /* border: 1px solid red; */
}

div .transbox {
  margin: 5px;
  background-color: #000000;
  border: 1px solid black;
  border-radius: 5px;
  opacity: 0.6;
}

div .transbox .content {
  margin: 1%;
  color: #ffffff;
}

ion-searchbar {
  --border-radius: 20px;
}

.addbtn {
  padding-top: 1rem;
  border: 1px solid rgb(225, 130, 130);
  background-color: rgb(225, 130, 130);
  border-radius: 50%;
  color: white;
  font-weight: bolder;
}

.openNumber {
  background: rgb(225, 191, 1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.953);
  width: 5rem;
  height: 5rem;
  padding: 0.2rem;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
}

.assignedNumber {
  background: #0b75ff;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.953);
  width: 5rem;
  height: 5rem;
  padding: 0.2rem;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
}

.inprogressNumber {
  background: rgb(255, 19, 247);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.953);
  width: 5rem;
  height: 5rem;
  padding: 0.2rem;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
}

.resolvedNumber {
  background: rgb(44, 157, 7);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.953);
  width: 5rem;
  height: 5rem;
  padding: 0.2rem;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
}

.font-size-15rem {
  font-size: 1.2rem;
}

.font-size {
  font-size: 1rem;
}
</style>