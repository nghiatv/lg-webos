import React from 'react';
import css from '../Home/Home.less'
import CategoryContainer from '../../containers/CategoryContainer'
import { Panel } from '@enact/moonstone/Panels/Panel';
import NavContainer from '../../containers/NavContainer'
import Spinner from '@enact/moonstone/Spinner';
import Body from './Body'
import PropTypes from 'prop-types';

class LiveChannelView extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  componentDidMount = async () => {
    try {
      const phet = await this.props.loadCategory({ id: 229 })
      console.log(phet)
      this.setState({ loading: false })
    } catch (e) {
      this.setState({ loading: false })
      console.log(e)
    }
  }

  componentDidUpdate() {
  }

  onChange = () => {
  }

  getScrollTo = () => {
  }

  render = () => {
    const { data, loading } = this.state
    return (
      <Panel className={css.home}>
        <div className={css.panelBody}>
          <NavContainer className={css.navWrapper} />

          {!loading
            ?
            <Body data={data} className={css.bodyWrapper} />
            : (
              <div className={css.categoryWrapper}><Spinner /></div>
            )
          }
        </div>

      </Panel>
    );
  }
}
export default CategoryContainer(LiveChannelView);