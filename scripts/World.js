function World() {
    var self = this;
    self.grav = 2;
    self.pointMasses = [];
    self.constraints = [];
    self.nextStep = function() {
        for (var i = 0; i < self.pointMasses.length; i++) {
            accumulateForces(self.pointMasses[i]);
        }
        verlet();
        for (var i2 = 0; i2 < 100; i2++) {
            for (var j = 0; j < self.constraints.length; j++) {
                self.constraints[j].solve(3);
            }
        }

    };

    var verlet = function() {
        for(var i=0; i<self.pointMasses.length; i++) {
            var p = self.pointMasses[i];
                var oldx = p.x;
                var oldy = p.y;

                p.x += p.x - p.oldx + p.ax;
                p.y += p.y - p.oldy + p.ay;

                p.oldx = oldx;
                p.oldy = oldy;
            }

        
    };

    var accumulateForces = function (point) {
        if (!point.stat) {
            point.ay = self.grav;
            point.ax = Math.random() * Math.random()*10;
        }
            
    };
}