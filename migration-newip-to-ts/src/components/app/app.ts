import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface AppInterface {
    controller: AppController;
    view: AppView;

    start: () => void;
}

class App implements AppInterface {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document.querySelector('.sources')?.addEventListener('click', (e) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data, false));
        });
        this.controller.getSources((data) => this.view.drawSources(data));

        document.querySelector('.add-more-sources')?.addEventListener('click', (e) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data, true));
        });
    }
}

export default App;
