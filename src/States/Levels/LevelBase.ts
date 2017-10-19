namespace MonsterRun {

    export class LevelBase extends Phaser.State {
        
        protected gravity:number = 800;
        protected velocity:number = 100;

        public init(){
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.stage.backgroundColor = "#ffffff";
            this.physics.startSystem(Phaser.Physics.ARCADE);
            //this.game.scale.setGameSize(window.innerWidth, window.innerHeight  - 60);

        }

    }
}