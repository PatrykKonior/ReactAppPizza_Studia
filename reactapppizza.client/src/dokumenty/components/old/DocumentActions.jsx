import React from 'react';
import { IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';

function DocumentActions() {
    return (
        <div className="dokumenty-icons">
            <IconButton color="primary" aria-label="print">
                <PrintIcon />
            </IconButton>
            <IconButton color="primary" aria-label="download">
                <FileDownloadIcon />
            </IconButton>
            <IconButton color="primary" aria-label="export to Excel">
                <DescriptionIcon />
            </IconButton>
        </div>
    );
}

export default DocumentActions;
