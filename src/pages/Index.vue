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
  <div class="text">
    <h1 class="texxt text-white text-center">Produtos</h1>
  </div>
   <div class="container2 flex q-pa-xl q-ma-xl q-gutter-xl">
             <q-card class="my-card2 bg-dark">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74382832/4c43719c99.jpg"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white q-pa-none text-center">Magna</h6>
          <h6 class="texxt text-white"></h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
            <q-card class="my-card2 bg-dark">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74382832/8c60f5c50f.jpg"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white q-pa-none text-center">Magna</h6>
          <h6 class="texxt text-white"></h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
               <q-card class="my-card2 bg-dark">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74382832/8ef7632fad.jpg"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white q-pa-none text-center">Magna</h6>
          <h6 class="texxt text-white"></h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
               <q-card class="my-card2 bg-dark">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74382832/c815bb2ce9.jpg"
        />
        <q-card-actions vertical class="justify-around bg-dark">
          <h6 class="texxt text-white q-pa-none text-center">Magna</h6>
          <h6 class="texxt text-white"></h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    </div>

    <div class="container2 flex q-pa-xl q-ma-xl q-gutter-xl">
             <q-card class="my-card2 bg-indigo-13">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51961720/75415bb0ba.jpg"
        />
        <q-card-actions vertical class="justify-around bg-indigo-13">
          <h6 class="texxt text-white q-pa-none text-center">veda</h6>
          <h6 class="texxt text-white">Acqua</h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
            <q-card class="my-card2 bg-indigo-13">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51961720/b7833583fb.jpg"
        />
        <q-card-actions vertical class="justify-around bg-indigo-13">
          <h6 class="texxt text-white q-pa-none text-center">veda</h6>
          <h6 class="texxt text-white">Acqua</h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
               <q-card class="my-card2 bg-indigo-13">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51961720/4bf1f2a78b.jpg"
        />
        <q-card-actions vertical class="justify-around bg-indigo-13">
          <h6 class="texxt text-white q-pa-none text-center">veda</h6>
          <h6 class="texxt text-white">Acqua</h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
               <q-card class="my-card2 bg-indigo-13">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51961720/1b5f786ffb.jpg"
        />
        <q-card-actions vertical class="justify-around bg-indigo-13">
          <h6 class="texxt text-white q-pa-none text-center">veda</h6>
          <h6 class="texxt text-white">Acqua</h6>
            <br>
            <br>
            <br>
          <q-btn flat round color="white" icon="info" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
    </div>
    
    <div class="container2 flex q-ma-xl q-pa-xl q-gutter-xl">
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51963357/9356c06328.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <h6 class="texxt text-center">terra</h6>
          <br>
          <br>
          <q-btn flat round color="white" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51963357/a347f8215c.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <h6 class="texxt text-center">terra</h6>
          <br>
          <br>
          <q-btn flat round color="white" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51963357/81175720a2.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <h6 class="texxt text-center">terra</h6>
          <br>
          <br>
          <q-btn flat round color="white" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
       <q-card class="my-card2 bg-black">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51963357/c5ee293417.jpg"
        />
        <q-card-actions vertical class="justify-around bg-light-green-12">
          <h6 class="texxt">magna</h6>
          <h6 class="texxt text-center">terra</h6>
          <br>
          <br>
          <q-btn flat round color="white" icon="add_shopping_cart" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
       
    </div>
    <div class="aboutus texxt text-center text-blue-grey-12"> 
      <h1> Sobre nós </h1>
    <div class="q-pa-xs q-gutter-md">
    <div class="row justify-between">

    <q-parallax
    style="height: 70vw;"
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/sadfewe.jpg"
    >
    <h3>Vai além de cadeiras, storytelling, designs diferentes e coiss disruptivas</h3>
    <h4>a elements é a elements e bla blablablablablablablablabla
      blablablablablabla
      blablablablabla
      blablablabla
    
    </h4>
      <h4>a elements é a elements e bla blablablablablablablablabla
      blablablablablabla
      blablablablabla
      blablablabla
    
    </h4>
    
    
    </q-parallax>
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
