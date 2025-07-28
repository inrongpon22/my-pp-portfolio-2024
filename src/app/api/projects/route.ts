import { createClient } from "@/app/utils/supabase/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const supabase = createClient()
  try {
    const { data, error } = await supabase.from("projects").select("*")
    if (error) {
      return NextResponse.json(
        { message: "Failed to fetch projects" },
        { status: 500 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.log("fetch projects error:", error)
    return NextResponse.json(
      { message: "Failed to fetch projects" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const supabase = createClient()
  const { title, description } = body

  if (!title || !description) {
    return NextResponse.json(
      { message: "Title and description are required" },
      { status: 400 }
    )
  }

  try {
    // create new project
    const { error } = await supabase.from("projects").insert({
      title,
      description,
    })
    if (error) {
      console.log("create new project error:", error)
      return NextResponse.json(
        { message: "Failed to create new project" },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { message: "Project created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.log("create new project error:", error)
    return NextResponse.json(
      { message: "Failed to create new project" },
      { status: 500 }
    )
  }
}
