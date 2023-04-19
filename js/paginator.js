function displayCertificates(pageNum=1) {
  const certificates = document.querySelectorAll('.certificate');
  const certificatesPerPage = 3;
  const startIndex = (pageNum - 1) * certificatesPerPage;
  const endIndex = startIndex + certificatesPerPage;

  certificates.forEach((certificate, index) => {
    if (index >= startIndex && index < endIndex) {
      certificate.style.display = 'block';
    } else {
      certificate.style.display = 'none';
    }
  });
}

function generatePaginationButtons(totalCertificates) {
  const certificatesPerPage = 3;
  const totalPages = Math.ceil(totalCertificates / certificatesPerPage);
  const paginationContainer = document.querySelector('.pagination');

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.addEventListener('click', () => displayCertificates(i));
    paginationContainer.appendChild(button);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generatePaginationButtons(10);
  displayCertificates();
});
