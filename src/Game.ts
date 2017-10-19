namespace MonsterRun {

    export class Game extends Phaser.Game {

        // -------------------------------------------------------------------------
        public constructor() {
            // init game
            super(Global.GAME_WIDTH, Global.GAME_HEIGHT, Phaser.CANVAS, "content");

            // states
            this.state.add("Boot", Boot);
            this.state.add("Preload", Preload);
            this.state.add("Level1", Level1);

            // start
            this.state.start("Boot");
        }

        public onDestroy(){
            console.log("destoy");
        }
    }
}
