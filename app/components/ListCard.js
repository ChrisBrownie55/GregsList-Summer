/*
  EXAMPLES
  listItems:
    [
      ['key', 'value'],
      ['key', 1773]
    ]

  imgURL: 'https://example.com/image.jpg'
    or
  imgURL: undefined
*/
export default function ListCard(listItems = [], imgURL = undefined) {
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
          <p>${value}</p>
        </li>`
    )
    .join('');

  return `
    <article class='card w-20r mx-2 my-2'>
      ${image}
      <ul class='list-item list-item-flush'>
        ${list}
      </ul>
    </article>
  `;
}
