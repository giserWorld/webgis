import {Map} from './gl/Map';
import {Point} from './gl/geometry/Point';
import {Polyline} from './gl/geometry/Polyline';
import {Polygon} from './gl/geometry/Polygon';

const map = new Map("foo");//地图对象
const point = new Point(100, 100);
map.addGeometry(point);

const polyline = new Polyline([[150, 100], [250, 200]]);
map.addGeometry(polyline);

const polygon = new Polygon([[[150, 300], [250, 400], [180, 450]]]);
map.addGeometry(polygon);

export default class index{};
