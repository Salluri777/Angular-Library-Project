export class Books{
    id:number;
    author:string;
    country:string;
    imageLink:string;
    language:string;
    link:string;
    pages:number;
    title:string;
    year:number;
    constructor(id?:number,author?:string,country?:string,imageLink?:string,language?:string,link?:string,pages?:number,title?:string,year?:number,){
        this.id=id || 0;
        this.author=author || '';
        this.country=country || '';
        this.imageLink=imageLink || '';
        this.language=language || '';
        this.link=link || '';
        this.pages=pages || 0;
        this.title=title || '';
        this.year=year || 0;
    }
}