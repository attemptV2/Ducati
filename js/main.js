const {createApp} = Vue
 
createApp({
    data() {
        return {
            name1: 'HOME',
            name2: 'ABOUT',
            name3: 'MODELS',
            name4: 'VIDEOS',
            isLightTheme: false,
            themeIcon: 'icons/dark-theme.svg',
            videosVisible: false,
            videosVisibleRight: false,
            showAboutPanel: false,
            showModelsPanel: false,
            showScrim: false,
            showAllVideos:false,
            currentSlide: 0,
            slides: [
                { image: 'icons/model1.png', description: '<span>DUCATI</span> Panigale V4 2020' },
                { image: 'icons/model2.png', description: '<span>DUCATI</span> Superleggera V4 2020' },
                { image: 'icons/model3.png', description: '<span>DUCATI</span> SuperSport S 2021' },
                { image: 'icons/model4.png', description: '<span>DUCATI</span> Panigale V4 SP2 2022' },
            ],
        };
    },
    created() {
        const savedTheme = localStorage.getItem('theme');
        this.isLightTheme = savedTheme === 'light';
        this.themeIcon = this.isLightTheme ? 'icons/dark-theme.svg' : 'icons/light-theme.svg';
        document.body.classList.toggle('light', this.isLightTheme);
    },
    watch: {
        isLightTheme(newValue) {
            document.body.classList.toggle('light', newValue);
        }
    },
    computed: {
        offset() {
            return -this.currentSlide * 100;
        },
        buttonImgClass() {
            return this.videosVisible ? 'chevron-left' : 'chevron-right'; 
        },
        buttonImgClassRight() {
            return this.videosVisibleRight ? 'chevron-right': 'chevron-left'; 
        }
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
        closePanel() {
            this.showAboutPanel = false;
            this.showModelsPanel = false;
            this.showScrim = false;
        },
        changeSlide(direction) {
            this.currentSlide += direction;

            if (this.currentSlide < 0) {
                this.currentSlide = this.slides.length - 1;
            } else if (this.currentSlide >= this.slides.length) {
                this.currentSlide = 0;
            }
        },
        reloadPage() {
            location.reload();
        },
        toggleTheme() {
            this.isLightTheme = !this.isLightTheme;
            const newTheme = this.isLightTheme ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            this.themeIcon = this.isLightTheme ? 'icons/dark-theme.svg' : 'icons/light-theme.svg';
        },
        toggleVideos() {
            this.videosVisible = !this.videosVisible;
        },
        toggleVideosRight() {
            this.videosVisibleRight = !this.videosVisibleRight;
        }
    }
}).mount(document.body)


function updateNavigationPanel() {
    if (window.innerWidth < 600) {
        document.querySelector('.navigation-panel.for-min-width').classList.remove('hidden');
        document.querySelector('.navigation-panel').classList.add('hidden');
    } else {
        document.querySelector('.navigation-panel.for-min-width').classList.add('hidden');
        document.querySelector('.navigation-panel').classList.remove('hidden');
    }
}

window.addEventListener('resize', updateNavigationPanel);

updateNavigationPanel();