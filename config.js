const config = {
  // URL principal da aplicação - usa variável de ambiente BASE_URL
  BASE_URL: process.env.BASE_URL || 
           (process.env.RENDER_EXTERNAL_URL ? process.env.RENDER_EXTERNAL_URL : 
           'https://CmbmNews.onrender.com'),
}

module.exports = config;