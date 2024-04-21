
class Human {
  constructor(name, surname, birthDate, gender, nationality) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.nationality = nationality;
    this.birthDate=birthDate;
    this.age = this.getAge()
  }
  getFullName() {
    `${this.name}  ${this.surname}`;
  }
  getAge(){
    return new Date().getFullYear() - this.birthDate;
  }
}

class User extends Human {
  constructor(
    name,
    surname,
    birthDate,
    gender,
    nationality,
    userName,
    email,
    password,
    bio
  ) {
    super(name, surname, birthDate, gender, nationality,);
    this.userName = userName;
    this.email = email;
    this.password = password;
    if (password.length < 5) {
      window.alert("Simvol sayi azdir");
    } else {
      this.password = password;
    }

    this.bio = bio;
    if (bio.length > 30) {
      window.aler("30-dan artiq simvol daxil etmek olmaz!");
    } else {
      this.bio = bio;
    }
  }

  getFullName() {
    `${this.name}  ${this.surname}`;
  }

  changePassword(currPass, newPass) {
    if ((this.password = currPass)) {
      if (currPass === newPass) {
        window.alert("Zehmet olmasa yeni sifre daxil edin. ");
      } else {
        this.password = newPass;
      }
    }
  }
changeEmail(users,newEmail){

    const isUnique= (user.email !== newEmail)

    if (currUser.email===newEmail) {
        return "Kohne email ile yeni email eynidir"
    }else{return "Email ugurla yenilendi"}
}
}

const User1 = new User ("Seymur","Hesenzade",2003,"male","Azerbaijan","seymur21",
"hasanzadeseymur21@gmail.com","seymur123","Code Academy :)")
console.table(User1)

//-------------------------------------------------------------------------------------------





