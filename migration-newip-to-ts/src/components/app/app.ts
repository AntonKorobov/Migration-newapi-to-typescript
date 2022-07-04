import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface AppInterface {
    controller: AppController;
    view: AppView;
}

class App implements AppInterface {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) => {
                console.log(this);
                this.controller.getNews(e, (data) => this.view.drawNews(data, false))
            });
        this.controller.getSources((data) => this.view.drawSources(data));

        document
        .querySelector('.sources_more')
        ?.addEventListener('click', (e) => {
            console.log(this);
            this.controller.getNews(e, (data) => this.view.drawNews(data, true))
        });
    }
}

export default App;
