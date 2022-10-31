"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollections_1 = require("./NumberCollections");
const numberCollections = new NumberCollections_1.NumberCollection([10, 9, 0, 5, 6, 4]);
const sorter = new Sorter_1.Sorter(numberCollections);
sorter.sort();
console.log(numberCollections.data);
