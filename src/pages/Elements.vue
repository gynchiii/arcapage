<template>
  <q-page class=" bgel" style="overflow-x: hidden ; overflow-y: hidden ">
       <div class="q-pa-none q-gutter-md">
    <div class="row justify-between constrainbig">
    <q-parallax class="large-screen-only"  :height="950">
      <template v-slot:media>
        <video width="1080"   autoplay muted >
          <source type="video/mp4" src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/CADEIRA-4.mp4?_=0">
        </video>
      </template>
    </q-parallax>

    <q-parallax
    style="width: 105vw; height: 105vh; "
     src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/IMG_2243-scaled.jpg"
    >
    <h1 class="texxt large-screen-only text-center text-bold text-black "> E L E M E N T S  </h1>
    <h3 class="texxt small-screen-only text-center text-bold text-white "> E L E M E N T S  </h3>
    <subtitle class="text-h6 small-screen-only text-grey-5 text-white text-center texxt2"> porque vender uma cadeira ? <br> quando se pode vender um trono ! </subtitle>
    <subtitle class="text-h5 large-screen-only text-white text-white text-center texxt2"> porque vender uma cadeira ? <br> quando se pode vender um trono ! </subtitle>
    </q-parallax>
    </div>
  </div>
    <q-parallax class="small-screen-only q-pa-none"  :height="550">
      <template v-slot:media>
        <video width="720"   autoplay loop muted>
          <source type="video/mp4" src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/CADEIRA-4.mp4">
        </video>
      </template>
    </q-parallax>
      
  <div class="flex">
      <q-parallax
         class="large-screen-only"
    style="width: 60%; height: 85vh; ;"
     src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/IMG_2398-scaled.jpg"
    >
      <div class="flex flex-center">
      <div class="q-pa-sm">
      <form  action="https://wa.me/554833746010" target="_blank">
    <subtitle class="texxt2 text-grey-1 q-pa-sm text-h6  text-bold"> consultor  </subtitle>
      <q-btn
      size="60px"
      round
      push
      class="frame text-grey-10"
      type="submit"
      color="green-4"
      icon="local_mall"
    />
    </form>
      </div>
  </div>
    </q-parallax>
     <q-parallax
         class="large-screen-only"
    style="width: 40%; height: 85vh; ;"
     src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/concept-storie.jpg"
    >
    
      
 
    </q-parallax>
  </div>
        <h2 class="small-screen-only text-black bg-blue-8 text-center texxt"> ela chegou .</h2>
     <q-parallax
     class="small-screen-only"
     style="width: 120vw; height: 105vh; "
     src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/concept-storie.jpg"
    >
      <div class="flex flex-center">
    <subtitle class="texxt2 text-grey-1 q-pa-sm text-h6  text-bold"> especs  </subtitle>
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

            <q-parallax
    style="width: 100vw; height: 90vh; "
     src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/IMG_2093-scaled.jpg"
    >
    
  <div class="text">
    <h1 class="texxt text-white large-screen-only text-center">Produtos</h1>
    <h2 class="texxt text-white small-screen-only text-center">Produtos</h2>
  </div>
    </q-parallax>

   <h1 class="texxt2 bg-white text-center large-screen-only text-black">Linha. Nemesis</h1>
   <h2 class="texxt2 bg-white text-center small-screen-only text-black">Linha. Nemesis</h2>
     <div class="flex flex-center">
     <q-dialog v-model="lux">
      <q-card class="bg-black">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
              <h5 class="constrain text-grey-4 texxt2">
                TOP SECRET <br> <hr>
                TOP SECRET <br> <hr>
                TOP SECRET <br> <hr>
                TOP SECRET <br> <hr>
                TOP SECRET <br> <hr>
                TOP SECRET <br> <hr>
                TOP SECRET <br> <hr>
                TOP SECRET <br> <hr>

    </h5>
   
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <br> <hr>
Material externo:
Suede e couro sintético PU qualidade premium
<hr>
Material interno:
Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
<br> <br> <hr>
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
<br> <hr>
Medidas:
70 x 61 x 123 - 131 cm (comprimento x largura x altura)
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <br> <hr>
Material externo:
Suede e couro sintético PU qualidade premium
<hr>
Material interno:
Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
<br> <br> <hr>
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
<br> <hr>
Medidas:
70 x 61 x 123 - 131 cm (comprimento x largura x altura)
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <br> <hr>
Material externo:
Suede e couro sintético PU qualidade premium
<hr>
Material interno:
Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
<br> <br> <hr>
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
<br> <hr>
Medidas:
70 x 61 x 123 - 131 cm (comprimento x largura x altura)
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <br> <hr>
Material externo:
Suede e couro sintético PU qualidade premium
<hr>
Material interno:
Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
<br> <br> <hr>
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
<br> <hr>
Medidas:
70 x 61 x 123 - 131 cm (comprimento x largura x altura)
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <br> <hr>
Material externo:
Suede e couro sintético PU qualidade premium
<hr>
Material interno:
Espuma injetada de extrema densidade: encosto 1200g - assento 1300g (alta durabilidade)
<br> <br> <hr>
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
<br> <hr>
Medidas:
70 x 61 x 123 - 131 cm (comprimento x largura x altura)
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
Cor:
Preto
<br> <hr> <br>
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
<br> <hr>
Roda:
Material: nylon | Número de raios: 5 | Diâmetro: 6cm
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
Cor:
Branco/Preto
<br> <hr> <br>
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
<br> <hr>
Roda:
Material: nylon | Número de raios: 5 | Diâmetro: 6cm
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
Cor:
Preto/Azul
<br> <hr> <br>
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
<br> <hr>
Roda:
Material: nylon | Número de raios: 5 | Diâmetro: 6cm
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
Cor:
Preto/Verde
<br> <hr> <br>
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
<br> <hr>
Roda:
Material: nylon | Número de raios: 5 | Diâmetro: 6cm
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
Cor:
Preto/Vermelho
<br> <hr> <br>
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
<br> <hr>
Roda:
Material: nylon | Número de raios: 5 | Diâmetro: 6cm
<br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<br><br> <hr> <hr>
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
Elemento (nemesis)  na parte superior e o nome nemesis bordado no assento - detalhes em suede
<br> <br> <hr>
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
<br> <br> <hr>  
Base:
Alumínio
<hr>
Suporta:
150kg
<hr>
Rodas:
Nylon premium reforçada  (diferencial: TRAVA NAS RODAS)
<br> <br> <hr>
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
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
classe 4 com sistema anti explosão  (confirmar)
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
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
classe 4 com sistema anti explosão  (confirmar)
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
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
classe 4 com sistema anti explosão  (confirmar)
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
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
<hr> <hr>
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
classe 4 com sistema anti explosão  (confirmar)
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

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
    <form action="https://wa.me/554833746010" target="_blank">
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
      <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="magnanemesis = true"
      color="white"
      icon="info"
    >
    sobre
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
       <div class="q-pa-none large-screen-only q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="magnanemesis = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-md texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="absolute-center" style="width: 28vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51968185/454bd00ced.jpg" >
    <q-btn
      size="15px"
      push
      class="small-screen-only text-black text-h7 texxt"
      glossy
       @click="arcanumnemesis = true"
      color="white"
      icon="info"
    >
    sobre
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
    <div class="q-pa-none large-screen-only q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="arcanumnemesis = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-md texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="absolute-center" style="width: 28vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51967231/d75d7c9297.jpg" >
        <div class="q-pa-none large-screen-only q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      @click="vedanemesis = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-md texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
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
         <div class="q-pa-md q-gutter-md">

         </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51968185/454bd00ced.jpg" >
     <div class="q-pa-md large-screen-only q-gutter-md">
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; left: -5%;"
      push
       @click="arcanumnemesis = true"
      class="text-white"
      glossy
     color="black"
      icon="info"
    >
    <subtitle class="q-pa-md texxt text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    />
     </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51967231/d75d7c9297.jpg" >
           <div class="q-pa-md large-screen-only q-gutter-md">
           <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; left: -5%;"
      push
      class="text-white"
      glossy
       @click="vedanemesis = true"
      color="black"
      icon="info"
    >
    <subtitle class="q-pa-md texxt text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    />
           </div>
      </q-carousel-slide>
    </q-carousel>
    </form>
       <h1 class="texxt text-center large-screen-only text-green">Linha. Terra</h1>
       <h2 class="texxt text-center small-screen-only text-green">Linha. Terra</h2>
     
      <form action="https://wa.me/554833746010" target="_blank">
         <q-carousel
      style="width: 100vw; height: 74vh;"
      swipeable
      class="large-screen-only bg-grey-4"
      animated
      autoplay="autoplay"
      v-model="slide2"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center" style="width: 25vw; top: 50%;  height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/74381603/afe1082514.jpg" >
        <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
      push
      style="opacity: 0.8; top: 05%; right: -100%;"
      class="text-white"
      glossy
       @click="magnaterra = true"
     color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
       <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-md texxt2 text-white ">consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="absolute-center" style="width: 25vw; top: 48%; height: 50vh;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A0107-scaled.jpg" >
        <div class="q-pa-none flex q-gutter-md">
          <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="vedaterra = true"
      color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
       <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-md texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 20vw; height: 20vh;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/verde-frente.png" >
        <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="elementalterra = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-md texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
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
      <q-carousel-slide :name="2" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A0107-scaled.jpg" >
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 80vw; height: 50vh;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51466240/7481379319.jpg" >
      </q-carousel-slide>
    </q-carousel>
      </form>
    <h1 class="texxt large-screen-only text-center text-blue">Linha. Acqua</h1>
    <h2 class="texxt small-screen-only text-center text-blue">Linha. Acqua</h2>
    <form action="https://wa.me/554833746010" target="_blank">
         <q-carousel
      style="width: 100vw; height: 74vh;"
      swipeable
      class="large-screen-only bg-grey-3"
      autoplay="autoplay"
      animated
      v-model="slide3"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center q-ma-md" style="width: 19vw; height: 30vh;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/ACQUA-FRENTE-ALMOFADA-PNG.png" >
           <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="magnaaqua = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-sm texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 25vw; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A9859-1.jpg" >
           <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="vedaaqua = true"
    color="black"
    >
    <subtitle class="q-pa-md texxta text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-sm texxta text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 20%; height: 20vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/azul-frente.png" >
           <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="elementalaqua = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-sm texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
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
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 80vw; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A9859-1.jpg" >
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
      <q-carousel-slide :name="4" class="absolute-center" style="width: 80vw; height: 30vw;" img-src="https://cdn.awsli.com.br/1000x1000/1329/1329500/produto/51465829/f8716dc464.jpg" >
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
      <h1 class="texxt large-screen-only text-center text-red">Linha. Ignis</h1>
    <h2 class="texxt small-screen-only text-center text-red">Linha. Ignis</h2>
      <div class="flex flex-center">
  </div>
    <form action="https://wa.me/554833746010" target="_blank">
         <q-carousel
      style="width: 100vw; height: 74vh;"
      swipeable
      class="large-screen-only bg-grey-3"
      autoplay="autoplay"
      animated
      v-model="slide4"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center q-ma-md" style="width: 25%; height: 20vh; top: 45%;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/1-2-1-2.png" >
            <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="magnaignis = true"
    color="black"
    >
    <subtitle class="q-pa-sm texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-xs texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 25%; height: 20vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A9786-scaled.jpg" >
             <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="vedaignis = true"
    color="black"
    >
    <subtitle class="q-pa-sm texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-xs texxt2 text-white ">consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 21%; top: 50%; height: 15vh;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/vermelho-frente.png" >
          <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="elementalignis = true"
    color="black"
    >
    <subtitle class="q-pa-none texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-none texxt2 text-white ">consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
     <q-carousel
      style="width: 100vw; height: 80vh;"
      swipeable
      class="small-screen-only "
      autoplay="autoplay"
      animated
      v-model="slide4"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center q-ma-md" style="top: 45%; width: 100%; height: 35vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/1-2-1-2.png" >
        <q-btn
      size="25px"
      rounded
      push
      class="text-white"
      style="opacity: 0.8;"
      glossy
       @click="magnaignis = true"
      color="black"
      icon="info"
    />
      </q-carousel-slide>
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 70vw; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A9786-scaled.jpg" >
        <q-btn
      size="25px"
      rounded
      push
      class="text-white"
      style="opacity: 0.8;"
      glossy
       @click="vedaignis = true"
      color="black"
      icon="info"
    />
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 75vw; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/vermelho-frente.png" >
         <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; left: -15%;"
      push
      class="text-white"
      glossy
       @click="elementalignis = true"
      color="black"
      icon="info"
    />
      </q-carousel-slide>
    </q-carousel>
    </form>
      <h1 class="texxt large-screen-only text-center text-white">Linha. Aer</h1>
    <h2 class="texxt small-screen-only text-center text-white">Linha. Aer</h2>
     <form action="https://wa.me/554833746010" target="_blank">
         <q-carousel
      style="width: 100vw; height: 74vh;"
      swipeable
      class="large-screen-only bg-grey-2"
      autoplay="autoplay"
      animated
      v-model="slide5"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center q-ma-md" style="width: 27vw; top: 45%; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/MAGNA.png" >
           <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="magnaaer = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-sm texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 25vw; height: 25vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A9879-scaled.jpg" >
            <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="vedaaer = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-sm texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 20vw; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/branca-frente.png" >
            <div class="q-pa-none q-gutter-md">
           <q-btn
      size="25px"
      rounded
     style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
       @click="elementalaer = true"
    color="black"
    >
    <subtitle class="q-pa-md texxt2 text-white "> especificações </subtitle>
          </q-btn>
      <q-btn
      size="25px"
      rounded
      style="opacity: 0.8; top: 05%; right: -100%;"
      push
      class="text-white"
      glossy
      type="submit"
      color="black"
      icon="phone"
    >
    <subtitle class="q-pa-sm texxt2 text-white "> consultor </subtitle>
       </q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
     <q-carousel
      style="width: 100vw; height: 80vh;"
      swipeable
      class="small-screen-only "
      autoplay="autoplay"
      animated
      v-model="slide5"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" class="absolute-center q-ma-md" style="width: 80vw; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A4484-scaled.jpg" >
         <q-btn
      size="25px"
      rounded
      push
      style="opacity: 0.8; top: 05%; left: -5%;"
      class="text-white"
      glossy
       @click="magnaaer = true"
      color="black"
      icon="info"
    />
      </q-carousel-slide>
      <q-carousel-slide  :name="2" class=" absolute-center" style="width: 70vw; height: 30vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/14A9879-scaled.jpg" >
         <q-btn
      size="25px"
      rounded
      push
      style="opacity: 0.8; top: 05%; left: -15%;"
      class="text-white"
      glossy
       @click="vedaaer = true"
      color="black"
      icon="info"
    />
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="absolute-center" style="width: 77vw; height: 25vw;" img-src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/02/branca-frente.png" >
        <q-btn
      size="25px"
      rounded
      push
      style="opacity: 0.8; top: 05%; left: -20%;"
      class="text-white"
      glossy
       @click="elementalaer = true"
      type="submit"
      color="black"
      icon="info"
    />
      </q-carousel-slide>
    </q-carousel>
     </form>

    <div class="aboutus texxt text-center text-blue-grey-12"> 
         <div class="q-pa-xs q-gutter-md">
    <div class="row justify-between">

    <q-parallax
    style="height: 40vw;"
    class="large-screen-only"
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/sadfewe.jpg"
    >
    
    <h5 class="texxt2 text-bold text-center text-purple-2"> Saiba sobre nosso storytelling <br> clicando abaixo </h5>
    <div class="flex flex-center">
          <q-btn
      padding="xl"
      color="purple-3"
      push
      class="text-black"
      dense
      @click="inception = true"
    
      icon="record_voice_over"
    />
    </div>
    </q-parallax>
     <q-parallax
    style="height: 85vw;"
    class="small-screen-only"
      src="https://desafio.elementsgaming.com.br/wp-content/uploads/2021/01/sadfewe.jpg"
    >
    
    <h5 class="texxt2 text-bold text-center text-purple-2"> Saiba sobre nosso storytelling <br> clicando abaixo </h5>
    <div class="flex flex-center">
          <q-btn
      padding="xl"
      color="purple-3"
      push
      glossy
      class="text-black"
      dense
      @click="inception = true"
    
      icon="record_voice_over"
    />
    </div>
    </q-parallax>
   
    </div>
  </div>
  <div class="bg-white text-black">

  <hr>
    <h4 class="q-pa-lg texxt2 large-screen-only text-bold  text-center constrain">Junto da melhor marca de cadeiras da américa latina, <br> você se sente preparado para promover essa incrível experiência ao consumidor. <br> E ainda, se posicionar no mercado como referencia? <br>  <br> <hr> TA ESPERANDO O QUE?</h4>
    <h6 class="q-pa-lg texxt2 small-screen-only text-bold  text-center constrain">Junto da melhor marca de cadeiras da américa latina, <br> você se sente preparado para promover essa incrível experiência ao consumidor. <br> E ainda, se posicionar no mercado como referencia? <br> <br> <hr> TA ESPERANDO O QUE?</h6>
    <hr>
    <q-dialog v-model="inception">
      <q-card class="bg-black">
        <q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-md">
             <h5 class="constrain text-purple-3 text-bold large-screen-only texxt">Olá, Argen aqui quem vos fala! <br> <br> O nosso propósito é entregar valor para as pessoas que de alguma forma tem acesso ao nosso universo! <br>  Tudo isso através de algo que está impregnado em nosso universo, que é o Storytelling, onde é contado através de quadrinhos e livros, que dentro delas estão incluídos valores. <br> <br> Valores esses que com certeza ajudam as pessoas que tem acesso a eles a melhorarem e progredirem em suas próprias vidas, por isso estamos crescendo muito e levando esse universo inteiro pra tanta gente diferente. <br> <br> Claro que com muita qualidade em nossos produtos juntamente com a experiência que as acompanha. <br> <br> <br>
A Elements Gaming foi criada no dia 06/07/2016 , <br> Pelos sócios fundadores Rafael Seifert e Bruna Rodrigues. <br> <br>  Já nessa data se sabia que a empresa miraria só e somente o extraordinário.
Desde o momento zero a ideia nunca foi ser apenas uma marca de cadeira gamer, e sim ser um conceito e levar uma mensagem a todos os jovens não apenas do Brasil, mas no mundo!
Assim, hoje, apenas 4 anos depois, orgulhamo-nos de estarmos entre as marcas gamers mais influentes da América Latina.
    
    </h5>
   
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat dense class="text-white texxt" label="Fechar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
 
  <div class="flex q-pa-md flex-center">
      <subtitle class="q-pa-md text-h4"> 
        Onde estamos
      </subtitle>
      <form action="https://g.page/Arca-Elements?share" target="_blank">
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
    <h2 class="large-screen-only constrain text-center texxt2 text-bold">
     <hr> Contato: <br> 
      (48) 3374-6010
    </h2>
     <h4 class="small-screen-only constrain text-center texxt2 text-bold">
     <hr> Contato: <br> 
      (48) 3374-6010
    </h4>
  </div>
       <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
            <div class="col texxt cursor-pointer q-pa-sm bg-white text-black text-center">
              Volte ao início
            </div>
          </q-page-scroller>
           <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <form action="https://wa.me/554833746010" target="_black">
            <q-btn type="submit" fab class="text-black" color="green-6"  >
            <svg-icon type="mdi" :path="path"></svg-icon>
            </q-btn>
          </form> 
          </q-page-sticky>
           <q-page-scroller reverse position="bottom-right" :scroll-offset="20" :offset="[95, 18]">
            <q-btn fab icon="keyboard_arrow_down" class="text-black" color="white" />
          </q-page-scroller>
         
       
  </div>
  </q-page>
</template>

<style>
.my-card2{
  width: 100%;
  max-width: 350px;
}
.bgg2{
  background-size: 25%;
}
.bg1{
  background-image: url("https://wallpaperaccess.com/full/2109.jpg");
  background-size: 100%;
  opacity: 0.9;
}
.bg2{
  background-image: url("https://i.pinimg.com/originals/2d/c6/f2/2dc6f2ce2c248288c149e79ee70d5395.gif");
  background-size: 100%;
  opacity: 0.9;
}
.bgg{
  background-image: url("https://i.pinimg.com/originals/14/6f/f7/146ff7688738e06c3f17f26bb0982d98.gif");
  background-position: 30%;
  background-size: 100%;
  opacity: 0.9;
}
.frame:hover {
  color: purple;
}
.bgel{
  background-image: url("https://wallpapercave.com/wp/wp7196356.jpg");
  background-size: 120%;
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
      slide1:1,
      slide2:1,
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
      slide3:1,
      slide4:1,
      slide5:1,
      fullWidth: false,
      name: null,
      phone: null,
      frame: false,
      email: null,
      cnpj: null,
      fabPos: [ 12 , 11 ],
      draggingFab: false,
      path: mdiWhatsapp
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