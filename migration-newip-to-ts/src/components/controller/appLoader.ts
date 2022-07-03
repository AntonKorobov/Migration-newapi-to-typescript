import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '27bb0e3eda244d1e802bc5e979a8e1ca', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;