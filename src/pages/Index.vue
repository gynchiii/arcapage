<template>
  <q-page class="bg" >
    <particles-bg type="lines" :bg="true" />
       <div class="q-pa-none text-black q-gutter-md">
      <q-parallax>
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
      <h4 class="texxt text-center text-bold text-black">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h4>
      <h4 class="texxt text-center text-black">E O QUE MAIS ?</h4>
        <h5 class="texxt text-center text-black">PRA ONDE VOCÊ PENSAR EM IR OU QUALQUER CAMINHO QUE DECIDIU TOMAR A ARCA LEVA VOCÊ. SOMOS ESPECIALISTAS EM FAZER VOCÊ GANHAR MUITO DINHEIRO MELHORANDO SUA FORMA DE COMPRAR.​​</h5>
    <q-parallax :height="200" :speed="0.3">
      <template v-slot:media>
        <img src="https://wallpaperaccess.com/full/759749.jpg">
      </template>

      <h1 class="text-grey-7 texxt">AO SEU ALCANCE</h1>
    </q-parallax>

    <q-parallax
      src="hhttps://31.media.tumblr.com/4e0b3c1908a49b9fc7dc3d2ce9589a23/tumblr_ntu637V4j41taknieo1_1280.gif"
    >
    <h3 class="texxt text-center text-bold text-red-7">VOCÊ ESTÁ MAIS PRÓXIMO DOS SEUS OBJETIVOS DO QUE ONTEM?
      <br>
A ARCA QUER TE AJUDAR A ALCANÇÁ-LOS!</h3>
    </q-parallax>
    <h1 class="texxt text-center">O QUE</h1>
    <h1 class="texxt text-bold text-center">DESEJA ?</h1>
    <div class="row justify-between">

    <q-parallax
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/low-poly.jpg"
    >
      <h1 class="texxt text-black text-bold">ELEMENTS</h1>
          <q-btn to="/elements" color="transparent" push>
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
      <q-btn to="/elements" color="transparent" push>
      <div class="row items-center text-white texxt text-h5 no-wrap">
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
