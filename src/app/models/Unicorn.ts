export class Unicorn {
  name: string;
  color: string;
  gender: string;
  age: number;
  parents: number[];

  constructor (name: string, color: string, gender: string, age: number, parents: number[] = []) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.age = age;
    this.parents = parents;
  }

  isEqualTo(unicorn: Unicorn) {
    return (unicorn.name === this.name && unicorn.color === this.color && unicorn.age === this.age && unicorn.gender === this.gender);
  }
}
