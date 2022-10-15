import photo from "./../photo.jpg";

const Adduser = () => {
  let detail = {};
  const handel = (event) => {
    detail = { ...detail, [event.target.name]: event.target.value };
  };
  const handelSubmit = (event) => {
    console.log(detail);
    event.preventDefault();
  };
  return (
    <div className="event">
      <div className="detail">
        <form onSubmit={handelSubmit}>
          <h1> ADDUSER FORM </h1>
          <img className="picture" src={photo} alt="" />
          <input
            type="text"
            placeholder="enter your first name"
            name="firstName"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your middle name"
            name="middle name"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your lastname"
            name="last name"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your city"
            name="city"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your country"
            name="country"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your locality"
            name="locality"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your dateOfBirth"
            name="dateOfBirth"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your education"
            name="education"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your marriedStatus"
            name="marriedStatus"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your gender"
            name="gender"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your email adress"
            name="email addresh"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your contactNo"
            name="contactNo"
            onChange={handel}
          />
          <input
            type="tex"
            placeholder="enter your fatherName"
            name="fatherName"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your moterName"
            name="motherName"
            onChange={handel}
          />
          <input
            type="text"
            placeholder="enter your profileImage"
            name="profileImage"
            onChange={handel}
          />

          <button type="submit"> submit </button>
        </form>
      </div>
    </div>
  );
};
export default Adduser;
