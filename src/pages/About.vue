<template>
  <q-page class="bg-grey-4" style="overflow-x: hidden ; overflow-y: hidden " >
     <div class="large-screen-only">
         <div class="q-pa-none">
           <q-parallax :height="920"  class="q-pa-none q-gutter-none">
      <template v-slot:media>
         <video autoplay muted :height="1080" loop src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/ship.mp4" />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 1 + (0.6 - scope.percentScrolled) * 5,
            top: (scope.percentScrolled * -15) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Untitled-1.png" class="q-pa-md" style="width: 550px;" >
        </div>
      </template>
    </q-parallax>
     <q-card class="my-card" flat q-pa-xl constrain border>
        <q-card-section>
         <h3 class="text-center texxt2 constrain q-pa-md text-blue-10 "> <hr> O GRUPO ARCA, HOJE,<br> FAZ A GERÊNCIA COMERCIAL <br> DE 3 EMPRESAS. <hr> </h3>
        </q-card-section>
      
    </q-card>
    <h1 id="section1" class=" text-blue-10 texxt text-center"> São elas...  </h1>
          <q-parallax :height="400"  class=" q-gutter-none">
      <template v-slot:media>
        <video autoplay loop muted :height="1080" src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/bghq.mp4" />
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
        <div class="q-gutter-xl q-pa-xl justify-between flex items-center">
          <img src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803" class="q-pa-none" style="width: 300px;" >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/logo-world-pc.png" class="q-pa-none" style="width: 300px;" >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/HQ-LOGO-PNG.png" class="q-pa-none" style="width: 300px;" >
        </div>
        </div>
      </template>
    </q-parallax>
            <h1 class="text-center texxt text-bold text-black"> E L E M E N T S  </h1>
       <q-parallax
    class="large-screen-only"
    style="width: 100%;  height: 500px;"
      src="https://wallpapercave.com/wp/wp7196356.jpg"
    >
              <img src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803" class="" style="width: 500px;" >
         
          <q-btn to="/elements" color="purpe" class="bg-purple-2" style="opacity: 0.8;" push >
      <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
        <q-icon left name="done" />
        <div class="text-center text-black">
          Clique<br>e Conheça
        </div>
      </div>
    </q-btn>
    <br>
    <h4 class="texxt text-white text-bold  text-center "> Cadeiras gamers </h4>
    <h5 class="texxt text-white text-bold text-italic  text-center "> Só que... vai além disso ! </h5>
    </q-parallax>
        </div>
      <div style="left: 0;">
    <h4 class="texxt bg-grey-2 text-center text-justify text-italic q-gutter-xl  q-pa-xl constrain text-dark"> Vendemos nossa história, a cadeira, vai junto ! <br> <hr> <br> O nosso propósito, na ELEMENTS, é entregar valor para as pessoas que de alguma forma tem acesso ao nosso universo!  Tudo isso através de algo que está impregnado em nosso fit, que é o Storytelling, <hr> Lá, é contado através de quadrinhos e livros, que dentro delas estão incluídos valores. Valores esses que com certeza ajudam as pessoas que tem acesso a eles a melhorarem e progredirem em suas próprias vidas, por isso estamos crescendo muito e levando esse universo inteiro pra tanta gente diferente, claro que com muita qualidade em nossos produtos juntamente com a experiência que as acompanha. <hr>
A Elements Gaming foi criada no dia 06/07/2016 pelos sócios fundadores Rafael Seifert e Bruna Rodrigues. <br> <hr> Já nessa data se sabia que a empresa miraria só e somente o extraordinário.
Desde o momento zero a ideia nunca foi ser apenas uma marca de cadeira gamer, e sim ser um conceito e levar uma mensagem a todos os jovens não apenas do Brasil, mas no mundo!
Assim, hoje, apenas 4 anos depois, orgulhamo-nos de estarmos entre as marcas gamers mais influentes da América Latina. </h4>
    <div class="small-screen-only q-gutter-md q-pa-sm q-ma-md flex flex-center">
     </div>
      </div>
    <br>
    <br>
     <h1 class="text-center texxt2 text-red-8"> W O R L D P C  </h1>
       <q-parallax
    class="large-screen-only"
    style="width: 100%;  height: 450px;"
      src="https://jmd.im/wp-content/uploads/2017/06/blackvii_thumbnail.jpg"
    >
                       <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/logo-world-pc.png" class="q-pa-xl" style="width: 800px; height: 380px;" >

         
          <q-btn to="/3green" color="white" style="opacity: 0.8;" push >
      <div class="row items-center text-purple text-bold texxt2 text-h5 no-wrap">
        <q-icon class="text-red-5" left name="done" />
        <div class="text-center text-black">
          Clique<br>e Conheça
        </div>
      </div>
    </q-btn>
    <br>
    <h4 class="texxt2 text-dark bg-red-5  text-center "> PC's direto da indústria </h4>
    <h5 class="texxt2 text-dark bg-red-5  text-center "> Pc's, PDv's, PC's Gamers, All in One... </h5>
    </q-parallax>
         <div style="left: 0;">
    <h4 class="texxt2 bg-grey-2 text-center text-justify text-italic q-gutter-xl  q-pa-xl constrain text-red-4"> TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE  <br> <hr> <br> TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE . <hr>
TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE
TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE </h4>
    <div class="small-screen-only q-gutter-md q-pa-sm q-ma-md flex flex-center">
     </div>
      </div>
    <br>
    <br>
     <h1 class="text-center texxt text-italic text-bold text-white bg-black"> H Q MONITORES  </h1>
       <q-parallax
    class="large-screen-only"
    style="width: 100%;  height: 450px;"
      src="https://wallpaperaccess.com/full/358836.jpg"
    >
                       <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/HQ-LOGO-PNG.png" class="q-pa-xl" style="width: 500px; height: 380px;" >

         
          <q-btn to="/Hq" color="white" class="bg-black" style="opacity: 0.8;" push >
      <div class="row items-center text-purple text-bold texxt text-h5 no-wrap">
        <q-icon class="text-white" left name="done" />
        <div class="text-center text-white">
          Clique<br>e Conheça
        </div>
      </div>
    </q-btn>
    <br>
    <h4 class="texxt2 text-dark   text-center "> Monitores e TV's  </h4>
    <h5 class="texxt2 text-dark  text-center "> Vendemos NÍTIDAMENTE o melhor do mercado </h5>
    </q-parallax>
         <div style="left: 0;">
    <h4 class="texxt text-bold bg-grey-2 text-center text-justify text-italic q-gutter-xl  q-pa-xl constrain text-dark"> TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE  <br> <hr> <br> TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE . <hr>
TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE
TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE TEXTO SOBRE </h4>
      </div>
    </div>
    <h4 class="texxt text-italic  text-bold text q-gutter-xl q-pa-xl constrain text-center text-black">
      Para sua empresa que deseja:
 
<br> <br> <hr>
• Reduzir custo comprando da própria industria ✓
<br> <hr>
• Comprar com qualidade certificada ISO 9001 ✓
<br> <hr>
• Possuir tecnologia de ponta com melhor custo do país ✓
<br> <hr>
• Contar com uma só industria para todas as soluções em computadores ✓

 <br> <br> <hr>

Aqui, você encontrará o melhor custo benefício para computadores para empresa, computadores visando licitações, computadores PDV's, All in One's, além dos monitores HQ e das TV's HQ.
<br> <br> 
    </h4>
    <div> 
      <hr> 
           <h3 class="text-center text-italic text-bold texxt ">fone</h3>
           <h3 class="text-center text-italic texxt ">(48) 3374-6010</h3>
           <hr>
            <h4 class="text-center text-bold texxt text-italic ">garantia / frete / transportadora</h4>
           <h4 class="text-center texxtb ">48 99126-8286</h4>
<hr> 
<div>

</div>
  <h4 class="texxt text-center text-italic text-black ">
         Garantia <br> <br> <hr>
- Termos/Política de garantia <br>
- E-mail: garantia@elements.ind.br <br> <br> 
Cancelamentos  <br>
- Política de cancelamento (VINCULAR) <br> <br> 
Dúvidas específicas/Suporte <br>
- E-mail: meajuda@elements.ind.br <br> <br> 
- Multi360 (VINCULAR) <br> 
- Fone: (48) 3374-6010 <br> <br> 
Elogios/sugestões<br>
- Instagram: Elements Gaming <br> <br> 
  </h4>
     </div>
       <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
            <div class="col texxt cursor-pointer q-pa-sm bg-white text-black text-center">
              Volte ao início
            </div>
          </q-page-scroller>
           <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <form action="https://wa.me/554833746010" target="_black">
            <q-btn type="submit" fab icon="phone"  class="text-black" color="green-6"  >
            </q-btn>
          </form> 
          </q-page-sticky>
           <q-page-scroller reverse position="bottom-right" :scroll-offset="20" :offset="[95, 18]">
            <q-btn fab icon="keyboard_arrow_down" class="text-black" color="white" />
          </q-page-scroller>
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
  background-color: transparent;
}
.my-card2{
  width: 100%;
  max-width: 350px;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiInformationOutline } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'About',
 data () {
    return {
      inception: false,
      path: mdiInformationOutline,
      path1: mdiWhatsapp
    }
  },
     components: {
       ParticlesBg,
       SvgIcon
     }
}
</script>
