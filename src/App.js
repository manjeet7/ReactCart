import { Fragment } from "react";
import Cart from "./component/cart/Cart";
import Header from "./component/layout/Header";
import Meals from "./component/meals/Meals";
function App() {
  return (
    <Fragment>
      <Cart />
     <Header />
     <main>
      <Meals />
     </main>
    </Fragment>
  );
}

export default App;
