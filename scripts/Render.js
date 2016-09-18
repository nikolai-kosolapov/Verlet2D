function Render(canvas, pause, world) {
    var self = this;
    var ctx = canvas.getContext("2d");
    var wrld = world;
    canvas.addEventListener('click', function (event) {
        var x = event.pageX - canvas.clientLeft,
            y = event.pageY - canvas.clientTop;
       

    }, false);
    self.pause = pause;
    self.width = ctx.canvas.width;
    self.height = ctx.canvas.height;
    self.nextStep = function () {
        ctx.clearRect(0, 0, self.width, self.height);
        //for (var i = 0; i < wrld.pointMasses.length; i++) {
        //    ctx.fillRect(wrld.pointMasses[i].x, wrld.pointMasses[i].y, 5, 5);
        //}
        for (var i2 = 0; i2 < wrld.constraints.length; i2++) {
            ctx.beginPath();
            ctx.moveTo(wrld.constraints[i2].pointA.x, wrld.constraints[i2].pointA.y);
            ctx.lineTo(wrld.constraints[i2].pointB.x, wrld.constraints[i2].pointB.y);
            ctx.stroke();
        }
        wrld.nextStep();
        setTimeout(function () { self.nextStep(); }, self.pause);
    };
    self.run = function() {
        self.nextStep();
    };
}
