const form = document.getElementById("login-form")

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(form)

    try {
         const response = await fetch('http://127.0.0.1:3000/', {
            method: 'POST',
            body: formData 
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    } catch (error) {
    console.error('Error:', error);
    };
});