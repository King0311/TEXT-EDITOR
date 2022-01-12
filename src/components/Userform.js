import React,{useState} from 'react'


export default function Userform(props) {

  const [Text, setText] = useState("");
  const [find, setfind] = useState("");

  const upclicked=()=>{
    setText(Text.toUpperCase());
    props.showalertmsg("bada hogaya he")
  }
  const loclicked=()=>{
    setText(Text.toLowerCase());
    props.showalertmsg("chota hogaya he")
  }
  const findclicked=()=>{
    console.log(find);
    let counter=0;
    for(let i=0;i<=Text.length;i++){
      if(Text[i]===find){
        counter=counter+1;
      }
    }
    alert("there are " + counter +" "+ find + " in the text" );
  }

  const changed=(event)=>{
    setText(event.target.value);
  }

  const changed2=(event)=>{
    setfind(event.target.value);
  }

  const colored=()=>{
    document.body.classList.toggle("redcolor")
  }

  // const word=()=>{
  //   if(Text.split(" ").length===1){
  //     console.log(Text.split(" ").length-1)

  //   }

  // }
 
    return (
      <>
        <div>
          <div className="heading">
            <h2>
              {props.heading}
            </h2>
          </div>
          <div className="textform" action="">
            <textarea className="textarea" name="textarea" id="textarea" cols="130" rows="20" value={Text} onChange={changed}></textarea>
            <div className="btn">
              <button className="btn-uppercase" onClick={upclicked}>uppercase button</button>
              <button className="btn-lowercase" onClick={loclicked}>lowercase button</button>
              <input type="text" value={find} onChange={changed2} />
              <button className="btn-findchange" onClick={findclicked}>letter counter</button>
              <button onClick={colored}>color to red</button>
            </div>
          </div>
        </div>
        <div className="summary">
          <h3>
            Your input text contain {Text.split(/\s/ ).filter((element)=>{return element.length!==0}).length} words<br></br>
            Your input text contain {Text.length} letters<br></br>
            Avg time to read this text is {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} min
            Preview
          <p>{Text}</p>
          </h3>
        </div>
        
      </>
    )
}
