namespace MonsterRun {
    export class Box extends Phaser.Sprite {
        constructor(public game:Phaser.Game, public x:number, public y:number){
            super(game, x, y, "crate");
        }
        public onDestroy(){
            console.log("destroy BOX")
        }
    }

}