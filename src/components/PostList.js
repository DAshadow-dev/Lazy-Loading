import { React,useState,useEffect } from "react";
import { fetchPost } from "../api/api";
import { Container,Row,Col } from "react-bootstrap";
import Post from "../api/Post";

const PostList = () =>{
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const postData = await fetchPost()
            setPosts(postData)
        }

        fetchData()
    },[])

    return (
        <Container className="mt-4">
            <h2 className="text-center text-bold align-content-center text-white py-2 rounded"
                style={{height: '10rem', backgroundColor:'#170649'}}>Posts</h2>
            <Row>
                {
                    posts.map(post => (
                        <Col key={post.id} xs={12} md={6}>
                            <Post post={post} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default PostList;