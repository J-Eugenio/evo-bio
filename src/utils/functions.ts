export class Functions {
  public generateRandomNumbers(): Array<Number>{
    const numbers:Array<Number> = []
    while(numbers.length < 10){
      const n = Math.floor(Math.random() * 21);

      if(!numbers.includes(n) && n !== 0){
        numbers.push(n)
      }
    }
    return numbers
  }
}