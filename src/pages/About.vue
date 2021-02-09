<template>
  <q-page class="bg-grey-10" style="overflow-x: hidden ; overflow-y: hidden " >
     <div class="large-screen-only">
         <div class="q-pa-none">
           <q-parallax :height="900"  class=" q-gutter-none">
      <template v-slot:media>
        <video autoplay loop muted :height="1080" src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/bghq.mp4" />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 1 + (0.6 - scope.percentScrolled) * 5,
            top: (scope.percentScrolled * -40) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Untitled-1.png" class="q-pa-md" style="width: 750px;" >
        <div class="q-gutter-xl justify-between flex items-center">
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/logo-world-pc.png" class="q-pa-none" style="width: 300px;" >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/HQ-LOGO-PNG.png" class="q-pa-none" style="width: 300px;" >
          <img src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803" class="q-pa-none" style="width: 300px;" >
        </div>
        </div>
      </template>
    </q-parallax>
         
    <q-card class="my-card" flat bordered>
        <q-card-section>
          <h4 class="texxt2 text-center constrain large-screen-only text-grey-10">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h4>
      <h5 class="texxta text-center constrainsmall small-screen-only text-grey-6">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h5>
        </q-card-section>
           <q-card-section>
          <h4 class="texxt2 text-center constrain large-screen-only text-grey-10">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h4>
      <h5 class="texxta text-center constrainsmall small-screen-only text-grey-6">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h5>
        </q-card-section>
      
    </q-card>
       </div>
     </div>
        <q-parallax class="small-screen-only" style="width: 100%;">
      <template v-slot:media>
        <img  src="https://www.hdwallpapers.in/download/blue_mountains_4k_2-HD.jpg">
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
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Untitled-1.png" style="width: 350px" >
          <h1 class="text-center text-blue-9 texxt">A R C A </h1>
        </div>
      </template>
    </q-parallax>
    <div class="flex q-pa-xl flex-center">
          <q-btn
      padding="xl"
      color="grey-4 text-blue-9"
      push
      style="opacity: 0.7;"
      dense
      to="/About"
      round
    >
    <svg-icon type="mdi" :path="path"></svg-icon>
          </q-btn>
    </div>
    <h5 class="texxta text-center text-blue-6"> Clique acima para saber mais </h5>
    <div class="small-screen-only q-gutter-md q-pa-sm q-ma-md flex flex-center">

      <q-btn
      size="22px"
      class="text-black texxta q-px-md q-py-xs bg-transparent"
      color="blue-9"
      style="opacity: 0.8;"
      to="Elements"
      label="Cadeira Gamer"
    />
      <q-btn
      size="22px"
      class="text-black texxta q-px-md q-py-xs"
      color="blue-9"
      style="opacity: 0.8;"
      label="Monitores & Tvs"
    />
      <q-btn
      size="22px"
      to="3Green"
      class="text-black texxta q-px-md q-py-xs"
      color="blue-9"
      style="opacity: 0.8;"
      label="Computadores"
    />
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

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h4>
      <h5 class="texxta text-center constrainsmall small-screen-only text-grey-6">O Grupo Arca nasceu com um único objetivo:
        <br>
        <br>
Quebrar as barreiras do impossível, do inalcançável e construir pontes que ligam os nossos parceiros aos seus objetivos e desejos.
<br>

Somos um grupo empresarial localizado em Santa Catarina, na cidade de Palhoça. <br> <br> Somos compostos por pessoas que trabalham de maneira colaborativa e apaixonada, focada dia após dia em realizar sonhos, desenvolver negócios e a tornar o mundo melhor.</h5>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-parallax :height="320" :speed="0.7">
      <template v-slot:media>
        <img src="https://wallpaperaccess.com/full/446984.jpg">
      </template>

      <h3 class="text-grey-2 constrain text-center large-screen-only texxta">Tenha Um posicionamento muito superior a concorrência.
Seja Referencia! Compre direto da propria marca! </h3>

      <h4 class="text-blue-9 constrainsmall small-screen-only texxta">AO SEU ALCANCE</h4>
    </q-parallax>
    <h3 class="texxt2 text q-gutter-xl q-pa-xl constrain text-center text-blue-6">
      Para sua empresa que deseja:
 
<br> <br> <hr>
• Reduzir custo comprando da própria industria ✓
<br>
• Comprar com qualidade certificada ISO 9001 ✓
<br>
• Possuir tecnologia de ponta com melhor custo do país ✓
<br>
• Contar com uma só industria para todas as soluções em computadores ✓

 <br> <br> <hr>

Aqui, você encontrará o melhor custo benefício para computadores para empresa, computadores visando licitações, computadores PDV's, All in One's, além dos monitores HQ e das TV's HQ.
<br> <br> 
    </h3>
    <hr>
    <h1 class="texxt text-black large-screen-only text-bold text-center">O QUE</h1>
    <h2 class="texxt small-screen-only text-black text-center">O QUE</h2>
    <h1 class="texxt text-grey-6 text-bold large-screen-only text-center">DESEJA ?</h1>
    <h2 class="texxt text-grey-6 text-bold small-screen-only text-center">DESEJA ?</h2>
    <div class="flex justify-beyween">

    <q-parallax
    class="large-screen-only"
    style="width: 33%;  height: 800px;"
      src="https://wallpapercave.com/wp/wp7196356.jpg"
    >
    <h2 class="text-center text-bold text-purple-2 texxt "> ELEMENTS </h2>
         
          <q-btn to="/elements" color="purpe" class="bg-purple-2" style="opacity: 0.8;" push >
      <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center text-black">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    <br>
    <h4 class="texxt text-grey-1  text-center "> Cadeiras gamers </h4>
    </q-parallax>

    <q-parallax
    class="small-screen-only"
    style="width: 100%;"
      src="https://i.pinimg.com/originals/22/58/24/2258249e9b4084cda4fdc9c798818d19.jpg"
    >
    <h2 class="text-center text-bold text-purple-2 texxt "> ELEMENTS </h2>
         
          <q-btn to="/elements" color="purpe" class="bg-purple-2" style="opacity: 0.8;" push >
      <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
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
    style="width: 33%;  height: 800px;"
      src="https://jmd.im/wp-content/uploads/2017/06/blackvii_thumbnail.jpg"
    >
      <h2 class="texxt text-orange">WorldPC's</h2>
      <q-btn to="/3green" color="white" style="opacity: 0.8;"  push>
      <div class="row items-center text-orange text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center text-black">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    <br>
    <h5 class="text-green text-center texxt">3green computadores</h5>
      <br>
    </q-parallax>
     <q-parallax
     class="small-screen-only"
    style="width: 100%;"
      src="https://jmd.im/wp-content/uploads/2017/06/blackvii_thumbnail.jpg"
    >
      <h1 class="texxt text-green">3</h1>
      <q-btn to="/3green" color="green" style="opacity: 0.8;"  push>
      <div class="row items-center text-white text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
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
    style="width: 34%; height: 800px;"
      src="https://wallpaperaccess.com/full/358836.jpg"
    >
      <h2 class="texxt text-black">HQ</h2>
      <br>
      <q-btn to="/Hq" color="grey-8" style="opacity: 0.8;"  push>
      <div class="row items-center text-white text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center text-white">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    <h4 class="text-black text-center texxt">Monitores & Tvs</h4>
      <br>
    </q-parallax>
    <q-parallax
       class="small-screen-only"
    style="width: 100%;"
      src="https://wallpaperaccess.com/full/446984.jpg"
    >
      <h2 class="texxt text-black">Monitores</h2>
      <br>
      <q-btn to="/Hq" color="grey-8" style="opacity: 0.8;"  push>
      <div class="row items-center text-black text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    <h2 class="text-white text-center texxt">HQ</h2>
      <br>
    </q-parallax>
    </div>
    <div> 
      <hr> 
           <h2 class="text-center text-bold texxtb ">fone</h2>
           <h2 class="text-center texxtb ">(48) 3374-6010
</h2>
           <hr>
            <h2 class="text-center text-bold texxtb ">garantia / frete / transportadora</h2>
           <h2 class="text-center texxtb ">48 99126-8286</h2>
<hr>
         </div>
  </q-page>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.texxta {
  font-family: 'Bebas Neue', cursive;
}
.my-card{
  width: 100%;
  max-width: 100%;
  background-image: url("https://www.hdwallpapers.in/download/blue_mountains_4k_2-HD.jpg");

}
.my-card2{
  width: 100%;
  max-width: 350px;
}
.bgb{
  background-image: url("https://www.hdwallpapers.in/download/blue_mountains_4k_2-HD.jpg");
  background-size: 175%;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiInformationOutline } from '@mdi/js';

import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'About',
 data () {
    return {
      inception: false,
      path: mdiInformationOutline
    }
  },
     components: {
       ParticlesBg,
       SvgIcon
     }
}
</script>
