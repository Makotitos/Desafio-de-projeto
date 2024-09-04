let nomeHeroi = "Jorginho"

console.log("Comece a sua gloriosa jornada, " + nomeHeroi + ". Torne-se o maior dos aventureiros!")

console.log(nomeHeroi + " diz: Já comprei meu equipamento, estou pronto para explorar!")

let expHeroi = 0

let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]


//o valor numérico se refere aos pontos de experiência adquiridos ao derrotar o monstro
let monstro = [
    ["Slime", 50],
    ["Bandit", 100],
    ["Skeleton", 120],
    ["Troll", 450],
    ["Dragon", 10000]
    ]
    

console.log("ALERTA: 1 " + monstro[0][0] + " apareceu! É hora de batalhar!")

let expAdquirida = (monstro[0][1]*1)
expHeroi += expAdquirida

console.log("Você derrotou o " + monstro[0][0] + " e recebeu " + expAdquirida + " pontos de experiência. Você possui um total de " + expHeroi + " pontos de experiência.")

console.log("Você encontra uma bifurcação na trilha! Seguir para à direita em direção ao Pantano Venenoso ou à esquerda em direção ao Cemitério Esquecido?")

let item = "nenhum"

switch(item){
    case "antídoto":
        console.log("Você vai em direção ao Pantano Venenoso.");
        break;
    case "nenhum":
        console.log("Você deve conseguir algum item antes de prosseguir!");
        break;
    case "água benta":
        console.log("Você vai em direção ao Cemitério Esquecido.");
        break;
    default:
        console.log(nomeHeroi + "decide voltar pra cidade e descansar por hoje.")
}

console.log("Você volta à floresta e é atacado por 5 " + monstro[1][0] + " !")

expAdquirida = monstro[1][1]*5
expHeroi += expAdquirida

console.log("Você derrotou os " + monstro[1][0] + " e recebeu " + expAdquirida + " pontos de experiência. Você possui um total de " + expHeroi + " pontos de experiência.")

console.log("Sorte! Um dos monstros deixou cair o item água benta!")

item = "água benta"

switch(item){
    case "antídoto":
        console.log("Você vai em direção ao Pantano Venenoso.");
        break;
    case "nenhum":
        console.log("Você deve conseguir algum item antes de prosseguir!");
        break;
    case "água benta":
        console.log("Você vai em direção ao Cemitério Esquecido.");
        break;
    default:
        console.log(nomeHeroi + "decide voltar pra cidade e descansar por hoje.")
}

console.log("ALERTA: você foi atacado por 3 " + monstro[2][0] + " e 1 " + monstro[3][0] + " ! É hora de batalhar!")

expAdquirida = (monstro[2][1]*3) + monstro[3][1]
expHeroi += expAdquirida

console.log("Você derrotou os " + monstro[2][0] + " e " + monstro[3][0] + " e recebeu " + expAdquirida + " pontos de experiência. Você possui um total de " + expHeroi + " pontos de experiência.")

console.log("Oh, não! Você foi amaldiçoado por uma alma vagante e está perdendo pontos de vida!")

let hitPoints = 50
let cursed = true

for (let i = hitPoints; hitPoints >= 1; i--){
  hitPoints -= 2
  console.log("A maldição está te corrompendo! " + i + " pontos de vida ")
}

console.log(nomeHeroi + " diz: Preciso me purificar! Rapido!")

item = "água benta"
let condicao = "maldição"
let purificar = (condicao == "maldição") && (item == "água benta")

if (purificar){
  console.log("Você usou o item água benta e se purificou!")
}else {
    console.log("Você foi consumido pela maldição e se transformou em um zumbi!")
  }

console.log(nomeHeroi + " diz: Isso! Acho que estou preparado para desafiar o dragão e me tornar o herói mais forte de todos!")

console.log("Você chega no Vulcão Supremo do Dragão Colossal e encontra o " + monstro[4][0] + " ! É hora de batalhar!")

let poderDragao = "sopro de fogo"
let vida = "foi jogar no vasco"

switch(poderDragao){
   case "garra":
      console.log(nomeHeroi + " " + vida + ".");
       break;
   case "sopro de fogo":
      console.log(nomeHeroi + " " + vida + ".");
       break;
   case "cauda flamejante":
      console.log(nomeHeroi + " " + vida + ".");
       break;
   default:
      console.log(nomeHeroi + " acovardou-se e fugiu.")
}

console.log("E assim, a curta aventura de " + nomeHeroi + " chega ao fim. Na verdade não, pois " + nomeHeroi + " somente voltou ao checkpoint e logo logo estará pronto para desafiar o lendário Dragão novamente.")


if (expHeroi <= 1000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel[0] + ".")
}
else if(expHeroi <= 2000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel[1] + ".")
}
else if(expHeroi <= 5000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel[2] + ".")
}
else if(expHeroi <= 6000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel[3] + ".")
}
else if(expHeroi <= 7000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel[4] + ".")
}
else if(expHeroi <= 8000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel[5] + ".")
}
else if(expHeroi <= 9000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel[6] + ".")
}
else if(expHeroi >= 10000){
  console.log("O herói de nome " + nomeHeroi + " está no nível de " +  nivel[7] + ".")
}