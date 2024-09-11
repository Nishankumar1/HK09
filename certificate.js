document.getElementById('generateCertificate').addEventListener('click', function() {
    const studentName = document.getElementById('studentName').value.trim();
    if (studentName === '') {
        alert('Please enter your name.');
        return;
    }

    document.getElementById('studentNameDisplay').textContent = studentName;
    document.getElementById('certificate').style.display = 'block';
});
