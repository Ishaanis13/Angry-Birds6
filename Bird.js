class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trijectry = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

      super.display();
      if (this.body.velocity.x>10 &&this.body.position.x>200) {
          var position = [this.body.position.x, this.body.position.y];
          this.trijectry.push(position)
      }
      for (var smoke = 0; smoke < this.trijectry.length;smoke = smoke+1 ) {

          image(this.smokeImage, this.trijectry[smoke][0], this.trijectry[smoke][1]);

      }
  }
}
