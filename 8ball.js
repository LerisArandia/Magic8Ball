document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("input[name=submit]").addEventListener("click", function(){
        let name = document.querySelector("input[name=name]");

        document.querySelector("div#greeting").classList.add("hidden");

        document.querySelector("div#mainContent").classList.add("visible");

        document.querySelector("div#welcome").innerHTML = `Welcome ${name.value}!`;
    })

    document.querySelector("input[name=questionSubmit").addEventListener("click", function(){
        let question = document.querySelector("input[name=question]");
        
        document.querySelector("div#question").innerHTML = `<h2>${question.value}</h2>`;

        document.querySelector("div#answer").innerHTML = `<h3>Magic 8-Ball says: ${randomAnswer()}</h3>`;
        
    })
    
    function randomAnswer(){
        let randomNumber = Math.floor(Math.random() *8);
        let eightBall= '';
        switch(randomNumber){
            case 0:
                eightBall= 'It is small'
                break;
            case 1:
                eightBall= 'It is decidely gigantic'
                break;
            case 2:
                eightBall= 'Reply hazy try again'
                break;
            case 3:
                eightBall= 'Too small'
                break;
            case 4:
                eightBall= 'Can\'t see it xd'
                break;
            case 5:
                eightBall= 'My sources say it is very small'
                break;
            case 6:
                eightBall= 'Looks big chief'
                break;
            case 7:
                eightBall= 'LMAO'
                break;
        }

        return eightBall;
    }
    
})