class Dustbin
{
    constructor(x, y, width, height)
    {
        var options={
            isStatic : true,
        }

        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 215
        this.WallThickness = 20;
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        
        World.add(world, this.body);
    }

    display()
    {
        var dustbinPos = this.body.position;
        push();
        translate(dustbinPos.x, dustbinPos.y);
        imageMode(CENTER);
        /*strokeWeight(5);
        stroke('#00B7D1');
        fill('#00B7D1');*/
        image(this.image, 0, 0, this.width, this.height)
        pop();
    }
}
