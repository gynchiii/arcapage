<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-blue-grey-12">
    <q-toolbar class="bg-primary text-black texxt q-my-md bg-blue-grey-12 ">
      <q-btn flat round dense   @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" class="q-mr-sm" />
        <h6 class="text-center">Grupo Arca</h6> 
      <q-space />

      <q-btn-dropdown stretch flat label="Produtos">
        <q-list>
          <q-item-label header class="texxt text-black">Elements</q-item-label>
          <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="event_seat" color="purple" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Cadeiras</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item-label header class="texxt text-black">3green</q-item-label>
          <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="assignment" color="purple" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>All-in-one</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn stretch flat label="Elements" />
      <q-btn stretch flat label="3Green" />
    </q-toolbar>
    </q-header>

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
      essentialLinks: linksData
    }
  }
}
</script>
