


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var pollen = response.content[3]["Pollen"];


      var hasela = pollen["Hasel"]["today"];
      var ambrosiaa = pollen["Ambrosia"]["today"];
      var eschea = pollen["Esche"]["today"];
      var beifussa = pollen["Beifuss"]["today"];
      var birkea = pollen["Birke"]["today"];
      var greasera = pollen["Graeser"]["today"];
      var roggena = pollen["Roggen"]["today"];
      var erlea = pollen["Erle"]["today"];
      console.log("Hasel: " + hasela)
      console.log("Ambrosia: " + ambrosiaa)
      console.log("Esche: " + eschea)
      console.log("Beifuss: " + beifussa)
      console.log("Birke: " + birkea)
      console.log("Gräßer: " + greasera)
      console.log("Roggen: " + roggena)
      console.log("Erle: " + erlea)
      console.log("_________________________________________________________")
      console.log(pollen)

      var hasell = 6;
      var gräßerl = 6;
      var beifussl = 6;
      var roggenl = 6;
      var birkel = 6;
      var ambrosial = 6;
      var erlel = 6;
      var eschel = 6;


      if (hasela === "0") {
      var hasell = 1;
      console.log("Hasel Anzeige: " + hasell)
      }
      if (hasela === "0-1") {
        var hasell = 2;
        console.log("Hasel Anzeige: " + hasell)
      }
      if (hasela === "1") {
        var hasell = 3;
        console.log("Hasel Anzeige: " + hasell)
      }
      if (hasela === "1-2") {
        var hasell = 4;
        console.log("Hasel Anzeige: " + hasell)
      }
      if (hasela === "2") {
        var hasell = 5;
        console.log("Hasel Anzeige: " + hasell)
      }
      if (hasela === "2-3") {
        var hasell = 6;
        console.log("Hasel Anzeige: " + hasell)
      }
      if (hasela === "3") {
        var hasell = 7;
        console.log("Hasel Anzeige: " + hasell)
      }




      if (ambrosiaa === "0") {
        var ambrosial = 1;
        console.log("Ambrosia Anzeige: " + ambrosial)
      }
      if (ambrosiaa === "0-1") {
        var ambrosial = 2;
        console.log("Ambrosia Anzeige: " + ambrosial)
      }
      if (ambrosiaa === "1") {
        var hasel = 3;
        console.log("Ambrosia Anzeige: " + ambrosial)
      }
      if (ambrosiaa === "1-2") {
        var ambrosial = 4;
        console.log("Ambrosia Anzeige: " + ambrosial)
      }
      if (ambrosiaa === "2") {
        var ambrosial = 5;
        console.log("Ambrosia Anzeige: " + ambrosial)
      }
      if (ambrosiaa === "2-3") {
        var ambrosial = 6;
        console.log("Ambrosia Anzeige: " + ambrosial)
      }
      if (ambrosiaa === "3") {
        var ambrosial = 7;
        console.log("Ambrosia Anzeige: " + ambrosial)
      }




      if (eschea === "0") {
        var eschel = 1;
        console.log("Esche Anzeige: " + eschel)
      }
      if (eschea === "0-1") {
        var eschel = 2;
        console.log("Esche Anzeige: " + eschel)
      }
      if (eschea === "1") {
        var eschel = 3;
        console.log("Esche Anzeige: " + eschel)
      }
      if (eschea === "1-2") {
        var eschel = 4;
        console.log("Esche Anzeige: " + eschel)
      }
      if (eschea === "2") {
        var eschel = 5;
        console.log("Esche Anzeige: " + eschel)
      }
      if (eschea === "2-3") {
        var eschel = 6;
        console.log("Esche Anzeige: " + eschel)
      }
      if (eschea === "3") {
        var eschel = 7;
        console.log("Esche Anzeige: " + eschel)
      }



      if (beifussa === "0") {
      console.log("lol")
      }
      if (beifussa === "0-1") {
      console.log("lol")
      }
      if (beifussa === "1") {
      console.log("lol")
      }
      if (beifussa === "1-2") {
      console.log("lol")
      }
      if (beifussa === "2") {
      console.log("lol")
      }
      if (beifussa === "2-3") {
      console.log("lol")
      }
      if (beifussa === "3") {
      console.log("lol")
      }



      if (birkea === "0") {
      console.log("lol")
      }
      if (birkea === "0-1") {
      console.log("lol")
      }
      if (birkea === "1") {
      console.log("lol")
      }
      if (birkea === "1-2") {
      console.log("lol")
      }
      if (birkea === "2") {
      console.log("lol")
      }
      if (birkea === "2-3") {
      console.log("lol")
      }
      if (birkea === "3") {
      console.log("lol")
      }



      if (greasera === "0") {
      console.log("lol")
      }
      if (greasera === "0-1") {
      console.log("lol")
      }
      if (greasera === "1") {
      console.log("lol")
      }
      if (greasera === "1-2") {
      console.log("lol")
      }
      if (greasera === "2") {
      console.log("lol")
      }
      if (greasera === "2-3") {
      console.log("lol")
      }
      if (greasera === "3") {
      console.log("lol")
      }




      if (roggena === "0") {
      console.log("lol")
      }
      if (roggena === "0-1") {
      console.log("lol")
      }
      if (roggena === "1") {
      console.log("lol")
      }
      if (roggena === "1-2") {
      console.log("lol")
      }
      if (roggena === "2") {
      console.log("lol")
      }
      if (roggena === "2-3") {
      console.log("lol")
      }
      if (roggena === "3") {
      console.log("lol")
      }



      if (erlea === "0") {
      console.log("lol")
      }
      if (erlea === "0-1") {
      console.log("lol")
      }
      if (erlea === "1") {
      console.log("lol")
      }
      if (erlea === "1-2") {
      console.log("lol")
      }
      if (erlea === "2") {
      console.log("lol")
      }
      if (erlea === "2-3") {
      console.log("lol")
      }
      if (erlea === "3") {
      console.log("lol")
      }



      if(hasell === 3){
          document.getElementById('hasel').id = 'anzeige2';
      }
      if(hasell === 1){
          document.getElementById('hasel').id = 'none';
      }
      if(hasell === 2){
          document.getElementById('hasel').id = 'anzeige1';
      }
      if(hasell === 4){
          document.getElementById('hasel').id = 'anzeige3';
      }
      if(hasell === 5){
          document.getElementById('hasel').id = 'anzeige4';
      }
      if(hasell === 6){
          document.getElementById('hasel').id = 'anzeige5';
      }
      if(hasell === 7){
          document.getElementById('hasel').id = 'anzeige6';
      }






      if(gräßerl === 3){
          document.getElementById('Gräßer').id = 'anzeige2';
      }
      if(gräßerl === 1){
          document.getElementById('Gräßer').id = 'none';
      }
      if(gräßerl === 2){
          document.getElementById('Gräßer').id = 'anzeige1';
      }
      if(gräßerl === 4){
          document.getElementById('Gräßer').id = 'anzeige3';
      }
      if(gräßerl === 5){
          document.getElementById('Gräßer').id = 'anzeige4';
      }
      if(gräßerl === 6){
          document.getElementById('Gräßer').id = 'anzeige5';
      }
      if(gräßerl === 7){
          document.getElementById('Gräßer').id = 'anzeige6';
      }







      if(beifussl === 3){
          document.getElementById('beifuss').id = 'anzeige2';
      }
      if(beifussl === 1){
          document.getElementById('beifuss').id = 'none';
      }
      if(beifussl === 2){
          document.getElementById('beifuss').id = 'anzeige1';
      }
      if(beifussl === 4){
          document.getElementById('beifuss').id = 'anzeige3';
      }
      if(beifussl === 5){
          document.getElementById('beifuss').id = 'anzeige4';
      }
      if(beifussl === 6){
          document.getElementById('beifuss').id = 'anzeige5';
      }
      if(beifussl === 7){
          document.getElementById('beifuss').id = 'anzeige6';
      }





      if(roggenl === 1){
          document.getElementById('roggen').id = 'none';
      }
      if(roggenl === 2){
          document.getElementById('roggen').id = 'anzeige1';
      }
      if(roggenl === 3){
          document.getElementById('roggen').id = 'anzeige2';
      }
      if(roggenl === 4){
          document.getElementById('roggen').id = 'anzeige3';
      }
      if(roggenl === 5){
          document.getElementById('roggen').id = 'anzeige4';
      }
      if(roggenl === 6){
          document.getElementById('roggen').id = 'anzeige5';
      }
      if(roggenl === 7){
          document.getElementById('roggen').id = 'anzeige6';
      }




      if(birkel === 3){
          document.getElementById('birke').id = 'anzeige2';
      }
      if(birkel === 1){
          document.getElementById('birke').id = 'none';
      }
      if(birkel === 2){
          document.getElementById('birke').id = 'anzeige1';
      }
      if(birkel === 4){
          document.getElementById('birke').id = 'anzeige3';
      }
      if(birkel === 5){
          document.getElementById('birke').id = 'anzeige4';
      }
      if(birkel === 6){
          document.getElementById('birke').id = 'anzeige5';
      }
      if(birkel === 7){
          document.getElementById('birke').id = 'anzeige6';
      }




      if(ambrosial === 3){
          document.getElementById('ambrosia').id = 'anzeige2';
      }
      if(ambrosial === 1){
          document.getElementById('ambrosia').id = 'none';
      }
      if(ambrosial === 2){
          document.getElementById('ambrosia').id = 'anzeige1';
      }
      if(ambrosial === 4){
          document.getElementById('ambrosia').id = 'anzeige3';
      }
      if(ambrosial === 5){
          document.getElementById('ambrosia').id = 'anzeige4';
      }
      if(ambrosial === 6){
          document.getElementById('ambrosia').id = 'anzeige5';
      }
      if(ambrosial === 7){
          document.getElementById('ambrosia').id = 'anzeige6';
      }








      if(erlel === 3){
          document.getElementById('erle').id = 'anzeige2';
      }
      if(erlel === 1){
          document.getElementById('erle').id = 'none';
      }
      if(erlel === 2){
          document.getElementById('erle').id = 'anzeige1';
      }
      if(erlel === 4){
          document.getElementById('erle').id = 'anzeige3';
      }
      if(erlel === 5){
          document.getElementById('erle').id = 'anzeige4';
      }
      if(erlel === 6){
          document.getElementById('erle').id = 'anzeige5';
      }
      if(erlel === 7){
          document.getElementById('erle').id = 'anzeige6';
      }





      if(eschel === 3){
          document.getElementById('esche').id = 'anzeige2';
      }
      if(eschel === 1){
          document.getElementById('esche').id = 'none';
      }
      if(eschel === 2){
          document.getElementById('esche').id = 'anzeige1';
      }
      if(eschel === 4){
          document.getElementById('esche').id = 'anzeige3';
      }
      if(eschel === 5){
          document.getElementById('esche').id = 'anzeige4';
      }
      if(eschel === 6){
          document.getElementById('esche').id = 'anzeige5';
      }
      if(eschel === 7){
          document.getElementById('esche').id = 'anzeige6';
      }




    }
};
xhttp.open("GET", "https://beni1228-api.herokuapp.com/s31fg.json", true);
xhttp.send();








function mehranzeigen(){
      document.getElementById('mehr').id = 'weniger';
};
function wenigeranzeigen() {
   document.getElementById('weniger').id = 'mehr';
}
