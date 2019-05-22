'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pops item off end of array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    stuff.pop();
    expect(stuff.length).toEqual(1); 
    expect(stuff.pop()).toBe('b');
  });

  // it('shifts items off beginning of data set', () => {
  //   let stuff = new List();
  //   stuff.push('a');
  //   stuff.push('b');
  //   expect(stuff.length).toEqual(2);
  //   stuff.shift();
  //   expect(stuff.length).toEqual(1);
  // });

});
                                                                   