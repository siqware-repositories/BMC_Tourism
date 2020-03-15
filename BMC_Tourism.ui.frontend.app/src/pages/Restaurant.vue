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
      <q-item v-for="i in 10" v-ripple :key="i" clickable class="bg-white shadow-5 q-mb-sm">
        <q-item-section top thumbnail class="q-ml-none">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
        <q-item-section>
          <q-item-label>Restaurant Item</q-item-label>
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
      search:''
    }
  }
}
</script>
