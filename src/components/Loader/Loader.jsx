import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function Loader({ isVisible }) {
  return (
    <RotatingLines
      visible={isVisible}
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.5"
      width="96"
    />
  );
}

Loader.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
