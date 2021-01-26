<template>
  <q-page class=" bg-black" style="overflow-x: hidden; overflow-y: hidden ;">
       <div class="q-pa-none q-gutter-md">
    <div class="row q-ma-xl q-pa-xl justify-between">

    <q-parallax
     src="hhttps://static.wixstatic.com/media/83cafe_788c84dbc8924a61851a38e0a2583ddc~mv2.png/v1/fill/w_409,h_395,al_c,q_85,usm_0.66_1.00_0.01/all%20in%20one%20black%20novo.webp"
    >
      <h1 class="text-green text-center texxt">3 green</h1>
      <h1 class="text-green text-center texxt">computadores</h1>
    </q-parallax>
    </div>
  </div>
     <div class="constrainbig" style="width: 100%; center max-width: 400px">
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
        :text="[`Nossa, sim, mas como vou saber que aqui não é também ? e outra, <br> Eu vendo muito pra setor corporativo e licitação. É pra mim ? `]"
        stamp="6 minutes ago"
        class="q-pa-md"

      />
          <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Então vc ta no lugar certo, além de comprar direto da industria, com inumeros incentivos fiscais, <br> você conta com a linha completa para este público, desde A.I.O , Pdv a Slim PC']"
        sent
        class="q-pa-md"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Tudo certificado pelo iso 9001, além de contar com PPB <br> e a segurançaa de sermos Microsoft e Intel partner']"
        sent
        class="q-pa-md"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="Jane"
        class="q-pa-lg"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Interessantíssimo`]"
        stamp="6 minutes ago"
      />
              <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Dê uma olhada na nossa linha All In One <br> Diferenciamos ela nas versões White & Black como você pode ver abaixo']"
        sent
        class="q-pa-md"
        stamp="4 minutes ago"
      />
    </div>
  <h1 class="texxt text-white text-center">LINHA WHITE</h1>
 
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
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.46.jpeg" />
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.38.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.36.jpeg" />
          <q-img class="rounded-borders col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.54.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </div>
  <div class="constrainbig">
      <q-chat-message
        name="Jane"
        class="q-pa-lg"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Incrível`]"
        stamp="6 minutes ago"
      />
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
  </div>
  <h1 class="texxt text-white q-pa-xl text-center">LINHA BLACK</h1>
  <div class="constrainbig">
   <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Bora ver`]"
        stamp="6 minutes ago"
        class="q-pa-xl"

      />
  </div>
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
          <q-img class="rounded-borders col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.17.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.22.jpeg" />
          <q-img class="rounded-borders col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.32.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
          <q-page-scroller reverse :scroll-offset="5" :offset="[10, 20]">
            <q-btn fab icon="keyboard_arrow_down" color="green" />
          </q-page-scroller>
       <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
            <div class="col texxt cursor-pointer q-pa-sm bg-green text-white text-center">
              Volte ao início
            </div>
          </q-page-scroller>
          <div class="justify-between bg-dark row">
          <q-img class="q-ma-md" style="width: 150px;" src="https://lh3.googleusercontent.com/proxy/Ltq3gFbaD4fDST_VL3magTSG3pZzxOqNqd_Uv5krd-DJ6UDC6e3gxW4Yt88yxDi3EQAJrWCQxiL5rfYpT7-LEaMRmRmnxB0pdxRqarfZJtg6sEvXa4bH_hPEKZyPaQecpC8qRj_vCQ"></q-img>
          <h2 class="q-pa-md texxt text-white q-pa-md text-h2" >(48) 3374-6010</h2>
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
