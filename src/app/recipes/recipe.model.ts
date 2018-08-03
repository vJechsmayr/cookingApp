export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, descr: string, imagePath: string){
        this.name = name;
        this.description = descr;
        this.imagePath = imagePath;
    }
}