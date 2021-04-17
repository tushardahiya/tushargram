import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="image-wrap"
            whileHover={{ opacity: 1 }}
            layout
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="fetched pictures"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
