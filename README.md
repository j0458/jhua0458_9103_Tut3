# jhua0458_9103_Final
## How to Interact
The work as a whole achieves dynamic effects through rotation. The specific interactive effects are as follows:

- **Use different keyboard keys to change the main element's state：** Pressing any of the Q, W, E, or R keys triggers changes in the main visual element, adding distinct layers and interactivity based on the key pressed.

- **Random stars appear in the center:** By clicking the mouse, twinkling stars will appear randomly in the center circle, increasing the overall fun and uncertainty.

- **Moon Dynamics (`mouseX`):** The movement of the mouse causes the main visual graphic elements to rotate.

- **Six gradient circle dynamics (`mouseX`):** When `mouseX` increases, the small circle in the outer circle will shrink towards the center. Conversely, when `mouseX` decreases, the small circle in the outer circle will spread out.

- **Dynamic lines radiating outwards (`mouseX`)(`mouseY`):** When the mouse moves horizontally or vertically, the lines radiating outward will rotate and change accordingly, adding dynamic interest to the picture.

## Details of My Individual Approach to Animating the Group Code

### Choice
I chose **User Input** to drive my personal code.

### Which properties of the image will be animated and how
？

## Inspiration
My work is inspired by the following two works:

- **Picture 1:** Compared with the monotony brought by the regular rotation of lines in the plane, the dynamic simulation of light scattering can make the rotation of lines show a stronger sense of space and rhythm. By changing the position of the mouse, changing the length and rotation angle of the line, the overall visual effect breaks the plane limitation of two-dimensional rotation.

- **Picture 2:** Compared with the mechanical and monotonous feeling brought by circular elements rotating in a single direction, multiple circular elements rotating in different directions at the same time can visually create a dynamic sense of order and staggered space. It guides the viewer to feel the fluidity and complexity of time while gazing, as if they are in a concrete "time field". In this way, the interface not only becomes a visual carrier, but also symbolizes the experience of the passage of time.

![Picture 1 – Line rotation](images/Picture1.png)  
**Picture 1:** Line rotation ([Source](https://openprocessing.org/sketch/863365))

![Picture 2 – Time Spiral](images/Picture2.png)  
**Picture 2:** Time Spiral ([Source](https://au.pinterest.com/pin/2111131072429523/))

 ## Technical Explanation

### Use different keyboard keys to change the main element's state.
First, set the main visual rendering (based on the num value). Depending on the value of num, different drawing function combinations in coreElements are triggered to display various graphic elements. Then, through key detection (keyPressed() function), when the user presses the Q, W, E, or R key, the program assigns the variable num to the corresponding number (1 to 4) to switch the current primary visual state.

```
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
```

### Random stars appear in the center.
This code implements the mouse interaction logic in the p5.js sketch. When the user presses the mouse (mousePressed()), a random value between 0 and 1 is generated. If the value is less than 0.5, the boolean variable haveStar is set to true and the Decryption flag is enabled, which conditionally triggers the rendering of the star.

When the mouse is released (mouseReleased()), both haveStar and Decryption are reset to false, disabling the star effect and restoring the default visual state. This way, a mouse click has a 50% chance of displaying a star.

```
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
```