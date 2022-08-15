

const check=async()=>{
    let f1=await fetch("http://localhost:8000/hello");
    let f2=await f1.json();
    document.getElementById("one").innerHTML=`<div>
    <table>
    <tr>
    <td>Name:</td>
    <td>${f2[0].name}</td>
    </tr>
    <tr>
    <td>Age:</td>
    <td>${f2[0].age}</td>
    </tr>
    <tr>
    <td>Mobile:</td>
    <td>${f2[0].mob}</td>
    </tr>
    <tr>
    <td>Father:</td>
    <td>${f2[0].father}</td>
    </tr>
    <tr>
    <td>Mother:</td>
    <td>${f2[0].mother}</td>
    </tr>
    </div>`;
     document.getElementById('input').style.display="none";
    
}

