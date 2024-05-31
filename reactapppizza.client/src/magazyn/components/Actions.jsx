import React from 'react';
import { IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';

const Actions = () => (
    <div id="icon-container" className="transform-up">
        <IconButton><PrintIcon /></IconButton>
        <IconButton><FileDownloadIcon /></IconButton>
        <IconButton><DescriptionIcon /></IconButton>
    </div>
);

export default Actions;
