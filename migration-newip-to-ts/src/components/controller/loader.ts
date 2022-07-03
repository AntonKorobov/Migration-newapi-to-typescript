import { TopHeadlinesResponce } from '../controller/newsInterface';
import { EverythingResponce } from '../controller/newsInterface';

interface ApiLoader {
    apiKey?: string;
}

interface getRespObj{
    endpoint: string;
    options: ApiLoader;
}

interface LoaderInterface {
    baseLink: string
    options: ApiLoader

    getResp(getRespObj: getRespObj, callback: () => void): void

    errorHandler(res: Response): Response

    makeUrl(options: ApiLoader, endpoint: string): string

    load(method: string, endpoint: string,  callback: (data: TopHeadlinesResponce & EverythingResponce) => TopHeadlinesResponce & EverythingResponce, options: ApiLoader): void
}

class Loader implements LoaderInterface {
    baseLink: string;
    options: ApiLoader;

    constructor(baseLink: string, options: ApiLoader) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp({ endpoint, options = {} }: getRespObj,
        callback: (data: TopHeadlinesResponce & EverythingResponce) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: object, endpoint: string): string {
        const urlOptions: {[index: string]: string} = {...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: TopHeadlinesResponce & EverythingResponce) => void, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: TopHeadlinesResponce & EverythingResponce) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;