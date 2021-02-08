<template>
  <q-page class="bgwp " style="overflow-x: hidden; overflow-y: hidden ;">
       <div class="q-pa-none q-gutter-md">
    <div class=" justify-between">

    <q-parallax
    style="width: 100%;"
     src="https://wallpaperaccess.com/full/856965.jpg"
    >
      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 1 + (0.5 - scope.percentScrolled) * 2.5,
            top: (scope.percentScrolled * 25) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/HQ-LOGO-PNG.png" style="width: 250px; height: 200px">
          <div class="text-h3 texxt q-pa-xl text-white text-center">Monitores & TV's</div>
          <div class="text-h6 text-grey-3 text-center">
       <q-spinner-facebook
       class="absolute-center"
          color="grey-10"
          style="opacity: 0.4;"
          size="35em"
        />
          </div>
        </div>
      </template>
    </q-parallax>
    </div>
  </div>
        <h6 class="texxt text-white q-pa-xl text-bold text-center"> o cliente vai confiar <br> quando ele ver que consegue <br> enxergar um produto com CLAREZA </h6>
  <h1 class="texxt text-white text-center">MONITORES GAMER</h1>
  
  <div class="produts bg-white center">
    <div class="q-pa-xl" >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="black"
      navigation
      padding
      arrows
      height="650px"
      class="bg-transparent "
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders large-screen-only col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.16.57.jpeg" />
          <q-img class="rounded-borders small-screen-only col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.16.57.jpeg" />
           <q-btn
      size="25px"
      push
      class="text-black"
      glossy
       @click="magnanemesis = true"
      color="white"
      icon="info"
    />
      <q-btn
      size="25px"
      push
      class="text-black"
      glossy
      type="submit"
      color="white"
      icon="phone"
    />
          <q-img class="rounded-borders large-screen-only col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-10.44.29-1.jpeg" />
          <q-img class="rounded-borders small-screen-only col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-10.44.29-1.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.28.jpeg" />
        <q-btn
      size="25px"
      push
      class="text-black"
      glossy
       @click="magnanemesis = true"
      color="white"
      icon="info"
    />
      <q-btn
      size="25px"
      push
      class="text-black"
      glossy
      type="submit"
      color="white"
      icon="phone"
    />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.09.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </div>
        
  <h1 class="texxt text-white q-pa-xl large-screen-only text-center">TELEVISORES</h1>
  <h1 class="texxt text-white q-pa-md small-screen-only text-center">TELEVISORES</h1>
 
   <div class="produts bg-white center">
    <div class="q-pa-xl" >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="black"
      navigation
      padding
      arrows
      height="650px"
      class="bg-transparent "
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.14.12.jpeg" />
        <q-btn
      size="25px"
      push
      class="text-white"
      glossy
       @click="magnanemesis = true"
      color="black"
      icon="info"
    />
      <q-btn
      size="25px"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.14.17.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.13.42.jpeg" />
        <q-btn
      size="25px"
      push
      class="text-white"
      glossy
       @click="magnanemesis = true"
      color="black"
      icon="info"
    />
      <q-btn
      size="25px"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.13.34.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
          <q-page-scroller reverse :scroll-offset="5" :offset="[10, 20]">
            <q-btn fab icon="keyboard_arrow_down" class="text-black" color="white" />
          </q-page-scroller>
       <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
            <div class="col texxt cursor-pointer q-pa-sm bg-white text-black text-center">
              Volte ao início
            </div>
          </q-page-scroller>
  </div>
  <div>  
           <h2 class="text-center text-white texxt ">fone</h2>
           <h3 class="text-center text-white texxt ">48 99126-8286</h3>
           <hr>
            <h2 class="text-center text-white texxt ">garantia / frete / transportadora</h2>
           <h3 class="text-center text-white texxt ">48 99126-8286</h3>

         </div>
  
  </q-page>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono&display=swap');
.texxtb{
  font-family: 'Space Mono', monospace;
}

.my-card2{
  width: 100%;
  max-width: 350px;
}
.bgwp{  
  background-image: url("https://cdn.wallpapersafari.com/7/74/JFeEHc.jpg");
  background-size: 200%;
}
</style>

<script>
export default {
  name: 'Hq',
   data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slide:1,
      slide2:1,
      slide3:1

    }
  }
}
</script>