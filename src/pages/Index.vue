<template>
  <q-page
    class="bgb"
    style="overflow-x: hidden ; overflow-y: hidden "
  >
    <div class="large-screen-only">
      <div class="q-pa-none items-center row">
        <q-parallax
          :height="950"
          style="width: 55%;"
          class="q-gutter-xl"
        >
          <template v-slot:media>
            <img src="">
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center"
              :style="{
            opacity: 1 + (0.6 - scope.percentScrolled) * 5,
            top: (scope.percentScrolled * 0) + '%',
            left: 0,
            right: 0
          }"
            >
              <img
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Untitled-1.png"
                class="q-pa-xs"
                style="width: 600px;"
              >
            </div>
          </template>
        </q-parallax>
        <div
          style="width: 45%;"
          class="texxta text-grey-10 text-center  text-italic"
        >
          <h3>O que você precisa hoje? </h3>
          <h4> o grupo arca nasceu para aproximar você de seus objetivos, e iremos provar. texto texto </h4>
          <h4> o grupo arca nasceu para aproximar você de seus objetivos, e iremos provar. texto texto </h4>
        </div>
        <div
          class="q-pa-md flex-left"
          style="width: 45%;"
        >
          <form class="q-gutter-md">
            <q-input
              class="bg-blue-3"
              v-model="name"
              type="name"
              prefix="Nome:"
            >
              <template v-slot:prepend>
                <q-icon
                  class="q-pa-sm"
                  name="account_circle"
                />
              </template>
            </q-input>

            <q-input
              class="bg-blue-3"
              v-model="email"
              type="email"
              prefix="Email:"
            >
              <template v-slot:prepend>
                <q-icon
                  class="q-pa-sm"
                  name="mail"
                />
              </template>
            </q-input>

            <q-input
              class="bg-blue-3"
              v-model="number"
              type="number"
              prefix="CNPJ:"
            >
              <template v-slot:prepend>
                <q-icon
                  class="q-pa-sm"
                  name="work"
                />
              </template>
            </q-input>

            <q-toggle
              v-model="accept"
              label="Aceito receber emails promocionais e informativos do Grupo Arca"
            />
            <div>

              <q-btn
                label="Enviar"
                class="texxt2"
                type="submit"
                color="blue-9"
              />
            </div>
          </form>
        </div>

      </div>
    </div>
    <q-parallax
      class="small-screen-only"
      style="width: 100%;"
    >
      <template v-slot:media>
        <img src="https://www.hdwallpapers.in/download/blue_mountains_4k_2-HD.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 1 + (0.6 - scope.percentScrolled) * 5,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img
            src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Untitled-1.png"
            style="width: 350px"
          >
        </div>
      </template>
    </q-parallax>
    <div class="flex q-pa-xl flex-center">
      <q-btn
        padding="lg"
        push
        class="bgs large-screen-only texxta text-italic text-h4 text-bold text-blue-1"
        to="/About"
        rounded
      >
        QUER SABER MAIS SOBRE NÓS? CLIQUE AQUI
      </q-btn>
      <div class="small-screen-only">
        <h4 class="text-center texxt text-bold text-italic text-blue-10">Pra sua empresa que deseja</h4>
        <h5 class="texxt text-bold text text-center text-blue-10">

          <br>
          Reduzir custo comprando da própria industria ✓
          <br>
          <q-linear-progress
            indeterminate
            rounded
            color="blue-4"
            class="q-mt-sm"
          />
          Comprar com qualidade certificada ISO 9001 ✓
          <br>
          <q-linear-progress
            indeterminate
            rounded
            color="blue-4"
            class="q-mt-sm"
          />
          Contar com uma só industria para todas as soluções em computadores ✓

          <br>

        </h5>
      </div>
      <q-btn
        padding="xl"
        push
        class="bgs small-screen-only texxt text-h7 text-bold text-white"
        to="/About"
        rounded
      >
        QUER SABER MAIS SOBRE NÓS? CLIQUE AQUI
      </q-btn>
    </div>

    <br>
    <br>
    <q-dialog v-model="inception">
      <q-card class="bg-dark">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <h4 class="texxta text-center constrain large-screen-only text-grey-6">O Grupo Arca nasceu com um único objetivo:
            <br>
            <br>
            Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
            <br>

            Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.
          </h4>
          <h5 class="texxta text-center constrainsmall small-screen-only text-grey-6">O Grupo Arca nasceu com um único objetivo:
            <br>
            <br>
            Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
            <br>

            Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.
          </h5>
        </q-card-section>

        <q-card-actions
          align="right"
          class="text-primary"
        >
          <q-btn
            flat
            dense
            class="text-white texxt"
            label="Fechar"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="flex justify-beyween">

      <q-parallax
        class="large-screen-only"
        style="width: 33%;  height: 77vh;"
        src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/BANNER-INICIAL-ELEMENTS.jpg"
      >
        <h2 class="text-center text-bold text-black texxt "> ELEMENTS </h2>

        <h5 class="texxt text-grey-1 text-italic  text-center "> Cadeiras gamers </h5>
        <q-btn
          to="/elements"
          color="purpe"
          class="bg-purple-2"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
            <q-icon
              left
              name="done"
            />
            <div class="text-center text-black">
              Conhecer<br>Agora
            </div>
          </div>
        </q-btn>
        <br>
      </q-parallax>

      <q-parallax
        class="small-screen-only"
        style="width: 100%;"
        src="https://i.pinimg.com/originals/22/58/24/2258249e9b4084cda4fdc9c798818d19.jpg"
      >
        <h2 class="text-center text-bold text-purple-2 texxt "> ELEMENTS </h2>

        <q-btn
          to="/elements"
          color="purpe"
          class="bg-purple-2"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
            <q-icon
              left
              name="done"
            />
            <div class="text-center text-black">
              Conhecer<br>Agora
            </div>
          </div>
        </q-btn>
        <br>
        <h4 class="texxt text-grey-1  text-center "> Cadeiras gamers </h4>
      </q-parallax>

      <q-parallax
        class="large-screen-only"
        style="width: 34%;  height: 77vh;"
        src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/BANNER-INICIAL-WORLD-PC.jpg"
      >
        <h2 class="texxt2 text-italic text-orange">WorldPC's</h2>
        <h5 class="text-white text-italic text-center texxt">Computadores</h5>
        <q-btn
          to="/3green"
          color="white"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-orange text-bold texxt text-h5 no-wrap">
            <q-icon
              left
              name="done"
            />
            <div class="text-center text-black">
              Conhecer<br>Agora
            </div>
          </div>
        </q-btn>
        <br>
        <br>
      </q-parallax>
      <q-parallax
        class="small-screen-only"
        style="width: 100%;"
        src="https://jmd.im/wp-content/uploads/2017/06/blackvii_thumbnail.jpg"
      >
        <h1 class="texxt text-green">3</h1>
        <q-btn
          to="/3green"
          color="green"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-white text-bold texxt text-h5 no-wrap">
            <q-icon
              left
              name="done"
            />
            <div class="text-center">
              Conhecer<br>Agora
            </div>
          </div>
        </q-btn>
        <br>
        <h2 class="text-white text-center texxt">WorldPC's</h2>
        <br>
      </q-parallax>
      <q-parallax
        class="large-screen-only"
        style="width: 33%; height: 77vh;"
        src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/BANNER-HQ-INICIAL.jpg"
      >
        <h2 class="texxt text-italic text-black">HQ</h2>
        <br>
        <h5 class="text-white text-center text-italic texxt">Monitores & Tvs</h5>
        <q-btn
          to="/Hq"
          color="grey-8"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-white text-bold texxt text-h5 no-wrap">
            <q-icon
              left
              name="done"
            />
            <div class="text-center text-white">
              Conhecer<br>Agora
            </div>
          </div>
        </q-btn>
        <br>
      </q-parallax>
      <q-parallax
        class="small-screen-only"
        style="width: 100%;"
        src="https://www.teahub.io/photos/full/88-886889_gaming-pc-setup-2020.jpg"
      >
        <h2 class="texxt text-black">Monitores</h2>
        <br>
        <q-btn
          to="/Hq"
          color="grey-8"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-black text-bold texxt text-h5 no-wrap">
            <q-icon
              left
              name="done"
            />
            <div class="text-center">
              Conhecer<br>Agora
            </div>
          </div>
        </q-btn>
        <h2 class="text-white text-center texxt">HQ</h2>
        <br>
      </q-parallax>
    </div>
    <div class="bg-dark text-white flex q-gutter-xl row flex flex-center ">
      <div class="">
        <h4 class="text-center text-italic text-bold texxt ">email</h4>
        <h5 class="text-center text-italic texxt ">arca@arca.com</h5>
        <h4 class="texxt text-center text-bold text-italic text-black ">
          <hr>
          <form
            target="_blank"
            action="https://www.facebook.com/Arca-Trading-1199174680238962"
          >
            <q-btn
              color="blue-7"
              fab
              type="submit"
              class=""
            >
              <svg-icon
                type="mdi"
                :path="path2"
              ></svg-icon>

            </q-btn>
          </form>
        </h4>
      </div>
      <div class="">
        <h4 class="text-center text-italic text-bold texxt ">fone</h4>
        <h5 class="text-center text-italic texxt ">(48) 3374-6010</h5>
        <h4 class="texxt text-center text-bold text-italic text-black ">
          <hr>
          <form
            action="https://wa.me/554833746010"
            target="_black"
          >
            <q-btn
              color="green-7"
              fab
              type="submit"
              class=""
            >
              <svg-icon
                type="mdi"
                :path="path1"
              ></svg-icon>

            </q-btn>
          </form>
        </h4>
      </div>
      <div class="">
        <h4 class="text-center text-italic text-bold texxt ">social</h4>
        <h5 class="text-center text-italic texxt ">estamos no insta</h5>
        <h4 class="texxt text-center text-bold text-italic text-black ">
          <hr>
          <form
            action="https://www.instagram.com/arcacomercial/"
            target="_black"
          >
            <q-btn
              color="deep-orange-10"
              fab
              type="submit"
              class=""
            >
              <svg-icon
                type="mdi"
                :path="path"
              ></svg-icon>

            </q-btn>
          </form>
        </h4>
      </div>
    </div>
    <q-page-scroller
      expand
      position="top"
      :scroll-offset="150"
      :offset="[0, 0]"
    >
      <div class="col texxt cursor-pointer q-pa-sm bg-white text-black text-center">
        Volte ao início
      </div>
    </q-page-scroller>
    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
    >
      <form
        action="https://wa.me/554833746010"
        target="_black"
      >
        <q-btn
          type="submit"
          fab
          class="text-black"
          color="green-6"
        >
          <svg-icon
            type="mdi"
            :path="path1"
          ></svg-icon>
        </q-btn>
      </form>
    </q-page-sticky>
    <q-page-scroller
      reverse
      position="bottom-right"
      :scroll-offset="20"
      :offset="[95, 18]"
    >
      <q-btn
        fab
        icon="keyboard_arrow_down"
        class="text-black"
        color="white"
      />
    </q-page-scroller>
  </q-page>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.texxta {
  font-family: "Bebas Neue", cursive;
}
.my-card2 {
  width: 100%;
  max-width: 350px;
}
.bgb {
  background-image: url("https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/BANNER-ARCA-INICIAL.jpg");
  background-size: 200%;
}
.bgs {
  background-image: url("https://ak.picdn.net/shutterstock/videos/23164888/thumb/1.jpg");
  background-size: 100%;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiInstagram } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';

import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'Elements',
  data () {
    return {
      inception: false,
      path: mdiInstagram,
      path1: mdiWhatsapp,
      path2: mdiFacebook,
      name: null,
      email: '',
      accept: true,
      number: null
    }
  },
  components: {
    ParticlesBg,
    SvgIcon
  }

}
</script>
