import React from 'react';

const AuthImagePattern = ({ title, subtitle }) => {
    // List of random image URLs (you can replace these with your own)
    const imageUrls = Array.from({ length: 9 }, (_, i) =>
        `https://source.unsplash.com/random/200x200?sig=${i}`
    );

    return (
        <div className='hidden lg:flex items-center justify-center bg-base-200 p-12'>
            <div className='max-w-md text-center'>
                <div className='grid grid-cols-3 gap-3 mb-8'>
                    {imageUrls.map((url, i) => (
                        <div
                            key={i}
                            className='aspect-square overflow-hidden rounded-2xl bg-primary/10'
                        >
                            <img
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdm4n3YkhI0CDQQ7jPqCmUz6HEYtZNl7b4sA&s"}
                                alt={`Random ${i}`}
                                className={`w-full h-full object-cover ${i % 2 === 0 ? "animate-pulse" : ""}`}
                            />
                        </div>
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-base-content/60">{subtitle}</p>
            </div>
        </div>
    );
};

export default AuthImagePattern;
