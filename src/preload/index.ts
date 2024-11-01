import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  selectFile: () => ipcRenderer.invoke('open-file-dialog')
});
