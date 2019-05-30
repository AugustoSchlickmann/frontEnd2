export class Categoria{
  id:number;
  nome: string;
}
export class Produto{
  id:number;
  nome:string;
  preco:number;
  categorias: Categoria[]=[];
}

//o nome dos atributos aqui deve ser exatamente igual ao nome dos atributos do backend
