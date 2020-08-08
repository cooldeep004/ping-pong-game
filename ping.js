var padheight=150;
var padwidth=30;
var ballradius=25;
var halfpadheight=padheight/2;
var speedofpad1=0;
var speedofpad2=0;
var positionofpad1=300;
var positionofpad2=300;
var toppositionofball=355;
var leftpositionofball=800;
var topspeedofball=10;
var leftspeedofball=0;
var score1=0;
var score2=0;


function startball()
{
    toppositionofball=355;
    leftpositionofball=800;
    if(Math.random()<0.5)
    {
        var side=1;
    } 
    else{
        var side=-1;
    }
    leftspeedofball=side*(Math.random()*6+5);
    topspeedofball=Math.random()*6+5;
}

document.addEventListener('keydown',function(e){
    if(e.keycode==87||e.which==87)
    {
        speedofpad1=-10;
    }
    if(e.keycode==83||e.which==83)
    {
        speedofpad1=10;
    }
    if(e.keycode==38||e.which==38)
    {
        speedofpad2=-10;
    }
    if(e.keycode==40||e.which==40)
    {
        speedofpad2=10;
    }
})
document.addEventListener('keyup',function(e){
    if(e.keycode==87||e.which==87)
    {
        speedofpad1=0;
    }
    if(e.keycode==83||e.which==83)
    {
        speedofpad1=0;
    }
    if(e.keycode==38||e.which==38)
    {
        speedofpad2=0;
    }
    if(e.keycode==40||e.which==40)
    {
        speedofpad2=0;
    }
})
window.setInterval(function show(){
positionofpad1+=speedofpad1;
positionofpad2+=speedofpad2;

toppositionofball+=topspeedofball;
leftpositionofball+=leftspeedofball;


if(positionofpad1<=1)
positionofpad1=1;
if(positionofpad2<=1)
positionofpad2=1;

if(positionofpad1>=window.innerHeight-padheight)
positionofpad1=window.innerHeight-padheight;
if(positionofpad2>=window.innerHeight-padheight)
positionofpad2=window.innerHeight-padheight;

if(toppositionofball<=10 || toppositionofball>=window.innerHeight-ballradius)
topspeedofball=-topspeedofball;

if(leftpositionofball<=padwidth)
{
if(toppositionofball>positionofpad1 && toppositionofball<positionofpad1+padheight)
{
    leftspeedofball=-leftspeedofball
}
else
{
    score2++;
    var audio=new Audio('sound.mp3');
    audio.play();
startball();
}
}

if(leftpositionofball>=window.innerWidth-padwidth-ballradius)
{
if(toppositionofball>positionofpad2 && toppositionofball<positionofpad2+padheight)
{
    leftspeedofball=-leftspeedofball
}
else
{
    score1++;
    var audio=new Audio('sound.mp3');
    audio.play();
startball();
}
}


document.getElementById('pad1').style.top=positionofpad1+'px';
document.getElementById('pad2').style.top=positionofpad2+'px';

document.getElementById('ball').style.top=toppositionofball+'px';
document.getElementById('ball').style.left=leftpositionofball+'px';

document.getElementById('score1').innerHTML=score1.toString();
document.getElementById('score2').innerHTML=score2.toString();
},1000/60)
