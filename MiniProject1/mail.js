const firebaseConfig = {
    apiKey: "AIzaSyBUPb08r6trsIwBha7QqgmYj1k868pWdr8",
    authDomain: "studentdatabase-43851.firebaseapp.com",
    databaseURL: "https://studentdatabase-43851-default-rtdb.firebaseio.com",
    projectId: "studentdatabase-43851",
    storageBucket: "studentdatabase-43851.appspot.com",
    messagingSenderId: "13336597276",
    appId: "1:13336597276:web:0d5c5e1e5467375d5760d9",
    measurementId: "G-W4GSK4J7TV"
  };

  firebase.initializeApp(firebaseConfig);

  var EmployeeDB = firebase.database().ref("Employee-Database");

  document.getElementById("DBform").addEventListener("submit", submitform);

  function roleSelect(){
    var d = document.getElementById("Role");
    var displaytext = d.options[d.selectedIndex].text;
    document.getElementById("EmpRole").value = displaytext;
  }

  function submitform(e){
    e.preventDefault();

    var EmpFname = getElementVal("EmpFname")
    var EmpLname = getElementVal("EmpLname")
    var EmpMail = getElementVal("EmpMail")
    var EmpURL = getElementVal("EmpURL")
    var EmpSal = getElementVal("EmpSal")
    var EmpRole = getElementVal("EmpRole")
    var EmpAdd = getElementVal("EmpAdd")
    
    saveMessages(EmpFname, EmpLname, EmpMail, EmpURL, EmpSal, EmpRole, EmpAdd);

    document.querySelector(".alert").style.display = "block";

  
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("DBform").reset();
  }

  const saveMessages = (EmpFname, EmpLname, EmpMail, EmpURL, EmpSal, EmpRole, EmpAdd) => {
    var newContactForm = EmployeeDB.push();
  
    newContactForm.set({
        EmpFname: EmpFname,
        EmpLname: EmpLname,
        EmpMail: EmpMail,
        EmpURL: EmpURL,
        EmpSal: EmpSal,
        EmpRole: EmpRole,
        EmpAdd: EmpAdd
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };