import * as React from 'react';

const useStyles = (theme: any) => ({
  example: {
    backgroundColor: 'red',
  },
});

class Example2 extends React.Component<any> {
  render() {

    const { classes } = this.props;

    return (
      <>
        <div style={{backgroundColor: 'red'}}>Example</div>
      </>
    )
  }
}

export default Example2;