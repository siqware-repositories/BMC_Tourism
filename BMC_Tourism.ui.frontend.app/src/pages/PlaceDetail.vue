<template>
  <q-page>
    <q-carousel
            v-model="slide"
            swipeable
            animated
            navigation
            navigation-position="bottom"
            height="250px"
            autoplay
            class="transparent no-padding no-margin"
    >
      <q-carousel-slide name="style" class="no-padding">
        <q-card class="shadow-1 no-border-radius" v-ripple clickable @click="$router.push({ name: 'place_detail', params: { id: '123' } })">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"/>
        </q-card>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="no-padding">
        <q-card class="shadow-1 no-border-radius" v-ripple clickable>
          <q-img src="https://cdn.quasar.dev/img/parallax1.jpg"/>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
    <q-card class="no-border-radius">
      <q-card-section class="bg-primary text-white no-border-radius">
        <div class="text-h6">Banteay Chhmar Temple</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn flat color="red" icon="favorite_border" label="10K"/>
        <q-btn flat color="teal" icon="remove_red_eye" label="100K"/>
        <q-btn flat color="primary" icon="share" />
      </q-card-actions>
    </q-card>
    <div class="q-px-md q-mt-sm">
      <div class="text-h6 text-primary">About</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem corporis distinctio, ducimus eaque, est inventore labore, molestias mollitia officiis placeat repellat totam vero! Blanditiis dolore in incidunt officiis porro!
      </div>
      <div class="text-h6 text-primary q-mt-sm">Todo</div>
      <div class="row q-col-gutter-xs">
        <div class="col-6">
          <q-btn icon="place" class="full-width" label="Travel Guide" stack color="primary" />
        </div>
        <div class="col-6">
          <q-btn icon="hotel" class="full-width" label="Hotel" stack color="positive" />
        </div>
        <div class="col-6">
          <q-btn icon="restaurant" class="full-width" label="Restaurant" stack color="positive" />
        </div>
        <div class="col-6">
          <q-btn icon="comment" class="full-width" label="Reviews" stack color="primary" />
        </div>

      </div>
      <q-list class="full-width">
        <q-item clickable v-ripple class="q-px-xs" to="/restaurant">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-primary" lines="1">Related</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row q-col-gutter-sm">
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
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PlaceDetail',
  data(){
    return{
      slide:'style',
      popularPlace:'style',
      stars: 4,
      search:''
    }
  }
}
</script>
<style lang="css">
  .pt-0{
    padding-top: 0 !important;
  }
</style>
