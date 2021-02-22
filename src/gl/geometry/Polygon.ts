import { Geometry } from "./Geometry";
//面几何类
export class Polygon extends Geometry{
    //多环
    private _coodinates:number[][][];//rings[[[1,2],[2,3]],[[1,2],[1,2]]]
    constructor(coodinates:number[][][]){
        super();
        this._coodinates=coodinates;
    }
    //绘制几何
    draw(ctx:CanvasRenderingContext2D){
        ctx.save();
        ctx.strokeStyle = "#ff0000";
        ctx.fillStyle = "#ff0000";
        ctx.lineWidth = 2;
		//绘制
        ctx.beginPath();
        this._coodinates.forEach((ring)=>{
            ring.forEach((point,idx)=>{
                let x:number=point[0],y:number=point[1];
                if(idx===0){
                    ctx.moveTo(x,y);
                }
                else{
                    ctx.lineTo(x,y)
                }
            });
        });
        ctx.closePath();//闭合路径
		ctx.fill("evenodd");//填充路径
		ctx.stroke();//边框路径
        ctx.restore();
    }
}