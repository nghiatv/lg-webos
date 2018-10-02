// import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import BlockContent from '../BlockContent/index'
import css from "./index.less"
class Content extends React.Component {
  static propTypes = {
    home: PropTypes.object,
  }
  renderItem = (data) => {
    return (<BlockContent data={data} />)
  }

  render = () => {
    const { home } = this.props
    if (home && home.menu_item && home.menu_item.length) {
      const { menu_item } = home
      return (
        <div className={css.mainContent}>
          <div className={css.content}>
            {
              menu_item.map((item, index) => {
                return (
                  <BlockContent className={css.blockContent}
                    data={item}
                    key={index}
                  />
                );
              })
            }
          </div>

        </div>
      );

    } else { return (<div />) }
  }
}

export default Content;