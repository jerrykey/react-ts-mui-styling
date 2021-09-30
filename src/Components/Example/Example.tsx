import * as React from 'react';
import { withStyles } from '@mui/material/styles';

const useStyles = (theme: any) => ({
  example: {
    backgroundColor: 'red',
  },
});

class Example extends React.Component<any> {
  render() {

    const { classes } = this.props;

    return (
      <>
        <div className={classes.example}>Example</div>
      </>
    )
  }
}

// @fixme: withStyles not working
// export default withStyles(useStyles)(Example);
export default Example;