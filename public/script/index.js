$(() => {

  //Table template to display the rows of pattern

  const template = `
      <table class="data-table">

      </table>
      `;
  
  //Submit button to get a random number

  $('.submit').click(function() {
    $(".data-table").remove(); //remove previous data when click button
    let data;
    $.ajax({
      url: `https://foo-bar.azurewebsites.net/api/Numbers`,
      dataType: 'json',
      success: function (res) {
        data = res.naturalNumber;

        //Generate a array of the full pattern
        const initArray = []; 
        for (let i = 0; i < data; i++) {
          initArray.push(data-i);
        }

        //Generate a array of all rows of patterns
        let finalArray = [];

        for (let i = 1; i <= data; i++) {
          let tempArray = initArray.slice(0,i); //Generate temporary arrays of pattern to add the finall array 
          finalArray.push(tempArray);
        }

        //Create table for final array
        const $temp = $(template);

        for (let i = 0; i < finalArray.length; i++) {
          $temp.append(`<tr class="row-${i+1}" ></tr>`);
          for (let j = 0; j < finalArray[i].length; j++) {
            $temp.find(`.row-${i+1}`).append(`<td> ${finalArray[i][j]}</td>`);
          }

        }
        $('.list').append($temp);
      }
    })

  });
})