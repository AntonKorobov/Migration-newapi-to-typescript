import AppLoader from './appLoader';
import { TopHeadlinesResponce } from '../controller/newsInterface';
import { EverythingResponce } from '../controller/newsInterface';

class AppController extends AppLoader {
    getSources(callback: (data: TopHeadlinesResponce & EverythingResponce) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: TopHeadlinesResponce & EverythingResponce) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;

                document.querySelector('.add-more-button')?.classList.add('show-element');
                document.querySelector('.add-more-button')?.setAttribute('data-source-id', sourceId); //add source-id to button

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);

                    document.querySelector('.add-more-sources')?.removeAttribute('data-source');
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
