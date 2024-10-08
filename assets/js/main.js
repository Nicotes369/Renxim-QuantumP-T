// assets/js/main.js

// Copy Contract Address Function
function copyAddress() {
const address = document.getElementById('contract-address').innerText.split(': ')[1];
navigator.clipboard.writeText(address).then(() => {
showCopyNotification();
}).catch(err => {
alert('Failed to copy address.');
console.error('Error copying text: ', err);
});
}

// Show Copy Notification
function showCopyNotification() {
const notification = document.createElement('div');
notification.innerText = 'Address Copied!';
notification.style.position = 'fixed';
notification.style.bottom = '20px';
notification.style.right = '20px';
notification.style.padding = '10px';
notification.style.backgroundColor = '#040488';
notification.style.color = '#ffffff';
notification.style.borderRadius = '5px';
notification.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
notification.style.zIndex = '1000';
document.body.appendChild(notification);

```
setTimeout(() => {
    notification.remove();
}, 2000);
```

}

// Event listener for social icons hover effect
const socialIcons = document.querySelectorAll('.social-icon-link');
socialIcons.forEach(icon => {
icon.addEventListener('mouseenter', () => {
icon.style.transform = 'scale(1.1)';
});
icon.addEventListener('mouseleave', () => {
icon.style.transform = 'scale(1)';
});
});

// Responsive Navigation Fix
window\.addEventListener('resize', function() {
if (window\.innerWidth <= 768) {
document.querySelector('.language-selector').style.fontSize = '14px';
} else {
document.querySelector('.language-selector').style.fontSize = '16px';
}
});
