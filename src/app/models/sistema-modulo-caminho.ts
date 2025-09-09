export class SistemaModuloCaminho {
    /*id:number;
    abreviada:string;
    codigo:string;
    codigoPai:string;
    caminhoFicheiroXhtml:string;
    descricao:string;
    icone:string;
    componente:string;
    bloqueioLink:string;*/

    id?: number;
    abreviada?: string;
    codigo?: string;
    codigoPai?: string;
    caminhoFicheiroXhtml?: string;
    descricao?: string;
    icone?: string;
    componente?: string;
    bloqueioLink?: string;

    constructor(
        id?: number,
        abreviada?: string,
        codigo?: string,
        codigoPai?: string,
        caminhoFicheiroXhtml?: string,
        descricao?: string,
        icone?: string,
        componente?: string,
        bloqueioLink?: string
      ){
        this.id = id;
        this.abreviada = abreviada;
        this.codigo = codigo;
        this.codigoPai = codigoPai;
        this.caminhoFicheiroXhtml = caminhoFicheiroXhtml;
        this.descricao = descricao;
        this.icone = icone;
        this.componente = componente;
        this.bloqueioLink = bloqueioLink;
      }


}


