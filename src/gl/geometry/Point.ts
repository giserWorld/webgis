import { Geometry } from "./Geometry";

//点几何类
export class Point extends Geometry{
    static RADIUS:number=10;//圆点半径
    private _x:number;//私有变量只有该类内部可以访问
    private _y:number;
    //构造函数
    constructor(x:number,y:number){
        super();
        this._x=x;
        this._y=y;
    }
    //重写绘制方法
    draw(ctx:CanvasRenderingContext2D){
        ctx.save();//保存初始化状态
        ctx.strokeStyle = "#ff0000";
        ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        //绘制
		ctx.arc(this._x,this._y,Point.RADIUS,0,2*Math.PI,true);
		ctx.fill();
		ctx.stroke();
        ctx.restore();//重置为初始化状态
    }
}