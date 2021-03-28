import React, { useEffect, useState } from "react";
import useUpdate from "./useUpdate";

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       n: 1
//     }
//   }
//   onClick=()=>{
//     this.setState(state=>({
//       n: state.n + 1
//     }));
//   }
//   render(){
//     return(
//       <div>
//         App
//         <div>
//           {this.state.n}
//           <button onClick={this.onClick}>
//             +1
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

const App = props =>{
  const childVisible = true
  const [n,setN] = useState(0)
  const onClick = ()=>{
    setN(n+1)
  }

  useUpdate(()=>{
      console.log('n变了')
  },n)

  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

const Child = props =>{
  return (
    <div>Child</div>
  )
}

export default App;
