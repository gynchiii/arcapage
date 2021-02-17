<template>
  <q-page
    class=" bg-black"
    style="overflow-x: hidden ; overflow-y: hidden "
  >
    <div class="q-pa-none q-gutter-sm">

      <div class="row q-pa-none justify-between">
        <q-parallax
          :height="550"
          class=""
        >
          <template v-slot:media>
            <video
              :height="720"
              style="top: -35%;"
              autoplay
              loop
              muted
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/logo.mp4"
            />
          </template>

        </q-parallax>
        <q-parallax
          class="large-screen-only q-pa-none"
          :height="900"
        >
          <template v-slot:media>
            <video
              width="1080"
              loop
              autoplay
              muted
            >
              <source
                type="video/mp4"
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/CADEIRA-4.mp4?_=0"
              >
            </video>
          </template>
        </q-parallax>
        <div
          class="q-pa-xl flex-center flex "
          style="width: 100%;"
        >
          <h2 class="q-pa-xl text-center text-purple-2 text-white texxt2 text-italic"> formulário </h2>
          <form class="q-gutter-md">
            <q-input
              class="bg-purple-2"
              standout
              v-model="email"
              type="name"
              prefix="Nome:"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>

            <q-input
              class="bg-purple-2"
              standout
              v-model="email"
              type="email"
              prefix="Email:"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>

            <q-input
              class="bg-purple-2"
              standout
              v-model="number"
              type="number"
              prefix="CNPJ:"
            >
              <template v-slot:prepend>
                <q-icon name="work" />
              </template>
            </q-input>

            <q-toggle
              v-model="accept"
              class="text-purple-2 texxt text-italic text-bold"
              label="Aceito receber emails promocionais e informativos do Grupo Arca"
            />
            <div>

              <q-btn
                label="Enviar"
                class="texxt2 text-black"
                type="submit"
                color="purple-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <h2 class="small-screen-only text-black bg-blue-8 text-center texxt"> ela chegou .</h2>
    <q-parallax
      class="small-screen-only"
      style="width: 120vw; height: 105vh; "
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/concept-storie.jpg"
    >
      <div class="flex flex-center">
        <subtitle class="texxt2 text-grey-1 q-pa-sm text-h6  text-bold"> especs </subtitle>
        <q-btn
          size="40px"
          round
          @click="lux = true"
          push
          class="text-black"
          glossy
          type="submit"
          color="blue-4"
          icon="info"
        />
      </div>
    </q-parallax>
    <h2 class="small-screen-only bg-red-8 text-black text-center texxt"> ela acendeu</h2>

    <q-linear-progress
      indeterminate
      dark
      stripe
      rounded
      size="20px"
      :value="progress2"
      color="purple"
      class="q-mt-sm"
    />
    <q-parallax
      :height="400"
      style="width: 100%; "
      src="https://i.pinimg.com/originals/6d/7d/7d/6d7d7df7dc95c72f49ff389c261c96ec.jpg"
    >

      <div class="text">
        <h1 class="texxt text-bold text-white large-screen-only text-center">Produtos</h1>
        <h2 class="texxt text-bold text-white small-screen-only text-center">Produtos</h2>
      </div>
    </q-parallax>
    <div class="constrain">
      <h1 class="texxt2 bg-white text-center large-screen-only text-black">Linha Magna</h1>
      <h2 class="texxt2 bg-white text-center small-screen-only text-black">Linha Magna</h2>
    </div>

    <form
      action="https://wa.me/554833746010"
      target="_blank"
    >
      <div class=" flex flex-center row ">
        <q-carousel
          style="width: 50%; height: 72vh;"
          swipeable
          class="large-screen-only"
          animated
          navigation-active-icon="check_circle"
          control-type="regular"
          arrows
          control-text-color="blue"
          navigation
          control-color="black"
          navigation-icon="x"
          v-model="slide1"
        >
          <q-carousel-slide
            :name="1"
            class="absolute-center q-pa-md"
            style="width: 31vw; top: 55%;"
          >
            <q-img
              class="rounded-borders"
              src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74382832/4c43719c99.jpg"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            class="absolute-center q-pa-sm"
            style="width: 21vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/elements-362.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="3"
            class="absolute-center q-pa-sm"
            style="width: 23vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/1-2-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="4"
            class="absolute-center q-pa-sm"
            style="width: 32vw; top: 50%;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/MAGNA.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="5"
            class="absolute-center q-pa-md"
            style="width: 18vw; top: 55%;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/ACQUA-FRENTE-ALMOFADA-PNG.png"
            />
          </q-carousel-slide>
        </q-carousel>
        <div class=" row items-start">
          <q-card
            class="bg-white "
            style="width: 100%; height: 72vh;"
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section class="q-pt-sm">
                <div class="text-overline">sobre</div>
                <div class="text-h4 texxt  q-mt-sm q-mb-xs">MAGNA</div>
                <div
                  class=" text-h7 text-black"
                  style="height: 45vh;   overflow-y: scroll;"
                >
                  <hr> <br>
                  Material externo:
                  Suede e couro sintético PU qualidade premium
                  <hr>
                  Material interno:
                  Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
                  <br> <br>
                  <hr>
                  Estrutura:
                  Aço sólido super resistente
                  <hr>
                  Braço:
                  3D Ajustável | PU (poliuretano)
                  <hr>
                  Base:
                  Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
                  <hr>
                  Roda:
                  Nylon + PU + metal | Diâmetro: 6cm
                  <hr>
                  Cilindo de gás:
                  Classe 4 Anti Explosão
                  <hr>
                  Funções:
                  Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
                  <hr>
                  Inclinação:
                  Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
                  <hr>
                  Almofada:
                  Lombar Para melhor ajuste de ergonomia e satisfação
                  <br>
                  <hr>
                  Medidas:
                  70 x 61 x 123 - 131 cm (comprimento x largura x altura)
                  <br>
                  <hr>
                  Largura do Assento:
                  60 cm
                  <hr>
                  Largura do Enconsto:
                  60 cm
                  <hr>
                  Altura do Encosto:
                  83cm
                  <hr>
                  Profundidade do assento:
                  53cm
                  <hr>
                  Peso máximo suportado:
                  150 kg

                </div>
              </q-card-section>

              <q-card-section class="col-4 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803"
                />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <br>
              <q-btn
                fab
                push
                class="texxt2 bg-green text-black text-italic text-bold "
                type="submit"
                color="primary"
              >
                WHATSAPP CONSULTOR
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </form>
    <div class="constrain">
      <h1 class="texxt2 bg-white text-center large-screen-only text-black">Linha Veda</h1>
      <h2 class="texxt2 bg-white text-center small-screen-only text-black">Linha Veda</h2>
    </div>

    <form
      action="https://wa.me/554833746010"
      target="_blank"
    >
      <div class=" flex flex-center row ">
        <q-carousel
          style="width: 50%; height: 72vh;"
          swipeable
          class="large-screen-only"
          animated
          navigation-active-icon="x"
          control-type="regular"
          arrows
          control-text-color="blue"
          navigation
          control-color="black"
          navigation-icon="check_circle"
          v-model="slide2"
        >
          <q-carousel-slide
            :name="1"
            class="absolute-center "
            style="width: 20vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Veda-nemesis-2-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            class="absolute-center"
            style="width: 18vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-TERRA-2.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="3"
            class="absolute-center"
            style="width: 18vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-IGNIS-2-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="4"
            class="absolute-center"
            style="width: 18vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-AER-2.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="5"
            class="absolute-center"
            style="width: 18vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-ACQUA-2.png"
            />
          </q-carousel-slide>
        </q-carousel>
        <div class=" row items-start">
          <q-card
            class="bg-white "
            style="width: 100%; height: 72vh;"
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section class="q-pt-sm">
                <div class="text-overline">sobre</div>
                <div class="text-h4 texxt  q-mt-sm q-mb-xs">VEDA</div>
                <div
                  class=" text-h7 text-black"
                  style="height: 45vh;   overflow-y: scroll;"
                >
                  <hr> <br>
                  Material externo:
                  Suede e couro sintético PU qualidade premium
                  <hr>
                  Material interno:
                  Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
                  <br> <br>
                  <hr>
                  Estrutura:
                  Aço sólido super resistente
                  <hr>
                  Braço:
                  3D Ajustável | PU (poliuretano)
                  <hr>
                  Base:
                  Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
                  <hr>
                  Roda:
                  Nylon + PU + metal | Diâmetro: 6cm
                  <hr>
                  Cilindo de gás:
                  Classe 4 Anti Explosão
                  <hr>
                  Funções:
                  Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
                  <hr>
                  Inclinação:
                  Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
                  <hr>
                  Almofada:
                  Lombar Para melhor ajuste de ergonomia e satisfação
                  <br>
                  <hr>
                  Medidas:
                  70 x 61 x 123 - 131 cm (comprimento x largura x altura)
                  <br>
                  <hr>
                  Largura do Assento:
                  60 cm
                  <hr>
                  Largura do Enconsto:
                  60 cm
                  <hr>
                  Altura do Encosto:
                  83cm
                  <hr>
                  Profundidade do assento:
                  53cm
                  <hr>
                  Peso máximo suportado:
                  150 kg

                </div>
              </q-card-section>

              <q-card-section class="col-4 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803"
                />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>

              <q-btn
                flat
                class="texxt2 text-black text-italic text-bold "
                type="submit"
                color="primary"
              >
                WHATSAPP CONSULTOR
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <q-carousel
        style="width: 100vw; height: 80vh;"
        swipeable
        animated
        class="small-screen-only"
        v-model="slide4"
        thumbnails
        infinite
      >
        <q-carousel-slide
          :name="1"
          class="absolute-center"
          style="width: 80vw; height: 50vh;"
          img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74381603/afe1082514.jpg"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          class="absolute-center"
          style="width: 80vw; height: 50vh;"
          img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A0107-scaled.jpg"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          class="absolute-center"
          style="width: 80vw; height: 50vh;"
          img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51466240/7481379319.jpg"
        >
        </q-carousel-slide>
      </q-carousel>
    </form>
    <div class="constrain">
      <h1 class="texxt2 bg-white text-center large-screen-only text-black">Linha Elemental</h1>
      <h2 class="texxt2 bg-white text-center small-screen-only text-black">Linha Elemental</h2>
    </div>

    <form
      action="https://wa.me/554833746010"
      target="_blank"
    >
      <div class=" flex flex-center row ">
        <q-carousel
          style="width: 50%; height: 72vh;"
          swipeable
          class="large-screen-only"
          animated
          navigation-active-icon="phone"
          control-type="regular"
          arrows
          control-text-color="blue"
          navigation
          control-color="black"
          navigation-icon="check_circle"
          v-model="slide3"
        >
          <q-carousel-slide
            :name="1"
            class="absolute-center "
            style="width: 20vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Elementa-Nemesis-nova.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            class="absolute-center"
            style="width: 20vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/verde-frente.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="3"
            class="absolute-center"
            style="width: 20vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/vermelho-frente-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="4"
            class="absolute-center"
            style="width: 20vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/branca-frente-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="5"
            class="absolute-center"
            style="width: 20vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/azul-frente.png"
            />
          </q-carousel-slide>
        </q-carousel>
        <div class=" row items-start">
          <q-card
            class="bg-white "
            style="width: 100%; height: 72vh;"
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section class="q-pt-sm">
                <div class="text-overline">sobre</div>
                <div class="text-h4 texxt  q-mt-sm q-mb-xs">ELEMENTAL</div>
                <div
                  class=" text-h7 text-black"
                  style="height: 45vh;   overflow-y: scroll;"
                >
                  <hr> <br>
                  Material externo:
                  Suede e couro sintético PU qualidade premium
                  <hr>
                  Material interno:
                  Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
                  <br> <br>
                  <hr>
                  Estrutura:
                  Aço sólido super resistente
                  <hr>
                  Braço:
                  3D Ajustável | PU (poliuretano)
                  <hr>
                  Base:
                  Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
                  <hr>
                  Roda:
                  Nylon + PU + metal | Diâmetro: 6cm
                  <hr>
                  Cilindo de gás:
                  Classe 4 Anti Explosão
                  <hr>
                  Funções:
                  Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
                  <hr>
                  Inclinação:
                  Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
                  <hr>
                  Almofada:
                  Lombar Para melhor ajuste de ergonomia e satisfação
                  <br>
                  <hr>
                  Medidas:
                  70 x 61 x 123 - 131 cm (comprimento x largura x altura)
                  <br>
                  <hr>
                  Largura do Assento:
                  60 cm
                  <hr>
                  Largura do Enconsto:
                  60 cm
                  <hr>
                  Altura do Encosto:
                  83cm
                  <hr>
                  Profundidade do assento:
                  53cm
                  <hr>
                  Peso máximo suportado:
                  150 kg

                </div>
              </q-card-section>

              <q-card-section class="col-4 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803"
                />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>

              <q-btn
                flat
                class="texxt2 text-black text-italic text-bold "
                type="submit"
                color="primary"
              >
                WHATSAPP CONSULTOR
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <q-carousel
        style="width: 100vw; height: 80vh;"
        swipeable
        class="small-screen-only "
        animated
        v-model="slide3"
        thumbnails
        infinite
      >
        <q-carousel-slide
          :name="1"
          class="absolute-center q-ma-md"
          style="width: 80vw; height: 30vw;"
          img-src="https://img.terabyteshop.com.br/produto/g/cadeira-gamer-elements-magna-acqua-reclinavel-black-blue_109348.jpg"
        >
          <q-btn
            size="25px"
            style="opacity: 0.8; top: 05%; left: -10%;"
            rounded
            push
            class="text-white"
            glossy
            @click="magnaaqua = true"
            color="black"
            icon="info"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          class=" absolute-center"
          style="width: 80vw; height: 30vw;"
          img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A9859-1.jpg"
        >
          <q-btn
            size="25px"
            style="opacity: 0.8; top: 05%; left: -10%;"
            rounded
            push
            class="text-white"
            glossy
            @click="vedaaqua = true"
            color="black"
            icon="info"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          class="absolute-center"
          style="width: 80vw; height: 30vw;"
          img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51465829/f8716dc464.jpg"
        >
          <q-btn
            size="25px"
            style="opacity: 0.8; top: 05%; left: -10%;"
            rounded
            push
            class="text-white"
            glossy
            @click="elementalaqua = true"
            color="black"
            icon="info"
          />
        </q-carousel-slide>
      </q-carousel>
    </form>
    <h1 class="texxt large-screen-only text-white text-center">Linha. Arcanum</h1>
    <h2 class="texxt small-screen-only text-center text-red">Linha. Arcanum</h2>

    <div class=" flex flex-center row ">
      <q-carousel
        style="width: 50%; height: 72vh;"
        swipeable
        class="large-screen-only "
        animated
        navigation-active-icon="phone"
        control-type="regular"
        arrows
        control-text-color="blue"
        navigation
        control-color="black"
        navigation-icon="check_circle"
        v-model="slide4"
      >
        <q-carousel-slide
          :name="1"
          class="absolute-center "
          style="width: 20vw;"
        >
          <q-img
            class="rounded-borders"
            src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/arcanum1.png"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          class="absolute-center"
          style="width: 23vw;"
        >
          <q-img
            class="rounded-borders"
            src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/cadeira-trevas-top-frente.png"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          class="absolute-center"
          style="width: 19vw;"
        >
          <q-img
            class="rounded-borders"
            src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/cadeira-trevas-top-lateral.png"
          />
        </q-carousel-slide>
      </q-carousel>
      <div class=" row items-start">
        <q-card
          class="bg-white "
          style="width: 100%; height: 72vh;"
          flat
          bordered
        >
          <q-card-section horizontal>
            <q-card-section class="q-pt-sm">
              <div class="text-overline">sobre</div>
              <div class="text-h4 texxt  q-mt-sm q-mb-xs">ARCANUM NEMESIS</div>
              <div
                class=" text-h7 text-black"
                style="height: 45vh;   overflow-y: scroll;"
              >
                <hr> <br>
                Material externo:
                Suede e couro sintético PU qualidade premium
                <hr>
                Material interno:
                Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
                <br> <br>
                <hr>
                Estrutura:
                Aço sólido super resistente
                <hr>
                Braço:
                3D Ajustável | PU (poliuretano)
                <hr>
                Base:
                Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
                <hr>
                Roda:
                Nylon + PU + metal | Diâmetro: 6cm
                <hr>
                Cilindo de gás:
                Classe 4 Anti Explosão
                <hr>
                Funções:
                Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
                <hr>
                Inclinação:
                Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
                <hr>
                Almofada:
                Lombar Para melhor ajuste de ergonomia e satisfação
                <br>
                <hr>
                Medidas:
                70 x 61 x 123 - 131 cm (comprimento x largura x altura)
                <br>
                <hr>
                Largura do Assento:
                60 cm
                <hr>
                Largura do Enconsto:
                60 cm
                <hr>
                Altura do Encosto:
                83cm
                <hr>
                Profundidade do assento:
                53cm
                <hr>
                Peso máximo suportado:
                150 kg

              </div>
            </q-card-section>

            <q-card-section class="col-4 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://www.elementsgaming.com.br/system/seos/imgs/000/000/001/grande/logo-elements-preta.png?1583409803"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>

            <q-btn
              flat
              class="texxt2 text-black text-italic text-bold "
              type="submit"
              color="primary"
            >
              WHATSAPP CONSULTOR
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <br>
    <br>
    <q-linear-progress
      indeterminate
      color="green"
      class="q-mt-sm"
    />
    <q-parallax
      :height="550"
      class=""
    >
      <template v-slot:media>
        <video
          :height="1080"
          autoplay
          loop
          muted
          src="https://desafio.elementsgaming.com.br/wp-content/uploads/2020/11/VID.mkv"
        />
      </template>
      <h2 class="texxt text-center text-white constrain q-pa-xl text-bold"> SAIBA MAIS SOBRE NOSSO STORYTELLING </h2>
    </q-parallax>
    <q-linear-progress
      reverse
      indeterminate
      :value="progress"
      color="purple"
      class="q-mt-sm"
    />
    <div class="q-pa-md flex flex-center bg-black text-white">
      <q-list
        dark
        padding
        bordered
        class="rounded-borders flex flex-center"
        style="max-width: 55%;"
      >
        <q-separator />
        <q-expansion-item
          icon="bookmark"
          popup
          label="Storetelling"
          header-class="text-blue text-h5 texxt2"
        >
          <q-card class="bg-black text-h6 texxt">
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator />
        <q-expansion-item
          icon="explore"
          popup
          label="Universo"
          header-class="text-grey-1 text-h5 texxt2"
        >
          <q-card class="bg-black">
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator />

        <q-expansion-item
          icon="perm_identity"
          label="Personagens"
          popup
          header-class="text-purple text-h5 texxt2"
        >
          <q-card class="bg-black">
            <q-card-section>
              <q-carousel
                v-model="slide6"
                swipeable
                animated
                control-color="white"
                navigation-icon="radio_button_unchecked"
                navigation
                padding
                arrows
                height="500px"
                class="bg-transparent text-white shadow-1 rounded-borders"
              >
                <q-carousel-slide
                  name="1"
                  class="column no-wrap flex-center"
                >
                  <h5 class="texxt text-white text-italic text-bold">Kenneth</h5>
                  <q-img
                    class=""
                    src="https://elements.com.br/images/personagens/Kenneth-pe.png"
                  />
                  <subtitle class="texxt text-h6 text-white"> o astuto </subtitle>
                </q-carousel-slide>
                <q-carousel-slide
                  name="2"
                  class="column no-wrap flex-center"
                >
                  <h5 class="texxt text-white text-italic text-bold">Alev</h5>
                  <q-img src="https://elements.com.br/images/personagens/alev1.png" />
                  <subtitle class="texxt text-h6 text-white"> o perspicaz </subtitle>

                </q-carousel-slide>
                <q-carousel-slide
                  name="3"
                  class="column no-wrap flex-center"
                >
                  <h5 class="texxt text-white text-italic text-bold">FULANO</h5>
                  <q-img src="https://elements.com.br/images/personagens/Kenneth-pe.png" />
                  <subtitle class="texxt text-h6 text-white"> o boquinha de veludo </subtitle>

                </q-carousel-slide>
                <q-carousel-slide
                  name="4"
                  class="column no-wrap flex-center"
                >
                  <h5 class="texxt text-white text-italic text-bold">FULANO</h5>
                  <q-img src="https://elements.com.br/images/personagens/Kenneth-pe.png" />
                  <subtitle class="texxt text-h6 text-white"> o boquinha de veludo </subtitle>
                </q-carousel-slide>
              </q-carousel>
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-list>
    </div>
    <div class="bg-white text-black">

      <h6 class="q-pa-lg texxt2 small-screen-only text-bold  text-center constrain">Junto da melhor marca de cadeiras da américa latina, <br> você se sente preparado para promover essa incrível experiência ao consumidor. <br> E ainda, se posicionar no mercado como referencia? <br> <br>
      </h6>
      <hr>
      <q-dialog v-model="inception">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-purple-3 text-bold large-screen-only texxt">Olá, Argen aqui quem vos fala! <br> <br> O nosso propósito é entregar valor para as pessoas que de alguma forma tem acesso ao nosso universo! <br> Tudo isso através de algo que está impregnado em nosso universo, que é o Storytelling, onde é contado através de quadrinhos e livros, que dentro delas estão incluídos valores. <br> <br> Valores esses que com certeza ajudam as pessoas que tem acesso a eles a melhorarem e progredirem em suas próprias vidas, por isso estamos crescendo muito e levando esse universo inteiro pra tanta gente diferente. <br> <br> Claro que com muita qualidade em nossos produtos juntamente com a experiência que as acompanha. <br> <br> <br>
              A Elements Gaming foi criada no dia 06/07/2016 , <br> Pelos sócios fundadores Rafael Seifert e Bruna Rodrigues. <br> <br> Já nessa data se sabia que a empresa miraria só e somente o extraordinário.
              Desde o momento zero a ideia nunca foi ser apenas uma marca de cadeira gamer, e sim ser um conceito e levar uma mensagem a todos os jovens não apenas do Brasil, mas no mundo!
              Assim, hoje, apenas 4 anos depois, orgulhamo-nos de estarmos entre as marcas gamers mais influentes da América Latina.

            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <div class="flex q-pa-md flex-center">
        <subtitle class="q-pa-md text-bold texxt text-h4">
          Onde estamos
        </subtitle>
        <form
          action="https://g.page/Arca-Elements?share"
          target="_blank"
        >
          <q-btn
            size="30px"
            rounded
            class="large-screen-only"
            type="submit"
            color="green-8"
            icon="map"
          />
          <q-btn
            size="20px"
            rounded
            class="small-screen-only"
            type="submit"
            color="green-8"
            icon="map"
          />
        </form>
      </div>
      <h4 class="large-screen-only q-pa-lg q-gutter-sm constrain text-center texxt text-bold">
        <hr> Contato: <br>
        (48) 3374-6010
        <hr> <br>
        Garantia <br> <br>
        E-mail: garantia@elements.ind.br
      </h4>
      <h4 class="small-screen-only constrain text-center texxt2 text-bold">
        <hr> Contato: <br>
        (48) 3374-6010
      </h4>
    </div>
    <q-page-scroller
      expand
      position="top"
      :scroll-offset="150"
      :offset="[0, 0]"
    >
      <div class="col texxt cursor-pointer q-pa-sm bg-white text-black text-center">
        Volte ao início
      </div>
    </q-page-scroller>
    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
    >
      <form
        action="https://wa.me/554833746010"
        target="_black"
      >
        <q-btn
          type="submit"
          fab
          class="text-black"
          color="green-6"
        >
          <svg-icon
            type="mdi"
            :path="path"
          ></svg-icon>
        </q-btn>
      </form>
    </q-page-sticky>

    <q-page-scroller
      reverse
      position="bottom-right"
      :scroll-offset="20"
      :offset="[95, 18]"
    >
      <q-btn
        fab
        icon="keyboard_arrow_down"
        class="text-black"
        color="white"
      />
    </q-page-scroller>

    <div class="flex flex-center">
      <q-dialog v-model="lux">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4 texxt2">
              TOP SECRET <br>
              <hr>
              TOP SECRET <br>
              <hr>
              TOP SECRET <br>
              <hr>
              TOP SECRET <br>
              <hr>
              TOP SECRET <br>
              <hr>
              TOP SECRET <br>
              <hr>
              TOP SECRET <br>
              <hr>
              TOP SECRET <br>
              <hr>

            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="magnanemesis">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Magna Nemesis
              <hr> <br>
              <hr>
              Material externo:
              Suede e couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
              <br> <br>
              <hr>
              Estrutura:
              Aço sólido super resistente
              <hr>
              Braço:
              3D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
              <hr>
              Roda:
              Nylon + PU + metal | Diâmetro: 6cm
              <hr>
              Cilindo de gás:
              Classe 4 Anti Explosão
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
              <hr>
              Inclinação:
              Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
              <hr>
              Almofada:
              Lombar Para melhor ajuste de ergonomia e satisfação
              <br>
              <hr>
              Medidas:
              70 x 61 x 123 - 131 cm (comprimento x largura x altura)
              <br>
              <hr>
              Largura do Assento:
              60 cm
              <hr>
              Largura do Enconsto:
              60 cm
              <hr>
              Altura do Encosto:
              83cm
              <hr>
              Profundidade do assento:
              53cm
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="magnaignis">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4 texxt2">Modelo:
              Magna Ignis
              <hr> <br>
              <hr>
              Material externo:
              Suede e couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
              <br> <br>
              <hr>
              Estrutura:
              Aço sólido super resistente
              <hr>
              Braço:
              3D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
              <hr>
              Roda:
              Nylon + PU + metal | Diâmetro: 6cm
              <hr>
              Cilindo de gás:
              Classe 4 Anti Explosão
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
              <hr>
              Inclinação:
              Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
              <hr>
              Almofada:
              Lombar Para melhor ajuste de ergonomia e satisfação
              <br>
              <hr>
              Medidas:
              70 x 61 x 123 - 131 cm (comprimento x largura x altura)
              <br>
              <hr>
              Largura do Assento:
              60 cm
              <hr>
              Largura do Enconsto:
              60 cm
              <hr>
              Altura do Encosto:
              83cm
              <hr>
              Profundidade do assento:
              53cm
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="magnaaqua">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Magna Acqua
              <hr> <br>
              <hr>
              Material externo:
              Suede e couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
              <br> <br>
              <hr>
              Estrutura:
              Aço sólido super resistente
              <hr>
              Braço:
              3D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
              <hr>
              Roda:
              Nylon + PU + metal | Diâmetro: 6cm
              <hr>
              Cilindo de gás:
              Classe 4 Anti Explosão
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
              <hr>
              Inclinação:
              Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
              <hr>
              Almofada:
              Lombar Para melhor ajuste de ergonomia e satisfação
              <br>
              <hr>
              Medidas:
              70 x 61 x 123 - 131 cm (comprimento x largura x altura)
              <br>
              <hr>
              Largura do Assento:
              60 cm
              <hr>
              Largura do Enconsto:
              60 cm
              <hr>
              Altura do Encosto:
              83cm
              <hr>
              Profundidade do assento:
              53cm
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="magnaterra">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Magna Terra
              <hr> <br>
              <hr>
              Material externo:
              Suede e couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
              <br> <br>
              <hr>
              Estrutura:
              Aço sólido super resistente
              <hr>
              Braço:
              3D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
              <hr>
              Roda:
              Nylon + PU + metal | Diâmetro: 6cm
              <hr>
              Cilindo de gás:
              Classe 4 Anti Explosão
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
              <hr>
              Inclinação:
              Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
              <hr>
              Almofada:
              Lombar Para melhor ajuste de ergonomia e satisfação
              <br>
              <hr>
              Medidas:
              70 x 61 x 123 - 131 cm (comprimento x largura x altura)
              <br>
              <hr>
              Largura do Assento:
              60 cm
              <hr>
              Largura do Enconsto:
              60 cm
              <hr>
              Altura do Encosto:
              83cm
              <hr>
              Profundidade do assento:
              53cm
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="magnaaer">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4 texxt2">Modelo:
              Magna Aer
              <hr> <br>
              <hr>
              Material externo:
              Suede e couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
              <br> <br>
              <hr>
              Estrutura:
              Aço sólido super resistente
              <hr>
              Braço:
              3D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 35,00cm (cada haste)
              <hr>
              Roda:
              Nylon + PU + metal | Diâmetro: 6cm
              <hr>
              Cilindo de gás:
              Classe 4 Anti Explosão
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 155º | Sistema de bloqueio de inclinação
              <hr>
              Inclinação:
              Mecanismo multifuncional com 3 bloqueios (superior ao butterfly)
              <hr>
              Almofada:
              Lombar Para melhor ajuste de ergonomia e satisfação
              <br>
              <hr>
              Medidas:
              70 x 61 x 123 - 131 cm (comprimento x largura x altura)
              <br>
              <hr>
              Largura do Assento:
              60 cm
              <hr>
              Largura do Enconsto:
              60 cm
              <hr>
              Altura do Encosto:
              83cm
              <hr>
              Profundidade do assento:
              53cm
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="vedanemesis">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Veda Nemesis
              <hr>
              <hr>
              Cor:
              Preto
              <br>
              <hr> <br>
              Material externo:
              Couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma de densidade 50Kg/m³ curada a frio - alto padrão e durabilidade
              <hr>
              Estrutura:
              Aço sólido super resistente.
              <hr>
              Braço:
              2D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 33,00cm (cada aste)
              <br>
              <hr>
              Roda:
              Material: nylon | Número de raios: 5 | Diâmetro: 6cm
              <br>
              <hr>
              Cilindo de gás:
              8cm pistão de gás | Classe 4 | Acabamento em PU incluído
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 180º | Sistema de bloqueio de inclinação
              <hr>
              Almofada:
              Cervical e lombar
              <hr>
              Largura do Assento:
              54 cm
              <hr>
              Largura do Enconsto:
              56,5 cm
              <hr>
              Altura do Encosto:
              81 cm
              <hr>
              Profundidade do Assento:
              50 cm
              <hr>
              Nome do Elemento:
              Bordado no assento em costura premium
              <hr>
              Peso máximo suportado:
              150 kg

            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="vedaaer">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4 texxt2">Modelo:
              Veda Aer
              <hr>
              <hr>
              Cor:
              Branco/Preto
              <br>
              <hr> <br>
              Material externo:
              Couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma de densidade 50Kg/m³ curada a frio - alto padrão e durabilidade
              <hr>
              Estrutura:
              Aço sólido super resistente.
              <hr>
              Braço:
              2D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 33,00cm (cada aste)
              <br>
              <hr>
              Roda:
              Material: nylon | Número de raios: 5 | Diâmetro: 6cm
              <br>
              <hr>
              Cilindo de gás:
              8cm pistão de gás | Classe 4 | Acabamento em PU incluído
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 180º | Sistema de bloqueio de inclinação
              <hr>
              Almofada:
              Cervical e lombar
              <hr>
              Largura do Assento:
              54 cm
              <hr>
              Largura do Enconsto:
              56,5 cm
              <hr>
              Altura do Encosto:
              81 cm
              <hr>
              Profundidade do Assento:
              50 cm
              <hr>
              Nome do Elemento:
              Bordado no assento em costura premium
              <hr>
              Peso máximo suportado:
              150 kg

            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="vedaaqua">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4 texxt2">Modelo:
              Veda Acqua
              <hr>
              <hr>
              Cor:
              Preto/Azul
              <br>
              <hr> <br>
              Material externo:
              Couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma de densidade 50Kg/m³ curada a frio - alto padrão e durabilidade
              <hr>
              Estrutura:
              Aço sólido super resistente.
              <hr>
              Braço:
              2D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 33,00cm (cada aste)
              <br>
              <hr>
              Roda:
              Material: nylon | Número de raios: 5 | Diâmetro: 6cm
              <br>
              <hr>
              Cilindo de gás:
              8cm pistão de gás | Classe 4 | Acabamento em PU incluído
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 180º | Sistema de bloqueio de inclinação
              <hr>
              Almofada:
              Cervical e lombar
              <hr>
              Largura do Assento:
              54 cm
              <hr>
              Largura do Enconsto:
              56,5 cm
              <hr>
              Altura do Encosto:
              81 cm
              <hr>
              Profundidade do Assento:
              50 cm
              <hr>
              Nome do Elemento:
              Bordado no assento em costura premium
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="vedaterra">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Veda Terra
              <hr>
              <hr>
              Cor:
              Preto/Verde
              <br>
              <hr> <br>
              Material externo:
              Couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma de densidade 50Kg/m³ curada a frio - alto padrão e durabilidade
              <hr>
              Estrutura:
              Aço sólido super resistente.
              <hr>
              Braço:
              2D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 33,00cm (cada aste)
              <br>
              <hr>
              Roda:
              Material: nylon | Número de raios: 5 | Diâmetro: 6cm
              <br>
              <hr>
              Cilindo de gás:
              8cm pistão de gás | Classe 4 | Acabamento em PU incluído
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 180º | Sistema de bloqueio de inclinação
              <hr>
              Almofada:
              Cervical e lombar
              <hr>
              Largura do Assento:
              54 cm
              <hr>
              Largura do Enconsto:
              56,5 cm
              <hr>
              Altura do Encosto:
              81 cm
              <hr>
              Profundidade do Assento:
              50 cm
              <hr>
              Nome do Elemento:
              Bordado no assento em costura premium
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="vedaignis">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Veda Ignis
              <hr>
              <hr>
              Cor:
              Preto/Vermelho
              <br>
              <hr> <br>
              Material externo:
              Couro sintético PU qualidade premium
              <hr>
              Material interno:
              Espuma de densidade 50Kg/m³ curada a frio - alto padrão e durabilidade
              <hr>
              Estrutura:
              Aço sólido super resistente.
              <hr>
              Braço:
              2D Ajustável | PU (poliuretano)
              <hr>
              Base:
              Tipo estrela | Material: metal | Dimensões: 33,00cm (cada aste)
              <br>
              <hr>
              Roda:
              Material: nylon | Número de raios: 5 | Diâmetro: 6cm
              <br>
              <hr>
              Cilindo de gás:
              8cm pistão de gás | Classe 4 | Acabamento em PU incluído
              <hr>
              Funções:
              Função rotativa | Encosto reclinável | 90º - 180º | Sistema de bloqueio de inclinação
              <hr>
              Almofada:
              Cervical e lombar
              <hr>
              Largura do Assento:
              54 cm
              <hr>
              Largura do Enconsto:
              56,5 cm
              <hr>
              Altura do Encosto:
              81 cm
              <hr>
              Profundidade do Assento:
              50 cm
              <hr>
              Nome do Elemento:
              Bordado no assento em costura premium
              <hr>
              Peso máximo suportado:
              150 kg
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="arcanumnemesis">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Arcanum Nemesis
              <br><br>
              <hr>
              <hr>
              Cor:
              Preto (nemesis)
              <hr>
              Tipo de espuma:
              Espuma injetada (alto padrão)
              <hr>
              Braços:
              3D (movimentos laterais / altura / giratório / frente e traz )
              <hr>
              Inclinação:
              180 graus
              <hr>
              Função bloqueio de inclinação:
              SIM
              <hr>
              Estrutura:
              Aço sólido super resistente
              <hr>
              Bordado:
              Elemento (nemesis) na parte superior e o nome nemesis bordado no assento - detalhes em suede
              <br> <br>
              <hr>
              Regulagem altura:
              sim
              <hr>
              Material:
              Couro de poliuretano e textura 3d
              <hr>
              Almofadas:
              Lombar e Cervical - Ergonomia e encaixe perfeito para o seu corpo
              <hr>
              Mecanismo; Butterfly:
              Função rotativa | Encosto reclinável | 90o - 180o | Sistema de bloqueio de inclinação
              <hr>
              Pistão:
              Class 4 com sistema anti explosão
              <br> <br>
              <hr>
              Base:
              Alumínio
              <hr>
              Suporta:
              150kg
              <hr>
              Rodas:
              Nylon premium reforçada (diferencial: TRAVA NAS RODAS)
              <br> <br>
              <hr>
              Largura do Assento:
              52 cm
              <hr>
              Largura do Enconsto:
              53 cm
              <hr>
              Altura do Encosto:
              88cm
              <hr>
              Profundidade do Assento:
              48 cm

            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="elementalignis">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Elemental Ignis
              <hr>
              <hr>
              Estrutura:
              Aço
              <hr>
              Apoio braço:
              fixo com acolchoamento extra para maior durabilidade
              <hr>
              Rodas:
              Nylon fácil movimentação
              <hr>
              Peso suportado:
              140KG
              <hr>
              Costura:
              Industrial de qualidade na cor do elemento escolhido
              <hr>
              Cilindro:
              classe 4 com sistema anti explosão (confirmar)
              <hr>
              Função Balanço:
              inclina em até 12°
              <hr>
              Base:
              de aço / 5 pés com 10 raios
              <hr>
              Largura encosto:
              54 cm
              <hr>
              Largura assento:
              54 cm
              <hr>
              Profundidade assento:
              60cm
              <hr>
              Altura do encosto:
              76 cm
              <hr>
              Nome do elemento:
              Bordado no assento
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="elementalaer">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4  texxt2">Modelo:
              Elemental Aer
              <hr>
              <hr>
              Estrutura:
              Aço
              <hr>
              Apoio braço:
              fixo com acolchoamento extra para maior durabilidade
              <hr>
              Rodas:
              Nylon fácil movimentação
              <hr>
              Peso suportado:
              140KG
              <hr>
              Costura:
              Industrial de qualidade na cor do elemento escolhido
              <hr>
              Cilindro:
              classe 4 com sistema anti explosão (confirmar)
              <hr>
              Função Balanço:
              inclina em até 12°
              <hr>
              Base:
              de aço / 5 pés com 10 raios
              <hr>
              Largura encosto:
              54 cm
              <hr>
              Largura assento:
              54 cm
              <hr>
              Profundidade assento:
              60cm
              <hr>
              Altura do encosto:
              76 cm
              <hr>
              Nome do elemento:
              Bordado no assento
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="elementalterra">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4 texxt2">Modelo:
              Elemental Terra
              <hr>
              <hr>
              Estrutura:
              Aço
              <hr>
              Apoio braço:
              fixo com acolchoamento extra para maior durabilidade
              <hr>
              Rodas:
              Nylon fácil movimentação
              <hr>
              Peso suportado:
              140KG
              <hr>
              Costura:
              Industrial de qualidade na cor do elemento escolhido
              <hr>
              Cilindro:
              classe 4 com sistema anti explosão (confirmar)
              <hr>
              Função Balanço:
              inclina em até 12°
              <hr>
              Base:
              de aço / 5 pés com 10 raios
              <hr>
              Largura encosto:
              54 cm
              <hr>
              Largura assento:
              54 cm
              <hr>
              Profundidade assento:
              60cm
              <hr>
              Altura do encosto:
              76 cm
              <hr>
              Nome do elemento:
              Bordado no assento
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="elementalaqua">
        <q-card class="bg-black">
          <q-card-section>
          </q-card-section>

          <q-card-section class="q-pt-md">
            <h5 class="constrain text-grey-4 texxt2">Modelo:
              Elemental Acqua
              <hr>
              <hr>
              Estrutura:
              Aço
              <hr>
              Apoio braço:
              fixo com acolchoamento extra para maior durabilidade
              <hr>
              Rodas:
              Nylon fácil movimentação
              <hr>
              Peso suportado:
              140KG
              <hr>
              Costura:
              Industrial de qualidade na cor do elemento escolhido
              <hr>
              Cilindro:
              classe 4 com sistema anti explosão (confirmar)
              <hr>
              Função Balanço:
              inclina em até 12°
              <hr>
              Base:
              de aço / 5 pés com 10 raios
              <hr>
              Largura encosto:
              54 cm
              <hr>
              Largura assento:
              54 cm
              <hr>
              Profundidade assento:
              60cm
              <hr>
              Altura do encosto:
              76 cm
              <hr>
              Nome do elemento:
              Bordado no assento
            </h5>

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              dense
              class="text-white texxt"
              label="Fechar"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<style>
.my-card2 {
  width: 100%;
  max-width: 350px;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWhatsapp } from '@mdi/js'
export default {
  name: 'Elements',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slide1: 1,
      slide2: 1,
      slide3: 1,
      slide4: 1,
      slide5: 1,
      slide6: 1,
      inception: false,
      vedanemesis: false,
      arcanumnemesis: false,
      magnanemesis: false,
      vedaaqua: false,
      elementalaqua: false,
      magnaaqua: false,
      vedaaer: false,
      elementalaer: false,
      magnaaer: false,
      vedaterra: false,
      elementalterra: false,
      magnaterra: false,
      vedaignis: false,
      elementalignis: false,
      magnaignis: false,
      lux: false,
      fullWidth: false,
      name: null,
      phone: null,
      frame: false,
      email: null,
      cnpj: null,
      fabPos: [12, 11],
      draggingFab: false,
      path: mdiWhatsapp,
      name: null,
      email: '',
      accept: true,
      number: null,
    }
  },
  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    },
    moveFab (ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true
      this.fabPos = [
        this.fabPos[0] - ev.delta.x,
        this.fabPos[1] - ev.delta.y
      ]
    }
  },
  components: {
    SvgIcon
  }
}
</script>