
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7;
var divisionHeight=300;
var particles=[]
var plinkos1=[]
var plinkos2=[]
var plinkos3=[]
var plinkos4=[]
  var divisions=[]
  var score=0
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
ground1=new Ground(400,745,800,10)
ground2=new Ground(475,890,10,800)
ground3=new Ground(390,890,10,800)
ground4=new Ground(290,890,10,800)
ground5=new Ground(190,890,10,800)
ground6=new Ground(90,890,10,800)
ground7=new Ground(10,890,10,800)

for(var j=40;j <=440;j=j+50)
{
    plinkos1.push(new Plinko(j,75,20));
}
for(var j=40;j <=440;j=j+50)
{
    plinkos2.push(new Plinko(j,175,20));
}
for(var j=40;j <=440;j=j+50)
{
    plinkos3.push(new Plinko(j,275,20));
}
for(var j=40;j <=440;j=j+50)
{
    plinkos4.push(new Plinko(j,375,20));
}




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill('white')
  textSize(32)
  text('SCORE :' + score ,10,50)
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()
  ground6.display()
  ground7.display()
 
  for(var j=0;j <plinkos1.length;j++)
  {
      plinkos1[j].display()
}
for(var j=0;j <plinkos2.length;j++)
{
    plinkos2[j].display()
}
for(var j=0;j <plinkos3.length;j++)
{
    plinkos3[j].display()
}
for(var j=0;j <plinkos4.length;j++)
{
    plinkos4[j].display()
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  
}
for(var j=0; j<particles.length;j++){
    if(particles[j]!=null){
particles[j].display()
    
    if(particles[j].body.position.y>600){
if(particles[j].body.position.x<100){
    score=score+500
    particles[j]=null
    
}
   
   
        if(particles[j].body.position.x>100 && particles[j].body.position.x<200){
            score=score+100
            particles[j]=null
            console.log('working')
}


    if(particles[j].body.position.x>201 && particles[j].body.position.x<400){
        score=score+200
        particles[j]=null
        
    }
    }
}
  drawSprites();
 
}
}



