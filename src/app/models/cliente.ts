export interface Cliente{
    id?: any; //pode ser Integer e String
    nome: string;
    cpf:string;
    email:string;
    senha:string;
    perfis:string[];
    dataCriacao: any;
}