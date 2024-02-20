import * as React from "react"
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { Typography } from "@mui/material"
import moment from "moment"
import Options from "./Options"
import useFirestore from "../../Firebase/useFirestore"

export default function ImagesList() {
  const { documents } = useFirestore("gallery")

  return (
    <Box>
      <ImageList variant="masonry" cols={4} gap={15}>
        {documents.map((item) => (
          <ImageListItem
            key={item?.id}
            sx={{
              opacity: ".7",
              transition: "opacity .3s linear",
              cursor: "pointer",
              "&:hover": { opacity: 1 },
            }}
          >
            <Options imageId={item?.id} />
            <img
              srcSet={`${item?.data?.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item?.data?.imageURL}?w=248&fit=crop&auto=format`}
              alt={item?.data?.uName || item?.data?.uEmail}
              loading="lazy"
            />
            <Typography
              variant="body2"
              component="span"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                color: "white",
                background: "rgba(0,0,0, .3)",
                p: "5px",
                borderTopRightRadius: 8,
              }}
            >
              {moment(item?.data?.timestamp?.toDate()).fromNow()}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
