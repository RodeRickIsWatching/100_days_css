1. animation不能通过同一个名字的动画以reverse来实现a->b 后再 b->a
   需要写两个动画

2. clip-path
按照路径裁剪
clip-path的前身是SVG, 所以，我们的坐标都是二维的。
其用法与svg基本没差，但是兼容性很差
.path {
    clip-path: polygon(5px 10px, 16px 3px, 16px 17px);
}

