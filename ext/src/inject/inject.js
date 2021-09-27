
    let rate = 1
    let video = document.getElementById("my_video_1_html5_api");
    video.playbackRate = rate
    const footer = document.querySelector("footer")
    
    const about = document.createElement('span')
    const aboutTxt = document.createElement('p')
    aboutTxt.textContent = "افزونه تغییر سرعت ویدیو فعال است, ساخته شده با ❤️"
    about.appendChild(aboutTxt)
    footer.insertBefore(about,footer.childNodes[0])


    function updating() {
        const text = document.createElement("p")
        text.setAttribute('id','nit-speed')
        let node = document.createTextNode("سرعت حال حاضر ویدیوی شما: " + rate);
        text.appendChild(node)
        content = document.getElementById("content")
        document.getElementById("content").insertBefore(text, content.childNodes[0])
    }



    updating()

    let rateNum = document.getElementById('nit-speed')

    document.addEventListener('keydown', (e) => {
        if (e.key == ".") {
            rate = rate + 0.5
            video.playbackRate = rate
            rateNum.textContent = "سرعت حال حاضر ویدیوی شما: " + rate
        } else if (e.key == ",") {
            rate = rate - 0.5
            video.playbackRate = rate
            rateNum.textContent = "سرعت حال حاضر ویدیوی شما: " + rate
        } else if (e.key == "/") {
            rate = 1
            video.playbackRate = rate
            rateNum.textContent = "سرعت حال حاضر ویدیوی شما: " + rate
        }
    });

