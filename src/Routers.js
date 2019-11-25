import {
  Scene,
  Modal,
  Actions,
  Router
} from 'react-native-router-flux';
import React from 'react';
import Home from './components/Home';
import DrawerContent from "./components/DrawerContent";

class RouterComponent extends React.Component {
  renderScenes = () => {
    return (
      Actions.create(
        <Modal>
          <Scene
            key="drawer"
            drawer
            contentComponent={DrawerContent}
            hideNavBar
          >
            <Scene key="root">
              <Scene
                title="Home"
                key="home"
                component={Home}
              />
            </Scene>
          </Scene>
        </Modal>
      )
    );
  }

  render() {
    return (
      <Router scenes={this.renderScenes()} />
    );
  }
}

export default RouterComponent;