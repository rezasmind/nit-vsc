
    let rate = 1
    let video = document.getElementById("my_video_1_html5_api");
    video.playbackRate = rate


    function updating() {
         let speed = document.getElementById('nit-speed') 
         console.log(document.body.contains(speed))
         if (document.body.contains(speed)) {
            document.getElementById('nit-speed').remove()
         }
        const text = document.createElement("p")
        text.setAttribute('id','nit-speed')
        let node = document.createTextNode("سرعت حال حاضر ویدیوی شما: " + rate);
        text.appendChild(node)
        content = document.getElementById("content")
        document.getElementById("content").insertBefore(text, content.childNodes[0])
    }

    updating()

    document.addEventListener('keydown', (e) => {
        if (e.key == ".") {
            rate = rate + 0.5
            video.playbackRate = rate
            console.log("miao")
            updating()
        } else if (e.key == ",") {
            rate = rate - 0.5
            video.playbackRate = rate
            updating()
        } else if (e.key == "/") {
            rate = 1
            video.playbackRate = rate
            updating()
        }
    });

