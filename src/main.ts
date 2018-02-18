import {Canvas} from './entities/Canvas.ts';

class Application {
    static main(): void {
        const canvas = new Canvas();
        const canvasElement = canvas.initialize();
        canvas.animate();
    }
}

window.onload = () => Application.main();
