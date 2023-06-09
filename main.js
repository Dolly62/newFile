const posts = []

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const createdAt = new Date()
            resolve(createdAt)
        })
    })
}

function create1Post(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push('Post1')
            resolve('Post1')
        },1000)
    })

}

function create2Post(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push('Post2')
            resolve('Post2')
        },1000)
    })

}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

Promise.all([create1Post(), updateLastUserActivityTime(), create2Post(), updateLastUserActivityTime(), deletePost()]).then(values => console.log(values));