import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Redux store'unuzu buradan içe aktarın
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteFilter from "./components/NoteFilter";

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Redux store'u Provider'a aktarın */}
      <div className="App">
        <h1>Todo App with Redux</h1>
        <NoteForm />
        <NoteFilter />
        <NoteList />
      </div>
    </Provider>
  );
}

export default App;
