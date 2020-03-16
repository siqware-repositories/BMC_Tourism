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
          <q-img src="data:image/jpeg;base64,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"/>
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
        <div class="text-h6">Restaurant Detail</div>
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
      search:'',
    }
  }
}
</script>
<style lang="css">
  .pt-0{
    padding-top: 0 !important;
  }
</style>
