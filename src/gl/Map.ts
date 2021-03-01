import {Geometry} from './geometry/Geometry';//Geometry抽象基类
//Map类
export class Map{
    _name:string;
    _canvas:HTMLCanvasElement;//canvas dom
    _ctx:CanvasRenderingContext2D;//2d绘图对象
    _geometries:Geometry[]=[];//几何数组，用来存贮几何数据
    
    //构造函数
    constructor(canvasId:string){
        this._name="gl地图";
        //获取canvas元素
        this._canvas=document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx=this._canvas.getContext("2d");//绘图对象
        
        //设置this指针
        this._onDoubleClick=this._onDoubleClick.bind(this);
        // this._onMouseDown = this._onMouseDown.bind(this);
        // this._onMouseMove = this._onMouseMove.bind(this);
        // this._onMouseUp = this._onMouseUp.bind(this);
        this._onWheel = this._onWheel.bind(this);
        //绑定事件
        this._canvas.addEventListener("dblclick", this._onDoubleClick);//鼠标双击事件
        // this._canvas.addEventListener("mousedown", this._onMouseDown);//鼠标按下事件
        // this._canvas.addEventListener("mousemove", this._onMouseMove);//鼠标移动事件
        // this._canvas.addEventListener("mouseup", this._onMouseUp);//鼠标松开事件
        this._canvas.addEventListener("wheel", this._onWheel);//鼠标滚轮事件
    }
    /*
    *添加几何到地图
    */
    addGeometry(geometry: Geometry){
        geometry.draw(this._ctx);//绘制几何图形
        this._geometries.push(geometry); 
    }
    /*
    *拖动地图
    */
    _onMouseDown(event) {
        // this._drag.flag = true;
        // this._drag.start.x = event.x;
        // this._drag.start.y = event.y;
    }

    /*
    *地图重新绘制几何方法
    */
    redraw(){
        this._ctx.save();//保存当前绘图状态
        this._ctx.setTransform(1,0,0,1,0,0);//重置矩阵
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);//清除画布,会清除当前所有绘图状态
        this._ctx.restore();//重置为上一个绘图状态
        //绘制地图几何
        this._geometries.forEach(geometry => geometry.draw(this._ctx));
    }

    /*
    *双击放大地图几何
    */
   _onDoubleClick(event){
        this._ctx.scale(2, 2);
        this.redraw();
    }
    /*
    *滚轮缩放地图
    */
   _onWheel(event){
        event.preventDefault();
        let scale = 1;//初始化缩放比例
        const sensitivity = 100;//缩放地图灵敏度
        const delta = event.deltaY / sensitivity;//地图缩放力度
        if (delta < 0){//鼠标向上滚动，则放大地图
            scale =  scale * (delta * -2);
        }
        else {//鼠标向下滚动，则缩小地图
            scale = scale / (delta * 2);
        }
        const matrix = (this._ctx as any).getTransform();
        const a1 = matrix.a, e1 = matrix.e, x1 = event.x, x2 = x1; //放大到中心点 x2 = this._canvas.width / 2
        const e = (x2 - scale * (x1 - e1) - e1) / a1;
        const d1 = matrix.d, f1 = matrix.f, y1 = event.y, y2 = y1; //放大到中心点 y2 = this._canvas.height / 2
        const f = (y2 - scale * (y1 - f1) - f1) / d1;
        this._ctx.transform( scale, 0, 0, scale, e, f );

        this.redraw();
    }
    

}
