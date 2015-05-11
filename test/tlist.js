// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var test = require('tape');
var testRW = require('bufrw/test_rw');

var thriftrw = require('../index');
var TStruct = thriftrw.TStruct;
var TListRW = thriftrw.TListRW;
var TList = thriftrw.TList;
var TField = thriftrw.TField;

test('TListRW', testRW.cases(TListRW, [

    [TList(12, [
        TStruct([TField(8, 1, 30)]),
        TStruct([TField(8, 1, 100)]),
        TStruct([TField(8, 1, 200)])
    ]), [
        0x0c,                   // el_type:1          -- struct
        0x00, 0x00, 0x00, 0x03, // length:4           -- 3
        0x08,                   // el[0] type:1       -- i32
        0x00, 0x01,             // el[0] id:2         -- 2
        0x00, 0x00, 0x00, 0x1e, // el[0] Int32BE      -- 30
        0x00,                   // el[0] type:1       -- stop
        0x08,                   // el[1] type:1       -- i32
        0x00, 0x01,             // el[1] id:2         -- 2
        0x00, 0x00, 0x00, 0x64, // el[1] Int32BE      -- 100
        0x00,                   // el[1] type:1       -- stop
        0x08,                   // el[2] type:1       -- i32
        0x00, 0x01,             // el[2] id:2         -- 2
        0x00, 0x00, 0x00, 0xc8, // el[2] Int32BE      -- 200
        0x00                    // el[2] type:1       -- stop
    ]]

]));