const consoleElement = document.getElementById('console');
consoleElement.textContent = 'Soon..';

const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', ev => {
  // Create a temporary textarea element since copy does not work
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = consoleElement.textContent;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);
  
  // Alert the user
  alert('Copied code! Please check your clipboard');
});