import React from 'react';
import { Grid, IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GetAppIcon from '@mui/icons-material/GetApp';

const ExportOptions = () => {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <IconButton color="primary">
                    <PrintIcon className="icon" />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton color="primary">
                    <PictureAsPdfIcon className="icon" />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton color="primary">
                    <GetAppIcon className="icon" />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default ExportOptions;
