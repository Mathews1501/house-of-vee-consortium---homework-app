//js for my scroll up button
document.addEventListener("DOMContentLoaded", function() {
    var scrollUpButton = document.getElementById('scrollUpBtn');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollUpButton.style.display = 'block';
      } else {
        scrollUpButton.style.display = 'none';
      }
    });
  
    scrollUpButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  //js for my download 
  
  // Function to trigger download
  function downloadFile() {
      // Check if Grade 4 and English are selected
      var subject = document.getElementById('subjectSelect').value;
      var grade = document.getElementById('gradeSelect').value;

      if (subject === 'english' && grade === 'grade4') {
          // Create a dummy link
          var link = document.createElement('a');
          link.href = 'path/to/grade4_english.pdf'; // Replace 'path/to/grade4_english.pdf' with the actual path to your PDF file
          link.download = 'grade4_english.pdf'; // Specify the filename for download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      } else {
          alert('Please select Grade 4 and English to download the file.');
      }
  }

  // Attach the download function to the click event of the download link
  document.getElementById('downloadLink').addEventListener('click', downloadFile);


  //js to link the pages to my video lessons

  function redirectToPage() {
    var grade = document.getElementById("gradeSelect").value;
    var subject = document.getElementById("subjectSelect").value;

    // Define a mapping of grade-subject pairs to URLs
    var urlMapping = {
      // grade 4 urls
        "grade4-english": "",
        "grade4-maths": "",
        "grade4-geography": "",
        "grade4-afrikaan": "",

      // grade 5 urls
      "grade5-english": "",
      "grade5-maths": "https://www.youtube.com/watch?v=yLC0qfXvQSE&t=14s&pp=ygUNZ3JhZGUgNSBtYXRocw%3D%3D",
      "grade5-geography": "",
      "grade5-afrikaan": "",

        // grade 6 urls
        "grade6-english": "",
        "grade6-maths": "",
        "grade6-geography": "",
        "grade6-afrikaan": "",

        // grade 7 urls
        "grade7-english": "",
        "grade7-maths": "",
        "grade7-geography": "",
        "grade7-afrikaan": "",
    };

    // Construct a key for the mapping based on selected grade and subject
    var key = grade.toLowerCase() + "-" + subject.toLowerCase();

    if (urlMapping[key]) {
        // If a URL exists for the selected grade-subject pair, redirect to that URL
        window.location.href = urlMapping[key];
    } else {
        alert("Selected grade and subject combination does not have a corresponding URL.");
    }
}
