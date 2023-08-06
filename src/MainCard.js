import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const SimplePaper = () => {
    return (
    <Box sx={{ 
        flexGrow: 1,
        paddingTop: 15,
        paddingLeft: 10
        }}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Item>Kevin Stone</Item>
        </Grid>
        <Grid item md={6}>
          <Item>Resume</Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default SimplePaper;