import {Circle} from './Circle.ts';
import {CircleFactory} from '../services/CircleFactory.ts';
import {CollissionDetection} from '../services/collisionDetection.ts';

export class Canvas {
    private elements: Circle[];
    public canvas: HTMLCanvasElement;
    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.animate = this.animate.bind(this);
    }

    public initialize(): HTMLCanvasElement {  
        this.configureCanvas(); 
        this.elements = CircleFactory(20, this.canvas.width, this.canvas.height, this.context);
        return this.canvas;
    }

    private get context() {
        return this.canvas.getContext('2d');
    }

    public animate() {
        requestAnimationFrame(this.animate);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.compareElementPositions(this.elements);  
    }

    private compareElementPositions(elements: Circle[]) {
        let detector = new CollissionDetection();
        elements.forEach((currentElement: Circle, i: number) => {
            let x1 = currentElement.xCoord;
            let y1 = currentElement.yCoord;
            let r1 = currentElement.radiusValue;
            elements.forEach((element: Circle, j: number) => {
                if(i !== j) {
                    let x2 = this.elements[j].xCoord;
                    let y2 = this.elements[j].yCoord;
                    let r2 = this.elements[j].radiusValue;
                    detector.checkCollisions(x1, y1, r1, x2, y2, r2, element);
                    }
                })
            currentElement.render();
        });
    }

    private configureCanvas(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}