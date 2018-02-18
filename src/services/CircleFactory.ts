import {Circle} from '../entities/Circle.ts';

export function CircleFactory(amount: number, maxX: number, maxY: number, context: CanvasRenderingContext2D): Circle[] {
    let circles: Circle[] = [];
    let radius = 40;
    let marge = 10;
    for(let i = 0; i<amount; i++) {
        let spawnX = (Math.random() * maxX - marge);
        let spawnY = (Math.random() * maxY - marge);
        
        if(spawnX > maxX) {
            spawnX = spawnX - radius;
        } else if (spawnX - radius <= marge) {
            spawnX = spawnX + radius;
        }

        if(spawnY > maxY) {
            spawnY = spawnY - radius;
        } else if (spawnY - radius <= marge) {
            spawnY = spawnY + radius;
        }

        circles.push(new Circle(spawnX, spawnY, radius, 0, context));
    }
    return circles;
}