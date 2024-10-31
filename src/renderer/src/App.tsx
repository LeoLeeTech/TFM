
function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="actions">
        <div className="action">
          <button onClick={ipcHandle}>
            Send IPC
          </button>
        </div>
      </div>
    </>
  )
}

export default App
