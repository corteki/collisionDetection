export class Circle {
    private x: number;
    private y: number;
    private dx: number;
    private dy: number;
    private radius: number;
    private startPoint: number;
    private endPoint: number;
    public context: CanvasRenderingContext2D;

    constructor(x: number, y: number, radius: number, startPoint: number, context: CanvasRenderingContext2D, endPoint?: number) {
        this.x = x;
        this.y = y;
        this.dx = Math.random() * 4;
        this.dy = Math.random() * 4;
        this.radius = radius;
        this.startPoint = startPoint;
        this.endPoint = endPoint || Math.PI * 2;
        this.context = context;
    }
    
    public render(): void {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, this.startPoint, this.endPoint);
        this.context.fillStyle = 'blue';
        this.context.fill();
        this.detectWallCollision();
        this.incrementCoordinates();
    }

    private detectWallCollision() {
        if(this.x + this.radius > window.innerWidth  || this.x - this.radius < 0 ) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > window.innerHeight  || this.y - this.radius < 0 ) {
            this.dy = -this.dy;
        }
    }

    public get xCoord(): number {
        return this.x;
    }

    public get yCoord(): number {
        return this.y;
    }

    public get xVelocity(): number {
        return this.dx;
    }

    public get yVelocity(): number {
        return this.dy;
    }

    public get radiusValue(): number {
        return this.radius;
    }

    public set xVelocity(dx: number) {
        this.dx = dx;
    }

    public set yVelocity(dy: number) {
        this.dy = dy;
    }

    private incrementCoordinates() {
        this.x += this.dx;
        this.y += this.dy;
    }
}