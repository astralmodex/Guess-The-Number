var genNumBtn , userinput , randomNumber , input , h1container , h1notification , h1belowtitle , perdiffrounded , perdiff , tryagainbtn, resultNotif , container ;

genNumBtn = document.querySelector( '.genNumBtn' ) ;
userinput = document.querySelector( '.userInput' ) ;
h1container = document.querySelector( '.container' );
h1notification = document.querySelector( '.notification' );
h1belowtitle = document.querySelector( '.h1-belowtitle' );
tryagainbtn = document.querySelector( '.tryagain-btn' ) ;
resultNotif = document.querySelector( '.result-notification' ) ;
container = document.querySelector( '.container' ) ;
input = document.querySelector( '.userInput' ).value;

init();

function init() {
        container.style.display = 'flex' ;
        resultNotif.style.display = 'none' ;
        userinput.placeholder = 'Guess...' ;
}


genNumBtn.addEventListener('click', function() {

        genNumBtn.style.display = 'none' ;
        userinput.style.display = 'block' ;

});


userinput.addEventListener('keypress', function(e) {

        if ( e.key === 'Enter' ) {

                //generate number
                randomNumber = 1 + Math.floor(Math.random()*20);
                result();

                document.querySelector( '.result-notification' ).style.display = 'flex' ;
                document.querySelector( '.container' ).style.display = 'none' ;


                if ( input == randomNumber ) {
                        h1notification.textContent = 'You are correct!' ;
                        h1belowtitle.textContent = 'You guessed ' + input ;
                } else {
                        h1notification.textContent = 'Your guess is wrong!' ;
                        h1belowtitle.textContent = 'You are ' + perdiffrounded + '% away from the answer.' ;
                }
               
        }

});


function result () {
        input = document.querySelector( '.userInput' ).value;

        var diff = Math.abs( randomNumber - input ) ;
        perdiff = diff/randomNumber*100 ;
        perdiffrounded = (Math.round(perdiff * 100) / 100).toFixed(2) ;
/*
        console.log(randomNumber);
        console.log(input);
        console.log(diff);
        console.log(perdiffrounded);
        console.log(input);
*/
}


tryagainbtn.addEventListener('click', function() {
        init();
});
