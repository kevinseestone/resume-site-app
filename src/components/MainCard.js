import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    textAlign: 'top',
  }));

const SimplePaper = () => {
    return (
    <Box sx={{ 
        flexGrow: 1,
        paddingTop: 15,
        paddingLeft: 10
        }}>
      <Grid container spacing={6}>
        <Grid item md={3}>
          <Item><Typography variant='h5'>Kevin C Stone</Typography></Item>
        </Grid>
        <Grid item md={8}>
          <Item><Typography variant='h5'>Resume</Typography></Item>
        </Grid>
      </Grid>
    </Box>

    
    );

    
}

export default SimplePaper;