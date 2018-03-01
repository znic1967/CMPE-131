/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDropdown()
{
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) 
{
  if (!event.target.matches('.dropbtn')) 
  {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'))
      {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function isValid() 
{
  var pass = document.getElementById("myPsw").value;
  var x = document.getElementById("hideonpass");
  var myTable = document.getElementById("ts-table");
  var myGPA = document.getElementById("ts-gpa");
  if (pass=="cmpe131") 
  {
    x.style.display = "none";
    myTable.style.display="table";
    myGPA.style.display="block";
  } 
  else 
  {
    alert('Incorrect Password!');
  }
}