/* Modules import code from a separate javascript file.
   This can reduce the lines of code in a single file, making it cleaner and leading to easier debugging
*/

import {sum, difference, product, quotient} from "./math.js";

console.log(`2 + 2 is ${sum(2,2)}`);

console.log(`2 - 2 is ${difference(2,2)}`);

console.log(`2 * 2 is ${product(2,2)}`);

console.log(`2 / 2 is ${quotient(2,2)}`);