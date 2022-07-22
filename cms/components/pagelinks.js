export {pagelinks} 

let pagelinks = ()=>{
    return `<h3>Favourites</h3> 
    <div><img src="./assets/addpeople.png" alt=""><a href="./newcandidate.html">New Candidates</a></div>
    <div><img src="./assets/followed.png" alt=""><a href="./notcontacted.html">Not Contacted</a></div>
    <div><img src="./assets/addpeople.png" alt=""><a href="./followed.html">Followed</a></div>
    <div><img src="./assets/followed.png" alt=""><a href="./qualified.html">Qualified</a></div>
    <div><img src="./assets/trash.png" alt=""><a href="./deleted.html">Recently Deleted</a></div>
    <h3>Filters</h3>
    <div><input type="checkbox" name="" id="graduate"><a href="">Graduate</a></div>
    <div><input type="checkbox" name="" id="programmer"><a href="">Programmer</a></div>
    <div><input type="checkbox" name="" id="engineer"><a href="">Engineer</a></div>
    <div><input type="checkbox" name="" id="management"><a href="">Management</a></div>
    <div><input type="checkbox" name="" id="hr"><a href="">Human Resources</a></div>
    <div><input type="checkbox" name="" id="it"><a href="">IT</a></div>
    <div><input type="checkbox" name="" id="electrical"><a href="">Electrical</a></div>
    <div><input type="checkbox" name="" id="health"><a href="">Health</a></div>
    <div><input type="checkbox" name="" id="mechanical"><a href="">Mechanical</a></div>`
}