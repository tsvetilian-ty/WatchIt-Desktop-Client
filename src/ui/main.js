import { Menu } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';
import * as path from 'path';
import menubar from 'menubar';

const UI = () => {
  const trayBar = menubar({
    index: `file://${path.join(__dirname, '../', '../', 'public', './index.html')}`,
    preloadWindow: true,
    width: 200,
    height: 200,
  });

  const isDevMode = process.execPath.match(/[\\/]electron/);

  if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

  trayBar.on('ready', async () => {
    const contextMenu = Menu.buildFromTemplate([
    { label: 'Quit', type: 'normal', role: 'quit' },
    ]);

    trayBar.tray.setContextMenu(contextMenu);

    trayBar.window.setSkipTaskbar(true);

    trayBar.window.setResizable(false);

    if (isDevMode) {
      await installExtension(REACT_DEVELOPER_TOOLS);
      trayBar.window.webContents.openDevTools();
    }

    trayBar.app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        trayBar.app.quit();
      }
    });
  });
};

export default UI;
