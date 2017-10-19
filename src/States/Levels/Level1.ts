namespace MonsterRun {

    // Level Winter
    export class Level1 extends LevelBase {

        private map: Phaser.Tilemap;
        private groupGround: Phaser.TilemapLayer;
        private groupWater: Phaser.TilemapLayer;
        private knight: Knight;
        private cursor: Phaser.CursorKeys;
        private levelVelocity: number;
        private groupTrapsObjects: Phaser.Group;
        private groupBox: Phaser.Group;
        private Z: Phaser.Key;
        private Q: Phaser.Key;
        private S: Phaser.Key;
        private D: Phaser.Key;
        private text: Phaser.Text;
        private centerText: number;
        private slowMalus: boolean = false;
        private boxSignal: Phaser.Signal = new Phaser.Signal();

        public init() {
            super.init();
            this.velocity = 350;
            this.levelVelocity = this.velocity;
            this.game.physics.arcade.gravity.y = this.gravity;
            this.cursor = this.game.input.keyboard.createCursorKeys();
            this.keyMapper();
        }

        private keyMapper() {
            this.Z = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
            this.Q = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
            this.S = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
            this.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        }

        // -------------------------------------------------------------------------
        public create() {


            //this.game.state.start("Preload");
            let backgroundWinter = this.add.sprite(0, 0, "BG_winter");
            backgroundWinter.scale.setTo(1.5, 1.5);
            backgroundWinter.fixedToCamera = true;

            //Global group objects
            let groupAmbiantObjects = this.add.group();
            groupAmbiantObjects.enableBody = true;

            //Traps group objects
            this.groupTrapsObjects = this.add.group();
            this.groupTrapsObjects.enableBody = true;

            //Global group forward player
            let groupAmbiantObjectsForward = this.add.group();
            groupAmbiantObjectsForward.enableBody = true;

            //Box group for bonus/malus
            this.groupBox = this.add.group();
            this.groupBox.enableBody = true;
            //sprite.events.onAddedToGroup.add(yourFunction, this);

            //Add tilemap to create the world
            this.map = this.game.add.tilemap("winter-map");
            this.map.addTilesetImage("winter", "winterTiles");
            this.groupGround = this.map.createLayer("ground");
            this.groupWater = this.map.createLayer("water");

            //Populate all objects in groups
            this.findObjectByType(this.map.objects["obj"], groupAmbiantObjects);
            this.findObjectByType(this.map.objects["env_forward"], groupAmbiantObjectsForward);
            this.findObjectByType(this.map.objects["box"], this.groupBox);
            this.findObjectByType(this.map.objects["trap"], this.groupTrapsObjects);

            //Create a knight player
            this.knight = new Knight(this.game, this);

            //Add Sprite to Game
            //this.world.add(knight);
            this.game.add.existing(this.knight);

            //Active collision with groupGround
            this.map.setCollisionByExclusion([], true, this.groupGround);

            //Follow player
            this.game.camera.follow(this.knight);

            this.world.bringToTop(groupAmbiantObjectsForward);

            let sp = this.groupBox.create(100, 600, "crate");
            sp.body.allowGravity = false;

            this.addTextBonusMalus();

            this.groupGround.resizeWorld();
        }

        private addTextBonusMalus() {
            let style = { font: "65px Arial", fill: "#ff0044", align: "center" };
            this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, null, style);
            this.text.anchor.setTo(.5);
            this.text.fixedToCamera = true;
        }

        private hideText() {
            this.slowMalus = false;
            this.text.alpha = 0;

        }

        private showBonusMalus() {
            this.text.alpha = 1;
            this.game.time.events.add(Phaser.Timer.SECOND * 2, this.hideText, this);
        }

        public randomBonusMalus() {
            let ind = Math.round(Math.random() * 2);
            if (ind % 2) {
                this.text.setText("Extras Slow");
                this.levelVelocity = 100;
                this.slowMalus = true;
            }
            else{
                this.text.setText("Extras Speed");
                
                this.levelVelocity = 600;
                this.slowMalus = true;
            }

        }

        public update() {
            //this.centerText = this.game.world.centerX;
            //this.game.camera.x += 10;
            this.game.physics.arcade.collide(this.knight, this.groupGround);
            this.game.physics.arcade.overlap(this.knight, this.groupTrapsObjects, this.handleOverTraps);
            this.game.physics.arcade.overlap(this.knight, this.groupBox, (k, g) => {
                this.showBonusMalus();
                this.randomBonusMalus();
                this.handleOverBox(k, g);
            });

            if (this.D.isDown) {
                this.knight.knightRight();
                this.knight.body.velocity.x = this.levelVelocity;
            }
            else if (this.Q.isDown) {
                this.knight.body.velocity.x = -this.levelVelocity;
                this.knight.knightLeft();
            }
            else {
                this.knight.body.velocity.x = 0;
                this.knight.knightIdle();
            }

            if (this.Z.isDown && this.knight.knightOnFloor()) {
                this.knight.body.velocity.y = -this.velocity * 1.9;
                this.knight.knightJump();
            }
        }

        public render() {
            this.checkInWater();
        }

        private handleOverBox(knight: Knight, boxOverlap: Phaser.Group) {
            boxOverlap.destroy();
        }

        private handleOverTraps(knight: Knight, group: Phaser.Group) {
            knight.level["levelVelocity"] = 150;
        }

        private checkInWater() {
            let x = this.groupWater.getTileX(this.knight.x);
            let y = this.groupWater.getTileY(this.knight.y);
            let tile = this.map.getTile(x, y, this.groupWater);

            if (tile != null) {
                this.knight.alpha = .2;
                this.levelVelocity = 100;
            }
            else if (!this.slowMalus) {
                this.knight.alpha = 1;
                this.levelVelocity = this.velocity;
            }

        }

        private findObjectByType(layerMap: any, group: Phaser.Group) {
            for (var element in layerMap) {
                let object = layerMap[element];
                let resource = object.properties.type || object.type;

                let objectSprite: Phaser.Sprite = <Phaser.Sprite>group.create(object.x, object.y - object.properties.height, resource);

                //objects can change base size
                objectSprite.height = object.properties.height;
                objectSprite.width = object.properties.width;

                if (object.properties.flip !== undefined && object.properties.flip) {
                    objectSprite.anchor.setTo(0, 0);
                    objectSprite.x = object.x + object.properties.width;
                    objectSprite.y = object.y - object.properties.height;
                    objectSprite.scale.x = -1;
                }

                objectSprite.body.allowGravity = false;

            }
        }
    }
}