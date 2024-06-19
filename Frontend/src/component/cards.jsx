import React from "react";

function Cards({item}) {
    console.log(item)
    return (
        <>
            <div className="mt-4 my-5 p-5">
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white" style={{ height: '100%' }}>
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">{item.category}</div>
                            </h2>
                            <p>{item.title}</p>
                        </div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline ">
                                ₹{item.price}
                            </div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 duration-200 px-2 py-1 ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
