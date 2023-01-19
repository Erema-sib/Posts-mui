import "./index.css";
import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../Utilites/api";

const AppPagination = () => {
  const number = 12;

  const [page, setPage] = useState(1);
  // const [posts, setPosts] = useState([]);
  // const [pageQuantity, setPageQuantity] = useState(0);

  // const pageNum = Math.ceil(PostsList / 12);

  useEffect((pageNum, number) => {
    api.getPaginatPosts().then((data) => {
      console.log(data);
      // setPageQuantity(data.total);
      // setPage(page);
    });
  }, []);

  return (
    <Box className="box">
      <Pagination
        count={10}
        // page={page}
        // onChange={(_, num) => setPage(num)}
      />
    </Box>
  );
};

export default AppPagination;
