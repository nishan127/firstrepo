import "./signup.css";
const Singup = () => {
  return <div>
    <div className="fullpagesignup">
    <div className="contenersignup">
    <div className="signupHeader">Affiliate Signup Form</div>
            <label for="">Name</label><br/>
    <input className="signupInput" type="text" name="pass" id="identycard" placeholder="first"/> 
    <input className="signupInput" type="text" placeholder="last" /><br/>
     <label for="">Email</label><br/>
     <input className="signupInputFull" type="text" name="pass" id="identycard"/><br/>
    <label for="">Addresh</label><br/>
     <input className="signupInputFull" type="text" name="pass" id="identycard" placeholder="Street Address"/><br/>
     <input className="signupInputFull" type="text" name="pass" id="identycaed" placeholder="Street Addresh Line 2"/><br/>
     <input className="signupInput" type="text" placeholder="city"/>
     <input className="signupInput" type="text" placeholder="Region"/><br/>
     <input className="signupInput"  type="text" placeholder="Country"/>
     <input className="signupInput" type="text" placeholder="Potal / Zip Code"/><br/>
     
     <div> Commission payment</div>
     <div className="buttonWrap">
        <button className="sumitsentform">SEND FORM</button>

     </div>

    </div>
    </div>
  </div>;
};
export default Singup;
