import React from 'react';


// box shadows library:
const shadows = {  // shades, spectres, fates......familiars
  classic: 'rgb(204, 204, 204) 0px 1px 3px 0px',
  pressable: 'rgb(204, 204, 204) 0px -7px 3px 0px',
}


// "pressable" interface:
// 1) go from -7 to 0 to -7 in quadratic fashion upon hover and unhover (i.e. w/ mirrored bezier curves - except these curves themseles can be mirrored; i.e., be one curve which itself is a mirror)



// proof-of-concept

const classic = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '50%',
  height: '200px',
  boxShadow: 'rgb(204, 204, 204) 0px 1px 3px 0px',
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



export default () => (
  <div
    className="Demos-container"
    style={classic}
  >
    <h1>hi</h1>
  </div>
);
