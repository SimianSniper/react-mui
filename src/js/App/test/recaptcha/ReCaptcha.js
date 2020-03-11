import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

const ReCaptcha = ({
  debug,
  size,
  sitekey,
  theme,
  onChange,
}) => {
  const [state, setState] = useState({
    value: '',
    load: false,
    expired: false,
  });

  const reCaptchaRef = useRef(null);

  useEffect(() => {
    setState({ load: true });
    if (debug) { console.log('Component Mounted - loading ReCaptcha'); }
  }, []);

  const asyncScriptOnLoad = () => {
    if (size === 'invisible') { reCaptchaRef.current.execute(); }

    if (debug) { console.log('ReCaptcha Loaded ', size === 'invisible' ? ' - executing' : ' '); }
  };

  return (
    <>
      {state.load && (
        <>
          <ReCAPTCHA
            style={{ display: 'none' }}
            theme={theme}
            ref={reCaptchaRef}
            size={size}
            sitekey={sitekey}
            onChange={onChange}
            asyncScriptOnLoad={asyncScriptOnLoad}
          />
        </>
      )}
    </>
  );
};

ReCaptcha.displayName = 'ReCaptcha';

ReCaptcha.defaultProps = {
  debug: false,
  size: 'invisible',
  theme: 'light',
};

ReCaptcha.propTypes = {
  debug: PropTypes.bool,
  size: PropTypes.oneOf(['invisible', 'normal', 'compact']),
  theme: PropTypes.oneOf(['light', 'dark']),
  sitekey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReCaptcha;
