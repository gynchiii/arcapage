<template>
  <q-page class="bgwp " style="overflow-x: hidden; overflow-y: hidden ;">
       <div class="q-pa-none q-gutter-md">
    <div class=" justify-between">

    <q-parallax
    style="width: 100%;"
     src="https://wallpaperaccess.com/full/358836.jpg"
    >
      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 1 + (0.5 - scope.percentScrolled) * 2.5,
            top: (scope.percentScrolled * 25) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/HQ-LOGO-PNG.png" style="width: 250px; height: 200px">
          <div class="text-h3 texxt q-pa-xl text-black text-center">Monitores & TV's</div>
          <div class="text-h6 text-grey-3 text-center">
       <q-spinner-puff
       class="absolute-center"
          color="grey-10"
          style="opacity: 0.4;"
          size="35em"
        />
          </div>
        </div>
      </template>
    </q-parallax>
    </div>
  </div>
        <h6 class="texxt text-black q-pa-xl text-bold text-center"> o cliente vai confiar <br> quando ele ver que consegue <br> enxergar o produto com CLAREZA </h6>
  <h1 class="texxt large-screen-only text-black text-center">MONITORES GAMER</h1>
  <h3 class="texxt small-screen-only text-black text-center">MONITORES GAMER</h3>
    <form action="https://wa.me/554833746010" target="_blank">
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
        <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="monitorgamer = true"
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
          <q-img class="rounded-borders large-screen-only col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.16.57.jpeg" />
          <q-img class="rounded-borders small-screen-only col-7 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.16.57.jpeg" />
         <q-btn
      size="25px"
      push
      fab
      class="large-screen-only text-white"
      glossy
       @click="monitorgamer = true"
      color="black"
      icon="info"
    />
       <q-btn type="submit" fab class="text-black" color="green-6"  >
            <svg-icon type="mdi" :path="path"></svg-icon>
            </q-btn>
          <q-img class="rounded-borders large-screen-only col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-10.44.29-1.jpeg" />
          <q-img class="rounded-borders small-screen-only col-7 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-10.44.29-1.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
       <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="monitorgamer = true"
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
          <q-img class="rounded-borders large-screen-only col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.28.jpeg" />
          <q-img class="rounded-borders small-screen-only col-7 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.28.jpeg" />
     <q-btn
      size="25px"
      push
      fab
      class="large-screen-only text-white"
      glossy
       @click="monitorgamer = true"
      color="black"
      icon="info"
    />
       <q-btn type="submit" fab class="text-black" color="green-6"  >
            <svg-icon type="mdi" :path="path"></svg-icon>
            </q-btn>
          <q-img class="rounded-borders large-screen-only col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.09.jpeg" />
          <q-img class="rounded-borders small-screen-only col-8 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.12.09.jpeg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </div>

  <h1 class="texxt text-black q-pa-xl large-screen-only text-center">Monitores</h1>
  <h4 class="texxt text-black q-pa-md small-screen-only text-center">Monitores</h4>

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
        <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="monitorgamer = true"
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
          <q-img class="rounded-borders large-screen-only col-5 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0014_27.png" />
          <q-img class="rounded-borders small-screen-only col-7 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0014_27.png" />
         <q-btn
      size="25px"
      push
      fab
      class="large-screen-only text-white"
      glossy
       @click="monitorgamer = true"
      color="black"
      icon="info"
    />
       <q-btn type="submit" fab class="text-black" color="green-6"  >
            <svg-icon type="mdi" :path="path"></svg-icon>
            </q-btn>
          <q-img class="rounded-borders large-screen-only col-5 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0007_24.png" />
          <q-img class="rounded-borders small-screen-only col-7 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0007_24.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
       <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="monitorgamer = true"
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
          <q-img class="rounded-borders large-screen-only col-5 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0009_21.5G-gamer-preto.png" />
          <q-img class="rounded-borders small-screen-only col-7 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0009_21.5G-gamer-preto.png" />
     <q-btn
      size="25px"
      push
      fab
      class="large-screen-only text-white"
      glossy
       @click="monitorgamer = true"
      color="black"
      icon="info"
    />
       <q-btn type="submit" fab class="text-black" color="green-6"  >
            <svg-icon type="mdi" :path="path"></svg-icon>
            </q-btn>
          <q-img class="rounded-borders large-screen-only col-5 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0003_19-preto.png" />
          <q-img class="rounded-borders small-screen-only col-8 " src="http://hqscreen.com.br/wp-content/uploads/2019/06/GaleriasMonitores_0000s_0003_19-preto.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </div>
        
  <h1 class="texxt text-white q-pa-xl large-screen-only text-center">TELEVISORES</h1>
  <h4 class="texxt text-white q-pa-md small-screen-only text-center">TELEVISORES</h4>
 
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
      <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="tvs = true"
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
          <q-img class="rounded-borders large-screen-only   col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.14.12.jpeg" />
          <q-img class="rounded-borders small-screen-only   col-8 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.14.12.jpeg" />
     <q-btn
      size="25px"
      push
      fab
      class="large-screen-only text-white"
      glossy
       @click="tvs = true"
      color="black"
      icon="info"
    />
       <q-btn type="submit" fab class="text-black" color="green-6"  >
            <svg-icon type="mdi" :path="path"></svg-icon>
            </q-btn>
          <q-img class="rounded-borders large-screen-only col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.14.17.jpeg" />
          <q-img class="rounded-borders small-screen-only col-8 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.14.17.jpeg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="tvs = true"
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
          <q-img class="rounded-borders large-screen-only col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.13.42.jpeg" />
          <q-img class="rounded-borders small-screen-only col-8 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.13.42.jpeg" />
     <q-btn
      size="25px"
      push
      fab
      class="large-screen-only text-white"
      glossy
       @click="tvs = true"
      color="black"
      icon="info"
    />
       <q-btn type="submit" fab class="text-black" color="green-6"  >
            <svg-icon type="mdi" :path="path"></svg-icon>
            </q-btn>
          <q-img class="rounded-borders large-screen-only col-4 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.13.34.jpeg" />
          <q-img class="rounded-borders small-screen-only col-8 " src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-18.13.34.jpeg" />
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
  <div>  
           <h2 class="text-center large-screen-only text-white texxta ">fone</h2>
           <h4 class="text-center small-screen-only text-white texxta ">fone</h4>
           <h3 class="text-center large-screen-only text-white texxta ">(48) 3374-6010</h3>
           <h4 class="text-center small-screen-only text-white texxta ">(48) 3374-6010</h4>
           <hr>
           <h3 class="text-center large-screen-only text-white texxta ">Rua Aniceto Zacchi, 50, Sala 8-9

Palhoça - SC 6</h3>
<h5 class="text-center small-screen-only text-white texxta ">Rua Aniceto Zacchi, 50, Sala 8-9

Palhoça - SC 6</h5>

         </div>
    </form>  
       <q-dialog v-model="monitorgamer">
      <q-card class="bg-white">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
              <h6 class="constrain text-bold text-black  texxt2">
                <hr>
MONITOR HQ 19" |  MONITOR HQ 21,5" |
MONITOR HQ CURVO 24" | HQ MONITOR FLAT 27" | HQ MONITOR CURVO 27"
<hr>
<br>
 MONITOR HQ 19"
 <br>
Características:
<br>
Marca HQ | Modelo: 20HQ-LED | Tamanho da tela: 19" Widescreen: sim Características Gerais: HQ | Tipo de Tela LED | Conexão HDMI: sim Pixel pitch: 0,255 H x 0,55 V | Resolução máxima: 1366X768 | Tempo de resposta: 5ms | Brilho: 500cd/m² | Contraste dinâmico: 8000:1 | Ângulo de visão: (H x V) 176º x176º | Cor predominante: Preto | Tensão/Voltagem: bivolt automático
<br>
<hr>
<br>
MONITOR HQ 21,5"
 <br>
Características:
<br>
Marca: HQ | Modelo: 20HQ-LED | Tamanho da Tela: 21.5'' | Resolução Máxima: 1920x1080 | Contraste: 10000:1 | Conexões: HDMI e VGA | Tempo de Resposta Monitor: 2ms | Ângulo de Visão: 176º x 176º | Brilho: 500cd/m² | Voltagem: bivolt | Pixel Pitch: 0.255 V x 0.55 V  | Tipo de Monitor: LED Widescreen | Fabricante: HQ Screen
<br>
<br>
<hr>
MONITOR HQ 24" CURVO
 <br>
Características:
<br>
Marca: HQ | Modelo: 24GHQ-LED | Tamanho do Display: | 23.6″ curvo | Brilho: 300cd/m2 |  Resolução: | 1920*1080 144HZ | Formato Tela: 16:9 | Relação de contraste dinâmico: 500000:1 | Tempo de resposta:  1ms | Taxa de atualização: max 144HZ | Cor de Exibição: | 16.7M | Sinal de Entrada: HDMI+DP+EARPHONE+USB | Display port: 1.2A with Adaptive Sync | Entrada de Fone | Entrada de Audio: HDMI WITH DP | Alto-falante: embutido | Faixa de tensão de entrada: AC100-240 50/60HZ | Fonte de Energia: Outer Power adapter OUTPUT12V/4A | Consumo: MAX 35W (Desligado: - 
  0.5W) | Peso: 3KG | Altura (mm): 426 | Largura (mm): 540 | Profundidade (mm): 9 | Temperatura para uso: 0-50°C | Umidade para uso: 20%-60%
<br>
<br>
<hr>
MONITOR HQ 27" FLAT
 <br>
Características:
<br>
Marca: HQ | Modelo: Monitor HQ 27 Flat | Tamanho da exibição: 27 inch+adjustable base | 
Brilho: 300cd/m2 | Proporção da tela: 16:9 | Relação de contraste dinâmico: 500000:1 | Velocidade de resposta: 1ms | Taxa de atualização: max 165HZ | Cor de exibição: 16.7M | Sinal de entrada: HDMI+DP+EARPHONE+USB | VGA (D-Sub 15 pinos) no: | HDMI1.4, HDMI2.0
Display port 1.2A: com Adaptive Sync | Entrada de áudio: WITH HDMI WITH DP | Saída de fone de ouvido: Sim | Alto-falante embutido: Sim | Faixa de tensão de entrada: AC100-240 50/60HZ | Fonte de energia: Outer Power adapter OUTPUT12V/5A | Consumo: Max 45W
<br>
<br>
<hr>
MONITOR HQ 27" CURVO
 <br>
Características:
<br>
Marca: HQ | Modelo: Monitor HQ 27 Curvo | Proporção da tela: 16:9 | Relação de contraste dinâmico: 500000:1 |  Velocidade de resposta: 1ms | Taxa de atualização: max 165HZ | Cor de exibição: 16.7M | Sinal de entrada: HDMI+DP+EARPHONE+USB VGA (D-Sub 15 pinos) no: HDMI1.4, HDMI2.0 | Display port 1.2A: com Adaptive Sync | Entrada de áudio: WITH HDMI WITH DP | Saída de fone de ouvido: Sim | Alto-falante embutido: Sim | Faixa de tensão de entrada:
AC100-240 50/60HZ | Fonte de energia: Outer Power adapter OUTPUT12V/5A

    </h6>
   
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-black texxt" label="Fechar" v-close-popup />
       <form action="https://wa.me/554833746010" target="_blank">
          <q-btn flat dense type="submit" class="text-black texxt" label="Consultor" />
        </form>
        </q-card-actions>
      </q-card>
    </q-dialog>
       <q-dialog v-model="tvs">
      <q-card class="bg-white">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
              <h6 class="constrain text-black  texxt2">
HQ TV 24" | HQ TV 32" | HQ TV 32" SMART | HQ TV 39" | HQ TV 39" SMART
<br>
<hr>
<br>
HQ TV 24
<br>
<br>
 Características:
 <br>
 <br>

| Resolução: 1366 x 768 | Tempo de resposta: 5,0 ms | Ângulo de Visão: 165(H) x 165(V) | Brilho: 500 cd/m² | Taxa de Contraste: 50.000:1 | Frequência da Tela: 60Hz | Potência do Alto-Falante: 10W (5Wrms x 2) | Formato Tela: 16:9 | Sistema de cores: PAL-M, PAL-N, NTSC | Furação Vesa

​<br>
<br>
Conexões:
<br>

1 entrada HDMI | Entrada RF para TV aberta Digital e TV à cabo | 1 entrada USB Av In Vídeo Componente: (y,Pb, Pr) + Áudio  VGA | Saída para fone de ouvido | Disponível apenas para transmissões em ISDB-T (TV Digital)

​

​<br>
<br>
Acessórios:
<br>
Controle remoto | Manual do usuário e Base |

 <br>
<br>
Tensão:

Bivolt (110/220V) | Potência: 80w | Consumo: +1Kwh"
<br>
<hr>
TV HQ 32
<br>
<br>
 Características:
<br>
<br>
| Resolução: 1366 x 768 | Tempo de resposta: 5,0 ms | Ângulo de Visão: 178(H) x 178(V) | Brilho: 500 cd/m² | Taxa de Contraste: 50.000:1 | Frequência da Tela: 60Hz | Potência do Alto-Falante: 10W (5Wrms x 2) | Formato Tela: 16:9 | Sistema de cores: PAL-M, PAL-N, NTSC | Furação Vesa

​<br>
<br>
Conexões:
<br>

3 entradas HDMI | Entrada RF para TV aberta Digital e TV à cabo | 2 entradas USB Av In Vídeo Componente: (y,Pb, Pr) + Áudio  VGA | Saída para fone de ouvido | Disponível apenas para transmissões em ISDB-T (TV Digital)

​<br>
<br>
Acessórios:
<br>
Controle remoto | Manual do usuário e Base

 <br>
<br>
Tensão:

Bivolt (110/220V) | Consumo: 45w"
<br>
<hr>
<br>SMART TV HQ 32" LED
<br>
<br>
 Características:
 <br>
 <br>

| Resolução: 1366 x 768 | Tempo de resposta: 5,0 ms | Ângulo de Visão: 178(H) x 178(V) | Brilho: 500 cd/m² | Taxa de Contraste: 50.000:1 | Frequência da Tela: 60Hz | Potência do Alto-Falante: 10W (5Wrms x 2) | Formato Tela: 16:9 | Sistema de cores: PAL-M, PAL-N, NTSC | Furação Vesa

​<br>
<br>
Conexões:
<br>

3 entradas HDMI | Entrada RF para TV aberta Digital e TV à cabo | 2 entradas USB Av In Vídeo Componente: (y,Pb, Pr) + Áudio  VGA | Saída para fone de ouvido | Disponível apenas para transmissões em ISDB-T (TV Digital)

​<br>
<br>
Acessórios:
<br>
Controle remoto | Manual do usuário e Base

 <br>
<br>
Tensão:

Bivolt (110/220V) | Consumo: 45w"

<hr>
<br>
<br>TV HQ 39"
<br>
<br>
 Características:
 <br>
 <br>

| Resolução: 1366 x 768 | Tempo de resposta: 5,0 ms | Ângulo de Visão: 178(H) x 178(V) | Brilho: 500 cd/m² | Taxa de Contraste: 50.000:1 | Frequência da Tela: 60Hz | Potência do Alto-Falante: 10W (5Wrms x 2) | Formato Tela: 16:9 | Sistema de cores: PAL-M, PAL-N, NTSC | Furação Vesa

​<br>
<br>
Conexões:
<br>

3 entradas HDMI | Entrada RF para TV aberta Digital e TV à cabo | 2 entradas USB Av In Vídeo Componente: (y,Pb, Pr) + Áudio  VGA | Saída para fone de ouvido | Disponível apenas para transmissões em ISDB-T (TV Digital)



​<br>
<br>
Acessórios:
<br>
Controle remoto | Manual do usuário e Base

 <br>
<br>
Tensão:

Bivolt (110/220V) | Consumo: 45w"

<hr>
<br>
<br>SMART TV HQ 39"
<br>
<br>
 Características:
 <br>
 <br>

TV LED 39” | Resolução: 1366 x 768 | Tempo de resposta: 5,0 ms | Ângulo de Visão: 178(H) x 178(V) | Brilho: 500 cd/m² | Taxa de Contraste: 50.000:1 | Frequência da Tela: 60Hz | Potência do Alto-Falante: 10W (5Wrms x 2) | Formato Tela: 16:9 | Sistema de cores: PAL-M, PAL-N, NTSC | Furação Vesa

​<br>
<br>
Conexões:
<br>

3 entradas HDMI | Entrada RF para TV aberta Digital e TV à cabo | 2 entradas USB Av In Vídeo Componente: (y,Pb, Pr) + Áudio  VGA | Saída para fone de ouvido | Disponível apenas para transmissões em ISDB-T (TV Digital)



​<br>
<br>
Acessórios:
<br>
Controle remoto | Manual do usuário e Base

 <br>
<br>
Tensão:

Bivolt (110/220V) | Consumo: 45w"

<hr>
<br>

    </h6>
   
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-black texxt" label="Fechar" v-close-popup />
       <form action="https://wa.me/554833746010" target="_blank">
          <q-btn flat dense type="submit" class="text-black texxt" label="Consultor" />
        </form>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono&display=swap');
.texxtb{
  font-family: 'Space Mono', monospace;
}
.my-card2{
  width: 100%;
  max-width: 350px;
}
.bgwp{  
  background-image: url("https://wallpaperaccess.com/full/675049.jpg");
  background-size: 200%;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWhatsapp } from '@mdi/js'
export default {
  name: 'Hq',
  components: {
        SvgIcon
    },
   data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slide:1,
      slide2:1,
      slide3:1,
      monitorgamer: false,
      tvs: false,
      path: mdiWhatsapp
    }
  }
}
</script>
