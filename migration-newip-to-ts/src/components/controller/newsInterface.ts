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

//data.sources
//
// category: "general"
// country: "us"
// description: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com."
// id: "abc-news"
// language: "en"
// name: "ABC News"
// url: "https://abcnews.go.com"

//data.articles
//
// author: "Gunnar Thorenfeldt, Yngvar Gotaas Bonde, Ole Alexander Saue"
// content: "En bil med Sian-medlemmer ble presset av veien etter at de brant koraner i Oslo. Det er personskader som følge av hendelsen, ifølge Sian-leder Lars Thorsen.\r\nSian-leder Lars Thorsen bekrefter at han … [+1594 chars]"
// description: "En bil med Sian-medlemmer ble presset av veien etter at de brant koraner i Oslo. Det er personskader som følge av hendelsen, ifølge Sian-leder Lars Thorsen."
// publishedAt: "2022-07-02T14:05:37Z"
// source:
// id: "aftenposten"
// name: "Aftenposten"
// [[Prototype]]: Object
// title: "Bil med Sian-leder presset av veien etter koranbrenning"
// url: "https://www.aftenposten.no/oslo/i/Xqr03x/bil-med-sian-leder-presset-av-veien"
// urlToImage: "https://premium.vgc
