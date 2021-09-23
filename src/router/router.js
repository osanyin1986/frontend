import { Switch, Route } from 'react-router-dom';
import Login  from '../views/Login';
import SignUp from '../views/SignUp';
import Next from '../views/Next';
import Createpassword from '../views/Creatpassword';
import Pinsetup from '../views/Pinsetup';
import Work from "../views/Work"




const Router = () => {
   return (
      <>
         <Switch>
            <Route exact path={["/",'/login']} component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/next" component={Next} />
            <Route exact path="/createpassword" component={Createpassword} />
            <Route exact path="/pinsetup" component={Pinsetup} />
            <Route exact path="/work" component={Work} />

          

         </Switch>
      </>
   )
}

export default Router;