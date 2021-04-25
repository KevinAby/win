const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";
var scoringSound;
var gameOver_Sound;

function preload(){

scoringSound = loadSound("jump.wav");
gameOver_Sound = loadSound("collided.wav");

}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    count<6
}
 
function draw() {
  background("purple");

  textSize(18);
  text("$ : "+score,20,40);
  fill("black");
 
  textSize(28);
  text("Turns : "+count,630,40);
  fill("lime");

  textSize(22);
  text("You have 5 chances to increase your score",200,20);
  fill("black");
  
  textSize(23)
  text(" 500 ", 5, 550);
  text(" -100 ", 80, 550);
  text(" -100 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 200 ", 320, 550);
  text(" -150 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" -200 ", 560, 550);
  text(" 600 ", 640, 550);
  text(" -300 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
 

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 80) 
              {
                  score=score+500;      
                  particle=null;
                  

                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 240 && particle.body.position.x > 80 ) 
              {
                    score = score - 100;
                    particle=null;
                    

                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 320 && particle.body.position.x > 240 )
              {
                    score = score + 500;
                    particle=null;
                   

                    if ( count>= 5)  gameState ="end";

              }      
              else if (particle.body.position.x < 400 && particle.body.position.x > 320 )
              {
                    score = score + 200;
                    particle=null;
                   

                    if ( count>= 5)  gameState ="end";

              }    
              else if (particle.body.position.x < 480 && particle.body.position.x > 400 )
              {
                    score = score - 150;
                    particle=null;
                   

                    if ( count>= 5)  gameState ="end";

              } 
              else if (particle.body.position.x < 560 && particle.body.position.x > 480 )
              {
                    score = score + 100;
                    particle=null;
                   

                    if ( count>= 5)  gameState ="end";

              }   
              else if (particle.body.position.x < 640 && particle.body.position.x > 560 )
              {
                    score = score - 200;
                    particle=null;
                   

                    if ( count>= 5)  gameState ="end";

              }  
              else if (particle.body.position.x < 720 && particle.body.position.x > 640 )
              {
                    score = score + 600;
                    particle=null;
                   

                    if ( count>= 5)  gameState ="end";

              }  
              else if (particle.body.position.x < 800 && particle.body.position.x > 720 )
              {
                    score = score - 300;
                    particle=null;
                   

                    if ( count>= 5)  gameState ="end";

              }  
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
   if ( gameState =="end") {
    
    fill("RED")
      textSize(90);
      text("GameOver", 150, 300);
      //return
    }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}