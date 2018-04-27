/* --------------------------------------------
  DOCUMENT.READY
--------------------------------------------- */
$(document).ready(function () {
  'use strict';

  // ADD NEWS

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


  // ADD MAIL

  let username = "info";
  let hostname = "ellis-open-letter.eu";
  let address = username + "@" + hostname;
  $('#contact').append(
    `<a href="mailto:${address}">${address}</a>`
  )



});

