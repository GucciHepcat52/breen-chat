import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="login">
        <form className="login-form">
          <h1>Breen Chat</h1>
          <label>Enter Username:</label>
          <input type="text" id="username" />
          <label>Enter Password:</label>
          <input type="password" id="password" />
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
