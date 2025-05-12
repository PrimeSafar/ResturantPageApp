export function loadHome() {
    console.log('Home section loaded');

      // Set body class for styling
    document.body.className = 'home-active';
    // Change content in the center text section
    const content = document.querySelector('.CenterText');
    content.innerHTML = `Welcome to <span class="CenterRes">Restaurant99!</span> <br> 
                         Enjoy fresh flavors, warm hospitality, <br> and a dining experience made just for you.`;

    // Dynamically load the Home section's CSS
   

    // Dynamically load the Home section's JS (optional here, just for clarity)
    const script = document.createElement('script');
    script.src = './Home/home.js';  // Path to Home section's JS
    
    document.body.appendChild(script);
}
