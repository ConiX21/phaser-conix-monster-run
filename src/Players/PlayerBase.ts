namespace MonsterRun{

    export class PlayerBase extends Phaser.Sprite{
        
        constructor(public game:Phaser.Game, public level:Phaser.State, key:string){
            super(game, 0, 0, key ,0);
            this.setPhysicPlayer();
        }

        private setPhysicPlayer(){
            //Active ARCADE engine for player
            this.game.physics.enable(this, Phaser.Physics.ARCADE);

            //Active collision with world
            this.body.collideWorldBounds = true;
        }

    }


}