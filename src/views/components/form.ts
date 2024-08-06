export function Form() {
    return `
        <section class="wrap">
            <form class="form">
                <div class = "wrap-selectFile form-file">
                    <input type="file" name = "image" accept=".svg"> 
                    <label for="file" class="form-image">Choose photo</label>
                </div>
                <label for="name">Name Book</label>
                <input type="text" name="name" placeholder="Enter Name" class="form-input">
                <label for="author">Author Book</label>
                <input type="text" name= "author" placeholder="Enter Author" class="form-input">
                <label for="year">Year Of Birth</label>
                <input type="text" name="year" placeholder="Enter Year Of Birth" class="form-input">
                <label for="category">Category</label>
                <input type="text" name="category" placeholder="Enter Category" class="form-input">
                <label for="availability">Availability</label>
                <div class="form-box">
                    <input type="checkbox" name="hard">
                    <label for="hard">Hard Copy</label>
                </div>
                <div class="form-box">
                    <input type="checkbox" name="ebook" >
                    <label for="ebook">E - Book</label>
                </div>
                <div class="form-box">
                    <input type="checkbox" name="audio">
                    <label for="audio">Audio Book</label>
                </div>
                <div class="form-status">
                <section class="option">
                    <label for="status" class="status">Status</label><br/>
                    <select name="borrowed" type="select" id="status">
                        <option value="shelf">In-Shelf</option>
                        <option value="borrowed">Borrowed</option>
                    </select>
                    <i class="fa-solid fa-chevron-down icon"></i>
                    <input type="text" name="location" placeholder="Customer Name" id="address">
                </section>
                </div>
                <button class="form-button">Add</button>
            </form>
        </section>
    `;
}
