// src/Components/Loading/index.js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { LoadingWrapper } from './styles';

const Loading = () => (
    <LoadingWrapper>
        <CircularProgress />
    </LoadingWrapper>
);

export default Loading;
