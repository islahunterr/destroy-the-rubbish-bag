// When hero doesn't destroy a plastic bag - they lose 1 life.
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
// Aim: when player clashes into plastic bag it is supposed to disintegrate. Player should earn a point for destroying the pollution.
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    info.changeScoreBy(1)
    // Gaming sound effect to enhance user - experience and replicate typical gaming experience
    music.baDing.play()
})
let clover: Sprite = null
let otherSprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero, 150, 0)
// Set hero position to set on grass floor.
hero.setPosition(35, 86)
// Hero can't leave screen with user controls
hero.setStayInScreen(true)
info.setScore(0)
// Character starts with 5 lives - lives diminish if they don't destroy all plastic bags.
info.setLife(5)
// Tree function - Intended to be kept alive - Don't let character destroy tree.
game.onUpdateInterval(1000, function () {
    clover = sprites.create(assets.image`tree`, SpriteKind.Food)
    clover.setPosition(randint(10, 145), 8)
    clover.setVelocity(0, 50)
})
// Plastic Bag Sprite - Intended to be destroyed.
game.onUpdateInterval(1000, function () {
    otherSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 6 . . . . . . . . 6 6 . . 
        . . 6 6 . . . . . . . . 6 6 . . 
        . 6 6 6 . . . . . . . . 6 6 6 . 
        . 6 6 6 6 . . . . . . 6 6 6 6 . 
        . 6 6 6 6 . . . . . . 6 6 6 6 . 
        . 6 6 6 6 6 . . . . 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    // Plastic bag and tree set to fall from the same place.
    // Duplicated velocity and axis for game functionality.
    // 
    otherSprite.setPosition(randint(10, 145), 8)
    otherSprite.setVelocity(0, 50)
})
