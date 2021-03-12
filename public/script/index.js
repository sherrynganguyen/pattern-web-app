//Helper function to generate the final pattern array
const generatePattern = (data) => {
  //Generate a array of the full pattern
  const initArray = []; 
  for (let i = 0; i < data; i++) {
    initArray.push(data-i);
  }

  //Generate inline array

  let initArrayStyled = [];
  for (let i = 0; i < initArray.length; i++) {
    initArrayStyled.push(`<span class="number-box">${initArray[i]}</span>`);
  }

  //Generate a array of all rows of patterns

  let finalPattern = [];
  for (let i = 1; i <= data; i++) {
    let tempArray = initArrayStyled.slice(0,i); //Generate temporary arrays of pattern to add the finall array 
    finalPattern.push(`<tr><td>${tempArray.join(" ")}</td></tr>`);
  }
  return finalPattern
};



$(() => {

  //Table template to display the rows of pattern

  const template = `
    <table class="data-table">

    </table>
    `;
  
  //Submit button to get a random number

  $('.submit').click(function() {
    $(".data-table").remove(); //remove previous data when click button
    $(".msg").remove();
    let data;
    $.ajax({
      url: `https://foo-bar.azurewebsites.net/api/Numbers`,
      dataType: 'json',
      error: function (err) {
        alert(err);
      },
      success: function (res) {
        data = res.naturalNumber;
        if (data > 999) {
          alert('The number is too big. Please try again');
        } else {
          data === 1 ? $('.list').append(`<p class="msg">Displaying ${data} row</p>`) : $('.list').append(`<p class="msg">Displaying ${data} rows</p>`);

          let outputPattern = generatePattern(data);

          $('.list').append(`<table class="data-table"><tbody>${outputPattern.join(" ")}</tbody></table>`);
        }
        
      }
    })

  });
})