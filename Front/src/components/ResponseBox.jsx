import React from 'react';
import TextareaAutosize from '../text_area_styles/TextAreaAutosize';

const ResponseBox = ({ response }) => {
  const formatText = (response) => {
    const { veridic, subjectivity, polarity, related_news } = response;

    // Limitar subjectivity y polarity a dos decimales
    const formattedSubjectivity = subjectivity ? subjectivity.toFixed(2) : '';
    const formattedPolarity = polarity ? polarity.toFixed(2) : '';

    let formattedNews = '';

    // Verificar si related_news.articles está definido antes de acceder a las noticias
    if (related_news && related_news.articles) {
      formattedNews = related_news.articles.map((article) => {
        // Formato de Markdown para cada noticia
        return `Title: ${article.title}\nDescription: ${article.description}\nURL: ${article.url}`;
      }).join('\n\n');
    }

    // Construye el texto completo con la veracidad, subjectivity, polarity y las noticias formateadas
    return `Your new has a probably to be: ${veridic}
    \nSubjectivity, Subjectivity scores text for opinion versus fact, with higher scores indicating more personal opinion: ${formattedSubjectivity} (from 0 to 1)
    \nPolarity, Polarity is measured using sentiment analysis techniques, assigning numeric values to represent the direction and strength of sentiment in text: ${formattedPolarity} (from -1 to 1)\n\nRelated News:\n\n${formattedNews}`;
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
