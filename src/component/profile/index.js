import"./index.css"
const Profile=()=>{
    let personDetail={
    FirstName:'pankaj',
    LastName:'koirala',
    MidleName:'prashad',
    DateofBirth:'2061/07/04',
    PlaceofBirth:'damakjhapa',
    SchoolLable:'grade11',
    Nationlity:'nepali',
    Relation:'hindu',
    DateofJoining:'24july2093',


    age:18,
        
    }
    const property = [
        { name: "car", age: 14, location: "jhapa" },
        { name: "bus", age: 16, location: "biratnagar" },
        { name: "jeep", age: 17, location: "nepal" },
        { name: "house", age: 19, location: "india" },
        { name: "house", age: 10, location: "china" },
        { name: "house", age: 15, location: "lalitpur" },
        { name: "house", age: 13, location: "morang" },
      ];
      const company={
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
              "Radiation resistance",
              "Turning tiny",
              "Radiation blast"
            ]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
      }
    return(
        <div>
        <div className="fullpageprofile">
        <div className="marutiprofile">
        <div className="nishan">{personDetail.FirstName} shankar Huddedar</div>
        <div className="pankaj">Aspirant</div>
        <img className="roman" src="https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/281094103_479396377273731_448138130494307571_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uaN-OpzUG2UAX8UIdFH&_nc_ht=scontent.fbdp2-1.fna&oh=00_AT-wBehKZA2KuUK_ydMN6ese-NZv6KUq_p8Xt1RMoM5zLA&oe=630A27BB"/>
      <div className="sumitra">click hear to change the profile image</div>
       <div className="pk">
        <div className="key">First Name:</div>
        <div className="value">{personDetail.FirstName}</div>
        </div>
       <div className="pk">
        <div className="key">Middle Name:</div>
        <div className="value">{personDetail.MidleName}</div>
        </div>
       <div className="pk">
        <div className="key">Last Name:</div>
       <div className="value">{personDetail.LastName}</div>
       </div>
       <div className="pk">
        <div className="key"> Date Of joining:</div> 
        <div className="value">{personDetail.DateofJoining}</div>
        </div>
       <div className="pk">
        <div className="key">Date Of Birth:</div>
        <div className="value">{personDetail.DateofBirth}</div>
        </div>
       <div className="pk">
        <div className="key">PLACE oF Birth:</div>
        <div className="value">{personDetail.PlaceofBirth}</div>
        </div>
       <div className="pk">
        <div className="key">Nationlity:</div>
        <div className="value">indian{personDetail.Nationlity}</div>
        </div>
       <div className="pk">
        <div className="key">Relation:</div>
        <div className="value">Hindu{personDetail.Relation}</div>

       </div>
       {property.map((item)=>{
        return<div>{item.name}</div>
       })}
        </div></div></div>
    )
}
export default Profile