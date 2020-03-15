<template>
    <q-layout view="lHh Lpr fff" class="bg-grey-1">
        <q-header class="transparent text-primary">
            <q-toolbar class="q-px-sm">
                <q-btn v-go-back=" '/' " @click="drawer = !drawer" round dense icon="arrow_back" color="primary"/>
            </q-toolbar>
        </q-header>
        <q-page-container class="no-padding">
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
    import EssentialLink from 'components/EssentialLink'
    import {LocalStorage} from "quasar";

    export default {
        name: 'MainLayout',
        components: {
            EssentialLink
        },

        data() {
            return {
                leftDrawerOpen: false,
                search: '',
                storage: 0.26,
                navigations: [
                    {icon: 'list', text: 'List', to: '/'},
                    {icon: 'people', text: 'User', to: '/login'},
                ],
                tab:true,
                drawer: false
            }
        },
        computed: {
            /*activeUserInfo() {
              return this.$store.state.auth.AppActiveUser
            }*/
        },
        /*async created() {
          let self = this;
          const token = LocalStorage.getItem("userInfo");
          if (token) {
            await self.$store.dispatch('auth/updateUserData',token);
          }
        },*/
        methods: {
            logout() {
                LocalStorage.remove('userInfo');
                window.location.replace('#/login')
            },
        }
    }
</script>