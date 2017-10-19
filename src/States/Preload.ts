/// <reference path="../../lib/phaser.d.ts" />

namespace MonsterRun {

    export class Preload extends Phaser.State {

        // music decoded, ready for game
        private _ready: boolean = false;

        // -------------------------------------------------------------------------
        public preload() {
            this.load.pack("section", "assets/pack.json");

            //Textures pour GRAVEYARD
            //this.game.load.audio("bg_audio", "assets/audio/MrKey_HorrorZ_006_LMK.mp3")
            this.game.load.image('graveYardTiles', 'assets/textures/graveyard/tiles/graveyard.png');
            this.game.load.image('arrowSign', 'assets/textures/graveyard/tiles/ArrowSign.png');
            this.game.load.image('skullBone', 'assets/textures/graveyard/tiles/Bone (1).png');
            this.game.load.image('skull', 'assets/textures/graveyard/tiles/Bone (2).png');
            this.game.load.image('bones3', 'assets/textures/graveyard/tiles/Bone (3).png');
            this.game.load.image('bones2', 'assets/textures/graveyard/tiles/Bone (4).png');
            this.game.load.image('bigBush', 'assets/textures/graveyard/tiles/Bush (1).png');
            this.game.load.image('smallBush', 'assets/textures/graveyard/tiles/Bush (1).png');
            this.game.load.image('spines', 'assets/textures/graveyard/tiles/DeadBush.png');
            this.game.load.image('signDead', 'assets/textures/graveyard/tiles/Sign.png');
            this.game.load.image('skeletonDead', 'assets/textures/graveyard/tiles/Skeleton.png');
            this.game.load.image('tomb', 'assets/textures/graveyard/tiles/TombStone (1).png');
            this.game.load.image('cross', 'assets/textures/graveyard/tiles/TombStone (2).png');
            this.game.load.image('deadTree', 'assets/textures/graveyard/tiles/Tree.png');
            this.game.load.image('surface', 'assets/textures/graveyard/tiles/17.png');
            this.game.load.image('water', 'assets/textures/graveyard/tiles/18.png');
            this.game.load.image('crate', 'assets/textures/winter/tiles/Crate.png');


            //Textures DESERT and PYRAMID
            this.game.load.image('desertTiles', 'assets/textures/desert/tiles/desert.png');
            this.game.load.image('bush_1', 'assets/textures/desert/tiles/Bush (1).png');
            this.game.load.image('bush_2', 'assets/textures/desert/tiles/Bush (2).png');
            this.game.load.image('cactus_1', 'assets/textures/desert/tiles/Cactus (1).png');
            this.game.load.image('cactus_2', 'assets/textures/desert/tiles/Cactus (2).png');
            this.game.load.image('cactus_3', 'assets/textures/desert/tiles/Cactus (3).png');
            this.game.load.image('grass_1', 'assets/textures/desert/tiles/Grass (1).png');
            this.game.load.image('grass_2', 'assets/textures/desert/tiles/Grass (2).png');
            this.game.load.image('sign', 'assets/textures/desert/tiles/Sign.png');
            this.game.load.image('signArrow', 'assets/textures/desert/tiles/SignArrow.png');
            this.game.load.image('skeleton', 'assets/textures/desert/tiles/Skeleton.png');
            this.game.load.image('stoneDesert', 'assets/textures/desert/tiles/Stone.png');
            this.game.load.image('stoneBlock', 'assets/textures/desert/tiles/StoneBlock.png');
            this.game.load.image('tree', 'assets/textures/desert/tiles/Tree.png');

            //Textures WINTER
            this.game.load.image('winterTiles', 'assets/textures/winter/tiles/winter.png');
            this.game.load.image('igloo', 'assets/textures/winter/tiles/Igloo.png');
            this.game.load.image('snowman', 'assets/textures/winter/tiles/SnowMan.png');
            this.game.load.image('stone', 'assets/textures/winter/tiles/Stone.png');
            this.game.load.image('sign_2', 'assets/textures/winter/tiles/Sign_2.png');
            this.game.load.image('tree_1', 'assets/textures/winter/tiles/Tree_1.png');
            this.game.load.image('tree_2', 'assets/textures/winter/tiles/Tree_2.png');
            this.game.load.image('icebox', 'assets/textures/winter/tiles/IceBox.png');
            this.game.load.image('crystal', 'assets/textures/winter/tiles/Crystal.png');

        }

        // -------------------------------------------------------------------------
        public create() {

        }

        // -------------------------------------------------------------------------
        public update() {
            // run only once
            if (this._ready === false) {
                this._ready = true;

                this.game.state.start("Level1");
            }
        }
    }
}
