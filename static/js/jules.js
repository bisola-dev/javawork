//challenge 1: Your Age in Days

    function ageInDays(){
        var birthYear = prompt('what year were you born.......Good friend');
        var ageInDayss=(2018-birthYear)*365;
        var h1 = document.createElement('h1');
        var textAnswer= document.createTextNode('you are' + ageInDayss +'days old');
        h1.setAttribute('id','ageInDays');
        h1.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h1);

    }
  

    function reset(){
        document.getElementById('ageInDays').remove();
    }
      //challenge 2:Cat Generator
     function generateCat(){
         var image =document.createElement('img');
         var div = document.getElementById('flex-cat-gen');
         image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
         div.appendChild(image);
     }  

  

      //challenge 3: Rock, paper, Scissors 
      function rpsGame(yourChoice){
          console.log(yourChoice);
          var humanChoice, botChoice;
          humanChoice=yourChoice.id;

          botChoice=numberToChoice(randToRpsInt());
          console.log('computer choice:', botChoice);

          results=decideWinner(humanChoice, botChoice);
          console.log(results);

          message=finalMessage(results);
          console.log(message);
        


      }
      function randToRpsInt(){
      return Math.floor(Math.random()*3);
      }
 
function numberToChoice(number){
    return['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
var rpsDatabase={
    'rock':{'scissors':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissors':0},
    'scissors':{'paper':1,'scissors':0.5,'rock':0}
};

var yourScore = rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];
   
   return [yourScore, computerScore];
    
   }

   function finalMessage([yourScore,computerScore]){
       if (yourScore===0){
          return{'message':'you lost!','color':'red'}; 
       }else if (yourScore===0.5){
           return{'message':'you tied','color':'yellow'};
       }else return{'message':'you won','color':'green'};
   }
   
   function rpsFrontEnd(humanImageChoice, botImageChoice,finalMessage){
       var imagesDatabase={
           'rock':document.getElementById('rock').src,
           'paper':document.getElementById('paper').src,
           'scissors':document.getElementById('scissors').src
       };
   
   //lets remove all the images.

   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();
  
   var humanDiv = document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');

   humanDiv.innerHTML="<img src'" + imagesDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow;0px 10px 50px rgba(37,50,233,1);'>"
messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>"
botDiv.innerHTML="<img src'" + imagesDatabase[botImageChoice]+"'height=150px; width= 150px;      style='box-shadow;0px 50px rgba(37,20,233,1);'>"       
   
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
   
   }
   
   //challenge 4; change the color of All buttons.
   var all_buttons=document.getElementsByTagName('button');
   console.log(all_buttons);

   var copyAllButtons=[];
   for(let i=0; i < all_buttons.length; i++){
   copyAllButtons.push(all_buttons[i]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy){
    if (buttonThingy.value ==='red'){
        buttonsRed();
    }else if(buttonThingy.value ==='green'){
        buttonsGreen();
    }else if (buttonThingy.value==='reset'){
        buttonsColorReset();
    }else if(buttonThingy.value==='random'){
        randomColors();
    }
}

function buttonsRed(){
  for(let i=0; i < all_buttons.length;i++){
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add('btn-danger');

  }  
}


function buttonsGreen(){
    for(let i=0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
  
    }  
  }

  function buttonsColorReset(){
    for(let i=0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
  
    }  
  }
  
  function randomColors(){
      var choices=['btn-primary','btn-danger','btn-success','btn-warning']
    for(let i=0; i<all_buttons.length;i++){
        let randomNumber=Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
  
    }  
  }


 
//challenge 5: Blackjack
let blackjackGame={
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'4':4,'5':5,'6':6, '7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,

};
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer'] 

const hitSound = new Audio('static/sounds/Mouse.mp3');
const winSound=new Audio('static/sounds/applaud.wav');
const lossSound=new Audio('static/sounds/aww.mp3');



document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit(){
    if (blackjackGame['isStand'] === false){
    let card=randomCard(); 
    console.log(card);
    showCard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);
    console.log(YOU['score']);     
    }
}
    function randomCard(){
        let randomIndex = Math.floor(Math.random()*12);
        return blackjackGame['cards'][randomIndex];
    }
  
    function showCard(card,activePlayer){
      if(activePlayer['score']<=21){
        let cardImage=document.createElement('img');
        cardImage.src=`static/images/${card}.jpeg`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

    function blackjackDeal(){
        if(blackjackGame['turnsOver']===true){

            blackjackGame['isStand']=false;
     let yourImages = document.querySelector('#your-box').querySelectorAll('img');
     let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

     for(i=0; i < yourImages.length; i++){
         yourImages[i].remove();
     }

     for(i=0; i < dealerImages.length; i++){
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;  

     document.querySelector('#your-blackjack-result').style.color ='#ffffff';
     document.querySelector('#dealer-blackjack-result').style.color ='#ffffff';
    

     document.querySelector('#blackjack-result').textContent ="Let's play";
     document.querySelector('#blackjack-result').style.color='black';

     blackjackGame['turnsOver'] =true;
 }

    }

 function updateScore(card,activePlayer){
     //activePlayer['score']+= blackjackGame['cardsMap'][card];
     if(card === 'A'){
         //if adding 11 keeps me below 21, add 11, otherwise, add 1
         if (activePlayer['score']+ blackjackGame['cardsMap'][card][1]<=21){
             activePlayer['score'] += blackjackGame ['cardsMap'][card][1];

         }else{
             activePlayer['score']+= blackjackGame['cardsMap'][card][0];
        }

        } else{
            activePlayer['score'] += blackjackGame['cardsMap'][card];

        }

  
     }

     function showScore(activePlayer){
         if(activePlayer['score']>21){
         document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
         document.querySelector(activePlayer['scoreSpan']).style.color='red'; 
     }else{
     document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
    }
}
function dealerLogic(){
    blackjackDeal['isStand'] = true;
    let card = randomCard();
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);


    
    if(DEALER['score'] > 15){
        blackjackGame['turnsOver']=true;
        let winner =computeWinner();
        showResult(winner);
        console.log(blackjackGame['turnsOver']);
    }
   
 }



     //compute winner and return  who just won
     //update the wins,draws,and losses.
     function computeWinner(){
        let winner;
        if(YOU['score']<=21){
            //condition:higher score than dealer or when dealer busts but you are
            if(YOU['score'] > DEALER['score']||(DEALER['score']>21)){
                blackjackGame['wins']++;
                winner = YOU;
                blackjackGame['losses']++;
                winner = DEALER;
            }else if (YOU['score'] ===DEALER ['score']){
                blackjackGame['draws']++; 

            }
        //conditional:when user busts but dealer doesnt
       }else if (YOU['score'] > 21 && DEALER['score']<=21){
           blackjackGame['losses']++;
          winner=DEALER;
          //condition when you AND the dealer busts
       }else if (YOU['score']>21 && DEALER['score']>21){
        blackjackGame['draws']++; 

       }
       console.log(blackjackGame);
        return winner;
    }
    function  showResult(winner){
        let message, messageColor;

    if(blackjackGame['turnsOver']===true){
 
        if(winner === YOU){
        document.querySelector('#wins').textContent=blackjackGame['wins'];
            message='you won!';
            messageColor = 'green';
            winSound.play();
        }else if (winner === DEALER){
         document.querySelector('#losses').textContent=blackjackGame['losses'];
            message='You lost!';
            messageColor='red';
            lossSound.play();
 
        }else{
         document.querySelector('#draws').textContent=blackjackGame['draws'];
            message='You drew!';
            messageColor='black';
        }
 document.querySelector('#blackjack-result').textContent=message;
 document.querySelector('#blackjack-result').style.color=messageColor;
 
     }

    }
 
//challenge 6:ajax $api's with javascript.
const url='https://randomuser.me/api/?results=10';
fetch (url)
.then(resp => resp.json())
.then(data=>{
let authors = data.results;
console.log(authors);
for(i=0; i< authors.length; i++){
    let div =document.createElement('div');
    let image=document.createElement('p');
    package.appendChild(document.createTextNode('${title(authors[i].name.first)}${title(authors[i].name.last)}'));
    image.src=authors[i].picture.large;
    div.appendChild(p);
    document.querySelector('.container-6. flex-ajax-row-1'). appendChild(div);
}
});
let title =str=>str[0].toUpperCase()+str.slice(1);
function mustafa(){
    return '5'

}
mustafa()