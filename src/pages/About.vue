<template>
  <q-page
    class="bg-white"
    style="overflow-x: hidden ; overflow-y: hidden "
  >
    <div class="large-screen-only">
      <div class="q-pa-none">
        <q-parallax
          :height="980"
          class="q-pa-none q-gutter-none"
        >
          <template v-slot:media>
            <video
              autoplay
              muted
              :height="1080"
              loop
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/kkk.mp4"
            />
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center"
              :style="{
            opacity: 1 + (0.6 - scope.percentScrolled) * 5,
            top: (scope.percentScrolled * 15) + '%',
            left: 0,
            right: 0
          }"
            >
              <img
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Untitled-1.png"
                class="q-pa-md"
                style="width: 600px;"
              >
            </div>
          </template>
        </q-parallax>
        <q-card
          class="my-card"
          flat
          q-pa-xl
          constrain
          border
        >
          <q-card-section>
            <h3 class="text-center text-bold texxta2 constrain q-pa-md text-black ">
              O GRUPO ARCA, FAZ A GERÊNCIA COMERCIAL <br> DE 3 EMPRESAS.
            </h3>
          </q-card-section>

        </q-card>
        <q-parallax
          :height="550"
          class=" q-gutter-none"
          src="https://images3.alphacoders.com/975/thumb-1920-975999.png"
        >

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
              <div class="q-gutter-xl q-pa-xl justify-between flex items-center">
                <img
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/elements-logo-branca.png"
                  class="q-pa-none"
                  style="width: 300px;"
                >
                <img
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/world-pc-logo-branca-1.png"
                  class="q-pa-none"
                  style="width: 500px;"
                >
                <img
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/hq-logo-branca.png"
                  class="q-pa-none"
                  style="width: 300px;"
                >
              </div>
            </div>
          </template>
        </q-parallax>

        <q-parallax
          class="large-screen-only"
          style="width: 100%;  height: 500px;"
          src="https://wallpapercave.com/wp/wp7196356.jpg"
        >
          <img
            src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803"
            class=""
            style="width: 500px;"
          >

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
                Clique<br>e Conheça
              </div>
            </div>
          </q-btn>
          <br>
          <q-btn
            color="black"
            class="bg-green-2"
            type="submit"
            style="opacity: 0.8;"
            push
          >
            <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
              <q-icon
                left
                color="black"
                name="phone"
              />
              <div class="text-center text-black">
                Whatsapp
              </div>
            </div>
          </q-btn>
          <br>
          <h4 class="texxt text-white text-bold  text-center "> Cadeiras gamers </h4>
          <h5 class="texxt text-white text-bold text-italic  text-center "> Só que... vai além disso ! </h5>
        </q-parallax>
      </div>
      <div style="left: 0;">
        <h4 class="texxta bg-grey-2 text-center text-center q-gutter-sm  q-pa-xl constrain text-dark"> Vendemos nossa história, a cadeira, vai junto ! <br>
          <hr> <br> O nosso propósito, na ELEMENTS, é entregar valor para as pessoas que de alguma forma tem acesso ao nosso universo! Tudo isso através de algo que está impregnado em nosso fit, que é o Storytelling,
          <hr> Lá, é contado através de quadrinhos e livros, que dentro delas estão incluídos valores. Valores esses que com certeza ajudam as pessoas que tem acesso a eles a melhorarem e progredirem em suas próprias vidas, por isso estamos crescendo muito e levando esse universo inteiro pra tanta gente diferente, claro que com muita qualidade em nossos produtos juntamente com a experiência que as acompanha.
          <hr>
          A Elements Gaming foi criada no dia 06/07/2016 pelos sócios fundadores Rafael Seifert e Bruna Rodrigues. <br>
          <hr> Já nessa data se sabia que a empresa miraria só e somente o extraordinário.
          Desde o momento zero a ideia nunca foi ser apenas uma marca de cadeira gamer, e sim ser um conceito e levar uma mensagem a todos os jovens não apenas do Brasil, mas no mundo!
          Assim, hoje, apenas 4 anos depois, orgulhamo-nos de estarmos entre as marcas gamers mais influentes da América Latina.
        </h4>
        <div class="small-screen-only q-gutter-md q-pa-sm q-ma-md flex flex-center">
        </div>
      </div>
      <br>
      <br>
      <q-parallax
        class="large-screen-only"
        style="width: 100%;  height: 450px;"
        src="https://jmd.im/wp-content/uploads/2017/06/blackvii_thumbnail.jpg"
      >
        <img
          src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/logo-world-pc.png"
          class="q-pa-xl"
          style="width: 900px; height: 380px;"
        >

        <h4 class="texxt2 text-white  text-center "> PC's direto da indústria <br>
          Pc's, PDv's, PC's Gamers, All in One... </h4>
      </q-parallax>
      <div style="left: 0;">
        <h4 class="texxta text-bold bg-grey-2 text-center text-justify text-italic q-gutter-xl  q-pa-xl constrain text-dark">
          O Grupo Arca, também conhecido como Arca Trading, está na indústria da informática há mais de 10 anos, <br> fazendo a parte de atacado da Belmicro. <br> <br> Possuímos soluções em computadores em atacado para empresas, all in one’s, notebooks, PDVs e monitores. Aqui atuamos como uma “Arca informática”.
          Dentre as marcas, estão a 3Green Technology e a EasyPC, que são utilizadas por diversas pessoas, empresas e órgãos do Estado.
        </h4>
        <div class="small-screen-only q-gutter-md q-pa-sm q-ma-md flex flex-center">
        </div>
      </div>
      <br>
      <br>
      <q-parallax
        class="large-screen-only"
        style="width: 100%;  height: 450px;"
        src="https://wallpaperaccess.com/full/358836.jpg"
      >
        <img
          src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/HQ-LOGO-PNG.png"
          class="q-pa-xl"
          style="width: 500px; height: 380px;"
        >

        <q-btn
          to="/Hq"
          color="white"
          class="bg-black"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
            <q-icon
              class="text-white"
              left
              name="done"
            />
            <div class="text-center text-white">
              Clique<br>e Conheça
            </div>
          </div>
        </q-btn>
        <br>
        <q-btn
          color="black"
          class="bg-green-2"
          type="submit"
          style="opacity: 0.8;"
          push
        >
          <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
            <q-icon
              left
              color="black"
              name="phone"
            />
            <div class="text-center text-black">
              Whatsapp
            </div>
          </div>
        </q-btn>
        <br>
        <h4 class="texxt2 text-dark   text-center "> Monitores e TV's </h4>
        <h5 class="texxt2 text-dark  text-center "> Vendemos NÍTIDAMENTE o melhor do mercado </h5>
      </q-parallax>
      <div style="left: 0;">
        <h4 class="texxta text-bold bg-grey-2 text-center text-justify text-italic q-gutter-xl  q-pa-xl constrain text-dark"> Do basicão ao turbinado. Monitores para trabalhar, estudar ou jogar seus games preferidos. Com designs incríveis, ótimos valores e qualidade de imagem surpreendente. <br> <br> <br>
          TVs com diversos tamanhos, de 24″a 55″ e excelente qualidade de áudio e vídeo para trazer mais ação, suspense, romance e conhecimento para sua casa. Assistir suas séries e filmes favoritos agora será uma experiência completa em sua HQScreen, e o melhor, com ótimo custo-benefício.
        </h4>
        <br> <br> <br> <br>
        <hr>
        <hr>
      </div>
    </div>

    <div>
      <br>
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
              action="https://wa.me/554833746010"
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
          icon="phone"
          class="text-black"
          color="green-6"
        >
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

.texxta {
  font-family: "Bebas Neue", cursive;
}
.texxta2 {
  font-family: "Poppins", sans-serif;
}
.my-card {
  width: 100%;
  max-width: 100%;
  background-color: transparent;
}
.my-card2 {
  width: 100%;
  max-width: 350px;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiInstagram } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'About',
  data () {
    return {
      inception: false,
      path1: mdiWhatsapp,
      path: mdiInstagram,
      path2: mdiFacebook
    }
  },
  components: {
    ParticlesBg,
    SvgIcon
  }
}
</script>
