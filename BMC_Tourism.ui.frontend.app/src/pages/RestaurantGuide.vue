<template>
    <q-page>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d495825.93721735926!2d103.050098!3d13.860627!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x311ae76384bcac2d%3A0x6ae37e3dcb70f17f!2sMeanChey%20University%2C%20NR5%2C%20Sisophon%2C%20Cambodia!3m2!1d13.5798293!2d102.9284086!4m5!1s0x311a5cf3eb1842ef%3A0x740d258e9fef0015!2sBanteay%20Chhmar%2C%20Cambodia!3m2!1d14.0711637!2d103.09908089999999!5e0!3m2!1sen!2sus!4v1584327918286!5m2!1sen!2sus"
        ></iframe>
    </q-page>
</template>

<script>
    export default {
        name: "RestaurantGuide",
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
        height: 100%;
        z-index: 0;
    }
</style>
