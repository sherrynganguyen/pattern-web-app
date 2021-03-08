$(() => {
  const template = `
      <table class="data-table">

      </table>
      `;
  
  $('.submit').click(function() {
    $(".data-table").remove();
     console.log("hello") 
    const data = 4;
    const initArray = [];
    for (let i = 0; i < data; i++) {
      initArray.push(data-i)
    }


    let finalArray = [];

    for (let i = 1; i <= data; i++) {
      let arrData1 = initArray.slice(0,i);
      finalArray.push(arrData1)
    }

    const $temp = $(template)

    for (let i = 0; i < finalArray.length; i++) {
      $temp.append(`<tr class="row-${i+1}" ></tr>`)
      for (let j = 0; j < finalArray[i].length; j++) {
        $temp.find(`.row-${i+1}`).append(`<td> ${finalArray[i][j]}</td>`)
      }

    }

    $('.list').append($temp);
  });
})