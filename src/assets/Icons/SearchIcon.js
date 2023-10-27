import React, {memo} from 'react';
import Svg, {Line, Path} from 'react-native-svg';
import colors from '../colors';

const SearchIcon = memo(({iconFill = colors.white, style}) => {
  return (
    <Svg style={style} width="24" height="24" viewBox="0 0 50 50" fill="none">
      <Path
        d="M21,3C11.6,3,4,10.6,4,20s7.6,17,17,17s17-7.6,17-17S30.4,3,21,3z M21,33c-7.2,0-13-5.8-13-13c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13C34,27.2,28.2,33,21,33z"
        fill={iconFill}
      />
      <Line
        fill={iconFill}
        stroke={iconFill}
        strokeWidth="6"
        strokeMiterlimit="10"
        x1="31.2"
        y1="31.2"
        x2="44.5"
        y2="44.5"
      />
    </Svg>
  );
});

export default SearchIcon;
