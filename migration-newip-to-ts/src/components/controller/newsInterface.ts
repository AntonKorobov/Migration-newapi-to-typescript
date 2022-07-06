export interface TopHeadlinesResponce {
    status: string;
    sources: Array<NewsSources>;
}

export interface EverythingResponce {
    status: string;
    totalResults: number;
    articles: Array<Article>;
}

export interface NewsSources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: IdName;
    title: string;
    url: string;
    urlToImage: string;
}

type IdName = Pick<NewsSources, 'id' | 'name'>;