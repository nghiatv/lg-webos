import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';
import css from './item.less'
import Item, { ItemDecorator } from '@enact/moonstone/Item';

const BlockCarouselItem = kind({
  name: 'BlockCarouselItem',

  propTypes: {
    item: PropTypes.object.isRequired,
  },

  defaultProps: {
  },

  styles: {
    css,
    className: 'blockContentItem',
    publicClass: true
  },

  computed: {
  },

  render: ({ item, ...rest }) => {
    return (
      <Item className={css.card} data-webos-voice-intent="Select">
        <div className={css.wrapper} >
          <img className={css.image} src={item.image.thumbnail_url} alt="" />
          <div className="data">
            <div className={css.content}>
              <h3 className={css.title}>
                {item.name}
              </h3>
              <p className={css.text}>{item.view_count ? `${item.view_count} lượt xem` : ''}</p>
            </div>
          </div>
        </div>
      </Item>
    );
  }
});
export default BlockCarouselItem;