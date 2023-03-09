/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import './index.css';

const themeBtn = document.querySelector('#toggle-dark-mode');
const resetThemeBtn = document.querySelector('#reset-to-system');
const themeText = document.querySelector('#theme-source');

themeBtn.addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle();
  themeText.textContent = isDarkMode ? 'Dark' : 'Light';
});

resetThemeBtn.addEventListener('click', async () => {
  await window.darkMode.system();
  themeText.textContent = 'System';
});
