function FakeRender(canvas, pause) {
    var self = this;
    var ctx = canvas.getContext("2d");
    self.pause = pause;
    self.width = ctx.canvas.width;
    self.height = ctx.canvas.height;

    self.nextStep = function () {

    };
    self.run = function () {
        ctx.fillRect(0, 0, 20, 20);
    };
}