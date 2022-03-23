
const pollen_url = 'https://beni1228-api.herokuapp.com/s31fg.json';
async function get_pollen() {
  const response = await fetch(pollen_url);
  const data = await response.json();
  let pollen = data.content;

  console.table(pollen);
  console.log(pollen);
}

get_pollen();


var hasell = 3;
var gräßerl = 1;
var beifussl = 3;
var roggenl = 2;
var birkel = 1;
var ambrosial = 2;
var erlel = 2;
var eschel = 3;



if(hasell === 3){
    document.getElementById('hasel').id = 'anzeige';
}
if(hasell === 1){
    document.getElementById('hasel').id = 'none';
}
if(hasell === 2){
    document.getElementById('hasel').id = 'anzeige1';
            document.getElementById('mehr').id = 'none';
}






if(gräßerl === 3){
    document.getElementById('Gräßer').id = 'anzeige';
}
if(gräßerl === 1){
    document.getElementById('Gräßer').id = 'none';
}
if(gräßerl === 2){
    document.getElementById('Gräßer').id = 'anzeige1';
}








if(beifussl === 3){
    document.getElementById('beifuss').id = 'anzeige';
}
if(beifussl === 1){
    document.getElementById('beifuss').id = 'none';
}
if(beifussl === 2){
    document.getElementById('beifuss').id = 'anzeige1';
}





if(roggenl === 3){
    document.getElementById('roggen').id = 'anzeige';
}
if(roggenl === 1){
    document.getElementById('roggen').id = 'none';
}
if(roggenl === 2){
    document.getElementById('roggen').id = 'anzeige1';
}





if(birkel === 3){
    document.getElementById('birke').id = 'anzeige';
}
if(birkel === 1){
    document.getElementById('birke').id = 'none';
}
if(birkel === 2){
    document.getElementById('birke').id = 'anzeige1';
}





if(ambrosial === 3){
    document.getElementById('ambrosia').id = 'anzeige';
}
if(ambrosial === 1){
    document.getElementById('ambrosia').id = 'none';
}
if(ambrosial === 2){
    document.getElementById('ambrosia').id = 'anzeige1';
}





if(erlel === 3){
    document.getElementById('erle').id = 'anzeige';
}
if(erlel === 1){
    document.getElementById('erle').id = 'none';
}
if(erlel === 2){
    document.getElementById('erle').id = 'anzeige1';
}





if(eschel === 3){
    document.getElementById('esche').id = 'anzeige';
}
if(eschel === 1){
    document.getElementById('esche').id = 'none';
}
if(eschel === 2){
    document.getElementById('esche').id = 'anzeige1';
}




function mehranzeigen(){
      document.getElementById('mehr').id = 'weniger';
};
function wenigeranzeigen() {
   document.getElementById('weniger').id = 'mehr';
}
