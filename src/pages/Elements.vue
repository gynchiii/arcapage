<template>
  <q-page class=" bg-black" style="overflow-x: hidden ; overflow-y: hidden ">
       <div class="q-pa-none q-gutter-md">
    <div class="row justify-between">

    <q-parallax
    style="width: 100vw; height: 85vh; "
     src=" https://scontent.fbnu4-1.fna.fbcdn.net/v/t1.0-9/130811889_1935168946622228_7897929910126993059_o.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=9ievON56EKUAX_Hg86s&_nc_ht=scontent.fbnu4-1.fna&oh=45f64ae02ae53e462ce1337c398649f4&oe=6024EE26"
    >
    <subtitle class="text-h5 text-grey-5 text-white text-center texxt"> porque ter uma cadeira ? <br> quando se pode ter um trono ! </subtitle>
      <h1 class="text-white text-bold large-screen-only texxt">ELEMENTS</h1>
      <h2 class="text-white small-screen-only texxt">ELEMENTS</h2>
    </q-parallax>
    <div class="bg1">
      <h1 class="text-center text-white texxt ">
            PREPARADO PRA SUA NOVA JORNADA ?
      </h1>
    </div>
    </div>
  </div>
  <div class="text">
    <h1 class="texxt text-white large-screen-only text-center">Produtos</h1>
    <h2 class="texxt text-white small-screen-only text-center">Produtos</h2>
  </div>
   <div class="q-pa-md">
    <q-parallax :height="550">
      <template v-slot:media>
        <video width="720" height="1500"  autoplay loop muted>
          <source type="video/webm" src="https://ma-portfolio.s3.amazonaws.com/preview-83626-Ap21S04im7-high.webm">
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
      class="small-screen-only "
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
    style="height: 70vw;"
    class="large-screen-only"
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/sadfewe.jpg"
    >
    <h5 class="constrain large-screen-only texxt2">Olá, Argen aqui quem vos fala! <br> <br> O nosso propósito é entregar valor para as pessoas que de alguma forma tem acesso ao nosso universo! <br>  Tudo isso através de algo que está impregnado em nosso universo, que é o Storytelling, onde é contado através de quadrinhos e livros, que dentro delas estão incluídos valores. <br> <br> Valores esses que com certeza ajudam as pessoas que tem acesso a eles a melhorarem e progredirem em suas próprias vidas, por isso estamos crescendo muito e levando esse universo inteiro pra tanta gente diferente. <br> <br> Claro que com muita qualidade em nossos produtos juntamente com a experiência que as acompanha. <br> <br> <br>
A Elements Gaming foi criada no dia 06/07/2016 , <br> Pelos sócios fundadores Rafael Seifert e Bruna Rodrigues. <br> <br>  Já nessa data se sabia que a empresa miraria só e somente o extraordinário.
Desde o momento zero a ideia nunca foi ser apenas uma marca de cadeira gamer, e sim ser um conceito e levar uma mensagem a todos os jovens não apenas do Brasil, mas no mundo!
Assim, hoje, apenas 4 anos depois, orgulhamo-nos de estarmos entre as marcas gamers mais influentes da América Latina.
    
    </h5>
   
    
    
    </q-parallax>
   
      <q-parallax
      src="https://cdn.awsli.com.br/1140x1140/1329/1329500/banner/da02d2defd.jpg"
      class="large-screen-only"
    >
      <h1 class="text-white">Só a Elements é Elements</h1>
    </q-parallax>
     <q-parallax
     class="small-screen-only col-13"
      src="https://cdn.awsli.com.br/1140x1140/1329/1329500/banner/da02d2defd.jpg"
    >
      <h2 class="text-white texxt2">Elements é Elements</h2>
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
  <q-dialog
      v-model="fullWidth"
    >
       
        <q-card-section class="q-pt-none bg-deep-purple-7 text-white">
             <form name="CONVERSION">
            <q-input
        ref="name"
        name="nome"
        class="q-pa-md"
        filled
        v-model="name"
        label="Nome"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Nome por Favor']"
      >
              <template v-slot:prepend>
          <q-icon name="account_circle" />
        </template>
      </q-input>

                <q-input
        filled
        v-model="phone"
        standout
        class="q-pa-md"
        name="telefone"
        label="Telefone"
        mask="(##) ##### - ####"
         lazy-rules
        :rules="[ val => val && val.length > 9999 || 'Telefone por favor']"
      >
      <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>
        <q-input filled standout v-model="email"  lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Email por favor']"  class="q-pa-md" name="email" type="mail" prefix="Email">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
    
          <q-input
        filled
        v-model="cnpj"
        name="empresa"
        class="q-pa-md"
        label="CNPJ"
        mask="##.###.###.####-##"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'CNPJ Por favor',
          val => val > 99999  || 'CNPJ Válido por favor'
          ]"
      />

          <q-btn flat type="submit" rounded label="Enviar" class="q-pa-md" />
            </form>
        </q-card-section>
    </q-dialog>
  </q-page>
</template>

<style>
.my-card2{
  width: 100%;
  max-width: 350px;
}
.bg1{
  background-image: url("https://media0.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif");
}
</style>

<script>
export default {
  name: 'Elements',
   data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slide1:1,
      slide2:1,
      slide3:1,
      fullWidth: false,
      name: null,
      phone: null,
      email: null,
      cnpj: null,
    }
    }

    }
</script>
