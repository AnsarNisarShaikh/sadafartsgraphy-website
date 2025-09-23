"use client";

import React from 'react'
import Masonry from 'react-masonry-css';



function Gallery({workImages}) {
    const breakpointColumns = {
        default: 3, // 3 columns on desktop
        1400: 3,    // 2 columns on medium screens
        1200: 2,     // 1 column on small screens
        400: 1,     // 1 column on small screens
    };
    // console.log(workImages,"work images")
    return (
        <div>
            <div>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex gap-4"
                    columnClassName="masonry-column"
                >
                    {workImages?.map((img, idx) => (
                        <div key={idx} className="mb-4">
                            <img
                                src={img.url}
                                // src={img.linkSrc}
                                // width={img.width}
                                // height={img.height}
                               
                              
                                alt={img.title}
                                className="rounded-lg w-auto h-auto shadow-md"
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
        </div>
    )
}

export default Gallery