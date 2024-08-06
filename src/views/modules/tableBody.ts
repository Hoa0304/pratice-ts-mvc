import { pp, sub, tick, trac } from '../../resources/assets/image';
import { Book } from "../../model";

export const TBody = (book: Book): string => {
  const checkit = (item: 'hard' | 'ebook' | 'audio' | 'stt' | 'ic' | 'lction'): string => {
    switch (item) {
      case 'hard':
        return book.hardCopy ? tick : sub;
      case 'ebook':
        return book.eBook ? tick : sub;
      case 'audio':
        return book.audioBook ? tick : sub;
      case 'stt':
        return book.borrowed ? 'Borrowed' : 'In-Shelf';
      case 'ic':
        return book.borrowed ? pp : trac;
      case 'lction':
        return book.borrowed ? book.location : 'CS A-15';
      default:
        return '';
    }
  };

  return `
    <tr class="bookitem" data-id="${book.id}">
        <td class="titleCol">
            <figure class="title">
                <img src="${book.image}" alt="">
                <figcaption>
                    <span class="name">${book.name} </span><br>
                    <span class="extra">${book.author}, ${book.year}</span>
                    <p>Second Edition</p>
                </figcaption>
            </figure>
        </td>
        <td class="categoryCol">
            <div class="category">
                <span class="name">${book.category}</span>
                <span class="extra">UX Design</span>
            </div>
        </td>
        <td class="availabilityCol">
            <div class="availability">
                <figure class="availability__wrap">
                    <img src="${checkit('hard')}" alt="tick">
                    <figcaption class="extra">Hard Copy</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${checkit('ebook')}" alt="tick">
                    <figcaption class="extra">E - Book</figcaption>
                </figure>
                <figure class="availability__wrap">
                    <img src="${checkit('audio')}" alt="tick">
                    <figcaption class="extra">Audio book</figcaption>
                </figure>
            </div>
        </td>
        <td class="statusCol">
            <div class="status">
                <span class="extra">
                    ${checkit('stt')}
                </span>
                <figure class="status__location">
                    <img src="${checkit('ic')}" alt="">
                    <figcaption class="extra">${checkit('lction')}</figcaption>
                </figure>
            </div>
        </td>
        <td class="btn">
            <button class="extra deletebtn">Delete</button>
            <button class="extra editbtn">Edit</button>
        </td>
    </tr>
    `;
};
