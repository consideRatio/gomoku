import publications from './publications';
import methods from './methods';

import {Challenges} from '/lib/collections';

publications();
methods();

// Clears the challenges collection on server startup
const result = Challenges.remove({});
Console.log("Cleared the challenges collection.", result);
