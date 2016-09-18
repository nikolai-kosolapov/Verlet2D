function WorldGenerator() {
    this.generate = function () {
        var result = new World();
        var a = new PointMass(110, 100, 110, 100);
        var b = new PointMass(120, 100, 120, 100);
        var c = new PointMass(130, 100, 130, 100);
        var d = new PointMass(140, 100, 140, 100);
        var e = new PointMass(150, 100, 150, 100);
        var f = new PointMass(160, 100, 160, 100);
        result.pointMasses = [
            a, b, c,d,e,f

        ];

        result.constraints = [
            new Constraint(a, b, 10, 10),
            new Constraint(b, c, 10, 10),
            new Constraint(c, d, 10, 10),
            new Constraint(d, e, 10, 10),
             new Constraint(e, f, 10, 10)
        ];

        return result;
    };

    this.generateCloth = function () {
        var result = new World();
        var m = [];
        for (var i = 0; i < 20; i++) {
            var t = [];
            for (var j = 0; j < 20; j++) {
                var p;
                if (i == 0) {
                    p = new PointMass(j * 10, 0, j * 10, 0, true);
                } else {
                    p = new PointMass(j * 10, 0, j * 10, 0);
                }
                t.push(p);
                result.pointMasses.push(p);
            }
            m.push(t);
        }
        var constraints = [];
        for (i = 0; i < 20; i++) {
            for (j = 0; j < 20; j++) {
                if (i > 0) {
                    constraints.push(new Constraint(m[i][j], m[i - 1][j], 10, 0.6));
                }
                if (j > 0) {
                    constraints.push(new Constraint(m[i][j], m[i][j - 1], 10, 0.6));
                }
            }
        }
        result.constraints = constraints;
        return result;
    };
}