import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '27bb0e3eda244d1e802bc5e979a8e1ca',
        });
    }
}

export default AppLoader;
