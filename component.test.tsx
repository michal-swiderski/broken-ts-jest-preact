import React from 'preact';
import { Test } from "./component";

describe('test', function () {
  it('should not crash', function () {
    expect(<Test/>).not.toBeNull();
  });
});