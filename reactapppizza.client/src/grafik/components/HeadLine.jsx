import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFilePdf, faDownload, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const HeadLine = () => {
    return (
        <Box sx={{ mb: 3, p: 2 }}>
            <Grid container alignItems="center" spacing={2}>
                {/* Tytuł */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginLeft: '-20px' }}>
                        Sekcja aktualnych pracowników
                    </Typography>
                </Grid>

                {/* Akcje */}
                <Grid item xs={12} md={8} container justifyContent="flex-end" spacing={1}>
                    <Grid item>
                        <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faPrint} />}>
                            Drukuj
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faFilePdf} />}>
                            PDF
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faDownload} />}>
                            Pobierz
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faFileExcel} />}>
                            Excel
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeadLine;
