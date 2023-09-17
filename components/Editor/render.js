import classNames from 'classnames';

// assets
// import triangleDanger from '/assets/images/triangle-danger.svg';

const renderFunctions = {
  checklist: function (block) {
    return `<ul class="checklist">
              ${block.data.items
                .map((item) => {
                  return `
                  <li>
                      <input
                          type="checkbox"
                          onclick="return false" 
                          ${item.checked ? 'checked' : ''}
                      >
                      <span>${item.text}</span>
                  </li>`;
                })
                .reduce((a, b) => a + b, '')}
          </ul>`;
  },

  table: function (block) {
    const { content, withHeadings } = block.data;
    return `<table>
        <thead>
          <tr class="${withHeadings ? 'heading' : ''}">
              ${content[0]
                .map(
                  (col) => `
                  <th>
                      ${col}
                  </th>`
                )
                .reduce((a, b) => a + b, '')}
          </tr>
        </thead>
        <tbody>
          ${content
            .slice(1)
            .map(
              (row) => `<tr>
              ${row
                .map(
                  (cell) => `<td>
                  ${cell}
              </td>`
                )
                .reduce((a, b) => a + b, '')}
          </tr>`
            )
            .reduce((a, b) => a + b, '')}
        </tbody>
        
    </table>`;
  },

  simpleImage: function (block) {
    const { data } = block;

    const className = classNames('image', {
      'with-border': data.withBorder,
      'with-background': data.withBackground,
      stretched: data.stretched,
    });

    return `
        <div class="${className}">
            <img src=${data.url} alt="${data.caption}" title="${data.caption}">
        </div>`;
  },

  code: function (block) {
    const { data } = block;

    return `<code>${data.code}</code>`;
  },

  warning: function (block) {
    const { data } = block;

    return `<div class="warning">
      <div class="header">
        <img src=${`/assets/images/triangle-danger.svg`.src} />
        <div class="title">${data.title}</div>
      </div>  
      <p class="message">
        ${data.message}
      </p>
    </div>`;
  },

  raw: function (block) {
    return block.data.html;
  },
};

export default renderFunctions;
