const { createApp } = Vue

createApp({
    data() {
        return {
            name1: 'HOME',
            name2: 'ABOUT',
            name3: 'MODELS',
            showAboutPanel: false,
            showModelsPanel: false,
            showScrim: false,
            slides: '<div class="slide"><img src="icons/model1.png"><p><span>DUCATI</span> Panigale V4 2020</p></div> <div class="slide"><img src="icons/model2.png"><p><span>DUCATI</span> Superleggera V4 2020</p></div> <div class="slide"><img src="icons/model3.png"><p><span>DUCATI</span> SuperSport S 2021</p></div> <div class="slide"><img src="icons/model4.png"><p><span>DUCATI</span> Panigale V4 SP2 2022</p></div>'
        };
    },
    methods: {
        aboutPanel() {
            this.showAboutPanel = true;
            this.showModelsPanel = false;
            this.showScrim = true;
        },
        modelsPanel() {
            this.showAboutPanel = false;
            this.showModelsPanel = true;
            this.showScrim = true;
        },
        closePanel(){
            this.showAboutPanel = false;
            this.showModelsPanel = false;
            this.showScrim = false;
        }
    }
}).mount(document.body)