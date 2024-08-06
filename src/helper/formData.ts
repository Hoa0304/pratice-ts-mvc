// eslint-disable-next-line import/prefer-default-export
export function clearForm(form : HTMLFormElement) {
  const inputs = form.querySelectorAll('input');
  for (const item of inputs) {
    item.value = '';
  }
}
interface FormData {
  [key: string]: string | number | boolean | null;
}

export function collectData(form: HTMLFormElement): FormData {
  const formData = new FormData(form);
  const data: FormData = {};

  for (const key of formData.keys()) {
    const input = form.querySelector(`[name="${key}"]`) as HTMLInputElement;
    if (input) {
      switch (input.type) {
        case 'number':
          data[key] = parseInt(formData.get(key) as string, 10);
          break;
        case 'checkbox':
          data[key] = input.checked;
          break;
        case 'file':
          const file = input.files?.[0];
          data[key] = file ? `/${file.name}` : null;
          break;
        default:
          const value = formData.get(key);
          if (value === 'shelf') {
            data[key] = false;
          } else if (value === 'borrowed') {
            data[key] = true;
          } else if (value === '') {
            data[key] = input.getAttribute('placeholder') || '';
          } else {
            data[key] = value as string;
          }
      }
    }
  }

  if (window.location.pathname === '/management') {
    const hardCopyInput = form.querySelector<HTMLInputElement>(`[name="hard"]`);
    const eBookInput = form.querySelector<HTMLInputElement>(`[name="ebook"]`);
    const audioBookInput = form.querySelector<HTMLInputElement>(`[name="audio"]`);

    data['hardCopy'] = hardCopyInput?.checked || false;
    data['eBook'] = eBookInput?.checked || false;
    data['audioBook'] = audioBookInput?.checked || false;
  }

  return data;
}