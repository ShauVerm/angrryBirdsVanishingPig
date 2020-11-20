class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);

    // RGBA -> Alpha- visibility transparent/completely visible(255) to opaque/translucent(0)
    // #fff -> Hex value
    this.visibility = 255; // 255 completely visible
    this.image = loadImage("sprites/enemy.png");
  }

  display(){

    //display of pig is getting called again and again in function draw() of sketch.js -> coz we want to see speed of pig changing continously
   // console.log(this.body.speed);
 
  //var pigVelocity
   
    if(this.body.speed<3.0){
      // using baseClasses display fun to display Pig
      super.display();

    }else{
      World.remove(world, this.body);

      push ();
      // decreasing it by 5 everytime
      this.visibility = this.visibility -5;
      tint (255, this.visibility);

      pop ();
    }
    
    }                

};