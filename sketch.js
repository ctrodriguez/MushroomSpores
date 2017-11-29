function setup (){
    createCanvas(500,500);
    
}





function draw(){
    background("#6BD4E1");
        fill("#CFBB96");
    rect(240,350,40,250);
    fill("#A0522D");
    stroke("#000000");
    strokeWeight(2);
    ellipse(240,350,200,200);
    fill("#897b61");
    ellipse(random(width),random(height),50,50);
    ellipse(random(width),random(height),20,20);

}