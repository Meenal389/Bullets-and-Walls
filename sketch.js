var b1,b2,b3,b4;
var wall1,wall2,wall3,wall4;
var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight3,weight4;
var t1,t2,t3,t4;

function setup() {
  createCanvas(1600,500);

  speed1=random(223,321);
  weight1=random(30,52);
  speed2=random(223,321);
  weight2=random(30,52); 
  speed3=random(223,321);
  weight3=random(30,52);
  speed4=random(223,321);
  weight4=random(30,52);


  t1=random(25,83);
  wall1=createSprite(1500,100,t1,70);
  wall1.shapeColor="brown";
  b1=createSprite(50,100,20,10);
  b1.shapeColor="white";

  t2=random(25,83);
  wall2=createSprite(1500,200,t2,70);
  wall2.shapeColor="brown";
  b2=createSprite(50,200,20,10);
  b2.shapeColor="white";

  t3=random(25,83);
  wall3=createSprite(1500,300,t3,70);
  wall3.shapeColor="brown";
  b3=createSprite(50,300,20,10);
  b3.shapeColor="white";

  t4=random(25,83);
  wall4=createSprite(1500,400,t4,70);
  wall4.shapeColor="brown";
  b4=createSprite(50,400,20,10);
  b4.shapeColor="white";

  b1.velocityX=speed1;
  b2.velocityX=speed2;
  b3.velocityX=speed3;
  b4.velocityX=speed4;

}

function draw() {
  background("black");  
  drawSprites();

  stroke("yellow");
  strokeWeight(3);
  line(0,50,1600,50);
  line(0,150,1600,150);
  line(0,250,1600,250);
  line(0,350,1600,350);
  line(0,450,1600,450);

  //Calling the hascollide() function

  if (hascollide (b1,wall1)){
    b1.velocityX=0;
    var d1=0.5*weight1*speed1*speed1/(t1*t1*t1);

    if(d1>10){
        wall1.shapeColor="red";
    }

    if(d1<10){
        wall1.shapeColor="green";
    }
  }

  if (hascollide (b2,wall1)){
    b2.velocityX=0;
    var d2=0.5*weight2*speed2*speed2/(t2*t2*t2);

    if(d2>10){
        wall2.shapeColor="red";
    }

    if(d2<10){
        wall2.shapeColor="green";
    }
  }
  
  if (hascollide (b3,wall3)){
    b3.velocityX=0;
    var d3=0.5*weight3*speed3*speed3/(t3*t3*t3);

    if(d3>10){
        wall3.shapeColor="red";
    }

    if(d3<10){
        wall3.shapeColor="green";
    }
  }
  if (hascollide (b4,wall4)){
    b4.velocityX=0;
    var d4=0.5*weight4*speed4*speed4/(t4*t4*t4);

    if(d4>10){
        wall4.shapeColor="red";
    }

    if(d4<10){
        wall4.shapeColor="green";
    }
  }
}
