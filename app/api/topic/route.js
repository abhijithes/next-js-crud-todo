import { connectToDB } from "../../lib/db";
import Topic from "../../model/model.topic";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDB();
        const res = await Topic.find();
        return NextResponse.json( res, {status: 200  });
    }catch (error) {
        console.log("Error fetching topics", error);
        return NextResponse.json({message: "Error fetching topics"}, {status: 500});
    }
}

export async function POST(request) {
    const { title, description } = await request.json();
    try {
        await connectToDB();
        const newTopic = new Topic({ title, description });
        await newTopic.save();
        return NextResponse.json({message: "Topic created successfully"}, {status: 201});
    } catch (error) {
        console.log("Error creating topic", error);
        return NextResponse.json({message: "Error creating topic"}, {status: 500});
    }
}

export async function DELETE(request) {
    const {id} = await request.json();
    if(!id) {
        return NextResponse.json({message: "ID is required"}, {status: 400});
    }
    try{
        await connectToDB();
        await Topic.findByIdAndDelete(id);
        return NextResponse.json({message: "Topic deleted successfully"}, {status: 200});
    }catch(error) {
        console.log("Error deleting topic", error);
        return NextResponse.json({message: "Error deleting topic"}, {status: 500});
    }
}

export async function PUT(request) {
    const {id, title, description} = await request.json();
    if(!id) {
        return NextResponse.json({message: "ID is required"}, {status: 400});
    }
    try{
        await connectToDB();
        await Topic.findByIdAndUpdate(id, {title, description});
        return NextResponse.json({message: "Topic updated successfully"}, {status: 200});
    }catch(error) {
        console.log("Error updating topic", error);
        return NextResponse.json({message: "Error updating topic"}, {status: 500});
    }
}