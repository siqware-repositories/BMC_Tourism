<template>
    <q-layout view="lHh Lpr fff" class="bg-grey-1">
        <q-header class="bg-white text-primary">
            <q-toolbar class="q-px-sm">
                <q-btn flat @click="drawer = !drawer" round dense icon="sort" />
                <q-toolbar-title>Travel Guide</q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="drawer"
                show-if-above
                :width="270"
                :breakpoint="500"
        >
            <q-scroll-area class="fit">
                <q-list padding class="menu-list">
                    <q-item to="/" exact clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="home" />
                        </q-item-section>

                        <q-item-section>
                            Home
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="info" />
                        </q-item-section>

                        <q-item-section>
                            About
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="call" />
                        </q-item-section>

                        <q-item-section>
                            Contact
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="settings" />
                        </q-item-section>

                        <q-item-section>
                            Setting
                        </q-item-section>
                    </q-item>
                    <q-separator/>
                    <q-item>
                        <q-item-section>
                            V1.0.0
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-footer class="bg-white" elevated reveal>
            <q-tabs
                    v-model="tab"
                    indicator-color="primary"
                    active-color="primary"
                    switch-indicator
                    inline-label
                    class="text-grey shadow-2"
                    align="center"
            >
                <q-route-tab to="/place" name="place" icon="place"/>
                <q-route-tab to="/hotel" name="hotel" icon="hotel"/>
                <q-route-tab to="/" name="home" icon="home"/>
                <q-route-tab to="/restaurant" name="restaurant" icon="restaurant"/>
                <q-route-tab to="/service" name="service" icon="commute"/>
            </q-tabs>
        </q-footer>
        <q-page-container>
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
                tab:'navigation',
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