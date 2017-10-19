namespace MonsterRun{

    export class Knight extends PlayerBase{

        constructor(public game:Phaser.Game, public level:Phaser.State){
            super(game, level, "knight");
            this.initializePlayer();
        }

        public onDestroy(){
            console.log("destoye")
        }

        private initializePlayer(){
            this.addAnimation();
            this.anchor.setTo(.5, 0);
            this.scale.setTo(.5, .5);
            //w, h, x, y
            this.body.setSize(130, 195, 0, 0);
            this.knightIdle(); 
        }

        public knightJump(){
            this.play('jump');
        }

        public knightLeft(){
            this.scale.x = -.5;
            this.play('run');
        }

        public knightRight(){
            this.scale.x = .5;
            this.play('run');
        }

        public knightIdle(){
            this.play('idle');
        }

        public knightOnFloor(): boolean{
            return this.body.onFloor();
        }

        private addAnimation(){
            this.animations.add('idle',[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 20, true);
            this.animations.add('jump',[10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 20, false);
            this.animations.add('run',[20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 20, false);
        }

    }

}