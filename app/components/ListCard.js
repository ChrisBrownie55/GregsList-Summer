/*
  EXAMPLES
  listItems:
    [
      ['key', 'value'],
      ['key', 1773]
    ]

  imgURL: 'https://example.com/image.jpg'
    or
  imgURL: ''

  buttons: [
    {
      onclick: 'app.asdfasdf.asdfasdfa.sdafa()',
      className: 'btn btn-primary',
      text: "I'm a button"
    }
  ]
*/
export default function ListCard(
  listItems = [],
  imgURL = '',
  buttonItems = []
) {
  const image = imgURL
    ? `<img
        class="card-img-top h-20r w-100 object-fit-cover"
        src="${imgURL}"
      />`
    : '';

  const list = listItems
    .map(
      ([key, value]) => `
        <li class='list-group-item d-flex justify-content-between'>
          <b>${key}:</b>
          <p class='text-right'>${value}</p>
        </li>`
    )
    .join('');

  const buttons =
    buttonItems
      .map(
        button => `
        <button onclick="${button.onclick}" class='${button.className}'>
          ${button.text}
        </button>`
      )
      .join('') || '';

  return `
    <article class='card w-20r mx-2 my-2'>
      ${image}
      <ul class='list-item list-item-flush'>
        ${list}
      </ul>
      ${buttons &&
        `
      <div class='card-body d-flex align-items-end justify-content-around mt-auto'>
        ${buttons}
      </div>`}
    </article>
  `;
}
