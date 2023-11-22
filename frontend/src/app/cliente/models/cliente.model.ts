export default class Cliente {
    id: number;
    num_inscricao: number;
    nome: string;
    dt_nascimento: Date;
    ativo: boolean;
    sexo: string;
    cpf: string;
    endereco: string;
    telefone: string;
    socio: boolean;
    socio_id: number | null;

    constructor(
        id: number,
        num_inscricao: number,
        nome: string,
        dt_nascimento: Date,
        ativo: boolean,
        sexo: string,
        cpf: string,
        endereco: string,
        telefone: string,
        socio: boolean,
        socio_id: number | null
    ) {
        this.id = id;
        this.num_inscricao = num_inscricao;
        this.nome = nome;
        this.dt_nascimento = dt_nascimento;
        this.ativo = ativo;
        this.sexo = sexo;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.socio = socio;
        this.socio_id = socio_id;
    }
}