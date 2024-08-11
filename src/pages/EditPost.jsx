import React, { useEffect } from "react";
// import { Container } from "../components/container/Container";
// import PostForm from "../components/post-form/PostForm";
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams(); // URL se Value nikalne ke liye
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}
