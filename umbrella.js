class Umbrella {
    constructor(x, y,r) {

        var options ={

            restitution:0.4,
            isStatic:true,
            friction:0.1
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);   
        this.image = loadImage("img/walking_1.png");

        this.img1 = loadImage('thunderbolt/1.png');
        this.img2 = loadImage("thunderbolt/2.png");
        this.img3 = loadImage('thunderbolt/3.png');
        this.img4 = loadImage('thunderbolt/4.png');       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,300,440,350,350);

        if(frameCount % 40 ===0){


   
            var rand  = Math.round(random(0,4));
            switch(rand){
        
                case 1:image(this.img1,200,100,400,300);
                break;
                case 2:image(this.img2,200,100,400,300);
                break;
                case 3:image(this.img3,200,100,400,300);
                break;
                case 4:image(this.img4,200,100,400,300);
                default:break;
        
            } }
        


    }

};
