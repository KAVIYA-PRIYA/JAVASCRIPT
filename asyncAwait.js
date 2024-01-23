/*async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                //console.log(response)
                response("Example for async/Await");
            }, 1000)
        }
    );
    console.log(await promise);
}
asAw()
//kind of our own instagram*/
async function commentCode() {
    return new Promise(
        function (commentValue) {
            setTimeout(function () {
                commentValue("This is my first post comment icon");
            }, 1000)
        }
    );
}
async function likeCode() {
    return new Promise(
        function (likeValue) {
            setTimeout(function () {
                likeValue("This is my first post like icon");
            }, 1000)
        }
    );


}
async function post() {
    let post = new Promise(
        function (postResponse) {
            setTimeout(function () {
                postResponse("This is my first post");
            }, 3000)
        }
    );
    var [feed, comment, like] = await Promise.all([post, commentCode(), likeCode()])
    console.log(feed) //put await otherwise it shows promise pending error
    console.log(comment)
    console.log(like)
}

post()
