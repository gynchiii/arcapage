<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="bg-blue-9 large-screen-only "
    >
      <q-toolbar
        style="opacity: 0.8;"
        class=" texxta2 text-black texxt q-my-none bg-blue-9 "
      >
        <div class="q-gutter-md q-pa-xs">
          <q-btn
            to="/"
            round
            outline
            class="text-center q-pa-sm bg-blue-9 text-white  text-bold text-h7"
          >
            <q-img
              class="flex flex-center"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/arca-logo-branca-sem-nome.png"
            ></q-img>
          </q-btn>
        </div>
        <q-space />
        <q-btn
          to="/about"
          push
          dense
          label="Sobre nós"
          class="text-center text-bold texxta2 btb text-black"
        />
        <div class="q-ml-sm">
          <q-btn
            push
            class="btc text-black texxta2 text-bold"
            to="/elements"
            label="Elements"
          />
        </div>
        <div class="q-ml-sm">
          <q-btn
            push
            class="texxta2 btd text-black text-bold"
            to="/3green"
            label="3Green"
          />
        </div>
        <div class="q-ml-md">
          <q-btn
            push
            class=" texxta2 bte text-black text-bold"
            to="/Hq"
            label="MONITORES HQ"
          />
        </div>
        <div class="q-ml-md">
          <q-btn
            push
            class=" texxta2 bte text-black text-bold"
            to="/Hq"
            label="Contato"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <q-footer
        bordered
        elevated
        class="bg-white justify-arround  flex text-grey-10 small-screen-only"
      >
        <q-tabs
          active-color="blue-4"
          v-model="tab"
          indicator-color="transparent"
          class="text-black small-screen-only"
        >
          <q-route-tab
            to="/"
            name="Home"
            icon="home"
            class="texxt"
            label="Arca"
          />
          <q-route-tab
            to="/elements"
            name="Elements"
            icon="code"
            class="texxt"
            label="ELEMENTS"
          />
          <q-route-tab
            to="/Hq"
            name="Hq"
            icon="code"
            class="texxt"
            label="HQ"
          />
          <q-route-tab
            to="/3green"
            name="3green"
            icon="code"
            class="texxt"
            label="3GREEN"
          />

        </q-tabs>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Allerta+Stencil&family=Audiowide&display=swap");
.texxt {
  font-family: "Orbitron", sans-serif;
}
.texxt2 {
  font-family: "Alfa Slab One", cursive;
  font-family: "Allerta Stencil", sans-serif;
  font-family: "Audiowide", cursive;
}
.bta:focus-within {
  background-color: royalblue;
}
.btb:focus-within {
  background-color: royalblue;
}
.btc:focus-within {
  background-color: royalblue;
}
.btd:focus-within {
  background-color: royalblue;
}
.bte:focus-within {
  background-color: royalblue;
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