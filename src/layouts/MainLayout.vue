<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-blue-grey-12 large-screen-only ">
    <q-toolbar class="bg-primary constrain text-black texxt q-my-none bg-blue-grey-12 ">
        <q-btn to="/" outline dense  class="text-center text-h6">Arca</q-btn> 
      <q-space />
      <q-btn stretch to="/elements" flat label="Elements" />
      <q-btn stretch flat to="/3green" label="3Green" />
    </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
     <q-footer bordered class="bg-dark flex text-grey-10 small-screen-only" >
      <q-tabs
        active-color="white"
        v-model="tab"
        indicator-color="transparent"
        class="text-red-7 small-screen-only"
      >
        <q-route-tab to="/elements" name="dashboard" icon="dashboard" class="texxt" label="ELEMENTS" />
        <q-route-tab to="/" name="home" icon="home" class="texxt" label="HOME" />
        <q-route-tab to="/3green" name="camera" icon="camera" class="texxt" label="3GREEN" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Allerta+Stencil&family=Audiowide&display=swap');

.texxt{
  font-family: 'Orbitron', sans-serif;

}
.texxt2{
  font-family: 'Alfa Slab One', cursive;
  font-family: 'Allerta Stencil', sans-serif;
  font-family: 'Audiowide', cursive;
}
</style>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      tab: 'home'
    }
  }
}
</script>
