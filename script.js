const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');


// show side bar
menuBtn.addEventListener('click', () =>{
  sideMenu.style.display = 'block';
})

// close side bar
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})


// change theme
themeToggler.addEventListener('click', () =>{
  document.body.classList.toggle('dark-theme-variables');
  // Note that we did not create any element in our markup rather, the .dark-theme-variable was created inside the style sheet. 
  // So we used the .toggle() function to toggle between the dark and the light theme.
  // so we called the root node (document) dot the body dot the classList...This means that any element found in the body that has the classList of .dark-theme-variable, it should grab it.

  themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
  themeToggler.querySelector('span:nth-child(2').classList.toggle('active');

  // remember we gave the light mode span a class of active, hence it will toggle between the properties of the light-mode active class and the dark mode...Here, the background color of theactive class is purple...when the  light mode is clicked, the background color of purple will be given to thedark mode and vise vasa.
});


// fill in orders

orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
  <td>${order.productName}</td>
  <td>${order.productNumber}</td>
  <td>${order.paymentStatus}</td>
  <td class="${order.shipping === "Declined" ? "danger" : order.shipping === "pending" ? "warning" : "primary"}">${order.shipping}</td>
  <td class="primary">Details</td>
  `
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
})