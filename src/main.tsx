import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';

import App from './App.tsx';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline />
		<GlobalStyles
			styles={{
				body: {
					minWidth: '320px',
				},
				html: {
					minWidth: '320px',
				},
			}}
		/>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
);
