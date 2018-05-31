import * as Config from '../src/config/boot';

// Loading the Tray User Interface
Config.loadUI();

/*
* Checking the directory structure
* And repairing eventual structural
* problems
*/
Config.directoryLoader();
