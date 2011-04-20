rw.init('playarea', {x:480, y:320, FPS:60})
.loadSprites({
    face: ['face.png', 40, 40]
}, function() {
    rw.newEnt({
        base: new rw.Ent('face', 'face', 40, 40),
        update: function() {
            var x = rw.key('a') ? -1 :
                    rw.key('d') ?  1 : 0,
                y = rw.key('w') ? -1 :
                    rw.key('s') ?  1 : 0
            this.base.move(x,y)
        }
    }).base.display(0,0)
    rw.start()
})
