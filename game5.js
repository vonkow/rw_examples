rw.init('playarea', {x:480, y:320, FPS:60})
.loadSprites({
    face: ['face.png', 40, 40],
    ball: ['ball.png', 40, 40]
}, function() {
    rw.newEnt({
        base: new rw.Ent('face1', 'face', 40, 40),
        update: function() {
            var x = rw.key('a') ? -1 :
                    rw.key('d') ?  1 : 0,
                y = rw.key('w') ? -1 :
                    rw.key('s') ?  1 : 0
            this.base.move(x,y)
        },
        hitMap: [
            ['face',['ball'],20,20,20]
        ],
        gotHit: function() {
            return this.base.hide(), false
        }
    }).base.display(0,0).end()
    .newEnt({
        base: new rw.Ent('ball1', 'ball', 40, 40),
        hitMap: [
            ['ball',['face'],20,20,20]
        ],
        init: function() {
            this.base.display(100,100)
        }
    })
    rw.start()
})
