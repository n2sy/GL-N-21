export class Personne {
  constructor(
    public _id: string,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {}
}
