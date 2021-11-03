export interface Chamado{
    push(element: Chamado);

    id?:             any;
    dataAbertura?:   string;
    dataFechamento?: string;
    prioridade:      string;
    status:          string;
    titulo:          string;
    observacoes:     string;
    tecnico:            any;
    cliente:            any;
    nomeTecnico:     string;
    nomeCliente:     string;

}