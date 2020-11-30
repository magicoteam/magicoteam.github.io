import React, { useEffect } from 'react';

const InstagramBasicDisplayApiPage = ({ match, location }) => {
  useEffect(() => {
    console.log('match', match);
    console.log('location', location);
  }, []);

  return <div>INSTAGRAM BASIC DISPLAY API</div>;
};

export default InstagramBasicDisplayApiPage;
