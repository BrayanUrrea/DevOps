describe('hellotest', ()=>{

  let expected = '';
  let notExpected = '';
  let expectMatch = null;

  beforeEach(()=>{
    expected = 'hello';
    notExpected = 'hello123';
    expectMatch = new RegExp(/^he/);
  });

  afterEach(()=>{
    expected = '';
    notExpected = '';
  });

  xit('mirar si es igual',
    ()=> expect('hello').toBe(expected));

  xit('mirar si no es igual',
    ()=> expect('hello').not.toBe(notExpected));

  xit('mirar si empieza por he',
    ()=> expect('hello').toMatch(expectMatch));
});
