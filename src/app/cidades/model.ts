
export class Cidade{
  id:number;
  nome:string;
  uf = new Estado();
}

export class Estado{
  id:number;
  nome:string;
}
