function resize(size) {
  let columnList = document.getElementsByClassName('column');
  let buttonList = document.getElementsByTagName('button');

  switch(size) {
    case 1: for(let i=0; i<columnList.length; i++) {
                buttonList[i].style.border = 'none';
                buttonList[0].style.border = '1px solid black';
                columnList[i].style.flex = '100%';
                columnList[i].style.maxWidth = '100%';
            }
            break;
    case 2: for(let i=0; i<columnList.length; i++) {
                buttonList[i].style.border = 'none';
                buttonList[1].style.border = '1px solid black';
                columnList[i].style.flex = '50%';
                columnList[i].style.maxWidth = '50%';
            }
            break;
    case 4: for(let i=0; i<columnList.length; i++) {
                buttonList[i].style.border = 'none';
                buttonList[2].style.border = '1px solid black';
                columnList[i].style.flex = '25%';
                columnList[i].style.maxWidth = '25%';
            }
            break;
  }

}