import { User } from "./user";


export class listdisc {
    
    titulo: string;
    comentarios: string[];
    autor: string;
    
    constructor(titulo: string,  autor: string) {
        this.titulo=titulo;
        this.comentarios=[];
        this.autor=autor;
    }
}