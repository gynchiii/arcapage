<template>
  <q-page class="bg" style="overflow-x: hidden ; overflow-y: hidden " >
    <particles-bg type="lines" :bg="true" />
       <div class="q-pa-none text-black q-gutter-md">
      <q-parallax class="constrain">
      <template v-slot:media>
        <img src="hhttps://images.wallpaperscraft.com/image/sea_waves_black_120771_1920x1080.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.8 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/logo-arca.png" style="width: 300px; height: 300px">
        </div>
      </template>
    </q-parallax>
      <h4 class="texxt2 text-center constrain large-screen-only text-grey-6">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h4>
      <h5 class="texxt2 text-center constrainsmall small-screen-only text-grey-6">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h5>
    <br>
    <br>
    <q-parallax style="max-width: 1423px;" :height="150" :speed="0.3">
      <template v-slot:media>
        <img src="https://wallpaperaccess.com/full/759749.jpg">
      </template>

      <h1 class="text-grey-7 constrain large-screen-only texxt2">AO SEU ALCANCE</h1>
      <h4 class="text-grey-7 constrainsmall small-screen-only texxt2">AO SEU ALCANCE</h4>
    </q-parallax>

    <q-parallax
      src="hhttps://31.media.tumblr.com/4e0b3c1908a49b9fc7dc3d2ce9589a23/tumblr_ntu637V4j41taknieo1_1280.gif"
    >
    <h2 class="texxt2 text-center constrain large-screen-only text-bold text-grey-8">VOCÊ ESTÁ MAIS PRÓXIMO DOS SEUS OBJETIVOS DO QUE ONTEM?
  </h2>
  <h3 class="texxt2 text-center small-screen-only constrainsmall text-bold text-grey-8">VOCÊ ESTÁ MAIS PRÓXIMO DOS SEUS OBJETIVOS DO QUE ONTEM?
  </h3>
    </q-parallax>
    <h1 class="texxt text-purple-5 large-screen-only text-center">O QUE</h1>
    <h2 class="texxt small-screen-only text-purple-5 text-center">O QUE</h2>
    <h1 class="texxt text-green text-bold large-screen-only text-center">DESEJA ?</h1>
    <h2 class="texxt text-green text-bold small-screen-only text-center">DESEJA ?</h2>
    <div class="row justify-between">

    <q-parallax
    class="large-screen-only"
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/low-poly.jpg"
    >
      <h1 class="texxt text-black text-bold">ELEMENTS</h1>
          <q-btn to="/elements" color="purpe" class="bg-purple" style="opacity: 0.8;" push >
      <div class="row items-center text-black text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    </q-parallax>
    <q-parallax
    class="small-screen-only"
    src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/low-poly.jpg"
    >
      <h2 class="texxt text-black text-bold">ELEMENTS</h2>
          <q-btn to="/elements" color="purpe" class="bg-purple" style="opacity: 0.8;" push >
      <div class="row items-center text-black text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    </q-parallax>


    <q-parallax
      src="https://jmd.im/wp-content/uploads/2017/06/blackvii_thumbnail.jpg"
    >
      <h1 class="texxt text-green">3</h1><span class="text-white text-h1 texxt">Green</span>
      <br>
      <br>
      <q-btn to="/3green" color="green" style="opacity: 0.8;"  push>
      <div class="row items-center text-white text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    </q-parallax>
    </div>
  </div>
  </q-page>
</template>

<style>
.my-card2{
  width: 100%;
  max-width: 350px;
}
</style>

<script>
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: 'Elements',
     components: {
       ParticlesBg
     }
}
</script>
