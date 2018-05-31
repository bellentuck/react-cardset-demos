import React from 'react';
import { StyleSheet, css, minify } from 'aphrodite/no-important';

const composeCardStyles = ({ width, height, padding, boxShadow }) => {
  if (boxShadow.length < 2 || boxShadow.length > 3) {
    throw Error('`boxShadow` prop should reference an array of the \
    form `[ default, hover ]` or `[ default, hover, active ]`.');
  }
  let [ boxShadowDefault, boxShadowHover, boxShadowActive ] = boxShadow;
  if (boxShadow.length === 2) boxShadowActive = boxShadowDefault;

  const protoCard = StyleSheet.create({
    box: {
      display: 'flex',
      justifyContent: 'space-around',
      width, // '50%',
      height, // '200px',
      boxShadow: boxShadowDefault, // shadows.elegant,
      padding, // '14px',
      marginLeft: '5%',
      ':hover': {
        boxShadow: boxShadowHover, //shadows.elegantHover,
      },
      ':active': {
        boxShadow: boxShadowActive, //shadows.elegantActive,
      }
    }
  });
  return protoCard.box;
}


/*
Card props:
- width
- height
- padding
- boxShadow [ main, hover, active ]
- content (essentially "children")
*/

// for development:
minify(false);

export default ({ content, styles }) => {
  const style = composeCardStyles(styles);
  return (
    <div className={css(style)}>
      <h1>{content}</h1>
    </div>
  );
}
