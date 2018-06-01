import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Card from './Card';

// box shadows library:
const shadows = {  // shades, spectres, fates......familiars
  classic: 'rgb(204, 204, 204) 0px 1px 3px 0px',
  classicPressed: 'rgb(204, 204, 204) 0px 0px 3px 0px',

  elegant: 'rgb(204, 204, 204) 1px 0px 3px 0px',
  elegantHover: 'rgb(204, 204, 204) 1px 0px 4px 0px',
  elegantActive: 'rgb(204, 204, 204) 1px 0px 2px 0px',

  keyboard: 'rgb(204, 204, 204) 0px -7px 3px 0px',
  keyboardPressed: 'rgb(204, 204, 204) 0px -7px 3px -1px',
}


// "pressable" interface:
// 1) go from -7 to 0 to -7 in quadratic fashion upon hover and unhover (i.e. w/ mirrored bezier curves - except these curves themseles can be mirrored; i.e., be one curve which itself is a mirror)



// proof-of-concept

const demo = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '50%',
  height: '200px',
  boxShadow: shadows.classic,
  paddingTop: '14px',
  marginLeft: '5%',
}


// first passes

const garish = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '80px',
  boxShadow: '0px 0px 16px 0px #ccc',
  width: '70%',
  alignSelf: 'center',
  paddingBottom: '15px',
  marginLeft: '5%',
}

const dejaVu = {
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
  margin: '10px',
  padding: '10px',
  height: '300px',
  boxShadow: '3px 0px 3px 0px #ccc',
}

// aphrodite
const styles = StyleSheet.create({
  demo: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    height: '200px',
    boxShadow: shadows.elegant,
    padding: '14px',
    marginLeft: '5%',
    ':hover': {
      boxShadow: shadows.elegantHover,
    },
    ':active': {
      boxShadow: shadows.elegantActive,
    }
  },

  small: {
      '@media (max-width: 600px)': {
          backgroundColor: 'red',
      }
  }
});



export default () => {
  const { elegant, elegantHover, elegantActive } = shadows;
  return (
    <div
      className="Demos-container"
    >
    {/*
      <div className={css(styles.demo)}>
        <h1>hii</h1>
      </div>
    */}
      <Card
        content='hello'
        // styles={{
        //   width: '50%',
        //   height: '200px',
        //   padding: '14px',
        //   boxShadow: [ elegant, elegantHover, elegantActive ],
        // }}
      />
    </div>
  );
}

