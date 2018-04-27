/* --------------------------------------------
  DOCUMENT.READY
--------------------------------------------- */
$(document).ready(function(){
  'use strict';

  news.forEach(content => {

    let template = `
      <blockquote class="mb-50">
        <p>
            <a href="${content.link}" target="_blank">
                ${content.title}
            </a>
        </p>
        <footer>${content.date}
            <cite title="Source Title">${content.source}</cite>
        </footer>
      </blockquote>
    `

    $('#news').append(template)
  })

});

