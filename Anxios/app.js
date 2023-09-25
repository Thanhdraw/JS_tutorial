// http://localhost:3004/posts
/**
 *
 * id: 1
 * title: "this is a title"
 * description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe dolor vero accusantium nostrum, quo veritatis repudiandae error reprehenderit repellendus aliquid omnis dolorem, culpa sunt maiores itaque sit soluta iste incidunt.'
 */

async function getPost() {
  try {
    const response = await axios.get("http://localhost:3004/posts");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }

  //   .then((response) => {
  //     console.log(response.data);
  //   }).catch(error=>{
  //     console.log(error);
  //   });
}
getPost();

function addPost(post) {
  axios
    .post("http://localhost:3004/posts", {
      title: post.title,
      description: post.description,
      author: post.author,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function updatePost(postId) {
  axios
    .patch(`http://localhost:3004/posts/${postId}`, {
      title: "change content number 3",
      author: "thành",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

addPost({
  title: "Back-end Dev",
  description: "description",
  author: "thanhDang",
});

// updatePost(3);

function deletePost(postId) {
  axios
    .delete(`http://localhost:3004/posts/${postId}`, {})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// deletePost(3);

async function getAllData() {
  const data = await axios.all([
    axios.get("http://localhost:3004/posts"),
    axios.get("http://localhost:3004/posts"),
  ]);
  const[post,comments] = data;
}
getAllData();