import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";
import CounterExample from "./components/CounterExample";


const App = () => {
  return (
    <section>
      <CounterExample />
      <TodoList />
      <Profile />
      <ShoppingList />
    </section>
  );
};

export default App;