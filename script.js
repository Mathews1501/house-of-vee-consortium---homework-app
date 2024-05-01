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

  document.addEventListener("DOMContentLoaded", function() {
    var subjectSelect = document.getElementById("subjectSelect");
    var gradeSelect = document.getElementById("gradeSelect");
    var downloadLink = document.getElementById("downloadLink");
    
    subjectSelect.addEventListener("change", updateDownloadLink);
    gradeSelect.addEventListener("change", updateDownloadLink);

    function updateDownloadLink() {
        var subject = subjectSelect.value;
        var grade = gradeSelect.value;

        if (subject && grade) {
            // Construct file URL based on subject and grade for both PDF and Word documents
            var pdfURL = "C:/Users/Administrator/Desktop/testDocument-" + subject + "-" + grade + ".pdf";
            var wordURL = "C:/Users/Administrator/Desktop/testDocument-" + subject + "-" + grade + ".docx";
            
            // Check if the PDF file exists, otherwise use the Word document
            var fileURL = pdfURL;
            var fileExtension = "pdf";
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', pdfURL, false);
            xhr.send();
            if (xhr.status === 404) {
                fileURL = wordURL;
                fileExtension = "docx";
            }

            // Update href attribute of download link
            downloadLink.href = fileURL;
            downloadLink.setAttribute("download", "testDocument-" + subject + "-" + grade + "." + fileExtension);
            downloadLink.style.display = "inline"; // Show the download link
        } else {
            // If subject or grade is not selected, hide the download link
            downloadLink.style.display = "none";
        }
    }
});
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
