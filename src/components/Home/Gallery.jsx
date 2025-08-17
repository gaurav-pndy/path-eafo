import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            className="w-full rounded-xl cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="popup"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
