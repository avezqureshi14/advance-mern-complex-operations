import { Card, Button, Tag, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
const { Meta } = Card;

function MemoryCard({ post, currentId, setCurrentId }) {
  const dispatch = useDispatch();
  console.log("Yas");
  console.log(post);
  return (
    <Card
      className="card-post"
      cover={<img alt="memory" src={post.selectedFile} />}
      actions={[
        
        <Tooltip className="liking">
          <h3>{post.likeCount}</h3>
          <Button type="text"
          onClick={() => dispatch(likePost(post._id))}
          icon=<HeartOutlined /> />
        </Tooltip>,
        <Tooltip title="Edit">
          <Button
            onClick={() => {
              setCurrentId(post._id);
              window.scrollTo(0, 0);
            }}
            type="text"
            icon={<EditOutlined />}
          />
        </Tooltip>,

        <Tooltip title="Delete">
          <Button type="text"
          onClick={() => dispatch(deletePost(post._id))}
          icon={<DeleteOutlined />} />
        </Tooltip>,
      ]}
    >
      <Meta title={post.title} description={post.message} />
      <h4><span>@</span>{post.creator}</h4>
    </Card>
  );
}

export default MemoryCard;
