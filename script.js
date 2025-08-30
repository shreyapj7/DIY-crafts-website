
        function showCraft(craft) {
            document.getElementById('home').style.display = 'none';
            document.getElementById(craft).style.display = 'block';
        }

        function goHome() {
            document.getElementById('paper').style.display = 'none';
            document.getElementById('Jewellery').style.display = 'none';
            document.getElementById('decoration').style.display = 'none';
            document.getElementById('painting').style.display = 'none';
            document.getElementById('home').style.display = 'block';
        }
