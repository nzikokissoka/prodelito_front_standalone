export class GrupoPrivilegio {

    id?: number;
    codigo?: string;
    codigo_pai?: string;
    copiar?: number;
    deletar?: number;
    editar?: number;
    novo?: number;
    pesquisar?: number;
    salvar?: number;
    tempo_ativado?: number;
    visibilidade?: string;
    grupo_id?: number;
    sistema_modulo_caminho_id?: number;

    constructor(
        id?: number,
        codigo?: string,
        codigo_pai?: string,
        copiar?: number,
        deletar?: number,
        editar?: number,
        novo?: number,
        pesquisar?: number,
        salvar?: number,
        tempo_ativado?: number,
        visibilidade?: string,
        grupo_id?: number,
        sistema_modulo_caminho_id?: number
      ){
        this.id                        = id,
        this.codigo                    = codigo,
        this.codigo_pai                = codigo_pai,
        this.copiar                    = copiar,
        this.deletar                   = deletar,
        this.editar                    = editar,
        this.novo                      = novo,
        this.pesquisar                 = pesquisar,
        this.salvar                    = salvar,
        this.tempo_ativado             = tempo_ativado,
        this.visibilidade              = visibilidade,
        this.grupo_id                  = grupo_id,
        this.sistema_modulo_caminho_id = sistema_modulo_caminho_id
      }   
    

}
