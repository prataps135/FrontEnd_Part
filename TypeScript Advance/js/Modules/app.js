import * as math from './utils';
console.log(math.pi);
import { pi, n } from './utils';
console.log(pi, n);
import { MathModule } from './utils';
const myMath = new MathModule();
myMath.calculate(10, 20);
