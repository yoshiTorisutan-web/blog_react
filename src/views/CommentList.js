import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import apiService from "../services/apiService";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await apiService.getComments();
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="mt-5 mb-10">
        <h2 className="mt-4 mb-3">Commentaires</h2>
        <ul className="list-group">
          {comments.map((comment) => (
            <li key={comment._id} className="list-group-item">
              {comment.content}
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default CommentList;
