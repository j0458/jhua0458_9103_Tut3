let coreElements = []
let starDegree = 45
let overallTexture
let starPoints = []
let num = 1
let Decryption = false
let haveStar = false
function preload() {
	overallTexture = loadImage("assets/Texture.png")
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	// create a meteor layer
	meteorLayer = createGraphics(windowWidth, windowHeight);
	drawMeteorLayer();
	textSize(32);

	background(0);
	angleMode(DEGREES);
	//Background with random little stars
	for (let i = 0; i <= 500; i++) {

		starPoints.push(createVector(random(width), random(height), random(0, width / 320)));
	}

}

function draw() {
	background(0, 120)
	for (let starElement of starPoints) {
		noStroke()
		fill(255, 155)
		circle(starElement.x, starElement.y, starElement.z)
	}
	//meteor img layer
	image(meteorLayer, 0, 0);

	stroke(255);
	//Display num status
	text("num = " + num, 50, 100);

	push();

	translate(width / 2, height / 2);
	let totalR = width / 6

	//Draw a random star at the bottom for decoration
	rotate(mouseX / 10)
	drawStar(0, 0, totalR / 1.9, mouseX)


	//Draw all the concentric circles
	coreElements = new createMultipleCircle(0, 0, totalR)
	//Different num numbers display different main elements
	if (num == 1) {
		coreElements.drawLine()
		coreElements.diverPoint()
		coreElements.randomPoint()
		coreElements.drawTriangle(90)
		coreElements.drawTriangle(-90)
		coreElements.drawMoon()
		coreElements.lineCircle()
		coreElements.decorationCircle()
	}
	if (num == 2) {
		// coreElements.drawLine()
		coreElements.diverPoint()
		coreElements.randomPoint()
		coreElements.drawTriangle(90)
		coreElements.drawTriangle(-90)
		coreElements.drawMoon()
		coreElements.lineCircle()
		coreElements.decorationCircle()
	}
	if (num == 3) {
		// coreElements.drawLine()
		// coreElements.diverPoint()
		// coreElements.randomPoiewqnt()
		coreElements.drawTriangle(90)
		coreElements.drawTriangle(-90)
		coreElements.drawMoon()
		coreElements.lineCircle()
		coreElements.decorationCircle()
	}
	if (num == 4) {
		// coreElements.drawLine()
		// coreElements.diverPoint()
		// coreElements.randomPoiewqnt()
		// coreElements.drawTriangle(90)
		// coreElements.drawTriangle(-90)
		coreElements.drawMoon()
		// coreElements.lineCircle()
		coreElements.decorationCircle()
	}

	//draw the star in the middle
	if (haveStar) {
		drawMiddleStar(-totalR / 9, 0, totalR / 9, 0)
	}
	if (Decryption == false) {
		fill(0)
		circle(0, 0, totalR)
	}
}
pop()
//Use multiple mode to add a layer of texture
push()
blendMode(MULTIPLY)
image(overallTexture, 0, 0, width, height)
pop()


//As the canvas size changes
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup()
}

function keyPressed() {
	if (key === 'q' || key === 'Q') {
		num = 1;
	} else if (key === 'w' || key === 'W') {
		num = 2;
	} else if (key === 'e' || key === 'E') {
		num = 3;
	} else if (key === 'r' || key === 'R') {
		num = 4;
	}
}
function mousePressed() {
	let randomParameter = random()
	if (randomParameter < 0.5) {
		haveStar = true
	} else {
		haveStar = false
	}
	Decryption = true
}
function mouseReleased() {
	Decryption = false
	haveStar = false
}








