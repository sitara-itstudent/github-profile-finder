   let form = document.getElementById("main");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let data = await getdata();
    let error = document.getElementById("error");

    if (data === "No result found") {
        error.innerHTML = "Invalid username, please try again";
        form.style.display = "flex";
    } else {
        error.innerHTML = "";// purana error hata do agar tha
        form.style.display =" none";

        let avatar = document.getElementById("avatar");
        avatar.src = data.avatar_url;

        let name = document.getElementById("name");
        name.innerHTML = data.name;

        let bio = document.getElementById("bio");
        bio.innerHTML = data.bio;

        let location = document.getElementById("location");
        location.innerHTML = data.location;

        let company = document.getElementById("company");
        company.innerHTML = data.company;

        let followers = document.getElementById("followers");
        followers.innerHTML = data.followers;

        let following = document.getElementById("following");
        following.innerHTML = data.following;

        let div1 = document.getElementById("div1");
        div1.innerHTML = data.public_repos;

        let div2 = document.getElementById("div2");
        div2.innerHTML = data.public_gists;

        let div3 = document.getElementById("div3");
        div3.innerHTML = data.created_at;

        let username = document.getElementById("username");
        username.href = data.html_url;
        username.innerHTML = data.login;

        let viewProfile = document.getElementById("viewProfile");
        viewProfile.href = data.html_url;
        viewProfile.innerHTML = "View Full Profile";
    }
});

let profile = document.getElementById("profile");

async function getdata() {
    try {
        let url = `https://api.github.com/users/${profile.value}`;
        let res = await axios.get(url);
        return (res.data);
    }
    catch (e) {
        console.log("error", e);
        return "No result found";
    }
}