///  i want to make a growing plant/ tree from zero. each new branch should grow slowly, old
// branches will be drawen in full size. 
//the angle should slowly unfold from bottom to top
// each new branch should start after some time
// i want to make the branches folding out level after level...


let t, t1, t2 //this are the tree-objects
let da, db, dc //this i need for colors and wind movements


function setup() {
  createCanvas(windowWidth, windowHeight);
  t = new branch(random(height / 7, height / 6))
  t1 = new branch(random(height / 7, height / 6))
  t2 = new branch(random(height / 7, height / 6))

}

function draw() {

  background(0);


  push()
  translate(width / 2, height - 30)

  t.show()
  pop()
  push()
  translate(-width / 4, 10)
  t1.show()
  pop()
  push()
  translate(width / 2, 15)
  t2.show()
  pop()
}

class branch {
  constructor(size) {
    this.next = [] //here will be next branches stored
    this.size = random(0.5, 0.8) * size
    this.qwe = 0.1
    this.angle = sin(frameCount * 0.5 + HALF_PI * this.size) * 1.5
    this.fAngle = 0; //for folding out
    
    if (this.size > 10) {
      const branches = this.size < 11 ?
        floor(random(1, 3)) :
        floor(random(2, 4))


      for (let i = 0; i < branches; i++) {
        this.next.push(new branch(this.size))
        if (i > 0)
          this.next[i].angle = sin(frameCount + this.size) * 6
        //when we have more than one branch on one level --> maximize angle            
 
      }
    }

    // when the last element in the array chain than this.next.length==0
  }

  show() {
    if (this.qwe < 0.5) this.qwe += 0.017
    push()
    da = sin(frameCount * 0.094 - this.size) / this.size * 3;
    db = -cos(frameCount * 0.152 + PI / this.size) / this.size * 3;
    dc = sin(-frameCount * 0.13 + this.size + this.fAngle) / this.size;

    if (this.next.length !== 0) {
      stroke(da * 50 + 150, -db * 100 + 150, dc * 100 + 150, 150)
      if (this.fAngle !== this.angle) this.fAngle += (this.angle - this.fAngle) / 64
      this.folding(this.qwe);


    } else {
      stroke(50 + db * 50, 120 - (dc+sin(frameCount/3+1)) * 70, 96 + (da+cos(frameCount-2)) * 60, 90);
      strokeWeight(2)
      fill(90 + db * 50, 120 - (da-cos(frameCount/4))* 30, 126 + (dc-sin(frameCount/2)) * 30, 110);
      ellipse(0, 0, this.qwe * 30, this.qwe * 30)
      //leaves

    }
    //changing collors



    if (this.qwe > 0.49) {
      push()
      for (let i in this.next) {

        this.next[i].show()
        pop()
      }
      pop()
    }


  }
  folding(delta) {
    //here we draw branches with curvature
    //


    const tempSize = this.size * delta * 2

    rotate((delta * this.fAngle) / 5 + (da + db) / tempSize + dc)

    const elwe = this.qwe * this.size / 3
    //what is actually elwe? size of the circle?
    if (elwe > 3) {

      strokeWeight(1);

      let qq = abs((0.5-this.qwe)) * 512
      for (let i = 0; i < tempSize / 5; i++) {

        let qw = cos((tempSize - i) * 0.043 + frameCount*0.21+this.fAngle+this.size) + sin(i * 0.17 + frameCount * 0.51+this.angle)
        fill(110 + (-qw + dc*2+(i % 4)/4) * 50 + qq,
             qq * 2 + 150 - ((i % 6)/2 - db*2 - da+ qw) * 60,
             qq + 120 + (-da*2 + db+dc-(i % 5)/2) * 75,
             170 - (db + qw) * 40);
        ellipse(0, -i * 5, elwe - (da - qw - db) + 2, elwe + (qw + db - dc) * 2 + 2)
      }
    } else {
      strokeWeight(elwe);
      line(0, 0, 0, -tempSize)

    }



    if (delta > 0.09) {
      translate(0, -tempSize)
      this.folding(delta - (1 - delta) / 5)
    }


  }

  drawBranch() {



  }
  getNewBranch() {

  }

}