import {Geometry} from './geometry/Geometry';//Geometry抽象基类
//Map类
export class Map{
    _canvas:HTMLCanvasElement;//canvas dom
    _ctx:CanvasRenderingContext2D;//2d绘图对象
    _geometries:Geometry[]=[];//几何数组，用来存贮几何数据
    //构造函数
    constructor(canvasId:string){
        //获取canvas元素
        this._canvas=document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx=this._canvas.getContext("2d");//绘图对象
        
        //绑定事件
        //this._onDoubleClick=this._onDoubleClick.bind(this);
        // this._canvas.addEventListener("dblclick", this._onDoubleClick);//鼠标双击事件
        // this._canvas.addEventListener("mousedown", this._onMouseDown);//鼠标按下事件
        // this._canvas.addEventListener("mousemove", this._onMouseMove);//鼠标移动事件
        // this._canvas.addEventListener("mouseup", this._onMouseUp);//鼠标松开事件
        // this._canvas.addEventListener("wheel", this._onWheel);//鼠标滚轮事件
    }
    /*
    *添加几何到地图
    */
    addGeometry(geometry: Geometry){
        geometry.draw(this._ctx);//绘制几何图形
        this._geometries.push(geometry); 
    }
}
