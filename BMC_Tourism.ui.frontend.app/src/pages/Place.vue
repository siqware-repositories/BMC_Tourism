<template>
  <q-page class="q-px-sm">
    <q-toolbar class="no-padding">
      <q-input clearable v-model="search" bg-color="white" rounded outlined :dense="true" class="full-width" placeholder="Search....">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-toolbar>
    <q-list separator>
      <q-item
              v-for="(place, i) in places"
              v-ripple :key="i" clickable class="bg-white shadow-5 q-mb-sm"
             :to="{ name: place.to, params: { id: '123' } }"
      >
        <q-item-section top thumbnail class="q-ml-none">
          <img :src="place.image">
        </q-item-section>
        <q-item-section>
          <q-item-label>{{place.name}}</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Place',
  data(){
    return{
      slide:'style',
      popularPlace:'style',
      stars: 4,
      search:'',
      places: [
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Banteay_Chhmar_Temple_Entrance.JPG',
          name: 'Angkor Wat',
          to: 'place_detail'
        },{
          image: 'data:image/jpeg;base64,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',
          name: 'Mountain',
          to: 'place_detail'
        },{
          image: 'https://i.ytimg.com/vi/0FHPjCOY2hw/maxresdefault.jpg',
          name: 'Waterfall',
          to: 'place_detail'
        },{
          image: 'https://insideasia.ams3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2017/09/iStock_koh-rong-900x600.jpg',
          name: 'Beach',
          to: 'place_detail'
        },
      ],
    }
  }
}
</script>
