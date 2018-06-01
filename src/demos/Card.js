import React from 'react';
import { StyleSheet, css, minify } from 'aphrodite/no-important';
import { elegant, elegantHover, elegantActive } from './styleLibrary/shadows';

/*
Constructor-like helper method for styling:
*/
const composeCardStyles = ({ width, height, padding, boxShadow }) => {
  let boxShadowDefault, boxShadowHover, boxShadowActive;
  if (!boxShadow || !Array.isArray(boxShadow)) {
    boxShadowDefault = elegant;
    boxShadowHover = elegantHover;
    boxShadowActive = elegantActive;
  } else {
    if (boxShadow.length < 2 || boxShadow.length > 3) {
      throw Error('`boxShadow` prop should reference an array of the \
      form `[ default, hover ]` or `[ default, hover, active ]`.');
    }
    [ boxShadowDefault, boxShadowHover, boxShadowActive ] = boxShadow;
    if (boxShadow.length === 2) boxShadowActive = boxShadowDefault;
  }
  const protoCard = StyleSheet.create({
    box: {
      display: 'flex',
      justifyContent: 'space-around',
      width: width || '50%',
      height: height || '200px',
      padding: padding || '14px',
      //boxShadow: boxShadowDefault,
      marginLeft: '5%',
      ':hover': {
        //boxShadow: boxShadowHover,
      },
      ':active': {
        //boxShadow: boxShadowActive,
      }
    }
  });
  return protoCard.box;
}


/*
Shortening class names for easier accessing elements in development
*/
minify(false);


/*
`styles` props:
- width
- height
- padding
- boxShadow [ main, hover, active ]
- content (essentially "children")
*/
export default ({ content, styles }) => {
  const style = composeCardStyles(styles || {});
  return (
    <div className={css(style)}>
      <h1>{content}</h1>
    </div>
  );
}
