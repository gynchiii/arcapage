<template>
  <q-page class="bg3g " style="overflow-x: hidden; overflow-y: hidden ;">
       <div class="q-pa-none q-gutter-md">
    <div class=" justify-between">

    <q-parallax
    style="width: 100%; height: 700px;"
     src="https://i.pinimg.com/originals/93/3b/c7/933bc7abd85928b279999556e8e45940.jpg"
    >
      <h1 class="text-black large-screen-only text-center texxt2">3 green</h1>
      <h2 class="text-green small-screen-only text-center texxt2">3 green</h2>
      <h1 class="text-white large-screen-only text-center texxt2">computadores</h1>
    </q-parallax>
    </div>
  </div>
     <div class="constrain" style="width: 100%; center max-width: 400px">
      <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Quer comprar no lugar certo mas ta cansado de cair nos godô?']"
        sent
        stamp="7 minutes ago"
        class="q-pa-md"

      />
      <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Nossa, sim, mas ah... Eu vendo muito pra setor corporativo e licitação. `]"
        stamp="6 minutes ago"
        class="q-pa-md"

      />
          <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Então você está no lugar certo, além de comprar direto da industria, com inúmeros incentivos fiscais, <br> você conta com a linha completa para este público, <br> desde AIO, pdv a Slim PC']"
        sent
        class="q-pa-md"
        stamp="4 minutes ago"
      />
              <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Essa é nossa linha All In One ! diferenciamos ela nas versões White & Black como você vai ver abaixo']"
        sent
        class="q-pa-md"
        stamp="4 minutes ago"
      />
    </div>
  <h1 class="texxt2 text-white bg-grey-5 text-center">LINHA WHITE</h1>
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
          <q-img class="rounded-borders large-screen-only col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.46.jpeg" />
           <div class="q-pa-md q-gutter-md">
         <q-btn
      size="25px"
      push
      class="text-black"
      glossy
       @click="aio = true"
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
         </div>
          <q-img class="rounded-borders small-screen-only col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.46.jpeg" />
       
          <q-img class="rounded-borders small-screen-only col-6 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.38.jpeg" />
         
          <q-img class="rounded-borders large-screen-only col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.38.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.36.jpeg" />
              <div class="q-pa-md q-gutter-md">
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
         </div>
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.54.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </div>
         <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Curtiu a linha White?']"
        sent
        class="q-pa-xl"
        stamp="4 minutes ago"
      />
        <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Nossa, sim, adorei `]"
        stamp="6 minutes ago"
        class="q-pa-xl"

      />
       <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Dê uma olhada na nossa linha Black então']"
        sent
        class="q-pa-xl"
        stamp="4 minutes ago"
      />
  <h1 class="texxt2 text-white q-pa-xl large-screen-only text-center">LINHA BLACK</h1>
  <h1 class="texxt2 text-white q-pa-md small-screen-only text-center">LINHA BLACK</h1>
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
      control-color="black"
      navigation
      padding
      arrows
      height="650px"
      class="bg-transparent "
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.26.jpeg" />
                <div class="q-pa-md q-gutter-md">
         <q-btn
      size="25px"
      push
      class="text-black"
      glossy
       @click="aiob = true"
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
         </div>
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.17.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.22.jpeg" />
              <div class="q-pa-md q-gutter-md">
         <q-btn
      size="25px"
      push
      class="text-black"
      glossy
       @click="aiob = true"
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
         </div>
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
  <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Então kkk além de tudo isso, temos linha GAMER ! E posso falar... <br> Os compradores vão amar tanto RGB e tanta potência nas máquinas huhue GG']"
        sent
        class="constrain q-pa-xl"
        stamp="4 minutes ago"
      />
        <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Tem luzinha e tudo ?? Adoro isso ! quero ver !! `]"
        stamp="6 minutes ago"
        class="constrain q-pa-xl"

      />
       <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Luzinha e Potência ... Luzinha e potência !!!']"
        sent
        class="constrain q-pa-xl"
        stamp="4 minutes ago"
      />
  
     <h1 class="texxt2 text-red-6 q-pa-xl large-screen-only text-center">LINHA GAMER</h1>
    <h1 class="texxt2 text-red-6 q-pa-md small-screen-only text-center">LINHA GAMER</h1>
  
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
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.12.jpeg" />
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
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.30.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.46.jpeg" />
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
          <q-img class="rounded-borders col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.09.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    </div>
    <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['E é claro, pra algo mais corporativo ou lojista ! temos nossa incrível linha de PDVs e PCs <br> aqui vem as máquinas com bons processamentos ']"
        sent
        class="constrain q-pa-xl"
        stamp="4 minutes ago"
      />

     <h1 class="texxt2 text-white q-pa-md large-screen-only text-center">PC'S & PDVS </h1>
     <subtitle class="texxt2 text-h5 text-white large-screen-only text-center">3green & EasyPC </subtitle>
    <h1 class="texxt2 text-white q-pa-md small-screen-only text-center">LINHA GAMER</h1>
  
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
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.32.03.jpeg" />
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
          <q-img class="rounded-borders col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.34.19.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.10.05.jpeg" />
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
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.09.34.jpeg" />
        </div>
      </q-carousel-slide>
         <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.05.48.jpeg" />
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
          <q-img class="rounded-borders col-5 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.36.55.jpeg" />
        </div>
      </q-carousel-slide>
         <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.08.31.jpeg" />
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
          <q-img class="rounded-borders col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.08.13.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    </div>
     
      <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`Adorei, sério, tudo !!! Vou comprar algumas coisas aqui pode ter certeza ! <br> minhas vendas vão subir demais ta maluco hahahha !! <br> Percebi uma coisa, e os monitores ? Se eu quiser umas máquinas dessas p/ meu negócio <br> conecto elas em outros monitores ? ou vocês vendem monitor também ? `]"
        stamp="6 minutes ago"
        class="constrain q-pa-xl"

      />

          
         <q-chat-message
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['HAHAHA olha eu, baita vendedor !! É CLAROO !! <br> Vendemos Monitores e TVs HQ que são booonssss demaisss !! <br> clica abaixo que te mostro eles   ']"
        sent
        class="constrain q-pa-xl"
        stamp="4 minutes ago"
      >
      <q-btn to="/Hq" class="text-white texxt2" color="black" icon="shopping_cart" >
      monitores & tv hq
      </q-btn>  
         </q-chat-message>
         <div>  
           <hr>
           <h2 class="text-center text-white texxt ">fone</h2>
           <h3 class="text-center text-white texxt ">48 99126-8286</h3>
           <hr>
            <h2 class="text-center text-white texxt ">garantia / frete / transportadora</h2>
           <h3 class="text-center text-white texxt ">48 99126-8286</h3>
           <hr>

         </div>
         <q-dialog v-model="aio">
      <q-card class="bgg">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
              <h5 class="constrain text-grey-4  texxt2">
ALL IN ONE 3GREEN SPEED
<br>
 3Green | <br> Modelo: Speed  <br> Tamanho da tela:<br> 21,5" ou 24" | <br> Memória DDR3 | <br>  Kit mouse e teclado sem fio  | <br> Processador J1800 | <br>  Windows ou Linux | <br>  Cor branca | <br> Memória de 4GB a 16GB | <br> HD de 320GB a 2TB ou SSD de 120GB a 480GB 


    </h5>
   
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
          <q-btn flat dense type="submit" class="text-white texxt" label="Consultor" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
     <q-dialog v-model="aiob">
      <q-card class="bgg">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
              <h5 class="constrain text-grey-4  texxt2">
ALL IN ONE UNIQUE 3GREEN
<br>
3Green | <br> Modelo: Unique <br> Tamanho da tela:<br> 24" | <br> Memória DDR3 | <br>  Kit mouse e teclado sem fio  | <br> Processadores <br>  Intel i3 (2ª, 3ª, 7ª e 8ª Geração); i5 (2ª, 3ª, 7ª e 8ª Geração); i7 (2ª, 3ª, 7ª e 8ª Geração)  | <br>  Windows ou Linux | <br>  Cor Preto ou Branco | <br> Memória de 4GB a 16GB | <br> HD de 320GB a 2TB ou SSD de 120GB a 480GB 


    </h5>
   
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
          <q-btn flat dense type="submit" class="text-white texxt" label="Consultor" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>

</template>

<style>
.my-card2{
  width: 100%;
  max-width: 350px;
}
.bg3g{
  background-image: url("https://i.pinimg.com/originals/ec/78/2d/ec782d086d7148f6919b1dea9c91e606.png");
  background-size: 120%;
}
</style>

<script>
export default {
  name: '3green',
   data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slide:1,
      slide2:1,
      slide3:1,
      aio: false,
      aiob: false,
      gamerpc: false,
      pdvs: false
    }
  }
}
</script>