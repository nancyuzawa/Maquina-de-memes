function enablePhtpUpload(){
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load",()=>{
            const uploadImage = reader.result

            document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })    
}

async function mapImageList(){
    const memesObject = [
        {
            "name": "Chloe",
            "path": "Icones/chloe_meme.jpg"
        },
        {
            "name": "Jackie Chan",
            "path": "Icones/what.jpg"
        },
        {
            "name": "Pensativo Nick Young",
            "path": "Icones/NickYoung.jpeg"
        },
        {
            "name": "Good Luck Charlie",
            "path": "Icones/GoodLuckCharlie.jpg"
        },
    ]
    return memesObject
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main (){
    const memesImageList = await mapImageList()
    enablePhtpUpload()
    await createGallery(memesImageList) 
    await changeMemePicture(memesImageList[0].path)
}

main()