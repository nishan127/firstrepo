import "./login.css";
import axios from "axios";
const Login = () => {
  let detail = {};
  const handel = (event) => {
    detail = { ...detail, [event.target.name]: event.target.value };
  };
  const handelSubmit = (event) => {
    console.log(detail);
    event.preventDefault();
    axios
      .post("https://server-nishan.herokuapp.com/api/auth/login", detail)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="fullpage">
          <div className="contener">
            <div className="login">login</div>

            <input
              className="logininput"
              type="text"
              name="email"
              id="emailadress"
              placeholder="username"
              onChange={handel}
            />

            <input
              className="logininput"
              type="password"
              name="password"
              id="password"
              onChange={handel}
            />
            <br />
            <button className="sumitButton" type="submit">
              submit
            </button>
            <div>
              not a member? <a href="https://www.facebook.com">creat Account</a>{" "}
            </div>
          </div>
        </div>
        <div>login</div>
      </form>
    </div>
  );
};
export default Login;
