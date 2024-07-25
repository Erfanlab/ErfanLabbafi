
function myFunction() {
        const checkBox = document.getElementById("toggle-36");
        let users = document.getElementById('navbars');
        let iconname = document.getElementById('iconweb');
        console.log(checkBox)
console.log(users)
checkBox.checked  ? users.classList.remove('bg-main-500') + users.classList.add('bg-gray-800') + iconname.classList.remove('bg-black','text-white') + iconname.classList.add('bg-white','text-black')  : users.classList.remove('bg-gray-800') + users.classList.add('bg-main-500') + iconname.classList.remove('bg-white','text-black') + iconname.classList.add('bg-black','text-white') ;

      };
