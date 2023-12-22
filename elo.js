const url = new URLSearchParams(window.location.search);
const nickname = url.get('user');

var elodisplay = document.getElementById('elo');
var levelpic = document.getElementById('levelpic');

updateelo();
setInterval(updateelo, 20000);
function updateelo(){
  var oReq = new XMLHttpRequest();
  oReq.open('GET', 'https://open.faceit.com/data/v4/players?nickname=' + nickname + '&game=cs2&apiKey=46586c7f-6c89-4a68-ad42-2d43bbee8f96');
  oReq.setRequestHeader('accept', 'application/json');
  oReq.setRequestHeader('Authorization', 'Bearer 46586c7f-6c89-4a68-ad42-2d43bbee8f96');
  oReq.send();
  oReq.onload = function() {
    elo = JSON.parse(oReq.responseText).games.cs2.faceit_elo;
    levelpic.src = "https://cdn-frontend.faceit.com/web/960/src/app/assets/images-compress/skill-icons/skill_level_"+ JSON.parse(oReq.responseText).games.csgo.skill_level + "_svg.svg";
    elodisplay.innerText = elo;
  }
}
