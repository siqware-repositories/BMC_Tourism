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
        <div class="text-h6">Place Detail</div>
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
          <q-btn icon="place" @click="$router.push({ name: 'place_guide'})" class="full-width" label="Travel Guide" stack color="primary" />
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
