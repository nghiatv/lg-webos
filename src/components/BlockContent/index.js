import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less'
import BlockCarousel from '../BlockCarousel'

const BlockContent = kind({
  name: 'BlockContent',

  propTypes: {
    data: PropTypes.object.isRequired,
  },

  defaultProps: {
    greeting: 'Hello, my name is ...'
  },

  styles: {
    css,
    className: 'blockContent'
  },

  computed: {
    children: ({ children, greeting, ...rest }) => {
      return (
        `${greeting} ${children}`
      )
    }
  },

  render: ({ data, ...rest }) => {
    return (
      <div {...rest}>
        {/* <img src={data.icon_url} alt="" /> */}
        <h3 className={css.title}>{data.name}</h3>
        <BlockCarousel items={data.item} />
      </div>
    );
  }
});
export default BlockContent;