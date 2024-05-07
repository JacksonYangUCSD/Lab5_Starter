// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber tests

test('is "845-565-1800" isPhoneNumber', () => {
  expect(isPhoneNumber("845-565-1800")).toBe(true);
});

test('is 845-565-1800 isPhoneNumber', () => {
  expect(isPhoneNumber(845-565-1800)).toBe(false);
});

test('is "845-"+565+"-1800" isPhoneNumber', () => {
  expect(isPhoneNumber("845-"+565+"-1800")).toBe(true);
});

test('not a phone number is not a phone number', () => {
  expect(isPhoneNumber("not a phone number")).toBe(false);
});



//isEmail Tests
test('is testing@gmail.com isEmail', () => {
  expect(isEmail("testing@gmail.com")).toBe(true);
});

test('is testing@gmail isEmail is false', () => {
  expect(isEmail("testing@gmail")).toBe(false);
});

test('is testing.com isEmail is false', () => {
  expect(isEmail("testing.com")).toBe(false);
});

test('is 124@hotmail.com isEmail is false', () => {
  expect(isEmail("124@hotmail.com")).toBe(true);
});

//isStrongPassword
//The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters 
//and no characters other than * * letters, numbers and the underscore may be used
test('is cSe110L0v3 isStrongPassword', () => {
  expect(isStrongPassword("cSe110L0v3")).toBe(true);
});
 
test('is IamAbigFanOfcSe110L0v3 isStrongPassword to be false', () => {
  expect(isStrongPassword("IamAbigFanOfcSe110L0v3")).toBe(false);
});
 
test('is 3Se110L0v3 isStrongPassword to be false', () => {
  expect(isStrongPassword("3Se110L0v3")).toBe(false);
});

test('is cSe110__L0v3 isStrongPassword', () => {
  expect(isStrongPassword("cSe110__L0v3")).toBe(true);
});

//testing isDate
test('is 11/24/2004 isDate', () => {
  expect(isDate("11/24/2004")).toBe(true);
});

test('is 11/24/2004 isDate', () => {
  expect(isDate("9/1/2004")).toBe(true);
});

test('is 11/24/2004 isDate', () => {
  expect(isDate("9/A/2004")).toBe(false);
});

test('is 11/24/2004 isDate', () => {
  expect(isDate("9/1/2/2004")).toBe(false);
});

//testing is HexColor
test('is #62C2FF isHexColor', () => {
  expect(isHexColor("#62C2FF")).toBe(true);
});

test('is #fff isHexColor', () => {
  expect(isHexColor("#fff")).toBe(true);
});

test('is #0 isHexColor', () => {
  expect(isHexColor("#0")).toBe(false);
});

test('is #fffffff isHexColor', () => {
  expect(isHexColor("#fffffff")).toBe(false);
});