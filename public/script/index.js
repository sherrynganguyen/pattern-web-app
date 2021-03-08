//Helper function to generate the final pattern array
const generatePattern = (data,finalPattern) => {
  //Generate a array of the full pattern
  const initArray = []; 
  for (let i = 0; i < data; i++) {
    initArray.push(data-i);
  }

  //Generate a array of all rows of patterns

  for (let i = 1; i <= data; i++) {
    let tempArray = initArray.slice(0,i); //Generate temporary arrays of pattern to add the finall array 
    finalPattern.push(tempArray);
  }
  return
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
      success: function (res) {
        data = res.naturalNumber;
        if (data === 1) {
          $('.list').append(`<p class="msg">Displaying ${data} row</p>`);
        } else {
          $('.list').append(`<p class="msg">Displaying ${data} rows</p>`);
        }
        let finalPattern = [];
        generatePattern(data, finalPattern)
        
        const $temp = $(template);

        for (let i = 0; i < finalPattern.length; i++) {
          $temp.append(`<tr class="row-${i+1}" ></tr>`);
          for (let j = 0; j < finalPattern[i].length; j++) {
            $temp.find(`.row-${i+1}`).append(`<td><span class="number-box"> ${finalPattern[i][j]}</span></td>`);
          }

        }
        $('.list').append($temp);
      }
    })

  });
})