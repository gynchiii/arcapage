<template>
  <q-page class="bg-black" style="overflow-x: hidden ; overflow-y: hidden ">
       <div class="q-pa-none q-gutter-md">
    <div class="row justify-between">

    <q-parallax
     src=" https://scontent.fbnu4-1.fna.fbcdn.net/v/t1.0-9/130811889_1935168946622228_7897929910126993059_o.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=9ievON56EKUAX_Hg86s&_nc_ht=scontent.fbnu4-1.fna&oh=45f64ae02ae53e462ce1337c398649f4&oe=6024EE26"
    >
      <h1 class="text-white large-screen-only texxt">ELEMENTS</h1>
      <subtitle class="texxt flex flex-center contrainsmall text-center text-white"> Porquê uma cadeira ? <br> quando se pode ter um trono !</subtitle>
      <h2 class="text-white small-screen-only texxt">ELEMENTS</h2>
    </q-parallax>


    </div>
  </div>
  <div class="bgg constrain">
    <h1 class="texxt text-white large-screen-only text-grey-5 text-center">Quer ver né ? </h1>
    <h2 class="texxt text-white small-screen-only text-center">Quer ver né ? </h2>
  </div>
   <div class="q-pa-md">
    <q-parallax :height="550">
      <template v-slot:media>
        <video width="720" height="1500"  autoplay loop muted>
          <source type="video/mp4" src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/CADEIRA-4.mp4">
        </video>
      </template>

    </q-parallax>
   </div>
   <h1 class="texxt text-center large-screen-only text-white">Linha. Nemesis</h1>
   <h2 class="texxt text-center small-screen-only text-white">Linha. Nemesis</h2>
   <h4 class="text-center texxt text-white">Black chairs</h4>
         <q-carousel
      style="width: 100vw; height: 74vh;"
      swipeable
      class="large-screen-only"
      autoplay="autoplay"
      animated
      v-model="slide1"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center" style="width: 28vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74382832/4c43719c99.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="absolute-center" style="width: 28vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51968185/454bd00ced.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 28vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51967231/d75d7c9297.jpg" >
      </q-carousel-slide>
    </q-carousel>
         <q-carousel
      style="width: 100vw; height: 85vh;"
      swipeable
      class="small-screen-only"
      animated
      v-model="slide1"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74382832/4c43719c99.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51968185/454bd00ced.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51967231/d75d7c9297.jpg" >
      </q-carousel-slide>
    </q-carousel>
       <h1 class="texxt text-center large-screen-only text-green">Linha. Terra</h1>
       <h2 class="texxt text-center small-screen-only text-green">Linha. Terra</h2>
   <h4 class="text-center texxt text-green">Green chairs</h4>
         <q-carousel
      style="width: 100vw; height: 74vh;"
      swipeable
      class="large-screen-only"
      animated
      autoplay="autoplay"
      v-model="slide2"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center" style="width: 30vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74381603/afe1082514.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="absolute-center" style="width: 28vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51963357/9356c06328.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 28vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51466240/7481379319.jpg" >
      </q-carousel-slide>
    </q-carousel>
     <q-carousel
      style="width: 100vw; height: 80vh;"
      swipeable
      animated
      class="small-screen-only"
      autoplay="autoplay"
      v-model="slide2"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74381603/afe1082514.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51963357/9356c06328.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51466240/7481379319.jpg" >
      </q-carousel-slide>
    </q-carousel>
    <h1 class="texxt large-screen-only text-center text-blue">Linha. Acqua</h1>
    <h2 class="texxt small-screen-only text-center text-blue">Linha. Acqua</h2>
   <h4 class="text-center texxt text-blue">Blue chairs</h4>
         <q-carousel
      style="width: 100vw; height: 74vh;"
      swipeable
      class="large-screen-only"
      autoplay="autoplay"
      animated
      v-model="slide3"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center q-ma-md" style="width: 25vw; height: 30vw;" img-src="https://img.terabyteshop.com.br/produto/g/cadeira-gamer-elements-magna-acqua-reclinavel-black-blue_109348.jpg" >
      </q-carousel-slide>
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 25vw; height: 30vw;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51961720/75415bb0ba.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 30vw; height: 30vw;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51465829/f8716dc464.jpg" >
      </q-carousel-slide>
    </q-carousel>
     <q-carousel
      style="width: 100vw; height: 80vh;"
      swipeable
      class="small-screen-only"
      autoplay="autoplay"
      animated
      v-model="slide3"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center q-ma-md" style="width: 80vw; height: 30vw;" img-src="https://img.terabyteshop.com.br/produto/g/cadeira-gamer-elements-magna-acqua-reclinavel-black-blue_109348.jpg" >
      </q-carousel-slide>
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 80vw; height: 30vw;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51961720/75415bb0ba.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 80vw; height: 30vw;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51465829/f8716dc464.jpg" >
      </q-carousel-slide>
    </q-carousel>
    
    
    
   
    <div class="aboutus texxt text-center text-blue-grey-12"> 
      <h1> Sobre nós </h1>
      <hr>
    <h4 class="q-pa-lg texxt2  text-center constrain">Vai além de cadeiras, storytelling, designs diferentes e coisas disruptivas</h4>
    <hr>
    <div class="q-pa-xs q-gutter-md">
    <div class="row justify-between">


      <q-parallax
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/IMG_2398-scaled.jpg"
    >
      <h1 class="text-white constrain">Só a Elements é Elements</h1>
    </q-parallax>

    </div>
  </div>
    <h3 class="constrain text-bold">
    </h3>
       <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
            <div class="col texxt cursor-pointer q-pa-sm bg-purple text-white text-center">
              Volte ao início
            </div>
          </q-page-scroller>
          <q-page-scroller reverse :scroll-offset="5" :offset="[10, 20]">
            <q-btn fab icon="keyboard_arrow_down" color="purple" />
          </q-page-scroller>
  </div>
  </q-page>
</template>

<style>
.my-card2{
  width: 100%;
  max-width: 350px;
}
.bgg{
  background-image: url("https://media0.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif");
}
</style>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'Elements',
  components: {
    ParticlesBg,
  },
   data: function () {
     return {
        slide1:1,
        slide2:1,
        slide3:1
 
    }
  }
}
</script>