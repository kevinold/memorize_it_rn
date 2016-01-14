'use strict';
var expect = require('chai').expect;
var Utils = require('../lib/utils');

describe("utils", function() {

  it("should compute day 1", function() {

    // Day 1
    expect(Utils.computeDay(0)).to.equal(1);
    expect(Utils.computeDay(1)).to.equal(1);
    expect(Utils.computeDay(25)).to.equal(1);

  });

  it("should compute day 2", function() {

    // Day 2
    expect(Utils.computeDay(26)).to.equal(2);
    expect(Utils.computeDay(45)).to.equal(2);

  });

  it("should compute day 3", function() {

    // Day 3
    expect(Utils.computeDay(46)).to.equal(3);
    expect(Utils.computeDay(60)).to.equal(3);

  });

  it("should compute day 4", function() {

    // Day 4
    expect(Utils.computeDay(61)).to.equal(4);
    expect(Utils.computeDay(70)).to.equal(4);

  });

  it("should compute day 5", function() {

    // Day 5
    expect(Utils.computeDay(71)).to.equal(5);
    expect(Utils.computeDay(75)).to.equal(5);

  });

});

