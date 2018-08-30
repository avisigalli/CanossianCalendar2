function suona(audio){
    var suono=document.getElementById(audio);
    suono.play();
}
function pausa(audio){
    var suono=document.getElementById(audio);
    suono.pause();
}
function ferma(audio){
    var suono=document.getElementById(audio);
    suono.pause();
    suono.currentTime=0;    
}
function showModal(quale) {
  var modal = document.getElementById(quale);
  modal.show();
}
function closeModal(quale) {
  var modal = document.getElementById(quale);
  modal.hide();
}
function toggle(cosa) {
    var x = document.getElementById(cosa);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 