import { Provider } from "react-redux";
import store from "./store.js";
import { StartView } from "./components/StartView.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <StartView />
    </Provider>
  );
};
