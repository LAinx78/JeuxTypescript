// class Personnage {
//   //Propriété de la classe
//   x: number;
//   y: number;
//   //Constructeur
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// let CoordX = new Personnage(0, 0);
// let CoordY = new Personnage(0, 0);

class Personnage {
  //Propriété de la classe
  nom: string;
  coordonne: number[];
  terrain: Terrain;
  //Constructeur
  constructor(nom: string, x: number, y: number, terrain: Terrain) {
    this.nom = nom;
    this.terrain = terrain;
    this.coordonne = [];
    if (x > this.terrain.tx + this.terrain.longueur || x < this.terrain.tx) {
      this.coordonne[0] = this.terrain.tx;
    } else {
      this.coordonne[0] = x;
    }
    if (y > this.terrain.ty + this.terrain.largueur || x < this.terrain.ty) {
      this.coordonne[1] = this.terrain.ty;
    } else {
      this.coordonne[1] = y;
    }
  }
  // Méthodes
  seDeplacer(deplacementX: number, deplacementY: number) {
    {
      this.coordonne[0] += deplacementX;
      this.coordonne[1] += deplacementY;
    }
  }
}

class Terrain {
  tx: number;
  ty: number;
  longueur: number;
  largeur: number;

  constructor(tx: number, ty: number, longueur: number, largeur: number) {
    this.tx = tx;
    this.ty = ty;
    this.longueur = longueur;
    this.largeur = largeur;
  }
}

let Tanana = new Terrain(1, 1, 20, 10);
// console.log(Tanana);

// const pers1 = new Personnage("John", 1, 1);
// console.log(pers1.seDeplacer);
// pers1.seDeplacer(0, -3);
// console.log(pers1.number);
let p1 = new Personnage("John", 0, 0, Tanana);
console.log(p1.coordonne);
