var chos = document.getElementById('chosen');
var i = document.getElementById('i1');
var j = document.getElementById('i2');
var k = document.getElementById('i3');
var a = document.getElementsByTagName('div')
var p = document.getElementById("plus");
var m = document.getElementById("moin");
var n = document.getElementById("num");

var pi = document.getElementById("p1");
var pii = document.getElementById("p2");
var piii = document.getElementById("p3");
var p = document.getElementById("prix");

var w;


function select() {
  chos.src = i.src;
  n.innerHTML = 1;
  p.innerHTML = pi.innerHTML + ("dt");
  w = pi.innerHTML;
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select2() {
  chos.src = j.src;
  n.innerHTML = 1
  p.innerHTML = pii.innerHTML + ("dt");
  w = pii.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select3() {

  chos.src = k.src;
  n.innerHTML = 1
  p.innerHTML = piii.innerHTML + ("dt");
  w = piii.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}

function plus() {

  n.innerHTML++


  p.innerHTML = n.innerHTML * w + ("dt")
  
}
function moin() {
  if (n.innerHTML > 1) {
    n.innerHTML--

    p.innerHTML = (n.innerHTML * w) + ("dt")
  }
  else { n.innerHTML = 1 }


}
function sup() {
  document.getElementsByClassName('box2')[0].style.display = 'none';

}