export const Status = (): string => {
    return `
    <section class="option">
        <label for="status" class="status">Status</label><br/>
        <select name="status" id="status">
            <option value="shelf">In-Shelf</option>
            <option value="borrowed">Borrowed</option>
        </select>
        <i class="fa-solid fa-chevron-down icon"></i>
        <input type="text" name="customer" placeholder="Customer Name" id="address">
    </section>
    `
}
