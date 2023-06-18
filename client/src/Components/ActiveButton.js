import React from "react";
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ActiveButton = props => {
  const { text } = props;

  return (
    <Button
      sx={{
        backgroundColor: '#C8DBBE',
        color: '#665A48'
      }}
    >
      {text}
    </Button>
  )
}

ActiveButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ActiveButton;