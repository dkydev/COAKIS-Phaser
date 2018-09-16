namespace COAKIS {

    export class Game extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO);

            this.state.add("Boot", COAKIS.Boot);
            this.state.add("Preloader", COAKIS.Preloader);
            this.state.add("Main", COAKIS.Main);

            this.state.start("Boot");
        }
    }
}
