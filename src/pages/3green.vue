<template>
  <q-page class="bgwp " style="overflow-x: hidden; overflow-y: hidden ;">
       <div class="q-pa-none q-gutter-md">
    <div class=" justify-between">

    <q-parallax
    style="width: 100%; height: 700px;"
     src="https://www.wallpaperflare.com/static/928/232/962/multiple-display-nature-monochrome-mountains-wallpaper.jpg"
    >
      <h1 class="text-green large-screen-only text-center texxt">3 green</h1>
      <h2 class="text-green small-screen-only text-center texxt">3 green</h2>
      <h1 class="text-green large-screen-only text-center texxt">computadores</h1>
    </q-parallax>
    </div>
  </div>
     <div class="constrain" style="width: 100%; center max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Quer comprar no lugar certo mas ta cansado de cair nos godô?']"
        sent
        stamp="7 minutes ago"
        class="q-pa-md"

      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Nossa, sim, mas ah... Eu vendo muito pra setor corporativo e licitação. `]"
        stamp="6 minutes ago"
        class="q-pa-md"

      />
          <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Então você está no lugar certo, além de comprar direto da industria, com inúmeros incentivos fiscais, <br> você conta com a linha completa para este público, <br> desde AIO, pdv a Slim PC']"
        sent
        class="q-pa-md"
        stamp="4 minutes ago"
      />
              <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Essa é nossa linha All In One ! diferenciamos ela nas versões White & Black como você vai ver abaixo']"
        sent
        class="q-pa-md"
        stamp="4 minutes ago"
      />
    </div>
  <h1 class="texxt text-white text-center">LINHA WHITE</h1>
     <q-chat-message
        name="Jane"
        class="q-pa-lg"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Incrível`]"
        stamp="6 minutes ago"
      />
  <div class="produts bg-white center">
    <div class="q-pa-xl" >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="purple"
      navigation
      padding
      arrows
      height="650px"
      class="bg-transparent "
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders large-screen-only col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.46.jpeg" />
          <q-img class="rounded-borders small-screen-only col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.46.jpeg" />
          <q-img class="rounded-borders small-screen-only col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.38.jpeg" />
          <q-img class="rounded-borders large-screen-only col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.38.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.36.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.54.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </div>
         <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Curtiu a linha White?']"
        sent
        class="q-pa-xl"
        stamp="4 minutes ago"
      />
        <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Nossa, sim, adorei `]"
        stamp="6 minutes ago"
        class="q-pa-xl"

      />
       <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Dê uma olhada na nossa linha Black então']"
        sent
        class="q-pa-xl"
        stamp="4 minutes ago"
      />
  <h1 class="texxt text-black q-pa-xl large-screen-only text-center">LINHA BLACK</h1>
  <h1 class="texxt text-black q-pa-md small-screen-only text-center">LINHA BLACK</h1>
   <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Bora ver`]"
        stamp="6 minutes ago"
        class="q-pa-xl"

      />
   <div class="produts bg-white center">
    <div class="q-pa-xl" >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="purple"
      navigation
      padding
      arrows
      height="650px"
      class="bg-transparent "
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.26.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.17.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.22.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.32.jpeg" />
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
  
     <h1 class="texxt text-red-6 q-pa-xl large-screen-only text-center">LINHA GAMER</h1>
    <h1 class="texxt text-red-6 q-pa-md small-screen-only text-center">LINHA GAMER</h1>
  
    <div class="produts bg-white center">
    <div class="q-pa-xl" >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="purple"
      navigation
      padding
      arrows
      height="650px"
      class="bg-transparent "
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.26.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.17.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.22.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.32.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    </div>

     <h1 class="texxt text-black q-pa-xl large-screen-only text-center">LINHA GAMEER</h1>
    <h1 class="texxt text-white q-pa-md small-screen-only text-center">LINHA GAMER</h1>
  
    <div class="produts bg-white center">
    <div class="q-pa-xl" >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="purple"
      navigation
      padding
      arrows
      height="650px"
      class="bg-transparent "
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.26.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.17.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.22.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.32.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    </div>
  </q-page>
</template>

<style>
.my-card2{
  width: 100%;
  max-width: 350px;
}
.bgwp{
  background-image: url("https://i.pinimg.com/originals/f5/21/c9/f521c988a4bda5e9adec12744c21f365.jpg");
  background-size: 200%;
}
</style>

<script>
export default {
  name: 'elements',
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
