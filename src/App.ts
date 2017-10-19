namespace MonsterRun {

    export class Global {
        // game
        static game: Phaser.Game; // variable static = variable partagée en mémoire, chaque fois qu'on la modifie, on la modifie partout

        // game size
        static GAME_WIDTH: number = 1920;
        static GAME_HEIGHT: number =  1080;
    }
}

// -------------------------------------------------------------------------
window.onload = function () {
    MonsterRun.Global.game = new MonsterRun.Game();
};
