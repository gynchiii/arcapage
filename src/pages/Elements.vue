<template>
  <q-page
    class=" bg-black"
    style="overflow-x: hidden ; overflow-y: hidden "
  >
    <form
      action="https://wa.me/554833746010"
      target="_blank"
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
        size="1px"
        :value="progress2"
        color="black"
        class="q-mt-sm"
      />
      <q-parallax
        :height="550"
        style="width: 100%; "
        src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/03/BANNER-PRODUTOS-ELEMENTS.jpg"
      >

      </q-parallax>
      <div class="constrain">
        <h1 class="texxt text-bold text-center large-screen-only text-white">Linha Magna</h1>
        <h4 class="texxt text-bold text-center small-screen-only text-white">Linha Magna</h4>
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
            control-text-color="purple"
            navigation
            control-color="black"
            navigation-icon="x"
            v-model="slide1"
          >
            <q-carousel-slide
              :name="1"
              class="absolute-center q-pa-md"
              style="width: 23vw;"
            >
              <q-img
                class="rounded-borders"
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A4466-1.png"
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
          <div class="justify-between q-pa-sm small-screen-only ">
            <q-btn
              size="25px"
              style="opacity: 0.8;"
              push
              class="text-white"
              glossy
              @click="magnaaqua = true"
              color="black"
            >
              <h7 class="texxt2 text-bold text-italic"> especs </h7>
            </q-btn>
            <q-btn
              size="25px"
              style="opacity: 0.8;"
              push
              class="text-white"
              glossy
              type="submit"
              color="green"
            >
              <h7 class="texxt2 text-bold text-italic"> Whatsapp </h7>
            </q-btn>
          </div>
          <q-carousel
            style="width: 100vw; height: 55vh;"
            swipeable
            class="small-screen-only "
            animated
            navigation-active-icon="check_circle"
            control-type="regular"
            arrows
            control-text-color="purple"
            navigation
            control-color="black"
            navigation-icon="x"
            v-model="slidecell1"
            infinite
          >
            <q-carousel-slide
              :name="1"
              class="absolute-center q-pa-md"
              style="width: 77vw;"
            >
              <q-img
                class="rounded-borders"
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A4466-1.png"
              />
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              class="absolute-center q-pa-md"
              style="width: 72vw;"
            >
              <q-img
                class="rounded-borders"
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/elements-362.png"
              />
            </q-carousel-slide>
            <q-carousel-slide
              :name="3"
              class="absolute-center q-pa-md"
              style="width: 79vw;"
            >
              <q-img
                class="rounded-borders"
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/1-2-1.png"
              />
            </q-carousel-slide>
            <q-carousel-slide
              :name="4"
              class="absolute-center"
              style="width: 107vw;"
            >
              <q-img
                class="rounded-borders"
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/MAGNA.png"
              />
            </q-carousel-slide>
            <q-carousel-slide
              :name="5"
              class="absolute-center q-pa-md"
              style="width: 63vw;"
            >
              <q-img
                class="rounded-borders"
                src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/ACQUA-FRENTE-ALMOFADA-PNG.png"
              />
            </q-carousel-slide>
          </q-carousel>
          <div class=" row items-start">
            <q-card
              class="bg-white large-screen-only"
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
        <h1 class="texxt text-bold text-center large-screen-only text-white">Linha Veda</h1>
        <h4 class="texxt text-bold text-center small-screen-only text-white">Linha Veda</h4>
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
            control-text-color="purple"
            navigation
            control-color="black"
            navigation-icon="x"
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
              class="bg-white large-screen-only"
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

              </q-card-section>

              <q-separator />

              <q-card-actions>

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
        <div class="justify-between q-pa-sm small-screen-only ">
          <q-btn
            size="25px"
            style="opacity: 0.8;"
            push
            class="text-white"
            glossy
            @click="magnaaqua = true"
            color="black"
          >
            <h7 class="texxt2 text-bold text-italic"> especs </h7>
          </q-btn>
          <q-btn
            size="25px"
            style="opacity: 0.8;"
            push
            class="text-white"
            glossy
            type="submit"
            color="green"
          >
            <h7 class="texxt2 text-bold text-italic"> Whatsapp </h7>
          </q-btn>
        </div>
        <q-carousel
          style="width: 100vw; height: 55vh;"
          swipeable
          class="small-screen-only "
          animated
          navigation-active-icon="check_circle"
          control-type="regular"
          arrows
          control-text-color="purple"
          navigation
          control-color="black"
          navigation-icon="x"
          v-model="slidecell1"
          infinite
        >
          <q-carousel-slide
            :name="1"
            class="absolute-center q-pa-md"
            style="width: 67vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Veda-nemesis-2-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            class="absolute-center q-pa-md"
            style="width: 61vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-TERRA-2.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="3"
            class="absolute-center q-pa-md"
            style="width: 60vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-IGNIS-2-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="4"
            class="absolute-center"
            style="width: 60vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-AER-2.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="5"
            class="absolute-center q-pa-md"
            style="width: 60vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/PNG-ACQUA-2.png"
            />
          </q-carousel-slide>
        </q-carousel>
      </form>
      <div class="constrain">
        <h1 class="texxt text-bold text-center large-screen-only text-white">Linha Elemental</h1>
        <h4 class="texxt text-bold text-center small-screen-only text-white">Linha Elemental</h4>
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
            control-text-color="purple"
            navigation
            control-color="black"
            navigation-icon="x"
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
              class="bg-white large-screen-only"
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

              </q-card-section>

              <q-separator />

              <q-card-actions>

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

        <div class="justify-between q-pa-sm small-screen-only ">
          <q-btn
            size="25px"
            style="opacity: 0.8;"
            push
            class="text-white"
            glossy
            @click="elementalaer = true"
            color="black"
          >
            <h7 class="texxt2 text-bold text-italic"> especs </h7>
          </q-btn>
          <q-btn
            size="25px"
            style="opacity: 0.8;"
            push
            class="text-white"
            glossy
            type="submit"
            color="green"
          >
            <h7 class="texxt2 text-bold text-italic"> Whatsapp </h7>
          </q-btn>
        </div>
        <q-carousel
          style="width: 100vw; height: 55vh;"
          swipeable
          class="small-screen-only "
          animated
          navigation-active-icon="check_circle"
          control-type="regular"
          arrows
          control-text-color="purple"
          navigation
          control-color="black"
          navigation-icon="x"
          v-model="slidecell1"
          infinite
        >
          <q-carousel-slide
            :name="1"
            class="absolute-center q-pa-md"
            style="width: 72vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/Elementa-Nemesis-nova.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            class="absolute-center q-pa-md"
            style="width: 70vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/verde-frente.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="3"
            class="absolute-center q-pa-md"
            style="width: 70vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/vermelho-frente-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="4"
            class="absolute-center"
            style="width: 70vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/branca-frente-1.png"
            />
          </q-carousel-slide>
          <q-carousel-slide
            :name="5"
            class="absolute-center q-pa-md"
            style="width: 70vw;"
          >
            <q-img
              class="rounded-borders"
              src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/azul-frente.png"
            />
          </q-carousel-slide>
        </q-carousel>
      </form>
      <h1 class="texxt text-bold text-center large-screen-only text-white">Linha Arcanum</h1>
      <h4 class="texxt text-bold small-screen-only text-center text-white">Linha Arcanum</h4>
      <div class="justify-between q-pa-sm small-screen-only ">
        <q-btn
          size="25px"
          style="opacity: 0.8;"
          push
          class="text-white"
          glossy
          @click="arcanumnemesis = true"
          color="black"
        >
          <h7 class="texxt2 text-bold text-italic"> especs </h7>
        </q-btn>
        <q-btn
          size="25px"
          style="opacity: 0.8;"
          push
          class="text-white"
          glossy
          type="submit"
          color="green"
        >
          <h7 class="texxt2 text-bold text-italic"> Whatsapp </h7>
        </q-btn>
      </div>
      <div class=" flex flex-center row ">

        <q-carousel
          style="width: 50%; height: 72vh;"
          swipeable
          class="large-screen-only"
          animated
          navigation-active-icon="check_circle"
          control-type="regular"
          arrows
          control-text-color="purple"
          navigation
          control-color="black"
          navigation-icon="x"
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
            class="bg-white large-screen-only"
            style="width: 100%; height: 72vh;"
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section class="q-pt-sm">
                <div class="text-overline">sobre</div>
                <div class="text-h4 texxt  q-mt-sm q-mb-xs">ARCANUM NEMESIS</div>
                <div
                  class=" text-h7  text-black"
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

            </q-card-section>

            <q-separator />

            <q-card-actions>

              <q-btn
                fab
                rounded
                push
                class="texxta2 bg-green text-white text-bold "
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
        style="width: 100vw; height: 55vh;"
        swipeable
        class="small-screen-only "
        animated
        navigation-active-icon="check_circle"
        control-type="regular"
        arrows
        control-text-color="purple"
        navigation
        control-color="black"
        navigation-icon="x"
        v-model="slidecell1"
        infinite
      >
        <q-carousel-slide
          :name="1"
          class="absolute-center q-pa-md"
          style="width: 78vw;"
        >
          <q-img
            class="rounded-borders"
            src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/cadeira-trevas-top-frente.png"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          class="absolute-center q-pa-md"
          style="width: 65vw;"
        >
          <q-img
            class="rounded-borders"
            src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/cadeira-trevas-top-lateral.png"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          class="absolute-center q-pa-md"
          style="width: 67vw;"
        >
          <q-img
            class="rounded-borders"
            src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/arcanum1.png"
          />
        </q-carousel-slide>
      </q-carousel>

      <br>
      <br>

      <q-parallax
        :height="550"
        class=""
      >
        <template v-slot:media>
          <img
            :height="1080"
            class="large-screen-only"
            src="https://media0.giphy.com/media/3o7TKVqpxDqwGsyzBe/source.gif"
          />
          <img
            :height="720"
            class="small-screen-only"
            src="https://media0.giphy.com/media/3o7TKVqpxDqwGsyzBe/source.gif"
          />
        </template>
        <h4 class="texxt small-screen-only text-center text-white constrain q-pa-xl text-bold"> SAIBA MAIS SOBRE NOSSO STORYTELLING </h4>
        <h2 class="texxt text-center large-screen-only text-white constrain q-pa-xl text-bold"> SAIBA MAIS SOBRE NOSSO STORYTELLING </h2>
      </q-parallax>
      <q-linear-progress
        reverse
        indeterminate
        :value="progress"
        color="purple"
        class="q-mt-sm"
      />
      <div class="q-pa-md flex flex-center bgc text-white">
        <q-list
          dark
          padding
          class=" bg-transparent large-screen-only q-pa-xl flex flex-center"
          style="max-width: 65%;"
        >
          <q-separator />
          <q-expansion-item
            icon="bookmark"
            popup
            label="Storetelling"
            header-class="text-black text-bold text-h4 texxt2"
          >
            <q-card
              style="opacity: 0.8;"
              class="bg-deep-orange-8
             text-h6 texxta"
            >
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
            header-class="text-black text-bold text-h4 texxt2"
          >
            <q-card
              style="opacity: 0.8;"
              class="bg-deep-orange-9
             text-h6 texxta"
            >
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
            header-class="text-black text-bold text-h4 texxt2"
          >
            <q-card class="bg-transparent">
              <q-card-section>
                <q-carousel
                  v-model="slidecell1"
                  animated
                  swipeable
                  control-color="black"
                  navigation-icon="radio_button_unchecked"
                  navigation
                  padding
                  arrows
                  height="100%"
                  class="bg-transparent text-black text-white shadow-1 rounded-borders"
                >
                  <q-carousel-slide
                    :name="1"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt text-italic bg-white text-bold">Kenneth</h5>
                    <q-img
                      class=""
                      style="max-width: 250px;"
                      src="https://elements.com.br/images/personagens/Kenneth-pe.png"
                    />
                    <br>
                    <subtitle class="texxt bg-white text-h6 text-italic text-bold"> Kenneth com seu entusiasmo move seus amigos em direção à objetivos comuns do grupo, rumo a desvendar fantasias e mistérios dentro deste incrível Universo, seu propósito é melhor de vida e não está disposto a desistir até alcança-lo. </subtitle>
                  </q-carousel-slide>
                  <q-carousel-slide
                    :name="2"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt bg-white text-italic text-bold">Alev</h5>
                    <q-img
                      class=""
                      style="max-width: 270px;"
                      src="https://elements.com.br/images/personagens/alev1.png"
                    />
                    <br>
                    <subtitle class="texxt bg-white text-h6 text-italic text-bold"> Alev não medirá esforços para acompanhar seus amigos e a defender todo o grupo, porém que fique claro, tudo isso ao preço de seus lampejos de mau humor e rabugice, mas que no fundo ali existe um grande coração. </subtitle>
                  </q-carousel-slide>
                  <q-carousel-slide
                    :name="3"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt bg-white text-italic text-bold">Nayana</h5>
                    <q-img
                      class=""
                      style="max-width: 225px;"
                      src="https://elements.com.br/images/personagens/nayna-3.png"
                    />
                    <br>
                    <subtitle class="texxt bg-white text-h6 text-italic text-bold"> Nayna é um misto de inteligência, carisma e zelo. Equilibrada e muito carismática nos faz refletir seriamente o valor de uma amizade verdadeira e o quanto das coisas que são importantes na vida fazem mais sentido tendo amigos ao nosso redor. </subtitle>
                  </q-carousel-slide>
                  <q-carousel-slide
                    :name="4"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt text-italic bg-white text-bold">Zip</h5>
                    <q-img
                      class=""
                      style="max-width: 250px;"
                      src="https://elements.com.br/images/personagens/zip.png"
                    />
                    <br>
                    <subtitle class="texxt text-h6 bg-white text-italic text-bold"> Zip acabou se tornando o ponto de conexão entre nosso protagonista e sua jornada. Depositário de uma mensagem holográfica, este pequeno robô reserva várias habilidades e capacidades para auxiliar o caminho de seus companheiros e amigos. </subtitle>
                  </q-carousel-slide>
                </q-carousel>
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-list>

        <q-list
          dark
          padding
          bordered
          class="rounded-borders small-screen-only flex flex-center"
          style="max-width: 100%;"
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
                  height="100%"
                  arrows
                  class="bg- text-black shadow-1 rounded-borders"
                >
                  <q-carousel-slide
                    :name="1"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt text-italic bg-white text-bold">Kenneth</h5>
                    <q-img
                      class=""
                      style="max-width: 150px;"
                      src="https://elements.com.br/images/personagens/Kenneth-pe.png"
                    />
                    <br>
                    <subtitle class="texxt bg-white text-h6 text-italic text-bold"> Kenneth com seu entusiasmo move seus amigos em direção à objetivos comuns do grupo, rumo a desvendar fantasias e mistérios dentro deste incrível Universo, seu propósito é melhor de vida e não está disposto a desistir até alcança-lo. </subtitle>
                  </q-carousel-slide>
                  <q-carousel-slide
                    :name="2"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt bg-white text-italic text-bold">Alev</h5>
                    <q-img
                      class=""
                      style="max-width: 170px;"
                      src="https://elements.com.br/images/personagens/alev1.png"
                    />
                    <br>
                    <subtitle class="texxt bg-white text-h6 text-italic text-bold"> Alev não medirá esforços para acompanhar seus amigos e a defender todo o grupo, porém que fique claro, tudo isso ao preço de seus lampejos de mau humor e rabugice, mas que no fundo ali existe um grande coração. </subtitle>
                  </q-carousel-slide>
                  <q-carousel-slide
                    :name="3"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt bg-white text-italic text-bold">Nayana</h5>
                    <q-img
                      class=""
                      style="max-width: 125px;"
                      src="https://elements.com.br/images/personagens/nayna-3.png"
                    />
                    <br>
                    <subtitle class="texxt bg-white text-h6 text-italic text-bold"> Nayna é um misto de inteligência, carisma e zelo. Equilibrada e muito carismática nos faz refletir seriamente o valor de uma amizade verdadeira e o quanto das coisas que são importantes na vida fazem mais sentido tendo amigos ao nosso redor. </subtitle>
                  </q-carousel-slide>
                  <q-carousel-slide
                    :name="4"
                    class="column no-wrap flex-center"
                  >
                    <h5 class="texxt text-italic bg-white text-bold">Zip</h5>
                    <q-img
                      class=""
                      style="max-width: 150px;"
                      src="https://elements.com.br/images/personagens/zip.png"
                    />
                    <br>
                    <subtitle class="texxt text-h6 bg-white text-italic text-bold"> Zip acabou se tornando o ponto de conexão entre nosso protagonista e sua jornada. Depositário de uma mensagem holográfica, este pequeno robô reserva várias habilidades e capacidades para auxiliar o caminho de seus companheiros e amigos. </subtitle>
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
        <div
          class="q-pa-xl q-mb-md bg-black flex flex-center"
          style="width: 100%;"
        >
          <form class="q-gutter-md">
            <q-input
              class="bg-purple-1"
              v-model="name"
              type="name"
              prefix="Nome:"
            >
              <template v-slot:prepend>
                <q-icon
                  class="q-pa-sm"
                  color="purple-7"
                  name="account_circle"
                />
              </template>
            </q-input>

            <q-input
              class="bg-purple-1"
              v-model="email"
              type="email"
              prefix="Email:"
            >
              <template v-slot:prepend>
                <q-icon
                  class="q-pa-sm"
                  color="purple-7"
                  name="mail"
                />
              </template>
            </q-input>

            <q-input
              class="bg-purple-1"
              v-model="number"
              type="number"
              prefix="CNPJ:"
            >
              <template v-slot:prepend>
                <q-icon
                  class="q-pa-sm"
                  color="purple-7"
                  name="work"
                />
              </template>
            </q-input>

            <q-toggle
              v-model="accept"
              color="green-5"
              class="text-white texxt"
              label="Aceito receber emails promocionais e informativos da Elements"
            />
            <div>

              <q-btn
                label="Enviar"
                class="texxt2"
                type="submit"
                color="purple-10"
              />
            </div>
          </form>
        </div>

        <div class="bg-dark text-white flex q-gutter-xl row flex flex-center ">
          <div class="">
            <h4 class="text-center text-italic text-bold texxt ">email</h4>
            <h5 class="text-center text-italic texxt ">arca@arca.com</h5>
            <h4 class="texxt text-center text-bold text-italic text-black ">
              <hr>
              <form
                target="_blank"
                action="https://www.facebook.com/Arca-Trading-1199174680238962"
              >
                <q-btn
                  color="blue-7"
                  fab
                  type="submit"
                  class=""
                >
                  <svg-icon
                    type="mdi"
                    :path="path2"
                  ></svg-icon>

                </q-btn>
              </form>
            </h4>
          </div>
          <div class="">
            <h4 class="text-center text-italic text-bold texxt ">fone</h4>
            <h5 class="text-center text-italic texxt ">(48) 3374-6010</h5>
            <h4 class="texxt text-center text-bold text-italic text-black ">
              <hr>
              <form
                action="https://wa.me/554833746010"
                target="_black"
              >
                <q-btn
                  color="green-7"
                  fab
                  type="submit"
                  class=""
                >
                  <svg-icon
                    type="mdi"
                    :path="path1"
                  ></svg-icon>

                </q-btn>
              </form>
            </h4>
          </div>
          <div class="">
            <h4 class="text-center text-italic text-bold texxt ">social</h4>
            <h5 class="text-center text-italic texxt ">estamos no insta</h5>
            <h4 class="texxt text-center text-bold text-italic text-black ">
              <hr>
              <form
                action="https://wa.me/554833746010"
                target="_black"
              >
                <q-btn
                  color="deep-orange-10"
                  fab
                  type="submit"
                  class=""
                >
                  <svg-icon
                    type="mdi"
                    :path="path"
                  ></svg-icon>

                </q-btn>
              </form>
            </h4>
          </div>
        </div>
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
              :path="path1"
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
    </form>
  </q-page>
</template>

<style>
.my-card2 {
  width: 100%;
  max-width: 350px;
}
.bgc {
  background-image: url("https://desafio.elementsgaming.com.br/wp-content/uploads/2020/07/egdesafio1-scaled.jpg");
  background-size: 100%;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWhatsapp } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
export default {
  name: 'Elements',
  data () {
    return {
      slide1: 1,
      slide2: 1,
      slide3: 1,
      slide4: 1,
      slide5: 1,
      slide6: 1,
      slidecell1: 1,
      slidecell2: 1,
      slidecell3: 1,
      slidecell4: 1,
      slidecell5: 1,
      slidecell6: 1,
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
      path: mdiInstagram,
      path1: mdiWhatsapp,
      path2: mdiFacebook,
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