import Context from "./Context";
import Bird from "./bird";
import Partialdisp from "./partialdisp";
import State from "./usestate"
export default function App() {
  return (
    <>
      <Context/>
      <State />
      <Partialdisp />
      <Bird/>
    </>
  );
}
