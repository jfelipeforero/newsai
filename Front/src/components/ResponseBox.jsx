import React from 'react';
import TextareaAutosize from '../text_area_styles/TextAreaAutosize';

const ResponseBox = ({ response }) => {
  const formatText = (response) => {
    const { veridic, subjectivity, polarity, related_news } = response;

    // Limitar subjectivity y polarity a dos decimales
    const formattedSubjectivity = subjectivity ? subjectivity.toFixed(2) : '';
    const formattedPolarity = polarity ? polarity.toFixed(2) : '';

    // Verifica si related_news está definido antes de acceder a la propiedad data
    const formattedNews = related_news ? related_news.data.split('\n\n').map((news) => {
      const lines = news.split('\n');
      // Formato de Markdown para cada noticia
      const formattedNews = lines.map((line, index) => {
        // Reemplaza cualquier asterisco con un espacio en blanco
        const cleanedLine = line.replace(/[*>]/g, '');
        return cleanedLine;
      }).join('\n');
      return formattedNews;
    }).join('\n\n') : '';

    // Construye el texto completo con la veracidad, subjectivity, polarity y las noticias formateadas
    return `Veridic: ${veridic}\n\nSubjectivity: ${formattedSubjectivity}\n\nPolarity: ${formattedPolarity}\n\n${formattedNews}`;
  };

  const formattedResponse = formatText(response);

  return (
    <TextareaAutosize
      id="standard-multiline-flexible"
      label="Response"
      multiline
      maxRows={10}
      minRows={5}
      variant="outlined"
      value={formattedResponse}
      InputProps={{ readOnly: true }}
      style={{ width: '600px', maxHeight: '200px', overflowY: 'auto' }}
    />
  );
};

export default ResponseBox;
