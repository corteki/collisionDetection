import {Circle} from '../entities/Circle.ts';

type elementData = {
    x: number, 
    y: number,
    r: number,
    ref: Circle;
}

export class CollissionDetection {
    public checkCollisions(
        x1: number, y1: number, r1: number, 
        x2: number, y2: number, r2: number, 
        ref: Circle) 
        {
            let dx = x1 - x2;
            let dy = y1 - y2;
            let distance = Math.sqrt((dx * dx) + (dy * dy));
            if(distance < r1 + r2) {
                let vx = ref.xVelocity;
                let vy = ref.yVelocity;
                ref.xVelocity = -vx;
                ref.yVelocity = -vy;
            }
        }
}