import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// // test(arg1, arg2);
// // test('test description in English', () => { });
// test('test description in English', () => { 
//   // invoke a function 
//   // test that function with expect()
// });


// positive test case 
test('evaluate an arithmetic op', () => {
  const sum = 10 + 10;
  expect(sum).toBe(20);
});

//negative test case 
test('evaluate an arithmetic op', () => {
  const sum = 10 + 10;
  expect(sum).not.toBe(25);
});

// describe('arg1', () => {});

describe('tests for arithmetic ops', () => {

  // equivalent to test();
  // positive test case 
  it('test addnums', () => {
    const sum = 10 + 10;
    expect(sum).toBe(20);
  });

  // negative test case 
  it('test addnums 2', () => {
    const sum = 10 + 11;
    expect(sum).not.toBe(20);
  });

});

