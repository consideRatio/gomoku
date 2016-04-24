import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

// Material-UI (npm) temporary complication
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
