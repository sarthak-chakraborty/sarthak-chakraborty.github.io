// const jsyaml = require('js-yaml');

var $nav;
var $navbarToggle;
var $window;
var $body;
var navOffsetTop;


function init_index() {
  loadNews();
	loadPubs();
  loadPatents();
}

function loadLinks(linksList) {
  var linksHTML = '';
  linksList.forEach((link, idx) => {
    linksHTML += `<a href="${link['link']}"${
      'target' in link ? `target="${link['target']}"` : ''
    }>[${link['text']}]</a>`;
    if (idx < linksList.length - 1) {
      linksHTML += ' - ';
    }
  });
  return linksHTML;
}


function loadNews() {
  fetch('data/news.yml')
    .then(response => response.text())
    .then(response_text => {
      var news = jsyaml.load(response_text);
      var newsTableHTML = '<table>';
      news.forEach((update, idx) => {
        newsTableHTML += `<tr>
          <td>${update['date']}</td>
          <td>${update['update']}</td>
        </tr>`;
        if (idx == 5) {
          newsTableHTML += `<tr>
              <td><a href="javascript:toggleVis('morenews')">show more</a></td>
            </tr>
          </table>
          <table id="morenews" style="display: none;">`;
        }
      });
      newsTableHTML += '</table>';
      $('#news-table').html(newsTableHTML);
    });
}


// function loadPubs() {
//   fetch('data/pubs.yml')
//     .then(response => response.text())
//     .then(response_text => {
//       var pubHTML = '';
//       jsyaml.load(response_text).forEach(pubYear => {
//         pubsInYear = '';
//         pubYear.pubs.forEach(pub => {
//           authorList = '';
//           pub['authors'].forEach((author, idx) => {
//             authorList += `${('me' in author) && author['me'] ?
//             `<span class="my-name">${author['name']}</span>` :
//             `${author['name']}`}${idx < pub['authors'].length - 1 ? ', ' : ''}`;
//           });
//           pubsInYear += `<div class="row publication">
//             <div class="paper-title">
//               <a href="${pub['link']}">${pub['title']}</a>
//             </div>
//             <div class="paper-authors">${authorList}</div>
//             ${'conf' in pub ?
//             `<div class="paper-conference">${pub['conf']}</div>` : ''}
//             ${'links' in pub ?
//             `<div class="paper-links">${loadLinks(pub['links'])}</div>` : ''}
//           </div>`;
//         });
//         pubHTML += `${pubsInYear}`;
//       });
//       $('#pub-list').html(pubHTML);
//     })
// }

function loadPubs() {
  fetch('data/pubs.yml')
    .then(response => response.text())
    .then(response_text => {
      var pubHTML = '';
        jsyaml.load(response_text).forEach(pub => {
          authorList = '';
          pub['authors'].forEach((author, idx) => {
            authorList += `${('me' in author) && author['me'] ?
            `<span class="my-name">${author['name']}</span>` :
            `${author['name']}`}${idx < pub['authors'].length - 1 ? ', ' : ''}`;
          });
          pubHTML += `<div class="row publication">
            <div class="paper-title">
              <a href=#>${pub['title']}</a>
            </div>
            <div class="paper-authors">${authorList}</div>
            ${'conf' in pub ?
            `<div class="paper-conference">${pub['conf']}</div>` : ''}
            ${'links' in pub ?
            `<div class="paper-links">${loadLinks(pub['links'])}</div>` : ''}
          </div>`;
        });
      $('#pub-list').html(pubHTML);
    })
}

function loadPatents() {
  fetch('data/patents.yml')
    .then(response => response.text())
    .then(response_text => {
      var patentHTML = '';
      jsyaml.load(response_text).forEach(patent => {
          authorList = '';
          patent['authors'].forEach((author, idx) => {
            authorList += `${('me' in author) && author['me'] ?
            `<span class="my-name">${author['name']}</span>` :
            `${author['name']}`}${idx < patent['authors'].length - 1 ? ', ' : ''}`;
          });
          patentHTML += `<div class="row publication">
            <div class="paper-title">
              <a href="${patent['link']}">${patent['title']}</a>
            </div>
            <div class="paper-authors">${authorList}</div>
            ${'status' in patent ?
            `<div class="paper-conference">${patent['status']}</div>` : ''}
          </div>`;
        });
      $('#patent-list').html(patentHTML);
    })
}

// function loadPubs() {
//   (function () {
//     "use strict";
//         $(document).ready(function () {
//             $.get('data/pubs.yml').done(function (data) {
//               var pubHTML = '';
//               jsyaml.load(data).forEach(pubYear => {
//                 var pubsInYear = '';
//                 pubYear.pubs.forEach(pub => {
//                   var authorList = '';
//                   pub['authors'].forEach((author, idx) => {
//                     authorList += `${('me' in author) && author['me'] ?
//                     `<span class="my-name">${author['name']}</span>` :
//                     `${author['name']}`}${idx < pub['authors'].length - 1 ? ', ' : ''}`;
//                   });
//                   pubsInYear += `<div class="row publication">
//                     <div class="paper-title">
//                       <a href="#">${pub['title']}</a>
//                     </div>
//                     <div class="paper-authors">${authorList}</div>
//                     ${'conf' in pub ?
//                     `<div class="paper-conference">${pub['conf']}</div>` : ''}
//                     ${'links' in pub ?
//                     `<div class="paper-links">${loadLinks(pub['links'])}</div>` : ''}
//                   </div>`;
//                 });
//                 pubHTML += `${pubsInYear}`;
//               });
//               $('#pub-list').html(pubHTML);
//           });
//         });
//     }());
// }