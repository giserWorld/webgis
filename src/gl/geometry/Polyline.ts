import { Geometry } from "./Geometry";

//线几何类
export class Polyline extends Geometry{
    private _coodinates:number[][];//[[1,2],[2,3]]
    constructor(coodinates:number[][]){
        super();
        this._coodinates=coodinates;
    }
    //绘制几何
    draw(ctx:CanvasRenderingContext2D){
        ctx.save();
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;
		//绘制
        ctx.beginPath();
        this._coodinates.forEach((point,idx)=>{
            let x:number=point[0],y:number=point[1];
            if(idx===0){
                ctx.moveTo(x,y);
            }
            else{
                ctx.lineTo(x,y)
            }
        });
        ctx.stroke();
        ctx.restore();
    }
}