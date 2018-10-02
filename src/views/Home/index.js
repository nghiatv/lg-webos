import React from 'react';
import css from './Home.less'
import AppStateDecorator from './AppStateDecorator'
import { Panel } from '@enact/moonstone/Panels/Panel';
import NavContainer from '../../containers/NavContainer'
import Body from './Body/Body.js'

class HomeView extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount = async () => {
    // await this.props.loadHome()
  }

  componentDidUpdate() {
  }

  onChange = () => {
  }

  getScrollTo = () => {
  }

  render = () => {
    return (
      <Panel className={css.home}>
        <div className={css.panelBody}>
          <NavContainer className={css.navWrapper} />
          <Body className={css.bodyWrapper} />
        </div>
      </Panel>
    );
  }
}
export default AppStateDecorator(HomeView);