document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var person1 = document.getElementById('person1').value;
    var person2 = document.getElementById('person2').value;
    
    var percentage = calculateLovePercentage(person1, person2);
    
    displayResult(percentage);
  });
  
  function calculateLovePercentage(person1, person2) {
    // Calculate a random love percentage between 50 and 100
    return Math.floor(Math.random() * 51) + 50;
  }
  
  function displayResult(percentage) {
    var resultElement = document.getElementById('result');
    
    resultElement.textContent = `Love Percentage: ${percentage}%`;
  }
  