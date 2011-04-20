rw.init('playarea', {x:480,y:320})
.loadSprites({
    face: ['face.png', 40, 40]
}, function() {
    rw.newEnt({
        base: new rw.Ent('face', 'face', 40, 40)
    }).base.display(0,0)
    rw.start()
})
