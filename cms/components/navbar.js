export { navbar,sidebar ,userDetails}

let navbar=()=>{
    return `<div class="flex w30">
    <div class="w30"><a href="../index.html" alt="">
        <img class="w100" src="https://assets-global.website-files.com/60780a9b4720a47267a88257/6078144624947483c31b964f_logo-white.svg" alt="">
        </a>
    </div>
    <img src="./assets/office.png" alt="">
    <div id="company_name" class="pd bdc boxrad20 bgw">company_name</div>
    <div class="pd bdc boxrad20 bgw">Your Trial</div>
</div>
<div class="flex w40" id="search_div">
    <input class="pd bdc boxrad20 w100" type="text" name="search" id="search_input" placeholder="Search for Candidate">
    <div id="queries">
        <!-- add queries here  -->
    </div>
</div>
<div class="flex w20">
    <img src="./assets/internet.png" alt="">
    <div>Careers Hub</div>
    <img  src="./assets/bell.png" alt="">
    <div id="username" class="boxrad50 bgw pd10">Ab</div>
</div> `
}

let sidebar = ()=>{
    return `<div>
    <a href="./dashboard.html"><img src="./assets/home.png" alt=""></a>
    <img src="./assets/people.png" alt="">
    <img src="./assets/briefcase.png" alt="">
    <img src="./assets/message.png" alt="">
    <img src="./assets/statistics.png" alt="">
    <img src="./assets/archive.png" alt="">
    <img src="./assets/announcement.png" alt="">
</div>
<div>
    <img src="./assets/settings.png" alt="">
</div>`
}

let userDetails = ()=>{
    let logout = document.getElementById('username');
    logout.innerText = 'LogOut'
    logout.addEventListener('click',()=>{
        let temp = []
        localStorage.setItem('user_name',JSON.stringify(temp))
        window.location.href = '../index.html'
    })
    const company = document.getElementById('company_name');
    const company2 = document.getElementById('company_name_website');
    let userdetails = JSON.parse(localStorage.getItem('user_name')) || []
    console.log(userdetails)
    let {username} = userdetails[0]
    company.innerText = username
    company2.innerText = username
}