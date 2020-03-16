<template>
    <q-page>
        <q-card>
            <q-tab-panels v-model="tab">
                <q-tab-panel name="direction">
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d495825.93721735926!2d103.050098!3d13.860627!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x311ae76384bcac2d%3A0x6ae37e3dcb70f17f!2sMeanChey%20University%2C%20NR5%2C%20Sisophon%2C%20Cambodia!3m2!1d13.5798293!2d102.9284086!4m5!1s0x311a5cf3eb1842ef%3A0x740d258e9fef0015!2sBanteay%20Chhmar%2C%20Cambodia!3m2!1d14.0711637!2d103.09908089999999!5e0!3m2!1sen!2sus!4v1584327918286!5m2!1sen!2sus"
                    ></iframe>
                </q-tab-panel>

                <q-tab-panel name="location">
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d495825.93721735926!2d103.050098!3d13.860627!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x311ae76384bcac2d%3A0x6ae37e3dcb70f17f!2sMeanChey%20University%2C%20NR5%2C%20Sisophon%2C%20Cambodia!3m2!1d13.5798293!2d102.9284086!4m5!1s0x311a5cf3eb1842ef%3A0x740d258e9fef0015!2sBanteay%20Chhmar%2C%20Cambodia!3m2!1d14.0711637!2d103.09908089999999!5e0!3m2!1sen!2sus!4v1584327918286!5m2!1sen!2sus"
                    ></iframe>
                </q-tab-panel>
            </q-tab-panels>

            <q-separator />
        </q-card>
        <q-footer reveal>
            <q-tabs
                    v-model="tab"
                    inline-label
                    class="transparent"
            >
                <q-tab name="direction" label="Direction" icon="directions" />
                <q-tab name="location" label="Location" icon="location_on" />
            </q-tabs>
        </q-footer>
    </q-page>
</template>

<script>
    export default {
        name: "PlaceGuide",
        data(){
            return{
                tab:'direction'
            }
        }
    }
</script>

<style scoped>
    iframe {
        position: fixed;
        background: #000;
        border: none;
        top: 0; right: 0;
        bottom: 0; left: 0;
        width: 100%;
        height: 92.5%;
        z-index: 0;
    }
</style>