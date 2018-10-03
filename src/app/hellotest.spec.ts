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

  it('mirar si es igual',
    ()=> expect('hello').toBe(expected));

  it('mirar si no es igual',
    ()=> expect('hello').not.toBe(notExpected));

  it('mirar si empieza por he',
    ()=> expect('hello').toMatch(expectMatch));
});
