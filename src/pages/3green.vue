<template>
  <q-page
    class="bg3g "
    style="overflow-x: hidden; overflow-y: hidden ;"
  >
    <form
      action="https://wa.me/554833746010"
      target="_blank"
    >
      <div class="q-pa-none q-gutter-md">
        <div class=" justify-between">

          <q-parallax
            style="width: 100%; height: 700px;"
            src="https://jmd.im/wp-content/uploads/2017/06/blackvii_thumbnail.jpg"
          >
            <template v-slot:content="scope">
              <div
                class="absolute column items-center"
                :style="{
            opacity: 1 + (0.5 - scope.percentScrolled) * 2,
            top: (scope.percentScrolled * 50) + '%',
            left: 0,
            right: 0
          }"
              >
                <img
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/logo-world-pc.png"
                  style="width: 50%; height: 50%;"
                >
              </div>
            </template>
          </q-parallax>
        </div>
      </div>

      <h1 class="texxt2 text-white bg-grey-5 text-center">ALL IN ONE</h1>
      <h1 class="texxt2 text-white bg-grey-5 text-center">LINHA WHITE</h1>
      <div class="produts bg-white center">
        <div class="q-pa-xl">
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
            class="bg-transparent large-screen-only"
          >
            <q-carousel-slide
              :name="1"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="aio = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>

              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.46.jpeg"
                />
                <div class="q-pa-md q-gutter-md">
                </div>
                <q-img
                  class="rounded-borders small-screen-only col-9 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.46.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-9 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.38.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="aio = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.38.jpeg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="aio = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>

              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders small-screen-only col-5 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.36.jpeg"
                />

                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.36.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="aio = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.54.jpeg"
                />

                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.29.54.jpeg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <h1 class="texxt2 text-white q-pa- large-screen-only text-center">ALL IN ONE </h1>
      <h1 class="texxt2 text-white q-pa- large-screen-only text-center">LINHA BLACK</h1>
      <h1 class="texxt2 text-white q-pa-md small-screen-only text-center">LINHA BLACK</h1>

      <div class="produts bg-white center">
        <div class="q-pa-xl">
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
            <q-carousel-slide
              :name="1"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="aiob = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.26.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.26.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="aiob = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.17.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.17.jpeg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="aiob = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.22.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-7 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.22.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="aiob = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.32.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-7 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-11.30.32.jpeg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <q-page-scroller
          reverse
          :scroll-offset="5"
          :offset="[10, 20]"
        >
          <q-btn
            fab
            icon="keyboard_arrow_down"
            class="text-black"
            color="white"
          />
        </q-page-scroller>
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
      </div>

      <h1 class="texxt2 text-red-6 q-pa-xl large-screen-only text-center">LINHA GAMER</h1>
      <h1 class="texxt2 text-red-6 q-pa-md small-screen-only text-center">LINHA GAMER</h1>

      <div class="produts bg-white center">
        <div class="q-pa-xl">
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
            <q-carousel-slide
              :name="1"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="gamerpc = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.12.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.12.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="gamerpc = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.30.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.30.jpeg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="gamerpc = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.46.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-7 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.35.46.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="gamerpc = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.09.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-7 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.09.jpeg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <h1 class="texxt2 text-white q-pa-md large-screen-only text-center">PC'S & PDVS </h1>
      <subtitle class="texxt2 text-h5 text-white large-screen-only text-center">3green & EasyPC </subtitle>

      <div class="produts bg-white center">
        <div class="q-pa-xl">
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
            <q-carousel-slide
              :name="1"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="pdvs = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.32.03.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.32.03.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="pdvs = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.34.19.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.34.19.jpeg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="pdvs = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-5 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.10.05.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.10.05.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="pdvs = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-5 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.09.34.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.09.34.jpeg"
                />
              </div>
            </q-carousel-slide>

            <q-carousel-slide
              :name="4"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="pdvs = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.08.31.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-7 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.08.31.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="pdvs = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.08.13.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.08.13.jpeg"
                />

              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="5"
              class="column no-wrap"
            >
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black text-h7 texxt"
                glossy
                @click="pdvs = true"
                color="white"
                icon="info"
              >
                configuracao
              </q-btn>
              <q-btn
                size="15px"
                push
                class="small-screen-only text-black texxt"
                glossy
                type="submit"
                color="white"
                icon="phone"
              >
                consultor
              </q-btn>
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.05.48.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-7 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.05.48.jpeg"
                />
                <q-btn
                  size="25px"
                  push
                  fab
                  class="large-screen-only text-white"
                  glossy
                  @click="pdvs = true"
                  color="black"
                  icon="info"
                />
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
                <q-img
                  class="rounded-borders large-screen-only col-4 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.36.55.jpeg"
                />
                <q-img
                  class="rounded-borders small-screen-only col-8 "
                  src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-20-at-11.36.55.jpeg"
                />

              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>

      </div>

      <div
        class="q-pa-xl"
        style="width: 50%;"
      >
        <form class="q-gutter-md">
          <q-input
            class="bg-grey-5"
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
            class="bg-grey-5"
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
            class="bg-grey-5"
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
            color="red-2"
            v-model="accept"
            class="text-red-5 texxt text-italic text-bold"
            label="Aceito receber emails promocionais e informativos do Grupo Arca"
          />
          <div>

            <q-btn
              label="Enviar"
              class="texxt2 text-black"
              type="submit"
              color="red-10"
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
                  :path="path"
                ></svg-icon>

              </q-btn>
            </form>
          </h4>
        </div>
        <div class="q-pa-md">
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
                  :path="path1"
                ></svg-icon>

              </q-btn>
            </form>
          </h4>
        </div>
      </div>
    </form>
    <q-dialog v-model="aio">
      <q-card class="bg-white">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <h5 class="constrain text-black  texxt2">
            ALL IN ONE 3GREEN SPEED
            <br>
            3Green | <br> Modelo: Speed <br> Tamanho da tela:<br> 21,5" ou 24" | <br> Memória DDR3 | <br> Kit mouse e teclado sem fio | <br> Processador J1800 | <br> Windows ou Linux | <br> Cor branca | <br> Memória de 4GB a 16GB | <br> HD de 320GB a 2TB ou SSD de 120GB a 480GB

          </h5>

        </q-card-section>

        <q-card-actions
          align="right"
          class="text-primary"
        >
          <q-btn
            flat
            dense
            class="text-black texxt"
            label="Fechar"
            v-close-popup
          />
          <form
            action="https://wa.me/554833746010"
            target="_blank"
          >
            <q-btn
              flat
              dense
              type="submit"
              class="text-black texxt"
              label="Consultor"
            />
          </form>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="gamerpc">
      <q-card class="bg-black">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <h5 class="constrain text-grey-4  texxt2">
            3green GAMER
            <br>
            <br> Processadores i3, i5 ou i7 de 7ª ou 8ª geração ou AMD | <br> Windows | | <br> Memória de DDR3 ou DDR4 at[e 64GB | <br> HD de 320GB a 2TB ou SSD de 120GB a 480GB | <br> Placa de Video | <br> RGB |

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
          <form
            action="https://wa.me/554833746010"
            target="_blank"
          >
            <q-btn
              flat
              dense
              type="submit"
              class="text-white texxt"
              label="Consultor"
            />
          </form>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="aiob">
      <q-card class="bg-black">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <h5 class="constrain text-grey-4  texxt2">
            ALL IN ONE UNIQUE 3GREEN
            <br>
            3Green | <br> Modelo: Unique <br> Tamanho da tela:<br> 24" | <br> Memória DDR3 | <br> Kit mouse e teclado sem fio | <br> Processadores <br> Intel i3 (2ª, 3ª, 7ª e 8ª Geração); i5 (2ª, 3ª, 7ª e 8ª Geração); i7 (2ª, 3ª, 7ª e 8ª Geração) | <br> Windows ou Linux | <br> Cor Preto ou Branco | <br> Memória de 4GB a 16GB | <br> HD de 320GB a 2TB ou SSD de 120GB a 480GB

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
          <form
            action="https://wa.me/554833746010"
            target="_blank"
          >
            <q-btn
              flat
              dense
              type="submit"
              class="text-white texxt"
              label="Consultor"
            />
          </form>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="pdvs">
      <q-card class="bg-black">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <h5 class="constrain text-grey-4  texxt2">
            3Green <br> Processador Dual core J1800 | <br> Memória 2GB, 4GB ou 8GB | <br> HD 320GB, 500GB ou 1TB ou SSD 60GB, 120GB, 240GB ou 480GB |<br> Opção com WINDOWS e com LINUX
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
          <form
            action="https://wa.me/554833746010"
            target="_blank"
          >
            <q-btn
              flat
              dense
              type="submit"
              class="text-white texxt"
              label="Consultor"
            />
          </form>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>

</template>

<style>
.my-card2 {
  width: 100%;
  max-width: 350px;
}
.bg3g {
  background-image: url("https://i.pinimg.com/originals/ec/78/2d/ec782d086d7148f6919b1dea9c91e606.png");
  background-size: 120%;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWhatsapp } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
export default {
  name: '3green',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slide: 1,
      slide2: 1,
      slide3: 1,
      slide4: 1,
      aio: false,
      aiob: false,
      gamerpc: false,
      pdvs: false,
      path: mdiWhatsapp,
      path1: mdiInstagram,
      path2: mdiFacebook,
      name: null,
      email: '',
      accept: true,
      number: null
    }
  },
  components: {
    SvgIcon
  }
}
</script>