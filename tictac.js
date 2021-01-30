
let arr1=[];
let arr2=[];
let arr3=[];
let arr4=[];
let arr5=[];
let arr6=[];
let arr7=[];
let arr8=[];
let arr9=[];

let reset=false;

let h=[];
let ho=[];
let hop=[];
let hope=[];
let hope1=[];
let hope2=[];
let hope3=[];
let hope4=[];
let i=0;
let j=0;
let c=0;
let k=0;
let m=0;
let g=0;
let f=0;
let p=0;
let z=0;
let q=0;
let s=0;
let l=0;
let r=0;
let a=0;
let b=0;
let d=0;


let count=false;
let count1=false;
let count2=false;
let count3=false;
let count4=false;
let count5=false;
let count6=false;
let count7=false;
let count8=false;



let clickCount=0;
let oper=false;
let oper1=false;
let oper2=false;
let oper3=false;
let oper4=false;
let oper5=false;
let oper6=false;
let oper7=false;
let oper8=false;
let oper9=false;
let oper10=false;
let oper11=false;
let oper12=false;
let oper13=false;
let oper14=false;
let oper15=false;
let oper16=false;
let oper17=false;

let click=false;
let click1=false;
let click2=false;
let click3=false;
let click4=false;
let click5=false;
let click6=false;
let click7=false;
let click8=false;

let clickA=false;


let x1=0;
let x2=0;
let x3=0;
let x4=0;
let x5=0;
let x6=0;
let x7=0;
let x8=0;
let x9=0;
let y1=0;
let y2=0;
let y3=0;
let y4=0;
let y5=0;
let y6=0;
let y7=0;
let y8=0;
let y9=0;

let arrfirstA=[];
let arrsecondA=[];
let arrthirdA=[];
let arrfourthA=[];
let arrfifthA=[];
let arrsixthA=[];
let arrseventhA=[];
let arreightA=[];
let arrninthA=[];

let answers=0;
let answers1=0;
let answers2=0;
let answers3=0;
let answers4=0;
let answers5=0;
let answers6=0;
let answers7=0;

let art=0;
let help=0;

let arrfirst=["x1","x2","x3"];

let arrsecond=["x1","x4","x7"];

let arrthird=["x9","x5","x1"];

let arrfourth=["x2","x5","x8"];

let arrfifth=["x3","x6","x9"];

let arrsixth=["x4","x6","x5"];

let arrseventh=["x7","x8","x9"];

let arreight=["x3","x5","x7"];





function clickOne(){
    if((click!==true)&&(oper!==true)){
        clickCount++;
        if((clickCount%2)!==0){
            document.getElementById("one").innerHTML="X";
            arrfirstA.push("x1");
            x1=document.getElementById("one").innerHTML;
            arr1.push(x1);

        }
        if((clickCount%2)===0){
            document.getElementById("one").innerHTML="0";
            arrfirstA.push("x1");
            y1=document.getElementById("one").innerHTML;
            arr1.push(y1);


        }

        checkAnswers();
        click=true;
    }
    if(reset===true){
        reset=false;
        clickOne();

    }

}


function clickTwo(){
    if((click1!==true)&&(oper!==true)){
        clickCount++;

        if((clickCount%2)!==0){
            document.getElementById("two").innerHTML="X";
            arrfirstA.push("x2");
            x2=document.getElementById("two").innerHTML;
            arr1.push(x2);


        }
        if((clickCount%2)===0){
            document.getElementById("two").innerHTML="0";
            arrfirstA.push("x2");
            y2=document.getElementById("two").innerHTML;
            arr1.push(y2);

        }

        checkAnswers();
        click1=true;
    }

    if(reset===true){
        reset=false;
        clickTwo();
    }
}

function clickThree(){
    if((click2!==true)&&(oper!==true)){
        clickCount++;
        if(((clickCount%2)!==0)&&(click2!==true)){
            document.getElementById("three").innerHTML="X";
            arrfirstA.push("x3");
            x3=document.getElementById("three").innerHTML;
            arr1.push(x3);

        }
        if((clickCount%2)===0){
            document.getElementById("three").innerHTML="0";
            arrfirstA.push("x3");
            y3=document.getElementById("three").innerHTML;
            arr1.push(y3);

        }

        checkAnswers();
        click2=true;
    }
    if(reset===true){
        reset=false;
        clickThree();
    }
}

function clickFour(){
    if((count3!==true)&&(oper!==true)){
        clickCount++;


        if((clickCount%2)!==0){
            document.getElementById("four").innerHTML="X";
            arrfirstA.push("x4");
            x4=document.getElementById("four").innerHTML;
            arr1.push(x4);

        }
        if((clickCount%2)===0){
            document.getElementById("four").innerHTML="0";
            arrfirstA.push("x4");
            y4=document.getElementById("four").innerHTML;
            arr1.push(y4);

        }

        checkAnswers();
        click3=true;}

    if(reset===true){
        reset=false;
        clickFour();
    }
}

function clickFive(){
    if((click4!==true)&&(oper!==true)){
        clickCount++;

        if((clickCount%2)!==0){
            document.getElementById("five").innerHTML="X";
            arrfirstA.push("x5");
            x5=document.getElementById("five").innerHTML;
            arr1.push(x5);

        }
        if((clickCount%2)===0){
            document.getElementById("five").innerHTML="0";
            arrfirstA.push("x5");
            y5=document.getElementById("five").innerHTML;
            arr1.push(y5);

        }

        checkAnswers();
        click4=true;
    }
    if(reset===true){
        reset=false;
        clickFive();
    }
}

function clickSix(){
    if((click5!==true)&&(oper!==true)){
        clickCount++;
        if((clickCount%2)!==0){
            document.getElementById("six").innerHTML="X";
            arrfirstA.push("x6");
            x6=document.getElementById("six").innerHTML;
            arr1.push(x6);

        }
        if((clickCount%2)===0){
            document.getElementById("six").innerHTML="0";
            arrfirstA.push("x6");
            y6=document.getElementById("six").innerHTML;
            arr1.push(y6);

        }

        checkAnswers();
        click5=true;}
    if(reset===true){
        reset=false;
        clickSix();
    }


}

function clickSeven(){
    if((click6!==true)&&(oper!==true)){
        clickCount++;
        if((clickCount%2)!==0){
            document.getElementById("seven").innerHTML="X";
            arrfirstA.push("x7");
            x7=document.getElementById("seven").innerHTML;
            arr1.push(x7);

        }
        if((clickCount%2)===0){
            document.getElementById("seven").innerHTML="0";
            arrfirstA.push("x7");
            y7=document.getElementById("seven").innerHTML;
            arr1.push(y7);

        }

        checkAnswers();
        clcik6=true;
    }
    if(reset===true){
        reset=false;
        clickSeven();

    }
}

function clickEight(){
    if((click7!==true)&&(oper!==true)){
        clickCount++;
        if((clickCount%2)!==0){
            document.getElementById("eight").innerHTML="X";
            arrfirstA.push("x8");
            x8=document.getElementById("eight").innerHTML;
            arr1.push(x8);

        }
        if((clickCount%2)===0){
            document.getElementById("eight").innerHTML="0";
            arrfirstA.push("x8");
            y8=document.getElementById("eight").innerHTML;
            arr1.push(y8);

        }

        checkAnswers();
        click7=true;
    }
    if(reset===true){
        reset=false;
        clickEight();

    }
}

function clickNine(){
    if((click8!==true)&&(oper!==true)){
        clickCount++;
        if((clickCount%2)!==0){
            document.getElementById("nine").innerHTML="X";
            arrfirstA.push("x9");
            x9=document.getElementById("nine").innerHTML;
            arr1.push(x9);

        }
        if((clickCount%2)===0){
            document.getElementById("nine").innerHTML="0";
            arrfirstA.push("x9");
            y9=document.getElementById("nine").innerHTML;
            arr1.push(y9);

        }

        checkAnswers();
        click8=true;
    }
    if(reset===true){
        reset=false;
        clickNine();
    }
}



function checkAnswers(){


    let art=0;
    let help=0;


    if((clickCount>=5)&&(clickCount<=9)){

        if(oper!==true){
            for(let k=0;k<arrfirstA.length;k++){
                for(let z=0;z<arrfirst.length;z++){

                    if(arrfirstA[k]===arrfirst[z]){
                        if(arrsecondA.indexOf(arrfirstA[k])=== -1){
                            arrsecondA.push(arrfirstA[k]);
                            answers++;

                        }
                        for(let c=0;c<3;c++){
                            if(h.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                h.push(arrfirstA.indexOf(arrfirstA[k]));

                            }
                        }
                    }
                }
            }

            if(answers===3){
                for(let b=0;b<arrsecondA.length;b++){
                    for(let a=0;a<arrfirst.length;a++){
                        if(arrsecondA[b]===arrfirst[a]){
                            oper4=true;
                        }
                    }
                }
                if(oper4===true){
                    for(let n=0;n<h.length;n++){
                        g = h[n];
                        arr2.push(arr1[g]);

                    }

                    for(let j=0;j<arr2.length;j++){
                        if(arr2[j]==="0"){
                            help++;
                        }
                        else if(arr2[j]==="X"){
                            art++;
                        }

                        oper2=true;
                    }
                    if(oper2===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }
                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";


                        }
                        else{
                            art=0;
                            help=0;
                            h.splice(0,3);
                            arr2.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";

                            }

                        }
                    }


                }

            }}

//1
        if(oper!==true){
            for(let k=0;k<arrfirstA.length;k++){
                for(let z=0;z<arrsecond.length;z++){
                    if(arrfirstA[k]===arrsecond[z]){
                        if(arrthirdA.indexOf(arrfirstA[k])=== -1){
                            arrthirdA.push(arrfirstA[k]);
                            answers1++;

                        }
                        for(let c=0;c<3;c++){
                            if(ho.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                ho.push(arrfirstA.indexOf(arrfirstA[k]));

                            }

                        }
                    }
                }
            }

            if(answers1===3){

                for(let b=0;b<arrthirdA.length;b++){
                    for(let a=0;a<arrsecond.length;a++){
                        if(arrthirdA[b]===arrsecond[a]){
                            oper5=true;

                        }
                    }
                }
                if(oper5===true){

                    for(let n=0;n<ho.length;n++){
                        f = ho[n];
                        arr3.push(arr1[f]);

                    }

                    for(let j=0;j<arr3.length;j++){
                        if(arr3[j]==="0"){
                            help++;
                        }
                        else if(arr3[j]==="X"){
                            art++;}

                        oper3=true;
                    }
                    if(oper3===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";


                        }

                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }
                        else{
                            art=0;
                            help=0;
                            arr3.splice(0,3);
                            ho.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";

                            }
                        }}
                }
            }
        }
//2
        if(oper!==true){
            for(let k=0;k<arrfirstA.length;k++){

                for(let z=0;z<arrthird.length;z++){

                    if(arrfirstA[k]===arrthird[z]){
                        if(arrfourthA.indexOf(arrfirstA[k])=== -1){
                            arrfourthA.push(arrfirstA[k]);

                            answers2++;
                        }
                        for(let c=0;c<3;c++){
                            if(hop.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                hop.push(arrfirstA.indexOf(arrfirstA[k]));

                            }
                        }
                    }
                }
            }

            if(answers2===3){

                for(let b=0;b<arrfourthA.length;b++){
                    for(let a=0;a<arrthird.length;a++){
                        if(arrfourthA[b]===arrthird[a]){
                            oper6=true;

                        }
                    }
                }
                if(oper6===true){

                    for(let n=0;n<hop.length;n++){
                        p = hop[n];
                        arr4.push(arr1[p]);

                    }

                    for(let j=0;j<arr4.length;j++){
                        if(arr4[j]==="0"){
                            help++;}
                        else if(arr4[j]==="X"){
                            art++;}

                        oper12=true;
                    }
                    if(oper12===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }
                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";


                        }

                        else{
                            art=0;
                            help=0;
                            hop.splice(0,3);
                            arr4.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";

                            }

                        }
                    }
                }
            }}

//3
        if(oper!==true){
            for(let k=0;k<arrfirstA.length;k++){

                for(let z=0;z<arrfourth.length;z++){

                    if(arrfirstA[k]===arrfourth[z]){
                        if(arrfifthA.indexOf(arrfirstA[k])=== -1){
                            arrfifthA.push(arrfirstA[k]);
                            answers3++;
                        }
                        for(let c=0;c<3;c++){
                            if(hope.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                hope.push(arrfirstA.indexOf(arrfirstA[k]));

                            }
                        }
                    }
                }
            }
            if(answers3===3){

                for(let b=0;b<arrfifthA.length;b++){
                    for(let a=0;a<arrfourth.length;a++){
                        if(arrfifthA[b]===arrfourth[a]){
                            oper7=true;
                        }
                    }
                }
                if(oper7===true){
                    for(let n=0;n<hope.length;n++){
                        d = hope[n];
                        arr5.push(arr1[d]);
                    }

                    for(let j=0;j<arr5.length;j++){
                        if(arr5[j]==="0"){
                            help++;
                        }
                        else if(arr5[j]==="X"){
                            art++;
                        }

                        oper13=true;
                    }
                    if(oper13===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }

                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }


                        else{
                            art=0;
                            help=0;
                            hope.splice(0,3);
                            arr5.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";

                            }

                        }
                    }

                }
            }
        }
//4

        if(oper!==true){
            for(let k=0;k<arrfirstA.length;k++){

                for(let z=0;z<arrfifth.length;z++){

                    if(arrfirstA[k]===arrfifth[z]){
                        if(arrsixthA.indexOf(arrfirstA[k])=== -1){
                            arrsixthA.push(arrfirstA[k]);
                            answers4++;
                        }
                        for(let c=0;c<3;c++){
                            if(hope1.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                hope1.push(arrfirstA.indexOf(arrfirstA[k]));
                            }

                        }

                    }
                }
            }

            if(answers4===3){
                for(let b=0;b<arrsixthA.length;b++){
                    for(let a=0;a<arrfifth.length;a++){
                        if(arrsixthA[b]===arrfifth[a]){
                            oper8=true;
                        }
                    }
                }
                if(oper8===true){
                    for(let n=0;n<hope1.length;n++){
                        q = hope1[n];
                        arr6.push(arr1[q]);
                    }
                    for(let j=0;j<arr6.length;j++){
                        if(arr6[j]==="0"){
                            help++;
                        }
                        else if(arr6[j]==="X"){
                            art++;}

                        oper14=true;
                    }
                    if(oper14===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";
                        }

                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }
                        else{
                            art=0;
                            help=0;
                            hope1.splice(0,3);
                            arr6.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";

                            }
                        }
                    }
                }}
        }
//5

        if(oper!==true){

            for(let k=0;k<arrfirstA.length;k++){

                for(let z=0;z<arrsixth.length;z++){

                    if(arrfirstA[k]===arrsixth[z]){
                        if(arrseventhA.indexOf(arrfirstA[k])=== -1){
                            arrseventhA.push(arrfirstA[k]);
                            answers5++;

                        }
                        for(let c=0;c<3;c++){
                            if(hope2.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                hope2.push(arrfirstA.indexOf(arrfirstA[k]));
                            }
                        }
                    }
                }
            }

            if(answers5===3){

                for(let b=0;b<arrseventhA.length;b++){
                    for(let a=0;a<arrsixth.length;a++){
                        if(arrseventhA[b]===arrsixth[a]){
                            oper9=true;
                        }
                    }
                }
                if(oper9===true){

                    for(let n=0;n<hope2.length;n++){
                        s = hope2[n];
                        arr7.push(arr1[s]);
                    }

                    for(let j=0;j<arr7.length;j++){
                        if(arr7[j]==="0"){
                            help++;}
                        else if(arr7[j]==="X"){
                            art++;}

                        oper15=true;
                    }
                    if(oper15===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }

                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";
                        }

                        else{
                            art=0;
                            help=0;
                            hope2.splice(0,3);
                            arr7.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";

                            }
                        }
                    }
                }
            }

        }
//6.

        if(oper!==true){
            for(let k=0;k<arrfirstA.length;k++){
                for(let z=0;z<arrseventh.length;z++){

                    if(arrfirstA[k]===arrseventh[z]){
                        if(arreightA.indexOf(arrfirstA[k])=== -1){
                            arreightA.push(arrfirstA[k]);
                            answers6++;

                        }
                        for(let c=0;c<3;c++){
                            if(hope3.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                hope3.push(arrfirstA.indexOf(arrfirstA[k]));
                            }
                        }
                    }
                }
            }

            if(answers6===3){

                for(let b=0;b<arreightA.length;b++){
                    for(let a=0;a<arrseventh.length;a++){
                        if(arreightA[b]===arrseventh[a]){
                            oper10=true;
                        }
                    }
                }
                if(oper10===true){

                    for(let n=0;n<hope3.length;n++){
                        l = hope3[n];
                        arr8.push(arr1[l]);
                    }

                    for(let j=0;j<arr8.length;j++){
                        if(arr8[j]==="0"){
                            help++;}
                        else if(arr8[j]==="X"){
                            art++;}

                        oper16=true;
                    }
                    if(oper16===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";


                        }

                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";


                        }
                        else{
                            art=0;
                            help=0;
                            hope3.splice(0,3);
                            arr8.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";

                            }
                        }
                    }
                }

            }}
//7.
        if(oper!==true){
            for(let k=0;k<arrfirstA.length;k++){
                for(let z=0;z<arreight.length;z++){

                    if(arrfirstA[k]===arreight[z]){
                        if(arrninthA.indexOf(arrfirstA[k])=== -1){
                            arrninthA.push(arrfirstA[k]);
                            answers7++;
                        }
                        for(let c=0;c<3;c++){
                            if(hope4.indexOf(arrfirstA.indexOf(arrfirstA[k]))=== -1){
                                hope4.push(arrfirstA.indexOf(arrfirstA[k]));

                            }

                        }
                    }
                }
            }

            if(answers7===3){

                for(let b=0;b<arrninthA.length;b++){
                    for(let a=0;a<arreight.length;a++){
                        if(arrninthA[b]===arreight[a]){
                            oper11=true;
                        }
                    }
                }
                if(oper11===true){

                    for(let n=0;n<hope4.length;n++){
                        r = hope4[n];
                        arr9.push(arr1[r]);
                    }

                    for(let j=0;j<arr9.length;j++){
                        if(arr9[j]==="0"){
                            help++;}
                        else if(arr9[j]==="X"){
                            art++;}

                        oper17=true;
                    }
                    if(oper17===true){
                        if(art===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The first player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";

                        }

                        else if(help===3){
                            oper=true;
                            document.getElementById("winner").innerHTML="The second player is the winner";
                            document.getElementById("dome").innerHTML="GAME OVER";


                        }
                        else{
                            art=0;
                            help=0;
                            hope4.splice(0,3);
                            arr9.splice(0,3);
                            if((clickCount===9)&&(oper!==true)){
                                document.getElementById('winner').innerHTML="Draw";
                                document.getElementById('dome').innerHTML="Game Over";
                            }
                        }}
                }
            }
        }
    }

    reset=false;

}
function resetGame(){

    clickCount=0;
    arrfirstA.splice(0,9);
    arrsecondA.splice(0,3);
    arrthirdA.splice(0,3);
    arrfourthA.splice(0,3);
    arrfifthA.splice(0,3);
    arrsixthA.splice(0,3);
    arrseventhA.splice(0,3);
    arreightA.splice(0,3);
    arrninthA.splice(0,3);
    arr1.splice(0,9);

    click=false;
    click1=false;
    click2=false;
    click3=false;
    click4=false;
    click5=false;
    click6=false;
    click7=false;
    click8=false;
    arr2.splice(0,3);
    arr3.splice(0,3);
    arr4.splice(0,3);
    arr5.splice(0,3);
    arr6.splice(0,3);
    arr7.splice(0,3);
    arr8.splice(0,3);
    arr9.splice(0,3);
    h.splice(0,3);
    ho.splice(0,3);
    hop.splice(0,3);
    hope.splice(0,3);
    hope1.splice(0,3);
    hope2.splice(0,3);
    hope3.splice(0,3);
    hope4.splice(0,3);


    x1=0;
    x2=0;
    x3=0;
    x4=0;
    x5=0;
    x6=0;
    x7=0;
    x8=0;
    x9=0;
    y1=0;
    y2=0;
    y3=0;
    y4=0;
    y5=0;
    y6=0;
    y7=0;
    y8=0;
    y9=0;
    help=0;
    art=0;
    answers=0;
    answers1=0;
    answers2=0;
    answers3=0;
    answers4=0;
    answers5=0;
    answers6=0;
    answers7=0;
    oper=false;
    oper1=false;
    oper2=false;
    oper3=false;
    oper4=false;
    oper5=false;
    oper6=false;
    oper7=false;
    oper8=false;
    oper9=false;
    oper10=false;
    oper11=false;
    oper12=false;
    oper13=false;
    oper14=false;
    oper15=false;
    oper16=false;
    oper17=false;
    x1= document.getElementById("one").innerHTML="";
    x2=document.getElementById("two").innerHTML="";
    x3=document.getElementById("three").innerHTML="";
    x4=document.getElementById("four").innerHTML="";
    x5=document.getElementById("five").innerHTML="";
    x6=document.getElementById("six").innerHTML="";
    x7=document.getElementById("seven").innerHTML="";
    x8=document.getElementById("eight").innerHTML="";
    x9=document.getElementById("nine").innerHTML="";
    y1= document.getElementById("one").innerHTML="";
    y2=document.getElementById("two").innerHTML="";
    y3=document.getElementById("three").innerHTML="";
    y4=document.getElementById("four").innerHTML="";
    y5=document.getElementById("five").innerHTML="";
    y6=document.getElementById("six").innerHTML="";
    y7=document.getElementById("seven").innerHTML="";
    y8=document.getElementById("eight").innerHTML="";
    y9=document.getElementById("nine").innerHTML="";
    document.getElementById("winner").innerHTML="";
    document.getElementById("dome").innerHTML="";


    reset=true;


}

