

var lol = 2;

var ampferl = 3;



if(ampferl === 3){
    document.getElementById('Ampfer').id = 'anzeige';
}
if(ampferl === 1){
    document.getElementById('Ampfer').id = 'none';
}
if(ampferl === 2){
    document.getElementById('Ampfer').id = 'anzeige1';
            document.getElementById('mehr').id = 'none';
}


var gräßerl = 2;



if(gräßerl === 3){
    document.getElementById('Gräßer').id = 'anzeige';
}
if(gräßerl === 1){
    document.getElementById('Gräßer').id = 'none';
}
if(gräßerl === 2){
    document.getElementById('Gräßer').id = 'anzeige1';
}




var pappell = 1;



if(pappell === 3){
    document.getElementById('Pappel').id = 'anzeige';
}
if(pappell === 1){
    document.getElementById('Pappel').id = 'none';
}
if(pappell === 2){
    document.getElementById('Pappel').id = 'anzeige1';
}





function mehranzeigen(){
      document.getElementById('mehr').id = 'weniger';
};
function wenigeranzeigen() {
   document.getElementById('weniger').id = 'mehr';
}