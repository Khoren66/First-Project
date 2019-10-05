const createPost = function () {
    const postTitle = document.getElementById('title');
    const postDescription = document.getElementById('discription_text');
    const postAuthor = document.getElementById('workSpace_name');
    const dataPosts = {
        title: postTitle.value.trim(),
        description: postDescription.value.trim(),
        author: postAuthor.innerText.trim()
    }
    console.log(dataPosts)
    if(postDescription.value.trim()==='' || postTitle.value.trim()==='')
    {
        postDescription.style.borderColor = 'red';
        postDescription.placeholder = 'Write a description';
        postTitle.style.borderColor = 'red';  
        postTitle.placeholder = 'Write a title';    
        return   
    }
    fetch(
        "http://5d98a52b61c84c00147d70ce.mockapi.io/api/v1/bloggers",
        { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(dataPosts)               
        }       
    )       
        .then(function (response) {  
            if(response.ok && response.status===201){
                postDescription.value='';
                postTitle.style.borderColor = '#ced4da';
                postDescription.style.borderColor = '#ced4da';
                postTitle.value='';
                document.getElementById("close").click()
            }
            });
}
