function Constraint(pointA, pointB, length, dam) {
    var self = this;
    self.dam = dam;
    self.pointA = pointA;
    self.pointB = pointB;
    self.restlength = length;
    self.solve = function (count) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        var deltalength = Math.sqrt(dx * dx + dy * dy);
        var diff = (deltalength - self.restlength) / deltalength;
        if (self.pointA.stat) {
            self.pointB.x = self.pointB.x + dx * diff * self.dam;
            self.pointB.y = self.pointB.y + dy * diff * self.dam;
            return;
        }
        if (self.pointB.stat) {
            self.pointA.x = self.pointA.x - dx * diff * self.dam;
            self.pointA.y = self.pointA.y - dy * diff * self.dam;
            return;
        }
        self.pointB.x = self.pointB.x + dx * 0.5 * diff * self.dam;
        self.pointB.y = self.pointB.y + dy * 0.5 * diff * self.dam;
        self.pointA.x = self.pointA.x - dx * 0.5 * diff * self.dam;
        self.pointA.y = self.pointA.y - dy * 0.5 * diff * self.dam;
    };
}