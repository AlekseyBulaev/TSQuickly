class Dog {
    constructor(readonly name: string) {}
    public sayHello(): string {
      return "Dog says hello!";
    }
  }
  
  class Fish {
    constructor(readonly name: string) {}
    public dive(howDeep: number): string {
      return "Diving ${howDeep} feet";
    }
  }
  
  type Pet = Dog | Fish;
  
  function talkToPet(pet: Pet): string | undefined {
    if (pet instanceof Dog) {
      return pet.sayHello();
    } else if (pet instanceof Fish) {
      return "Fish cannot talk, sorry";
    }
  }
  
  let dog = new Dog("Sammy");
  let fish = new Fish("Nemo");
  
  console.log(talkToPet(dog));
  console.log(talkToPet(fish));
  