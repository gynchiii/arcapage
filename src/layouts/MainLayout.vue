<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-blue-grey-12 large-screen-only medium-screen-only">
    <q-toolbar class="bg-primary text-black texxt q-my-xs bg-blue-grey-12 ">
      <q-btn flat round dense   @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" class="q-mr-xl" />
        <h6 class="text-center">Grupo Arca</h6> 
      <q-space />
      <q-btn stretch to="/elements" flat label="Elements" />
      <q-btn stretch flat label="3Green" />
    </q-toolbar>
    </q-header>

     <q-footer bordered class="bg-dark text-grey-10 small-screen-only" elevated>
      <q-tabs
        active-color="white"
        v-model="tab"
        indicator-color="transparent"
        class="text-purple small-screen-only"
      >
        <q-route-tab to="/elements" name="dashboard" icon="dashboard" class="texxt" label="ELEMENTS" />
        <q-route-tab to="/" name="home" icon="home" class="texxt" label="HOME" />
        <q-route-tab to="/camera" name="camera" icon="camera" class="texxt" label="3GREEN" />
      </q-tabs>
    </q-footer>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-blue-grey-12"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
 
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

.texxt{
  font-family: 'Orbitron', sans-serif;

}
</style>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Sobre nós',
    caption: 'Saiba quem somos',
    icon: 'school',
    link: 'https://elementsgaming.com.br/'
  },
  {
    title: 'Conheça a Elements',
    caption: 'Venha fazer parte desse mundo',
    icon: 'code',
    link: 'https://elementsgaming.com.br/'
  },
  {
    title: 'Forum',
    caption: 'Tire suas dúvidas',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@Grupo arca',
    icon: 'rss_feed',
    link: 'https://twitter.com/Elements4Gaming'
  },
  {
    title: 'Facebook',
    caption: '@Grupo arca',
    icon: 'public',
    link: 'https://www.facebook.com/elements4gaming'
  },
  {
    title: 'Instagram',
    caption: '<3',
    icon: 'favorite',
    link: 'https://www.instagram.com/elements.gaming/'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tab: 'home'
    }
  }
}
</script>
