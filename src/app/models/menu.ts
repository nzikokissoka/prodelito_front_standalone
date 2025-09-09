export class Menu {

    id?: number;
    abreviada?: string;
    codigo?: string;
    codigoPai?: string;
    caminhoFicheiroXhtml?: string;
    descricao?: string;
    icone?: string;
    componente?: string;
    grupo_id?: number;
    sistema_modulo_caminho_id?: number;

    constructor(
        id?: number,
        abreviada?: string,
        codigo?: string,
        codigoPai?: string,
        caminhoFicheiroXhtml?: string,
        descricao?: string,
        icone?: string,
        componente?: string,
        grupo_id?: number,
        sistema_modulo_caminho_id?: number
      ){
        this.id = id;
        this.abreviada = abreviada;
        this.codigo = codigo;
        this.codigoPai = codigoPai;
        this.caminhoFicheiroXhtml = caminhoFicheiroXhtml;
        this.descricao = descricao;
        this.icone = icone;
        this.componente = componente;
        this.grupo_id = grupo_id;
        this.sistema_modulo_caminho_id = sistema_modulo_caminho_id;        
      }

}
