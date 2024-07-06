export class Etiqueta {
    private id: number;
    private texto: string;
    
    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getTexto(): string {
        return this.texto;
    }

    setTexto(texto: string): void {
        this.texto = texto;
    }
}