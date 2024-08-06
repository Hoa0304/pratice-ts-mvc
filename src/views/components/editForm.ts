import { Book } from '../../model';

interface CheckboxState {
  hard: string;
  ebook: string;
  audio: string;
  borrow: string;
}

function checkit(book: Book): CheckboxState {
  return {
    hard: book.hardCopy ? 'checked' : '',
    ebook: book.eBook ? 'checked' : '',
    audio: book.audioBook ? 'checked' : '',
    borrow: book.borrowed
      ? `
        <select name="borrowed" id="status">
          <option value="borrowed" selected>Borrowed</option>
          <option value="shelf">In-Shelf</option>
        </select>`
      : `
        <select name="borrowed" id="status">
          <option value="shelf" selected>In-Shelf</option>
          <option value="borrowed">Borrowed</option>
        </select>`,
  };
}

export function EditForm(book: Book): string {
  const { hard, ebook, audio, borrow } = checkit(book);

  return `
    <section class="wrap">
      <form action="" class="editForm" data-id="${book.id}">
        <div class="wrap-selectFile form-file">
          <input type="file" name="image" accept=".svg">
          <label for="file" class="form-image">Choose photo</label>
        </div>
        <label for="name">Name Book</label>
        <input type="text" name="name" placeholder="${book.name}" class="form-input">
        <label for="author">Author Book</label>
        <input type="text" name="author" placeholder="${book.author}" class="form-input">
        <label for="year">Year Of Birth</label>
        <input type="text" name="year" placeholder="${book.year.toString()}" class="form-input">
        <label for="category">Category</label>
        <input type="text" name="category" placeholder="${book.category}" class="form-input">
        <label for="availability">Availability</label>
        <div class="form-box">
          <input type="checkbox" name="hard" class="hardCP" ${hard}>
          <label for="hard">Hard Copy</label>
        </div>
        <div class="form-box">
          <input type="checkbox" name="ebook" class="eBook" ${ebook}>
          <label for="ebook">E - Book</label>
        </div>
        <div class="form-box">
          <input type="checkbox" name="audio" class="aBook" ${audio}>
          <label for="audio">Audio Book</label>
        </div>
        <div class="form-status">
          <section class="option">
            <label for="status" class="status">Status</label><br/>
            ${borrow}
            <i class="fa-solid fa-chevron-down icon"></i>
            <input type="text" name="location" placeholder="${book.location}" id="address">
          </section>
        </div>
        <button class="form-button btnedits">Save</button>
        <button class="form-button btncancel">Cancel</button>
      </form>
    </section>
  `;
}
