function getValue(){

    var botao = document.querySelector("button")
    var q1 = document.querySelector('input[name="questao1"]:checked').value;
    var q2 = document.querySelector('input[name="questao2"]:checked').value;
    var q3 = document.querySelector('input[name="questao3"]:checked').value;
    var q4 = document.querySelector('input[name="questao4"]:checked').value;
    var q5 = document.querySelector('input[name="questao5"]:checked').value;
    var q6 = document.querySelector('input[name="questao6"]:checked').value;
    var q7 = document.querySelector('input[name="questao7"]:checked').value;
    var q8 = document.querySelector('input[name="questao8"]:checked').value;
    var q9= document.querySelector('input[name="questao9"]:checked').value;
    var q10 = document.querySelector('input[name="questao10"]:checked').value;

    botao.addEventListener('click', function (event) {
        event.preventDefault();

        var visual = 0;
        var sonoro = 0;
        var toque = 0;
        var outros = 0;
        

        

    if(q1 == 'a'){
        visual = visual + 1;
    }
    if(q2 == 'a'){
        visual = visual + 1;
    }
    if(q3 == 'a'){
        visual = visual + 1;
    }
    if(q4 == 'a'){
        visual = visual + 1;
    }if(q5 == 'a'){
        visual = visual + 1;
    }
    if(q6 == 'a'){
        visual = visual + 1;
    }
    if(q7 == 'a'){
        visual = visual + 1;
    }
    if(q8 == 'a'){
        visual = visual + 1;
    }
    if(q9 == 'a'){
        visual = visual + 1;
    }
    if(q10 == 'a'){
        visual = visual + 1;
    }



    if(q1 == 'b'){
        sonoro=sonoro+1;
    }
    if(q2 == 'b'){
        sonoro=sonoro+1;
        
    }
    if(q3 == 'b'){
        sonoro=sonoro+1
    }
    if(q4 == 'b'){
        sonoro=sonoro+1
    }
    if(q5 == 'b'){
        sonoro=sonoro+1
    }if(q6 == 'b'){
        sonoro=sonoro+1
    }
    if(q7 == 'b'){
        sonoro=sonoro+1
    }
    if(q8 == 'b'){
        sonoro=sonoro+1
    }
    if(q9 == 'b'){
        sonoro=sonoro+1;
    }
    if(q10 == 'b'){
        sonoro=sonoro+1;
    }
    if(q10 == 'b'){
        sonoro=sonoro+1
        
    }
    


    if(q1 == 'c'){
        toque=toque+1;
    }
    if(q2 == 'c'){
        toque=toque+1;
    }
    if(q3 == 'c'){
        toque=toque+1;
    }
    if(q4 == 'c'){
        toque=toque+1;
    }
    if(q5== 'c'){
        toque=toque+1;
    }
    if(q6 == 'c'){
        toque=toque+1;
    }
    if(q7 == 'c'){
        toque=toque+1;
    }
    if(q8 == 'c'){
        toque=toque+1;
    }
    if(q9 == 'c'){
        toque=toque+1;
    }
    if(q10 == 'c'){
        toque=toque+1;
    }



    
    if(q1=='d'){
        outros=outros+1;
    }
    if(q2=='d'){
        outros=outros+1;
    }
    if(q3=='d'){
        outros=outros+1;
    }
    if(q4=='d'){
        outros=outros+1;
    }
    if(q5=='d'){
        outros=outros+1;
    }
    if(q6=='d'){
        outros=outros+1;
    }
    if(q7=='d'){
        outros=outros+1;
    }
    if(q8=='d'){
        outros=outros+1;
    }
    if(q9=='d'){
        outros=outros+1;
    }
    if(q10=='d'){
        outros=outros+1;
    }


    
        
        console.log(visual)
        console.log(sonoro)
        console.log(toque)
        console.log(outros)
        console.log(q1)
        console.log(q2)
        console.log(q3)
        console.log(q4)
        console.log(q5)
        console.log(q6)
        console.log(q7)
        console.log(q8)
        console.log(q9)
        console.log(q10)

        alert("Parabéns! Métodos ->Visual: "+(visual/10)*100+"%. Sonoro: "+(sonoro/10)*100 +"%. Sinestésico: "+ (toque/10)*100 +"%. Outros: " + (outros/10)*100+"%.")
        console.log((visual/10)*100)
        console.log((sonoro/10)*100)
        console.log((toque/10)*100)
        console.log((outros/10)*100)
    
    });
    

}
