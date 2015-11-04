describe("hasVowels method", function(){
  
  it("should return truthy", function(){
    expect('city'.hasVowels()).toEqual(true);
    expect('ada'.hasVowels()).toEqual(true);
    expect('money'.hasVowels()).toEqual(true);
    expect('maryam'.hasVowels()).toEqual(true);
  });

  it("should return falsy", function (){
    expect('zky'.hasVowels()).toEqual(false);
    expect('mckzky fpy'.hasVowels()).toEqual(false);
    expect('bzmch'.hasVowels()).toEqual(false);
  });
});

describe("toUpper method", function(){
  it("should return all upperCase letters", function(){
    expect('city'.toUpper()).toEqual('CITY');
    expect('ada'.toUpper()).toEqual('ADA');
    expect('money'.toUpper()).toEqual('MONEY');
    expect('maryam123'.toUpper()).toEqual('MARYAM123');
  });

  it("should return typeOf string", function (){
    expect(typeof 'rowland'.toUpper()).toEqual(jasmine.any(String));
    expect(typeof 'jeremy'.toUpper()).toEqual(jasmine.any(String));
    expect(typeof 'christiana'.toUpper()).toEqual(jasmine.any(String));
  });
});

describe("toLower method", function(){
  it("should return all lowerCase letters", function(){
    expect('CITY'.toLower()).toEqual('city');
    expect('Ada'.toLower()).toEqual('ada');
    expect('Mo123ney'.toLower()).toEqual('mo123ney');
    expect('Abiodun'.toLower()).toEqual('abiodun');
  });

  it("should return typeOf string", function (){
    expect(typeof 'rowland'.toLower()).toEqual(jasmine.any(String));
    expect(typeof 'jeREmy'.toLower()).toEqual(jasmine.any(String));
    expect(typeof 'chRistiaNa'.toLower()).toEqual(jasmine.any(String));
  });
});

describe("ucFirst method", function(){

  it("should return first letter as upperCase letter", function(){
    expect('city'.ucFirst()).toEqual('City');
    expect('Ada'.ucFirst()).toEqual('Ada');
    expect('jimoke'.ucFirst()).toEqual('Jimoke');
    expect('abdullahi'.ucFirst()).toEqual('Abdullahi');
  });

  it('should return only first letters capitalized', function(){
    expect('saBo'.ucFirst()).toEqual('SaBo');
    expect('IfeanYi'.ucFirst()).toEqual('IfeanYi');
    expect('NNaya'.ucFirst()).toEqual('NNaya');
  });

  it("should return typeOf string", function (){
    
    expect(typeof 'awesome'.ucFirst()).toEqual(jasmine.any(String));
    expect(typeof 'funny'.ucFirst()).toEqual(jasmine.any(String));
    expect(typeof 'unity'.ucFirst()).toEqual(jasmine.any(String));
  });
});

describe("isQuestion method", function(){

  it("should return truthy", function(){
    expect('sabo?'.isQuestion()).toEqual(true);
    expect('yaba lagos?'.isQuestion()).toEqual(true);
    expect('palmgroove?'.isQuestion()).toEqual(true);
    expect('how are you?'.isQuestion()).toEqual(true);
  });

  it("should return falsy", function (){
    expect('great ?man'.isQuestion()).toEqual(false);
    expect('stupid programm?er'.isQuestion()).toEqual(false);
    expect('annoying? fellow'.isQuestion()).toEqual(false);
  });
});

describe("words method", function(){

  it('should return type object', function(){
    expect(typeof 'How far with our project'.words()).toEqual('object');
    expect(typeof 'My first day at andela'.words()).toEqual('object');
    expect(typeof 'Prospects on earth.'.words()).toEqual('object');
  });

  it('should return instance of array', function(){
    expect('How far with our project'.words() instanceof Array).toEqual(true);
    expect('My first day at andela'.words() instanceof Array).toEqual(true);
    expect('Prospects on earth.'.words() instanceof Array).toEqual(true);
  });
});

describe("wordCount method", function(){

  it('should return length of array', function(){
    expect('How far guys'.wordCount()).toBe(3);
    expect('andela is always fun'.wordCount()).toBe(4);
    expect('My beautiful God forever Good'.wordCount()).toBe(5);
  });

  it('should return falsy', function(){
    expect(' '.wordCount()).not.toBe(3);
    expect('5 6 8'.wordCount()).not.toBe(2);
    expect('glorious     friday'.wordCount()).not.toBe(5);
  });

  it('should return typeof number', function(){
    expect(typeof 'How far guys'.wordCount()).toEqual('number');
    expect(typeof 'andela is always fun'.wordCount()).toEqual('number');
    expect(typeof 'My beautiful God forever Good'.wordCount()).toEqual('number');
  });
});

describe("toCurrency method", function (){

  it('should return the right value', function(){
    expect('3435.353'.toCurrency()).toBe('3,435.353');
    expect('20909.67'.toCurrency()).toBe('20,909.67');
    expect('48780.45'.toCurrency()).toBe('48,780.45');
  });

  it('should return type of String', function(){
    expect(typeof '3435.353'.toCurrency()).toEqual(jasmine.any(String));
    expect(typeof '20909.67'.toCurrency()).toEqual(jasmine.any(String));
    expect(typeof '48780.45'.toCurrency()).toEqual(jasmine.any(String));
  });
});

describe("fromCurrency method", function(){

  it('should return the right value format', function(){
    expect('3,435.353'.fromCurrency()).toBe(3435.353);
    expect('20,909.67'.fromCurrency()).toBe(20909.67);
    expect('48,780.45'.fromCurrency()).toBe(48780.45);
  });

  it('should return type of Number', function(){
    expect(typeof '3,435.353'.fromCurrency()).toEqual('number');
    expect(typeof '2,0909.67'.fromCurrency()).toEqual('number');
    expect(typeof '4,8780.45'.fromCurrency()).toEqual('number');
  });
});