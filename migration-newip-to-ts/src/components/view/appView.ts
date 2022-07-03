import News from './news/news';
import Sources from './sources/sources';
import { TopHeadlinesResponce } from '../controller/newsInterface';
import { EverythingResponce } from '../controller/newsInterface';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: TopHeadlinesResponce & EverythingResponce): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: TopHeadlinesResponce & EverythingResponce): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
