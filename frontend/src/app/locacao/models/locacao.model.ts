export default class Locacao {
    id: number;
    cliente_id: number;
    item_id: number;
    dt_locacao: Date;
    dt_devolucao_prevista: Date;
    dt_devolucao_efetiva: Date;
    valorCobrado: number;
    multaCobrada: number;

    constructor(
        id: number,
        cliente_id: number,
        item_id: number,
        dt_locacao: Date,
        dt_devolucao_prevista: Date,
        dt_devolucao_efetiva: Date,
        valorCobrado: number,
        multaCobrada: number = 0
    ) {
        this.id = id;
        this.cliente_id = cliente_id;
        this.item_id = item_id;
        this.dt_locacao = dt_locacao;
        this.dt_devolucao_prevista = dt_devolucao_prevista;
        this.dt_devolucao_efetiva = dt_devolucao_efetiva;
        this.valorCobrado = valorCobrado;
        this.multaCobrada = multaCobrada;
    }
}