import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollections';

const numberCollections = new NumberCollection([10, 9, 0, 5, 6, 4]);
const sorter = new Sorter(numberCollections);
sorter.sort();

console.log(numberCollections.data);
