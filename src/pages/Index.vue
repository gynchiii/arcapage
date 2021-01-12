<template>
  <q-page class=" bg-black">
       <div class="q-pa-none q-gutter-md">
    <div class="row justify-between">

    <q-parallax
     src=" https://scontent.fbnu4-1.fna.fbcdn.net/v/t1.0-9/130811889_1935168946622228_7897929910126993059_o.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=9ievON56EKUAX_Hg86s&_nc_ht=scontent.fbnu4-1.fna&oh=45f64ae02ae53e462ce1337c398649f4&oe=6024EE26"
    >
      <h1 class="text-white texxt">ELEMENTS</h1>
    </q-parallax>
    <q-parallax>
      <template v-slot:media>
        <img src="https://trello-attachments.s3.amazonaws.com/5ffce91b2770135b3922c9ea/5ffdee948477bc6fb8d4034c/cf461b1ebecb22789bede5cd2fd4d654/arcanum_wallpaper.jpg" >
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.7 + (1 - scope.percentScrolled) * 0.2,
            top: (scope.percentScrolled * 100) + '%',
            left: 0,
            right: 0
          }"
        >
          <img class="q-pa-xs" src="https://trello-attachments.s3.amazonaws.com/5ffce91b2770135b3922c9ea/5ffcebca024d872460cb026d/125570f79eadbe00a13f6822c70734ea/Untitled-1.jpg" style="width: 150px; height: 150px">
          <br>
          <div class="text-h2 text-white texxt text-white text-center">Vai muito além de ser só uma cadeira</div>
          
        </div>
      </template>
    </q-parallax>


    </div>
  </div>
  <div class="container">
    <h1 class="texxt text-white text-center">Produtos</h1>
  </div>

    <div class="flex q-gutter-xl q-pa-xl">
       <q-card class="my-card2 bg-grey-1">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://www.elementsgaming.com.br/system/gallerys/imgs/000/000/052/original/cadeira2.png?1583347719"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white">veda</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
         <q-card class="my-card2 bg-grey-1">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://www.elementsgaming.com.br/system/gallerys/imgs/000/000/052/original/cadeira2.png?1583347719"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white">veda</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
        <q-card class="my-card2 bg-grey-1">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://www.elementsgaming.com.br/system/gallerys/imgs/000/000/052/original/cadeira2.png?1583347719"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white">veda</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
         <q-card class="my-card2 bg-grey-1">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://www.elementsgaming.com.br/system/gallerys/imgs/000/000/052/original/cadeira2.png?1583347719"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white">veda</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
         <q-card class="my-card2 bg-grey-1">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://www.elementsgaming.com.br/system/gallerys/imgs/000/000/052/original/cadeira2.png?1583347719"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white">veda</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
         <q-card class="my-card2 bg-grey-1">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://www.elementsgaming.com.br/system/gallerys/imgs/000/000/052/original/cadeira2.png?1583347719"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white">veda</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    </div>
    
    <div class="container2 flex q-pa-xl q-gutter-xl">
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://http2.mlstatic.com/D_NQ_NP_833204-MLB44094590005_112020-O.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <q-btn flat round color="red" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://http2.mlstatic.com/D_NQ_NP_833204-MLB44094590005_112020-O.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <q-btn flat round color="red" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://http2.mlstatic.com/D_NQ_NP_833204-MLB44094590005_112020-O.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <q-btn flat round color="red" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
      <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://http2.mlstatic.com/D_NQ_NP_833204-MLB44094590005_112020-O.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <q-btn flat round color="red" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
        <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://http2.mlstatic.com/D_NQ_NP_833204-MLB44094590005_112020-O.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://http2.mlstatic.com/D_NQ_NP_833204-MLB44094590005_112020-O.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    </div>
    <div class="aboutus texxt text-center text-blue-grey-12"> 
  <h1> Sobre nós </h1>
    <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax
      src="https://trello-attachments.s3.amazonaws.com/5ffce91b2770135b3922c9ea/5ffdf3a5a9dc1e0f3ecd1879/a4aea054a8b006b0199ed8a3cb6fd7b9/AS.jpg"
    >
      <h1 class="text-white">Só a Elements é Elements</h1>
    </q-parallax>

    </div>
  </div>
    <h2>A elements é conhecida como slkdjlkasdlksajdkl
      çlsdkfçlkçdlf
      dfksçdlfkçsladkfçlsdf
      dçafkçasdkfçlksadlçfs
      asdkjalksjdlasdasdsdajsda
      sdfkjhasjkhdfkjsadhfkjshdfd
      fdlflksdhflkjhaskdjfhkjsdfas
      dfsdfjlkasjdflkjlskdjflkasdjflkasdf
      sdfklsajdflkjalskdjflkjsadlkfjlskajdf
      sdfkljsdflkçdjfklsjdlkf
    </h2>
    <h2>A elements é conhecida como slkdjlkasdlksajdkl
      çlsdkfçlkçdlf
      dfksçdlfkçsladkfçlsdf
      dçafkçasdkfçlksadlçfs
      asdkjalksjdlasdasdsdajsda
      sdfkjhasjkhdfkjsadhfkjshdfd
      fdlflksdhflkjhaskdjfhkjsdfas
      dfsdfjlkasjdflkjlskdjflkasdjflkasdf
      sdfklsajdflkjalskdjflkjsadlkfjlskajdf
      sdfkljsdflkçdjfklsjdlkf
    </h2>
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
  name: 'PageIndex',
   data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
