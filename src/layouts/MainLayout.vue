<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-3 large-screen-only ">
    <q-toolbar style="opacity: 0.7;" class=" constrainbig texxt2 text-black texxt q-my-none bg-grey-3 ">
        <div class="q-gutter-lg">
        <q-btn to="/" push dense  class="text-center text-black bg-blue-2 text-bold text-h6">Arca</q-btn> 
        <q-btn to="/about" push dense  class="text-center text-black bg-grey-3 text-bold text-h6">Sobre nós</q-btn> 
        </div>
      <q-space />
      <div class="q-pa-sm">
      <q-btn  push class="bg-grey-3 text-dark texxt2 text-bold" to="/elements"  label="Elements" />
      </div>
      <div class="q-pa-sm">
      <q-btn push class="bg-grey-3 texxt2 text-black text-bold" to="/3green" label="3Green" />
      </div>
      <div class="q-pa-md">
      <q-btn push class="bg-grey-3 texxt2 text-black text-bold" to="/Hq" label="MONITORES HQ" />
      </div>
      <div class="q-pa-xs flex flex-end">
    <subtitle  class="texxt2 text-h7 text-blue-10 flex"> (48) 3374-6010</subtitle>
      </div>
    </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
     <q-footer bordered class="bg-white flex text-grey-10 small-screen-only" >
      <q-tabs
        active-color="blue-4"
        v-model="tab"
        indicator-color="transparent"
        class="text-black small-screen-only"
      >
        <q-route-tab to="/" name="Home" icon="home" class="texxt" label="Arca" />
        <q-route-tab to="/elements" name="Elements" icon="code" class="texxt" label="ELEMENTS" />
        <q-route-tab to="/Hq" name="Hq" icon="code" class="texxt" label="HQ" />
        <q-route-tab to="/3green" name="3green" icon="code" class="texxt" label="3GREEN" />
      
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