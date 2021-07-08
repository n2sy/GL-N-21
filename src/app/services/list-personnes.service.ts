import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListPersonnesService {
  link = 'http://localhost:3000/cv/persons';
  private listePersonne: Personne[] = [
    new Personne(
      '1',
      'Nidhal',
      'Jelassi',
      35,
      'Enseignant',
      'nidhal.jpg',
      'candidat'
    ),
    new Personne(
      '2',
      'Bart',
      'Simpson',
      15,
      'Chef de projet',
      'bart.jpeg',
      'recrue'
    ),
    new Personne(
      '3',
      'Homer',
      'Simpson',
      66,
      'Ingénieur',
      'homer.jpg',
      'candidat'
    ),
    new Personne('4', 'Marge', 'Simpson', 66, 'PDG', 'marge.jpeg', 'refuse'),
  ];

  constructor(private http: HttpClient) {}

  getPersonsByStatus(status) {
    return this.listePersonne.filter((p) => p.statut == status);
  }

  getListPersonnes() {
    return this.listePersonne;
  }
  getListPersonnesAPI() {
    return this.http.get(this.link);
  }

  getPersonneById(id) {
    return this.listePersonne.find((p) => p._id == id);
  }
  getPersonneByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  addPerson(p) {
    p._id = this.listePersonne[this.listePersonne.length - 1]._id + 1;
    this.listePersonne.push(p);
  }

  addPersonAPI(p) {
    // let token = localStorage.getItem('mytoken');
    // if (token) {
    //   /* HTTPARAMS */
    //   // let p = new HttpParams().set('Authorization', 'bearer ' + token);
    //   // return this.http.post(this.link, p, { params :p });

    //   /*HTTPHEADERS */
    //   let headers = new HttpHeaders().set('Authorization', 'bearer ' + token);
    //   return this.http.post(this.link, p, { headers });
    // }

    return this.http.post(this.link, p);
  }

  // addPerson() {
  //   this.listePersonne.push(
  //     new Personne('1', 'NEW', 'Person', 35, 'Enseignant', 'nidhal.jpg')
  //   );
  // }

  deletePerson(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne.splice(i, 1);
  }

  deletePersonAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updatePerson(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }

  updatePersonAPI(p) {
    return this.http.put(`${this.link}/${p['_id']}`, p);
  }
}
