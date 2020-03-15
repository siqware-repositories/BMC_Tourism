<template>
  <q-page class="q-px-sm">
    <q-carousel
            v-model="slide"
            swipeable
            animated
            navigation
            navigation-position="top"
            height="250px"
            autoplay
            class="transparent no-padding no-margin"
    >
      <q-carousel-slide name="style" class="q-px-xs">
        <q-card class="shadow-1" v-ripple clickable @click="$router.push({ name: 'place_detail', params: { id: '123' } })">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom">
              <div class="text-h6">Banteay Chhmar Temple</div>
            </div>
          </q-img>
        </q-card>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="q-px-xs">
        <q-card class="shadow-1" v-ripple clickable>
          <q-img src="https://cdn.quasar.dev/img/parallax1.jpg">
            <div class="absolute-bottom">
              <div class="text-h6">Banteay Chhmar Temple 1</div>
            </div>
          </q-img>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
    <q-list class="full-width">
      <q-item clickable v-ripple class="q-px-xs" to="/place">
        <q-item-section avatar>
          <q-avatar size="35px" icon="place" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-primary" lines="1">Places</q-item-label>
        </q-item-section>

        <q-item-section side>
          View all
        </q-item-section>
      </q-item>
    </q-list>
    <div class="row q-col-gutter-sm q-pa-xs">
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Banteay_Chhmar_Temple_Entrance.JPG" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-list class="full-width">
      <q-item clickable v-ripple class="q-px-xs" to="/hotel">
        <q-item-section avatar>
          <q-avatar size="35px" icon="hotel" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-primary" lines="1">Hotel & Resort</q-item-label>
        </q-item-section>

        <q-item-section side>
          View all
        </q-item-section>
      </q-item>
    </q-list>
    <div class="row q-col-gutter-sm q-pa-xs">
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://pix10.agoda.net/hotelImages/444/444470/444470_14042808520019221224.jpg?s=1024x768" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-list class="full-width">
      <q-item clickable v-ripple class="q-px-xs" to="/restaurant">
        <q-item-section avatar>
          <q-avatar size="35px" icon="restaurant" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-primary" lines="1">Restaurant</q-item-label>
        </q-item-section>

        <q-item-section side>
          View all
        </q-item-section>
      </q-item>
    </q-list>
    <div class="row q-col-gutter-sm q-pa-xs">
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://pix10.agoda.net/hotelImages/444/444470/444470_14042808520019221224.jpg?s=1024x768" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card v-ripple clickable class="shadow-1">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $・Italian, Cafe
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      slide:'style',
      popularPlace:'style',
      stars: 4
    }
  }
}
</script>
