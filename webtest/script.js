const params = new URLSearchParams(window.location.search);
  document.getElementById('course').value = params.get('course');

  document.getElementById('enrollForm').addEventListener('submit', function(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (!email.includes('@')) return alert('Invalid Email');
    if (phone.length < 10) return alert('Phone must be 10 digits');

    alert(`Thank you for Enrolling, ${name}!`);
  });