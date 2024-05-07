import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%; /* Ajusta el ancho al 100% del contenedor */
  max-width: 100%; /* Limita el ancho máximo al 100% del contenedor */
  height: 300px; /* Altura fija */
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: #EADBC8;
  border: 1px solid grey;
  overflow-y: auto;

  /* Personaliza la apariencia de la barra de desplazamiento */
  &::-webkit-scrollbar {
    width: 8px; /* Ancho de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.mode === 'dark' ? blue[600] : blue[200]}; /* Color del pulgar de la barra */
    border-radius: 4px; /* Borde redondeado del pulgar */
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]}; /* Color de fondo de la barra */
    border-radius: 4px; /* Borde redondeado de la barra */
  }

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

export default TextareaAutosize;
