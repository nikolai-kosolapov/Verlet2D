function PointMass(x, y, oldx, oldy, stat) {
    var self = this;
    self.stat = stat;
    self.x = x;
    self.y = y;
    self.oldx = oldx;
    self.oldy = oldy;
    self.ax = 0;
    self.ay = 0;
}