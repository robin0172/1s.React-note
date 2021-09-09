import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
 <>{/**<react.fragmet >*/}
 <h1>hellow world</h1>
 <p>plz like and shere</p>
 </>,
  document.getElementById('root')
);
//NOte:when you are using reder method. it only takes only one single
//line of element.
//you have to use react fragment to write mulipal line of code'<></>'
//you can use div also
//if  your react verson up to 16.0 verson you can use arrry method also"[]"
//if you use div,it can create problem while using 
//css.because it create another div

