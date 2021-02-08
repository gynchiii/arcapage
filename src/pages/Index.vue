<template>
  <q-page class="bg-white" style="overflow-x: hidden ; overflow-y: hidden " >
     <div class="large-screen-only">
         <div class="q-pa-none row">
      <q-parallax style="width: 25%;" class="">
      <template v-slot:media>
        <img src="">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 1 + (0.6 - scope.percentScrolled) * 2,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
         <h3 class="text-center texxta text-blue-9 "> GRUPO ARCA </h3>
         <h5 class="text-center texxta text-blue-9 "> veio para quebrar barreiras, mostrar ao vendedor <br> que ele pode sim vender o melhor <br> com o melhor preço </h5>
        
        </div>
      </template>
    </q-parallax>
      <q-parallax style="width: 50%;" class="">
      <template v-slot:media>
        <img src="">
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
          <subtitle class="text-center text-h6 text-bold q-pa-xs text-blue-9 texxt">grupo. </subtitle>
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/talvezlogo.png" style="width: 150px" >
          <h1 class="text-center text-blue-9 texxta">A R C A </h1>
        </div>
      </template>
    </q-parallax>
     <q-parallax style="width: 25%;" class="">
      <template v-slot:media>
        <img src="">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 1 + (0.6 - scope.percentScrolled) * 2,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
        <div class="">

           <div class="q-pa-md">
      <q-btn  push class="bg-blue-4 text-grey-2 text-h5 texxta text-bold" to="/elements"  label="Cadeiras Gamer" />
      </div>
      <div class="q-pa-lg">
      <q-btn push class="bg-blue-4 texxta text-h5 text-grey-2 text-bold" to="/3green" label="Computadores" />
      </div>
      <div class="q-pa-md">
      <q-btn push class="bg-blue-4 texxta text-h5 text-grey-2 text-bold" to="/Hq" label="Monitores & Tvs" />
      </div>          
        </div>
        </div>
      </template>
    </q-parallax>
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
          <subtitle class="text-center text-h6 text-bold q-pa-xs text-blue-9 texxt">grupo. </subtitle>
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/talvezlogo.png" style="width: 150px" >
          <h1 class="text-center text-blue-9 texxt">A R C A </h1>
        </div>
      </template>
    </q-parallax>
    <h5 class="texxta text-center text-blue-6"> Temos algo a falar pra voce, clique </h5>
    <div class="flex q-pa-sm flex-center">
          <q-btn
      padding="xl"
      color="blue-9 text-black"
      push
      style="opacity: 0.7;"
      dense
      @click="inception = true"
      round
      icon="record_voice_over"
    />
    </div>
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

    <q-parallax :height="220" :speed="0.7">
      <template v-slot:media>
        <img src="https://wallpaperaccess.com/full/446984.jpg">
      </template>

      <h1 class="text-grey-2 constrain large-screen-only texxta">AO SEU ALCANCE</h1>

      <h4 class="text-blue-9 constrainsmall small-screen-only texxta">AO SEU ALCANCE</h4>
    </q-parallax>
    <q-parallax
      src=""
    >
        <q-spinner-hourglass
        class="flex q-pa-xl"
        color="blue-9"
        size="20em"
      />

    <h2 class="texxta text-center constrain large-screen-only text-bold text-blue-3">JÁ É H     <q-spinner-clock
        color="blue-3"
        size="1em"
      />
 RA DE VOCÊ VENDER <br>
 NO QUE ACREDITA
  </h2>
  <h4 class="texxta text-center small-screen-only constrainsmall text-bold text-dark">SABER QUE ESTÁ VENDENDO ALGO EM QUE VOCÊ ACREDITA, <br> É BOM, NÃO É ?
  </h4>
    </q-parallax>
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
      <div class="row items-center text-black text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
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
      <div class="row items-center text-black text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
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
      <h2 class="texxt text-green">3 green</h2>
      <q-btn to="/3green" color="green" style="opacity: 0.8;"  push>
      <div class="row items-center text-white text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
          Conhecer<br>Agora
        </div>
      </div>
    </q-btn>
    <br>
    <h3 class="text-white text-center texxt">computadores</h3>
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
    <h2 class="text-white text-center texxt">Green</h2>
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
      <div class="row items-center text-black text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center">
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
           <h2 class="text-center texxtb ">48 99126-8286</h2>
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
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: 'Elements',
 data () {
    return {
      inception: false
    }
  },
     components: {
       ParticlesBg
     }
}
</script>