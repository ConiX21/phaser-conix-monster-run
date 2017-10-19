var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MonsterRun;
(function (MonsterRun) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // -------------------------------------------------------------------------
        Boot.prototype.create = function () {
            this.game.state.start("Preload");
        };
        return Boot;
    }(Phaser.State));
    MonsterRun.Boot = Boot;
})(MonsterRun || (MonsterRun = {}));
/// <reference path="../../lib/phaser.d.ts" />
var MonsterRun;
(function (MonsterRun) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // music decoded, ready for game
            _this._ready = false;
            return _this;
        }
        // -------------------------------------------------------------------------
        Preload.prototype.preload = function () {
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
        };
        // -------------------------------------------------------------------------
        Preload.prototype.create = function () {
        };
        // -------------------------------------------------------------------------
        Preload.prototype.update = function () {
            // run only once
            if (this._ready === false) {
                this._ready = true;
                this.game.state.start("Level1");
            }
        };
        return Preload;
    }(Phaser.State));
    MonsterRun.Preload = Preload;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var PlayerBase = (function (_super) {
        __extends(PlayerBase, _super);
        function PlayerBase(game, level, key) {
            var _this = _super.call(this, game, 0, 0, key, 0) || this;
            _this.game = game;
            _this.level = level;
            _this.setPhysicPlayer();
            return _this;
        }
        PlayerBase.prototype.setPhysicPlayer = function () {
            //Active ARCADE engine for player
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            //Active collision with world
            this.body.collideWorldBounds = true;
        };
        return PlayerBase;
    }(Phaser.Sprite));
    MonsterRun.PlayerBase = PlayerBase;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var Knight = (function (_super) {
        __extends(Knight, _super);
        function Knight(game, level) {
            var _this = _super.call(this, game, level, "knight") || this;
            _this.game = game;
            _this.level = level;
            _this.initializePlayer();
            return _this;
        }
        Knight.prototype.onDestroy = function () {
            console.log("destoye");
        };
        Knight.prototype.initializePlayer = function () {
            this.addAnimation();
            this.anchor.setTo(.5, 0);
            this.scale.setTo(.5, .5);
            //w, h, x, y
            this.body.setSize(130, 195, 0, 0);
            this.knightIdle();
        };
        Knight.prototype.knightJump = function () {
            this.play('jump');
        };
        Knight.prototype.knightLeft = function () {
            this.scale.x = -.5;
            this.play('run');
        };
        Knight.prototype.knightRight = function () {
            this.scale.x = .5;
            this.play('run');
        };
        Knight.prototype.knightIdle = function () {
            this.play('idle');
        };
        Knight.prototype.knightOnFloor = function () {
            return this.body.onFloor();
        };
        Knight.prototype.addAnimation = function () {
            this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 20, true);
            this.animations.add('jump', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 20, false);
            this.animations.add('run', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 20, false);
        };
        return Knight;
    }(MonsterRun.PlayerBase));
    MonsterRun.Knight = Knight;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var LevelBase = (function (_super) {
        __extends(LevelBase, _super);
        function LevelBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gravity = 800;
            _this.velocity = 100;
            return _this;
        }
        LevelBase.prototype.init = function () {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.stage.backgroundColor = "#ffffff";
            this.physics.startSystem(Phaser.Physics.ARCADE);
            //this.game.scale.setGameSize(window.innerWidth, window.innerHeight  - 60);
        };
        return LevelBase;
    }(Phaser.State));
    MonsterRun.LevelBase = LevelBase;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    // Level Winter
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.slowMalus = false;
            _this.boxSignal = new Phaser.Signal();
            return _this;
        }
        Level1.prototype.init = function () {
            _super.prototype.init.call(this);
            this.velocity = 350;
            this.levelVelocity = this.velocity;
            this.game.physics.arcade.gravity.y = this.gravity;
            this.cursor = this.game.input.keyboard.createCursorKeys();
            this.keyMapper();
        };
        Level1.prototype.keyMapper = function () {
            this.Z = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
            this.Q = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
            this.S = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
            this.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        };
        // -------------------------------------------------------------------------
        Level1.prototype.create = function () {
            //this.game.state.start("Preload");
            var backgroundWinter = this.add.sprite(0, 0, "BG_winter");
            backgroundWinter.scale.setTo(1.5, 1.5);
            backgroundWinter.fixedToCamera = true;
            //Global group objects
            var groupAmbiantObjects = this.add.group();
            groupAmbiantObjects.enableBody = true;
            //Traps group objects
            this.groupTrapsObjects = this.add.group();
            this.groupTrapsObjects.enableBody = true;
            //Global group forward player
            var groupAmbiantObjectsForward = this.add.group();
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
            this.knight = new MonsterRun.Knight(this.game, this);
            //Add Sprite to Game
            //this.world.add(knight);
            this.game.add.existing(this.knight);
            //Active collision with groupGround
            this.map.setCollisionByExclusion([], true, this.groupGround);
            //Follow player
            this.game.camera.follow(this.knight);
            this.world.bringToTop(groupAmbiantObjectsForward);
            var sp = this.groupBox.create(100, 600, "crate");
            sp.body.allowGravity = false;
            this.addTextBonusMalus();
            this.groupGround.resizeWorld();
        };
        Level1.prototype.addTextBonusMalus = function () {
            var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
            this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, null, style);
            this.text.anchor.setTo(.5);
            this.text.fixedToCamera = true;
        };
        Level1.prototype.hideText = function () {
            this.slowMalus = false;
            this.text.alpha = 0;
        };
        Level1.prototype.showBonusMalus = function () {
            this.text.alpha = 1;
            this.game.time.events.add(Phaser.Timer.SECOND * 2, this.hideText, this);
        };
        Level1.prototype.randomBonusMalus = function () {
            var ind = Math.round(Math.random() * 2);
            if (ind % 2) {
                this.text.setText("Extras Slow");
                this.levelVelocity = 100;
                this.slowMalus = true;
            }
            else {
                this.text.setText("Extras Speed");
                this.levelVelocity = 600;
                this.slowMalus = true;
            }
        };
        Level1.prototype.update = function () {
            var _this = this;
            //this.centerText = this.game.world.centerX;
            //this.game.camera.x += 10;
            this.game.physics.arcade.collide(this.knight, this.groupGround);
            this.game.physics.arcade.overlap(this.knight, this.groupTrapsObjects, this.handleOverTraps);
            this.game.physics.arcade.overlap(this.knight, this.groupBox, function (k, g) {
                _this.showBonusMalus();
                _this.randomBonusMalus();
                _this.handleOverBox(k, g);
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
        };
        Level1.prototype.render = function () {
            this.checkInWater();
        };
        Level1.prototype.handleOverBox = function (knight, boxOverlap) {
            boxOverlap.destroy();
        };
        Level1.prototype.handleOverTraps = function (knight, group) {
            knight.level["levelVelocity"] = 150;
        };
        Level1.prototype.checkInWater = function () {
            var x = this.groupWater.getTileX(this.knight.x);
            var y = this.groupWater.getTileY(this.knight.y);
            var tile = this.map.getTile(x, y, this.groupWater);
            if (tile != null) {
                this.knight.alpha = .2;
                this.levelVelocity = 100;
            }
            else if (!this.slowMalus) {
                this.knight.alpha = 1;
                this.levelVelocity = this.velocity;
            }
        };
        Level1.prototype.findObjectByType = function (layerMap, group) {
            for (var element in layerMap) {
                var object = layerMap[element];
                var resource = object.properties.type || object.type;
                var objectSprite = group.create(object.x, object.y - object.properties.height, resource);
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
        };
        return Level1;
    }(MonsterRun.LevelBase));
    MonsterRun.Level1 = Level1;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var Game = (function (_super) {
        __extends(Game, _super);
        // -------------------------------------------------------------------------
        function Game() {
            var _this = 
            // init game
            _super.call(this, MonsterRun.Global.GAME_WIDTH, MonsterRun.Global.GAME_HEIGHT, Phaser.CANVAS, "content") || this;
            // states
            _this.state.add("Boot", MonsterRun.Boot);
            _this.state.add("Preload", MonsterRun.Preload);
            _this.state.add("Level1", MonsterRun.Level1);
            // start
            _this.state.start("Boot");
            return _this;
        }
        Game.prototype.onDestroy = function () {
            console.log("destoy");
        };
        return Game;
    }(Phaser.Game));
    MonsterRun.Game = Game;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var Global = (function () {
        function Global() {
        }
        // game size
        Global.GAME_WIDTH = 1920;
        Global.GAME_HEIGHT = 1080;
        return Global;
    }());
    MonsterRun.Global = Global;
})(MonsterRun || (MonsterRun = {}));
// -------------------------------------------------------------------------
window.onload = function () {
    MonsterRun.Global.game = new MonsterRun.Game();
};
var MonsterRun;
(function (MonsterRun) {
    var Extras = (function () {
        function Extras() {
        }
        return Extras;
    }());
    MonsterRun.Extras = Extras;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var Jump = (function () {
        function Jump() {
        }
        return Jump;
    }());
    MonsterRun.Jump = Jump;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var Box = (function (_super) {
        __extends(Box, _super);
        function Box(game, x, y) {
            var _this = _super.call(this, game, x, y, "crate") || this;
            _this.game = game;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Box.prototype.onDestroy = function () {
            console.log("destroy BOX");
        };
        return Box;
    }(Phaser.Sprite));
    MonsterRun.Box = Box;
})(MonsterRun || (MonsterRun = {}));
var MonsterRun;
(function (MonsterRun) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // -------------------------------------------------------------------------
        Play.prototype.create = function () {
            this.stage.backgroundColor = 0x80FF80;
        };
        // -------------------------------------------------------------------------
        Play.prototype.update = function () {
        };
        return Play;
    }(Phaser.State));
    MonsterRun.Play = Play;
})(MonsterRun || (MonsterRun = {}));
//# sourceMappingURL=monster-run.js.map