let toastData = document.querySelectorAll('#toast-containerRqwXZpqp > div');
let toastContainer = document.getElementById('toast-containerRqwXZpqp');

function createToast(type, icon, title, text, additionalClass) {
  let newToast = document.createElement('div');
  newToast.classList.add('toast', type);
  if (additionalClass) {
    newToast.classList.add(additionalClass);
  }
  newToast.innerHTML =
    `<i class="${icon}"></i>
    <div class="content">
      <div class="titleRqwXZpqp">${title}</div>
      <span class="textRqwXZpqp">${text}</span>
    </div>
    <i class="bi bi-x-lg close-icon"></i>`;
  toastContainer.appendChild(newToast);
  newToast.timeOut = setTimeout(() => newToast.remove(), 5000);

  newToast.querySelector('.close-icon').addEventListener('click', function () {
    newToast.remove();
  });
}

toastData.forEach(dataElement => {
  let type = dataElement.getAttribute('data-type');
  let icon = dataElement.querySelector('.bi').className;
  let title = dataElement.querySelector('.titleRqwXZpqp').textContent;
  let text = dataElement.querySelector('.textRqwXZpqp').textContent;
  let additionalClass = dataElement.className;
  createToast(type, icon, title, text, additionalClass);
});
