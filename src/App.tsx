import { useNavigate } from "react-router-dom";
import DefaultRouting from "./common/routing";

const App = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       navigate("/");
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <DefaultRouting />;
};

export default App;
