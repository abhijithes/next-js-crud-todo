"use client";
import React from "react";
import Form from "../../../components/form";
import { useParams } from "next/navigation";

export default function page() {
    const params = useParams();
    return (
        <div className="justify-center max-h-screen">
            <Form
                formtype="edittopic" id={params.id}
            />
        </div>
    );
}
