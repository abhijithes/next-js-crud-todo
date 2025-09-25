"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function pages() {
    const router = useRouter();
    const [topics, setTopics] = useState([]);
    const [isloading, setIsloading] = useState(true);
    useEffect(() => {
        setIsloading(true);
        const fetchTopics = async () => {
            try {
                const res = await axios.get("/api/topic");
                const topics = res.data;
                setTopics(topics);
                setIsloading(false);
            } catch (err) {
                console.log("Error fetching topics", err);
            }
        };
        fetchTopics();
    }, []);

    return (
        <div className=" ">
            <ul className="">
                {isloading ? <h2 className="text-2xl font-bold text-center">Loading...</h2> : null }
                { !isloading && topics.length === 0 ? (
                     <h2 className="text-2xl font-bold text-center">No Topics...</h2> 
                ) : null}
                {topics &&
                    topics?.map((topic) => (
                        <li
                            className="flex justify-between mb-3 border-2 border-gray-300 rounded-lg shadow-lg "
                            key={topic._id}
                        >
                            <div className="my-2">
                                <strong className="mt-2 ml-2">{topic.title}</strong>
                                <p className="ml-2">{topic.description}</p>
                            </div>
                            <div>
                                <button
                                    className="font-bold mx-2 bg-red-500 p-2 m-2 rounded-xl"
                                    onClick={() => {
                                        try {
                                            axios.delete("/api/topic", { data: { id: topic._id } }).then((res) => {
                                                setTopics(topics.filter((t) => t._id !== topic._id));
                                            });
                                        } catch {
                                            (err) => {
                                                console.log("Error deleting topic", err);
                                            };
                                        }
                                    }}
                                >
                                    delete
                                </button>
                                <button
                                    className="mx-2 font-bold bg-blue-400 p-2 m-2 rounded-xl"
                                    onClick={() => {
                                        router.push(`/todo/edittopic/${topic._id}`);
                                    }}
                                >
                                    edit
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
